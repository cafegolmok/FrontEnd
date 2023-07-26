// src/pages/profile/[id].jsx

import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MainContainer } from '../../styles/commonStyle';
import {
  ProfileContainer,
  ProfileImgSection,
  ProfileSection,
  ProfileForm,
  ProfileTitle,
  EmailLabel,
  NicknameLabel,
  EmailInput,
  NicknameInput,
  EditProfileBtnContainer,
  EditProfileBtn,
  AddProfileImgModalContent,
  ProfileImgLabel,
  ProfileImgInput,
  UploadProfileImgBtn,
} from './userStyle';
import WarningMsg from '../../components/warningMsg/WarningMsg.jsx';

import {
  validateSignupEmail as validateEditProfileEmail,
  validateSignupNickname as validateEditProfileNickname,
} from '../../utils/validation';

import userProfile from '../../../public/assets/icons/user.svg';

import { updateUserProfile, getUserProfile } from '../../api/user.js';
import { updateUserProfileData } from '../../store/authSlice';

export default function UserProfile() {
  const user = useSelector(state => state.auth.user);
  console.log('리덕스 user', user);
  const userId = user?.id;
  const dispatch = useDispatch();

  // 각 입력창의 상태와 에러 메시지를 관리할 상태 정의
  const [email, setEmail] = useState(user?.email);
  const [nickname, setNickname] = useState(user?.nickname);
  const [profileImage, setProfileImage] = useState(user?.profileImage);

  const [emailErrors, setEmailErrors] = useState([]);
  const [nicknameErrors, setNicknameErrors] = useState([]);
  const [serverEmailError, setServerEmailError] = useState('');
  const [serverNicknameError, setServerNicknameError] = useState('');

  // 프로필 이미지 미리보기와 이미지 업로드 여부를 관리하 상태
  const [preview, setPreview] = useState(null);
  const [isImageUploaded, setIsImageUploaded] = useState(false);

  // input 참조를 저장
  const fileInputRef = useRef(null);

  useEffect(() => {
    // 페이지가 로드되면 사용자 정보를 불러옵니다.
    const fetchUserProfile = async () => {
      try {
        const respones = await getUserProfile(userId);

        const userData = respones.data;

        setEmail(userData.email);
        setNickname(userData.nickname);
        setProfileImage(userData.profileImage);

        console.log('사용자 정보가져오기 성공', userData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserProfile();
  }, [userId]);

  // 이메일 핸들러
  const handleChangeEmail = event => {
    const emailValidationErrors = validateEditProfileEmail(event.target.value);
    setEmail(event.target.value);
    setEmailErrors(
      emailValidationErrors.length > 0 ? emailValidationErrors : []
    );
    setServerEmailError('');
  };

  // 닉네임 핸들러
  const handleChangeNickname = event => {
    const nicknameValidationErrors = validateEditProfileNickname(
      event.target.value
    );
    setNickname(event.target.value);
    setNicknameErrors(
      nicknameValidationErrors.length > 0 ? nicknameValidationErrors : []
    );
    setServerNicknameError('');
  };

  // 이미지를 선택하면 해당 이미지를 미리보기로 설정
  const handleImageChange = event => {
    event.stopPropagation();

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      setPreview(reader.result);
      setIsImageUploaded(true);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // 파일 선택 대화상자를 열어 사용자가 이미지를 선택
  const handleChooseFile = event => {
    event.preventDefault();
    fileInputRef.current.click();
  };

  // 프로필 이미지와 사용자 프로필 폼 수정 이벤트 핸들러
  const handleEditProfileSubmit = async event => {
    event.preventDefault();

    // 모든 입력 값에 대해 유효성 검사 진행 및 검사 결과 상태에 반영
    const emailValidationErrors = validateEditProfileEmail(email);
    const nicknameValidationErrors = validateEditProfileNickname(nickname);

    setEmailErrors(
      emailValidationErrors.length > 0 ? emailValidationErrors : []
    );

    setNicknameErrors(
      nicknameValidationErrors.length > 0 ? nicknameValidationErrors : []
    );

    // 모든 입력 값이 유효하지 않으면 함수를 종료
    if (
      emailValidationErrors.length > 0 ||
      nicknameValidationErrors.length > 0
    ) {
      return;
    }

    // 모든 입력 값이 유효하면 서버에 프로필 수정 요청
    try {
      const imageFile = isImageUploaded
        ? fileInputRef.current.files[0]
        : profileImage;
      const updateProfileResponse = await updateUserProfile(
        userId,
        email,
        nickname,
        imageFile
      );
      const updatedUser = updateProfileResponse.data.user;

      dispatch(updateUserProfileData(updatedUser));

      console.log('프로필 수정 성공', updatedUser);
    } catch (errors) {
      // 서버에서 에러 메시지를 받으면 해당 메시지를 상태에 반영
      if (errors.response && errors.response.data) {
        console.log(errors.response.data);

        const serverErrorMessages = errors.response.data.errors;

        if (errors.response.status === 409) {
          serverErrorMessages.forEach(errorMessage => {
            if (errorMessage === '이미 사용 중인 이메일입니다.') {
              setServerEmailError(errorMessage);
            }
            if (errorMessage === '이미 사용 중인 닉네임입니다.') {
              setServerNicknameError(errorMessage);
            }
          });
          return;
        }
      }
    }
  };

  useEffect(() => {
    setEmail(user?.email || '');
    setNickname(user?.nickname || '');
    setProfileImage(user?.profileImage || '');
  }, [user]);

  return (
    <>
      <MainContainer>
        <ProfileContainer>
          <ProfileSection>
            <ProfileTitle>프로필</ProfileTitle>
            <ProfileImgSection>
              <AddProfileImgModalContent>
                <ProfileImgLabel
                  htmlFor='user-img'
                  background={
                    preview ||
                    (user?.profileImage
                      ? `http://localhost:8000/${profileImage}`
                      : userProfile.src)
                  }
                >
                  <UploadProfileImgBtn
                    onClick={event => handleChooseFile(event)}
                    isImageUploaded={isImageUploaded}
                  >
                    수정
                  </UploadProfileImgBtn>
                </ProfileImgLabel>
                <ProfileImgInput
                  type='file'
                  id='user-img'
                  name='user-img'
                  onChange={handleImageChange}
                  ref={fileInputRef}
                ></ProfileImgInput>
              </AddProfileImgModalContent>
            </ProfileImgSection>
            <ProfileForm>
              <EmailLabel htmlFor='user-email'>이메일</EmailLabel>
              <EmailInput
                type='text'
                id='user-email'
                name='user-email'
                value={email}
                onChange={handleChangeEmail}
                errors={emailErrors.length > 0 ? emailErrors : serverEmailError}
              />
              <WarningMsg
                show={emailErrors.length > 0}
                messages={emailErrors}
              ></WarningMsg>
              {serverEmailError && (
                <WarningMsg show={true} messages={[serverEmailError]} />
              )}
              <NicknameLabel htmlFor='user-nickname'>닉네임</NicknameLabel>
              <NicknameInput
                type='text'
                id='user-nickname'
                name='user-nickname'
                value={nickname}
                onChange={handleChangeNickname}
                errors={
                  nicknameErrors.length > 0
                    ? nicknameErrors
                    : serverNicknameError
                }
              />
              <WarningMsg
                show={nicknameErrors.length > 0}
                messages={nicknameErrors}
              ></WarningMsg>
              {serverNicknameError && (
                <WarningMsg show={true} messages={[serverNicknameError]} />
              )}
              <EditProfileBtnContainer>
                <EditProfileBtn
                  type='submit'
                  onClick={handleEditProfileSubmit}
                  disabled={emailErrors.length > 0 || nicknameErrors.length > 0}
                >
                  완료
                </EditProfileBtn>
              </EditProfileBtnContainer>
            </ProfileForm>
          </ProfileSection>
        </ProfileContainer>
      </MainContainer>
    </>
  );
}

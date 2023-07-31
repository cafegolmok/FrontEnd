// src/pages/profile/[id].jsx

import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MainContainer } from '../../styles/commonStyle';
import { ProfileContainer, ProfileSection, ProfileTitle } from './userStyle';

import ProfileForm from '../../components/profile/ProfileForm.jsx';
import ProfileImage from '../../components/profile/ProfileImage.jsx';
import ToastMessage from '../../components/common/ToastMessage.jsx';

import {
  validateSignupEmail as validateEditProfileEmail,
  validateSignupNickname as validateEditProfileNickname,
} from '../../utils/validation';

import { updateUserProfile, getUserProfile } from '../../api/user.js';
import { updateUserProfileData } from '../../store/authSlice';
import { addToast, removeToast } from '../../store/toastSlice';

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

  // 토스트 상태 정의
  const toasts = useSelector(state => state.toast);

  // showToast 함수 정의
  const showToast = (message, type = 'success') => {
    // 새로운 토스트 메시지 객체 생성
    const newToast = {
      id: Math.random(),
      message: message,
      type: type,
    };

    dispatch(addToast(newToast));
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (user) {
        try {
          const respones = await getUserProfile(userId);
          const userData = respones.data;
          setEmail(userData.email);
          setNickname(userData.nickname);
          setProfileImage(userData.profileImage);
          console.log('사용자 정보 가져오기 성공', userData);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchUserProfile();
  }, [user]);

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
      const updateUserMessage = updateProfileResponse.data.message;

      dispatch(updateUserProfileData(updatedUser));
      showToast(updateUserMessage);
      console.log('프로필 수정 성공', updatedUser);
    } catch (errors) {
      // 서버에서 에러 메시지를 받으면 해당 메시지를 상태에 반영
      if (errors.response && errors.response.data) {
        console.log(errors.response.data);
        console.log(errors.response.data.error);

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
        if (errors.response.data.error.status === 500) {
          showToast(errors.response.data.error.message, 'error');
        }
      }
    }
  };

  useEffect(() => {
    setEmail(user?.email || '');
    setNickname(user?.nickname || '');
    setProfileImage(user?.profileImage || '');
  }, [user]);

  console.log('서버주소', process.env.NEXT_PUBLIC_SERVER_URL);
  return (
    <>
      <MainContainer>
        <ProfileContainer>
          <ProfileSection>
            <ProfileTitle>프로필</ProfileTitle>
            <ProfileImage
              profileImage={profileImage}
              setProfileImage={setProfileImage}
              preview={preview}
              setPreview={setPreview}
              fileInputRef={fileInputRef}
              isImageUploaded={isImageUploaded}
              setIsImageUploaded={setIsImageUploaded}
            />
            <ProfileForm
              email={email}
              setEmail={setEmail}
              nickname={nickname}
              setNickname={setNickname}
              emailErrors={emailErrors}
              setEmailErrors={setEmailErrors}
              nicknameErrors={nicknameErrors}
              setNicknameErrors={setNicknameErrors}
              serverEmailError={serverEmailError}
              setServerEmailError={setServerEmailError}
              serverNicknameError={serverNicknameError}
              setServerNicknameError={setServerNicknameError}
              handleEditProfileSubmit={handleEditProfileSubmit}
            />
          </ProfileSection>
        </ProfileContainer>
        {toasts.map(toast => (
          <ToastMessage
            key={toast.id}
            id={toast.id}
            message={toast.message}
            removeToast={id => {
              dispatch(removeToast({ id }));
            }}
            type={toast.type}
          />
        ))}
      </MainContainer>
    </>
  );
}

// src/components/signup/addProfileImg/AddProfileImg.jsx

import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import BaseModal from '../../common/BaseModal.jsx';
import {
  addProfileImgModalToSignupModal,
  addProfileImgModalTosignupSuccessModal,
} from '../../../store/modalSlice.js';
import { updateProfileImage } from '../../../store/authSlice.js';

import { updateUserProfileImage } from '../../../api/auth.js';

import {
  AddProfileImgModalContent,
  AddProfileModalText,
  ProfileImgLabel,
  ProfileImgInput,
  UploadProfileImgBtn,
  NoUploadProfileImgBtn,
  SubmitProfileImgBtn,
} from './AddProgileImgStyle.js';

import userProfile from '../../../../public/assets/icons/user.svg';

const AddProfileImg = () => {
  // 리덕스 스토어로부터 현재 모달의 상태 가져오기
  const isAddProfileImgModalVisible = useSelector(
    state => state.modal.isAddProfileImgModalVisible
  );
  const dispatch = useDispatch();

  // 프로필 이미지 미리보기와 이미지 업로드 여부를 관리하 상태
  const [preview, setPreview] = useState(null);
  const [isImageUploaded, setIsImageUploaded] = useState(false);

  // input 참조를 저장
  const fileInputRef = useRef(null);

  // 모달을 회원가입 모달로 전환
  const handleAddProfileImgModalToSignupModal = () => {
    dispatch(addProfileImgModalToSignupModal());
  };

  // 모달을 회원가입 성공 모달로 전환
  const handleAddProfileImgModalTosignupSuccessModal = () => {
    dispatch(addProfileImgModalTosignupSuccessModal());
  };

  // 프로필 이미지 등록을 처리
  const handleAddProfileImgSubmit = async event => {
    event.preventDefault();

    try {
      if (isImageUploaded) {
        // 이미지 파일을 formData에 추가
        const file = fileInputRef.current.files[0];

        // 서버에 파일을 전송
        const response = await updateUserProfileImage(file);

        console.log(response.data);

        // 서버로부터 받은 사용자 정보로 프로필 이미지 상태 업데이트
        dispatch(updateProfileImage(response.data.profileImage));
      }

      handleAddProfileImgModalTosignupSuccessModal();
    } catch (error) {
      console.log(error);
    }
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

  return (
    <BaseModal
      isVisible={isAddProfileImgModalVisible}
      onBack={handleAddProfileImgModalToSignupModal}
      title='프로필 생성하기'
    >
      <AddProfileImgModalContent onSubmit={handleAddProfileImgSubmit}>
        <AddProfileModalText>
          {isImageUploaded
            ? '좋아요!'
            : `프로필 이미지 또는 업로드 버튼을 클릭해서\n이미지를 업로드 하세요`}
        </AddProfileModalText>
        <ProfileImgLabel
          htmlFor='user-img'
          background={preview || userProfile.src}
        ></ProfileImgLabel>
        <ProfileImgInput
          type='file'
          id='user-img'
          name='user-img'
          onChange={handleImageChange}
          ref={fileInputRef}
          accept='image/*'
        ></ProfileImgInput>

        {isImageUploaded ? (
          <>
            <SubmitProfileImgBtn onClick={handleAddProfileImgSubmit}>
              완료
            </SubmitProfileImgBtn>
            <UploadProfileImgBtn
              onClick={event => handleChooseFile(event)}
              isImageUploaded={isImageUploaded}
            >
              사진 변경하기
            </UploadProfileImgBtn>
          </>
        ) : (
          <>
            <UploadProfileImgBtn
              onClick={event => handleChooseFile(event)}
              isImageUploaded={isImageUploaded}
            >
              사진 업로드하기
            </UploadProfileImgBtn>
            <NoUploadProfileImgBtn onClick={handleAddProfileImgSubmit}>
              나중에 할게요
            </NoUploadProfileImgBtn>
          </>
        )}
      </AddProfileImgModalContent>
    </BaseModal>
  );
};

export default AddProfileImg;

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';
import { palette } from '../../../styles/globalColor.js';

import BaseModal from '../../common/BaseModal.jsx';
import { addProfileModalToSignupModal } from '../../../store/modalSlice.js';

import userProfile from '../../../../public/assets/icons/user.svg';

const AddProfileImgModalContent = styled.form`
  padding: 20px;
`;

const AddProfileModalText = styled.p`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: ${palette.blackColor};
  text-align: center;
`;

const ProfileImgLabel = styled.label`
  width: 170px;
  display: block;
  margin: 0 auto 55px;
  border-radius: 50%;
  background-color: ${palette.grayColor1};
  cursor: pointer;
  aspect-ratio: 1/1;
  background-image: ${props =>
    props.background ? `url(${props.background})` : `url(${userProfile})`};
  background-size: cover;
  background-position: center;
`;

const ProfileImgInput = styled.input`
  display: none;
`;

const SharedBtn = styled.button`
  display: block;
  padding: 11px;
  border-radius: 5px;
  line-height: 28px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`;

const UploadProfileImgBtn = styled(SharedBtn)`
  margin-bottom: 20px;
  background-color: ${palette.mainColor};
  font-weight: 500;
  font-size: 16px;
  color: ${palette.whiteColor};
`;

const NoUploadProfileImgBtn = styled(SharedBtn)`
  font-weight: 500;
  font-size: 16px;
  border: 1px solid ${palette.grayColor1};
  color: ${palette.blackColor};
`;

const AddProfileImg = () => {
  const isAddProfileImgModalVisible = useSelector(
    state => state.modal.isAddProfileImgModalVisible
  );
  const dispatch = useDispatch();
  const [preview, setPreview] = useState(null);

  const handleAddProfileModalToSignupModal = () => {
    dispatch(addProfileModalToSignupModal());
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageChange = event => {
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      setPreview(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <BaseModal
      isVisible={isAddProfileImgModalVisible}
      onBack={handleAddProfileModalToSignupModal}
      title='프로필 생성하기'
    >
      <AddProfileImgModalContent onSubmit={handleSubmit}>
        <AddProfileModalText>
          프로필 이미지를 클릭해서 이미지를 업로드 하세요
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
        ></ProfileImgInput>
        <UploadProfileImgBtn>사진 업로드하기</UploadProfileImgBtn>
        <NoUploadProfileImgBtn>나중에 할게요</NoUploadProfileImgBtn>
      </AddProfileImgModalContent>
    </BaseModal>
  );
};

export default AddProfileImg;

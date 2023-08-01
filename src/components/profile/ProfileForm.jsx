// src/components/profile/ProfileForm.jsx

import React from 'react';
import PropTypes from 'prop-types';

import {
  ProfileFormContainer,
  EditProfileBtnContainer,
  EditProfileBtn,
} from './ProfileFormStyle';
import EmailInputComponent from '../common/input/emailInput/EmailInput.jsx';
import NicknameInputComponent from '../common/input/nicknameInput/NicknameInput.jsx';

import {
  validateSignupEmail as validateEditProfileEmail,
  validateSignupNickname as validateEditProfileNickname,
} from '../../utils/validation';

const ProfileForm = ({
  email,
  setEmail,
  nickname,
  setNickname,
  emailErrors,
  setEmailErrors,
  nicknameErrors,
  setNicknameErrors,
  serverEmailError,
  setServerEmailError,
  serverNicknameError,
  setServerNicknameError,
  handleEditProfileSubmit,
}) => {
  return (
    <ProfileFormContainer>
      <EmailInputComponent
        value={email}
        setEmail={setEmail}
        emailErrors={emailErrors}
        setEmailErrors={setEmailErrors}
        serverEmailError={serverEmailError}
        setServerEmailError={setServerEmailError}
        validateEditProfileEmail={validateEditProfileEmail}
      />
      <NicknameInputComponent
        value={nickname}
        setNickname={setNickname}
        nicknameErrors={nicknameErrors}
        setNicknameErrors={setNicknameErrors}
        serverNicknameError={serverNicknameError}
        setServerNicknameError={setServerNicknameError}
        validateEditProfileNickname={validateEditProfileNickname}
      />
      <EditProfileBtnContainer>
        <EditProfileBtn onClick={handleEditProfileSubmit}>완료</EditProfileBtn>
      </EditProfileBtnContainer>
    </ProfileFormContainer>
  );
};

ProfileForm.propTypes = {
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  nickname: PropTypes.string.isRequired,
  setNickname: PropTypes.func.isRequired,
  emailErrors: PropTypes.array.isRequired,
  setEmailErrors: PropTypes.func.isRequired,
  nicknameErrors: PropTypes.array.isRequired,
  setNicknameErrors: PropTypes.func.isRequired,
  serverEmailError: PropTypes.string,
  setServerEmailError: PropTypes.func.isRequired,
  serverNicknameError: PropTypes.string,
  setServerNicknameError: PropTypes.func.isRequired,
  handleEditProfileSubmit: PropTypes.func.isRequired,
};

export default ProfileForm;

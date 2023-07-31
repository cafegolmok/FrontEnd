// src/components/profile/ProfileForm.jsx

import React from 'react';
import PropTypes from 'prop-types';

import {
  ProfileFormContainer,
  EmailLabel,
  NicknameLabel,
  EmailInput,
  NicknameInput,
  EditProfileBtnContainer,
  EditProfileBtn,
} from './ProfileFormStyle';
import WarningMsg from '../../components/warningMsg/WarningMsg.jsx';

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

  return (
    <ProfileFormContainer>
      <EmailLabel htmlFor='user-email'>이메일</EmailLabel>
      <EmailInput
        type='text'
        id='user-email'
        name='user-email'
        value={email}
        onChange={handleChangeEmail}
        errors={emailErrors.length > 0 ? emailErrors : serverEmailError}
      />
      <WarningMsg show={emailErrors.length > 0} messages={emailErrors} />
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
          nicknameErrors.length > 0 ? nicknameErrors : serverNicknameError
        }
      />
      <WarningMsg show={nicknameErrors.length > 0} messages={nicknameErrors} />
      {serverNicknameError && (
        <WarningMsg show={true} messages={[serverNicknameError]} />
      )}
      <EditProfileBtnContainer>
        <EditProfileBtn onClick={handleEditProfileSubmit}>완료</EditProfileBtn>
      </EditProfileBtnContainer>
    </ProfileFormContainer>
  );
};

export default ProfileForm;

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

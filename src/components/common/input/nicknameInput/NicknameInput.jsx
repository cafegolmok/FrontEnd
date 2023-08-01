// src/components/common/input/NicknameInput.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { NicknameLabel, NicknameInput } from './NicknameInputStyle';
import WarningMsg from '../../../warningMsg/WarningMsg';

const NicknameInputComponent = ({
  value,
  setNickname,
  nicknameErrors,
  setNicknameErrors,
  serverNicknameError,
  setServerNicknameError,
  validateEditProfileNickname,
}) => {
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
    <>
      <NicknameLabel htmlFor='user-nickname'>닉네임</NicknameLabel>
      <NicknameInput
        type='text'
        id='user-nickname'
        name='user-nickname'
        value={value}
        onChange={handleChangeNickname}
        errors={
          nicknameErrors.length > 0 ? nicknameErrors : serverNicknameError
        }
      />
      <WarningMsg show={nicknameErrors.length > 0} messages={nicknameErrors} />
      {serverNicknameError && (
        <WarningMsg show={true} messages={[serverNicknameError]} />
      )}
    </>
  );
};

NicknameInputComponent.propTypes = {
  value: PropTypes.string.isRequired,
  setNickname: PropTypes.func.isRequired,
  nicknameErrors: PropTypes.array.isRequired,
  setNicknameErrors: PropTypes.func.isRequired,
  serverNicknameError: PropTypes.string,
  setServerNicknameError: PropTypes.func.isRequired,
  validateEditProfileNickname: PropTypes.func.isRequired,
};

export default NicknameInputComponent;

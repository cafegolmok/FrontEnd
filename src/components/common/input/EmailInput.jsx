// src/components/common/input/EmailInput.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { EmailLabel, EmailInput } from './EmailInputStyle';
import WarningMsg from '../../warningMsg/WarningMsg';

const EmailInputComponent = ({
  value,
  setEmail,
  emailErrors,
  setEmailErrors,
  serverEmailError,
  setServerEmailError,
  validateEditProfileEmail,
}) => {
  const handleChangeEmail = event => {
    const emailValidationErrors = validateEditProfileEmail(event.target.value);
    setEmail(event.target.value);
    setEmailErrors(
      emailValidationErrors.length > 0 ? emailValidationErrors : []
    );
    setServerEmailError('');
  };

  return (
    <>
      <EmailLabel htmlFor='user-email'>이메일</EmailLabel>
      <EmailInput
        type='text'
        id='user-email'
        name='user-email'
        value={value}
        onChange={handleChangeEmail}
        errors={emailErrors.length > 0 ? emailErrors : serverEmailError}
      />
      <WarningMsg show={emailErrors.length > 0} messages={emailErrors} />
      {serverEmailError && (
        <WarningMsg show={true} messages={[serverEmailError]} />
      )}
    </>
  );
};

EmailInputComponent.propTypes = {
  value: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  emailErrors: PropTypes.array.isRequired,
  setEmailErrors: PropTypes.func.isRequired,
  serverEmailError: PropTypes.string,
  setServerEmailError: PropTypes.func.isRequired,
  validateEditProfileEmail: PropTypes.func.isRequired,
};

export default EmailInputComponent;

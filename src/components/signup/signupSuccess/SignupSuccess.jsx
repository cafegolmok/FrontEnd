import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import BaseModal from '../../common/BaseModal.jsx';
import { hideSignupSuccessModal } from '../../../store/modalSlice.js';
import { palette, spacing, typography } from '../../../styles/theme.js';

const SuccessSignupModalContent = styled.div`
  padding: ${spacing.medium};
`;

const LogoImg = styled.img`
  display: block;
  margin: 0 auto;
  margin-bottom: ${spacing.medium};
`;

const SuccessSignupModalText = styled.p`
  margin-bottom: 12px;
  font-weight: ${typography.fontWeight.medium};
  font-size: ${typography.fontSize.xlarge};
  color: ${palette.blackColor};
  text-align: center;
`;

const SuccessSignupModalSubText = styled.p`
  color: ${palette.blackColor};
  text-align: center;
`;

const SignupSuccess = () => {
  const isSignupSuccessModalVisible = useSelector(
    state => state.modal.isSignupSuccessModalVisible
  );

  const dispatch = useDispatch();

  const handleHideSingupSuccessModal = () => {
    dispatch(hideSignupSuccessModal());
  };

  return (
    <BaseModal
      isVisible={isSignupSuccessModalVisible}
      onClose={handleHideSingupSuccessModal}
      title='회원가입 완료'
    >
      <SuccessSignupModalContent>
        <LogoImg src='/assets/images/logo-cutout.png' />
        <SuccessSignupModalText>
          카페골목에 오신 것을 환영합니다.
        </SuccessSignupModalText>
        <SuccessSignupModalSubText>
          다양한 카페에서 독특한 경험을 해보세요.
        </SuccessSignupModalSubText>
      </SuccessSignupModalContent>
    </BaseModal>
  );
};

export default SignupSuccess;

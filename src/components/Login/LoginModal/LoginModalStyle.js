import styled from 'styled-components';
import { palette, spacing, typography } from '../../../styles/theme';
import { SharedLoginBtn } from '../../common/Button.jsx';

export const LoginModalContent = styled.div`
  padding: ${spacing.medium};
`;

export const LoginModalText = styled.p`
  font-weight: ${typography.fontWeight.medium};
  font-size: ${typography.fontSize.large};
  line-height: 24px;
  color: ${palette.blackColor};
`;

export const SignupBtn = styled(SharedLoginBtn)`
  background-color: ${palette.grayColor1};
  font-weight: ${typography.fontWeight.medium};
  color: ${palette.blackColor};
`;

/* or-text */
export const OrText = styled.span`
  position: relative;
  display: block;
  margin: 15px 0;
  font-size: 14px;
  color: ${palette.darkGrayColor2};
  text-align: center;
  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 0;
    background-color: ${palette.grayColor2};
    width: 44%;
    height: 1px;
  }
  &::after {
    content: '';
    position: absolute;
    top: 8px;
    right: 0;
    background-color: ${palette.grayColor2};
    width: 44%;
    height: 1px;
  }
`;

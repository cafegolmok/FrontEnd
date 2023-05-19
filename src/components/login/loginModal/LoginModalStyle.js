import styled from 'styled-components';
import { palette } from '../../../styles/globalColor';
import { SharedLoginBtn } from '../../common/Button.jsx';

export const LoginModalContent = styled.div`
  padding: 20px;
  height: 400px;
  overflow-y: scroll;
`;

export const LoginModalText = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: ${palette.blackColor};
`;

// export const SharedBtn = styled.button`
//   margin-bottom: 16px;
//   display: block;
//   padding: 11px;
//   border-radius: 5px;
//   line-height: 28px;
//   &:last-child {
//     margin-bottom: 0;
//   }
// `;

export const SignupBtn = styled(SharedLoginBtn)`
  background-color: ${palette.grayColor1};
  font-weight: 500;
  font-size: 16px;
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

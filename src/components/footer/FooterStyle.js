import styled from 'styled-components';
import { palette } from '../../styles/theme';

export const FooterContainer = styled.footer`
  width: 100vw;
  bottom: 0;
  background: ${palette.lightGrayColor};
  position: fixed;
`;

export const Company = styled.section`
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  line-height: 25px;
  border-top: 1px solid ${palette.grayColor1};
`;

export const CompanyTitle = styled.strong`
  font-size: 18px;
`;

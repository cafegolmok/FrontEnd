import styled from 'styled-components';
import { palette } from '../../styles/globalColor';

export const FooterContainer = styled.footer`
  position: fixed;
  width: 100vw;
  bottom: 0;
  background: ${palette.lightGrayColor};
  z-index: 10;
`;

export const Company = styled.section`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  line-height: 25px;
  border-top: 1px solid ${palette.grayColor1};
`;

export const CompanyTitle = styled.strong`
  font-size: 22px;
`;

export const SnsList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const SnsImg = styled.img`
  width: 30px;
  height: 30px;
`;

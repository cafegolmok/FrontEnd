import styled from 'styled-components';
import { palette } from '../../styles/globalColor';

export const SharedLoginInput = styled.input`
  width: 100%;
  padding: 16px;
  margin-bottom: 8px;
  border: 1px solid ${palette.grayColor2};
  border-radius: 5px;
  &:focus {
    outline: none;
    border-color: ${palette.mainColor};
  }
`;

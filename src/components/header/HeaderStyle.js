import styled from 'styled-components';
import { palette } from '../../styles/theme';

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  width: 100%;
  background-color: ${palette.whiteColor};
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${palette.lightGrayColor};
  padding: 10px 43px;
  height: 75px;
`;

export const Logo = styled.img`
  display: block;
  width: 156px;
  cursor: pointer;
`;

export const SearchContainer = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  height: 46px;
  padding: 0 10px 0 15px;
  background-color: ${palette.whiteColor};
  border: 1px solid ${palette.grayColor1};
  border-radius: 40px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.16);
  box-sizing: border-box;
  overflow: hidden;
`;

export const SearchInput = styled.input`
  width: 88%;
  height: 95%;
  font-size: 15px;
  &:focus {
    outline: none;
  }
`;

export const SearchBtn = styled.button`
  width: 30px;
  height: 30px;
  background-color: ${palette.mainColor};
  border-radius: 50%;
  position: relative;
`;

export const SearchImg = styled.svg`
  fill: ${palette.whiteColor};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ProfileContainer = styled.div`
  width: 77px;
  height: 43px;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  border: 1px solid ${palette.grayColor1};
  border-radius: 30px;
  cursor: pointer;
`;

export const ProfileBarImg = styled.svg`
  fill: ${palette.grayColor1};
`;

export const ProfileImg = styled.svg`
  fill: ${palette.grayColor1};
`;

export const ProfileMoreInfo = styled.ul`
  position: absolute;
  width: 170px;
  padding: 7px 0;
  top: 50px;
  right: 0px;
  background-color: ${palette.whiteColor};
  border-radius: 10px;
  z-index: 50;
  font-size: 13px;
  font-weight: 500;
  color: ${palette.blackColor};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const SharedTab = styled.li`
  padding: 10px 10px 10px 20px;
  background-color: ${palette.whiteColor};
  cursor: pointer;

  &:hover {
    background-color: ${palette.lightGrayColor};
  }
`;

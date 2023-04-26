import styled from 'styled-components';
import { palette } from '../../styles/globalColor';

export const HeaderContainer = styled.header`
  position: fixed;
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
  padding-top: 5px;
  width: 170px;
  height: 55px;
  cursor: pointer;
`;

export const SearchContainer = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
  width: 320px;
  height: 47px;
  padding: 0 15px;
  background-color: ${palette.whiteColor};
  border: 1px solid ${palette.grayColor1};
  border-radius: 40px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.16);
  box-sizing: border-box;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 95%;
  font-size: 15px;
  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.svg`
  fill: ${palette.darkGrayColor1};
  cursor: pointer;
`;

export const ProfileContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 3px 5px;
  border: 1px solid ${palette.grayColor1};
  border-radius: 30px;
  cursor: pointer;
`;

export const ProfileBar = styled.svg`
  fill: ${palette.grayColor1};
`;

export const ProfileImg = styled.svg`
  fill: ${palette.grayColor1};
`;


export const CategoryList = styled.ul`
  display: flex;
  height: 66px;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 0 40px;
  border-bottom: 0.5px solid ${palette.lightGrayColor};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.16);
`;

export const CategoryItem = styled.li`
  padding-top: 6px;
  height: 100%;
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  color: ${palette.darkGrayColor1};
  opacity: 0.8;
  &:hover {
    opacity: 1;
    color: ${palette.blackColor};
    border-bottom: 2px solid ${palette.grayColor1};
  }
`;

export const CategoryImg = styled.img`
  display: block;
  margin: 0 auto;
  margin-bottom: 10px;
  width: 40px;
  height: 28px;
`;

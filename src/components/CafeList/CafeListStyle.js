import styled from 'styled-components';
import { palette } from '../../styles/globalColor';


export const Posts = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 28px;

    @media screen and (max-width: 1127px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 949px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 549px) {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
`

export const Post = styled.li`
  min-width: 250px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  &:last-child {
    margin-bottom: 120px;
  }
`;

export const ThumbnailImg = styled.img`
  position: relative;
  width: 100%;
  border-radius: 15px;
  margin-bottom: 10px;
  aspect-ratio: 1/1;
`;

export const BookmarkBtn = styled.svg`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
  stroke: ${palette.whiteColor};
  stroke-width: 1.5;
  fill: rgba(0, 0, 0, 0.6);
`;

export const Tags = styled.dl`
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
`;

export const Tag = styled.dd`
  padding: 5px 8px;
  font-size: 14px;
  font-weight: 600;
  color: ${palette.mainColor};
  background-color: ${palette.lightGrayColor};
  border-radius: 15px;
`;

export const CafeContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

export const CafeName = styled.h3`
  font-size: 22px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const CafeStarContainer = styled.dl`
  display: flex;
  align-items: center;
  line-height: 17px;
`;

export const CafeStar = styled.dt`
  margin-right: 5px;
`;

export const CafeLocation = styled.strong`
  display: block;
  margin-bottom: 10px;
  color: ${palette.darkGrayColor1};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

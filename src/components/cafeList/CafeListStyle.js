import styled from 'styled-components';
import { palette, spacing, typography } from '../../styles/theme';

export const Posts = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${spacing.large};

  @media screen and (max-width: 1459px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 1127px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 949px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 589px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;

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
  margin-bottom: ${spacing.small};
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
  margin-bottom: ${spacing.small};
`;

export const Tag = styled.dd`
  padding: 5px 8px;
  font-size: ${typography.fontSize.small};
  font-weight: ${typography.fontWeight.semibold};
  color: ${palette.mainColor};
  background-color: ${palette.lightGrayColor};
  border-radius: 15px;
`;

export const CafeContainer = styled.div`
  margin-bottom: ${spacing.small};
  display: flex;
  justify-content: space-between;
`;

export const CafeName = styled.h3`
  font-size: ${typography.fontSize.xlarge};
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
  margin-right: ${spacing.xsmall};
`;

export const CafeLocation = styled.strong`
  display: block;
  margin-bottom: ${spacing.small};
  color: ${palette.darkGrayColor1};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

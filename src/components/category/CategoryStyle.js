// src/components/Category/CategoryStyle.js

import styled from 'styled-components';
import { palette, typography, spacing } from '../../styles/theme';

export const CategoryList = styled.ul`
  display: flex;
  height: 66px;
  justify-content: space-between;
  gap: 12px;
  padding: 0 40px;
  border-bottom: 0.5px solid ${palette.lightGrayColor};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.16);
`;

export const CategoryItem = styled.li`
  padding-top: 6px;
  height: 66px;
  font-size: 13px;
  font-weight: ${typography.fontWeight.semibold};
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
  margin-bottom: ${spacing.small};
  width: 40px;
  height: 28px;
`;

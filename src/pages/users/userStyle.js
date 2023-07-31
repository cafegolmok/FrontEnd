// src/pages/profile/profileStyle.js

import styled from 'styled-components';
import { palette, spacing, typography } from '../../styles/theme';

export const ProfileContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-bottom: 100px;
`;

export const ProfileTitle = styled.h1`
  font-size: ${typography.fontSize.xlarge};
  text-align: center;
`;

export const ProfileSection = styled.section`
  width: 600px;
  margin: 20px auto 0;
  padding: ${spacing.xlarge};
  border: 1px solid ${palette.grayColor1};
`;

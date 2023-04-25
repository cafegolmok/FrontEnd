// src/styles/commonStyle.js

import styled from 'styled-components';

export const MainContainer = styled.main`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 40px;
  padding-top: 160px;
`;

export const ScreenOut = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  line-height: 0;
  overflow: hidden;
  text-indent: -9999px;
`;

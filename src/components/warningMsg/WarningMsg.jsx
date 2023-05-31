// src/components/WarningMsg/WarningMsg.jsx

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { palette } from '../../styles/theme';

export const WarningMsgContainer = styled.strong`
  display: block;
  padding: 0 0 5px 5px;
  font-size: 13px;
  color: ${palette.redColor};
  display: ${props => (props.show ? 'block' : 'none')};
`;

const WarningMsg = ({ show, message }) => (
  <WarningMsgContainer show={show}>{message}</WarningMsgContainer>
);

WarningMsg.propTypes = {
  show: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};

export default WarningMsg;

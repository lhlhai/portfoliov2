/* eslint-disable max-len */
import React from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

const IconLoader = ({ theme }) => (
  <svg
    id="logo"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    width={106.581}
    height={120.186}
    viewBox="0 0 106.581 120.186"
  >
    <title>Loader Logo</title>
    <g fill={theme.brand.primary}>
        <path d="M10 20h8v80h-8V20zm0 36h32v8H10v-8zm24-36h8v80h-8V20z" />
        <path d="M60 20h8v80h-8V20zm0 72h36v8H60v-8z" />
      </g>
  </svg>
);

IconLoader.propTypes = {
  theme: PropTypes.object,
};

export default withTheme(IconLoader);

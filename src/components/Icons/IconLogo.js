/* eslint-disable max-len */
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

const IconLogo = ({ theme, width = 36.581, height = 50.186, ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 106.581 120.186" {...props}>
      <g fill={theme.brand.primary}>
        <path d="M10 20h8v80h-8V20zm0 36h32v8H10v-8zm24-36h8v80h-8V20z" />
        <path d="M60 20h8v80h-8V20zm0 72h36v8H60v-8z" />
      </g>
    </svg>
  );
};

IconLogo.propTypes = {
  theme: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default withTheme(IconLogo);

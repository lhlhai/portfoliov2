/* eslint-disable max-len */
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

const IconLogo = ({ theme, width = 36.581, height = 50.186, ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 106.581 120.186" {...props}>
      <g fill={theme.brand.primary}>
        {/* H Letter */}
        <rect x="10" y="20" width="8" height="80" />
        <rect x="10" y="56" width="32" height="8" />
        <rect x="34" y="20" width="8" height="80" />
        
        {/* L Letter */}
        <rect x="60" y="20" width="8" height="80" />
        <rect x="60" y="92" width="36" height="8" />
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

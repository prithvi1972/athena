import { css } from '@emotion/core';

import config from '../../config/theme';

const {
	grayscale,
	size: { width, height },
} = config.background;
export const baseStyle = css`
	display: flex;
	background-image: url(${`https://picsum.photos/${width}/${height}${grayscale ? '?grayscale' : ''}`});
	background-size: cover;
	height: 100%;
`;

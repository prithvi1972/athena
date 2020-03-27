import { css } from '@emotion/core';

export const iconWrap = css`
		position: fixed;
		bottom: 30px;
		display: flex;
	`,
	socialIcon = css`
		width: 45px;
		height: 45px;
		margin: 10px;
		filter: grayscale(1);
		transition: filter 0.5s ease-out;
		cursor: pointer;
		&:hover {
			filter: grayscale(0);
		}
	`;

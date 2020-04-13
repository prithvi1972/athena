import { css } from '@emotion/core';
import fs from '../../styleguide/font/size';

import config from '../../config/theme';

export const contactWrapper = css`
		background-color: ${config.contact.overlay};
		height: calc(100% - 60px);
		width: calc(100% - 310px);
		padding: 30px;
	`,
	introHeading = css`
		display: inline-block;
		margin: 50px 0 0;
		padding: 10px;
		font-size: ${fs.xxlarge};
		color: rgba(230, 230, 230, 0.9);
	`,
	introSubHeading = css`
		display: inline-block;
		margin: 0;
		padding: 10px;
		color: rgba(230, 230, 230, 0.9);
		font-weight: normal;
		font-size: ${fs.xlarge};
		a {
			color: rgba(230, 130, 130, 0.9);
			font-weight: bold;
		}
	`,
	contactMessage = expand => css`
		width: 500px;
		height: ${expand ? '200' : '50'}px;
		background-color: rgba(255, 255, 255, 0.9);
		border: 0;
		border-radius: 5px;
		margin: 10px;
		transition: background-color, height 500ms ease;
		padding: 10px;
		font-size: ${fs.medium};
		position: relative;
		&:focus,
		&:hover {
			background-color: rgba(255, 255, 255, 0.95);
			outline: transparent;
		}
	`,
	dnone = css`
		display: none;
	`;

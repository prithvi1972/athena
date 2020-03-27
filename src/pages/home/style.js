import { css } from '@emotion/core';
import fs from '../../styleguide/font/size';

export const homeWrapper = css`
		background-color: rgba(50, 50, 50, 0.8);
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
	homeLink = css`
		display: inline-block;
		margin: 10px;
		padding: 10px;
		border: 1px solid rgba(255, 255, 255, 0.8);
		background-color: rgba(0, 0, 0, 0.2);
		font-weight: bold;
		color: rgba(255, 255, 255, 0.8);
		transition: background-color 0.4s ease;
		&:hover {
			background-color: rgba(0, 0, 0, 0.8);
		}
	`;

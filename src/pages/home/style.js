import { css } from '@emotion/core';
import fs from '../../styleguide/font/size';

import config from '../../config/theme';

export const homeWrapper = css`
		background-color: ${config.home.overlay};
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
	`;

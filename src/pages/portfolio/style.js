import { css } from '@emotion/core';
import fs from '../../styleguide/font/size';

import config from '../../config/theme';

export const portfolioWrapper = css`
		background-color: ${config.portfolio.overlay};
		height: calc(100% - 60px);
		width: calc(100% - 310px);
		padding: 30px;
		overflow: scroll;
	`,
	portfolioH1 = css`
		font-weight: normal;
		text-transform: uppercase;
		margin: 0;
		font-size: ${fs.xxlarge};
	`,
	portfolioH2 = css`
		font-weight: normal;
		font-size: ${fs.medium};
		margin: 5px 0;
		font-style: italic;
	`;
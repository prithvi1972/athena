import { css } from '@emotion/core';
import fs from '../../styleguide/font/size';

export const portfolioWrapper = css`
		background-color: rgba(230, 230, 230, 0.8);
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

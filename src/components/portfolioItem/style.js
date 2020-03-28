import { css } from '@emotion/core';

import fs from '../../styleguide/font/size';

export const portfolioItemWrap = css`
		display: flex;
	`,
	timeWrap = css`
		margin: 0;
		padding: 12px 20px;
		border-right: 1px dashed #333;
		color: #333;
		font-size: ${fs.medium};
		text-transform: uppercase;
		flex: 120px 0 0;
	`,
	descriptionWrap = css`
		margin: 0;
		padding: 10px 20px;
	`,
	itemName = css`
		margin: 0;
		padding: 2px 0;
		color: rgba(130, 30, 30, 0.9);
		font-size: ${fs.large};
	`,
	itemShortDescription = css`
		margin: 0;
		padding: 2px 0;
		font-size: ${fs.medium};
	`,
	itemDescription = css`
		margin: 0;
		padding: 2px 0;
	`;

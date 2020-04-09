import { css } from '@emotion/core';

import fs from '../../styleguide/font/size';

export const portfolioItemWrap = css`
		display: flex;
	`,
	timeWrap = css`
		position: relative;
		margin: 0;
		padding: 12px 20px;
		border-right: 1px dashed #333;
		color: #333;
		font-size: ${fs.medium};
		text-transform: uppercase;
		flex: 120px 0 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		text-align: right;
		font-weight: bold;
	`,
	__timeStyle__ = `
		content: '';
		height: 8px;
		width: 8px;
		background-color: rgb(120, 30, 30);
		position: absolute;
		right: -4.5px;
		border-radius: 1px;
	`,
	timeStyleTop = css`
		&:after {
			top: 15px;
			${__timeStyle__}
		}
	`,
	timeStyleBottom = css`
		&:after {
			bottom: 15px;
			${__timeStyle__}
		}
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
	`,
	technologyStyle = css`
		font-size: ${fs.medium};
		padding: 5px;
		background-color: rgba(60, 0, 0, 0.5);
		color: rgba(230, 230, 230, 0.95);
		text-transform: capitalize;
		display: inline-block;
		margin: 5px 5px 5px 0;
	`;

import { css } from '@emotion/core';
import config from '../../styleguide/font/size';

export const interestsItemWrap = css`
		display: inline-block;
		margin: 30px;
		width: calc(50% - 60px);
	`,
	interestIcon = css`
		width: 75px;
		height: 75px;
		display: inline-block;
		background-color: rgba(20, 0, 0, 0.1);
		border: 2px solid rgba(10, 0, 0, 0.4);
		padding: 10px;
		border-radius: 20px;
		vertical-align: top;
	`,
	interestsDataWrap = css`
		display: inline-block;
		padding: 5px 0 5px 20px;
		vertical-align: top;
	`,
	interestTitle = css`
		font-size: ${config.large};
	`,
	interestDesc = css`
		border-top: 1px solid rgba(0, 0, 0, 0.2);
		padding: 5px 0 0;
		width: 250px;
		margin: 5px 0 0;
	`,
	interestDescList = css`
		margin: 5px 0;
		padding: 0;
		list-style: square inside;
		font-size: ${config.small};
	`;

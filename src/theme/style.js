import { css } from '@emotion/core';

export const button = css`
		display: inline-block;
		margin: 10px;
		padding: 10px;
		font-weight: bold;
		cursor: pointer;
		transition: background-color 0.4s ease;

		border: 1px solid rgba(255, 255, 255, 0.8);
		background-color: rgba(0, 0, 0, 0.2);
		color: rgba(255, 255, 255, 0.8);
		&:hover {
			background-color: rgba(0, 0, 0, 0.8);
		}
	`,
	buttonDark = [
		button,
		css`
			border: 0;
			background-color: rgba(30, 30, 30, 0.6);
			color: rgba(255, 255, 255, 1);
			&:hover {
				background-color: rgba(30, 30, 30, 0.9);
			}
		`,
	];

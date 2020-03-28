import { css } from '@emotion/core';
import config from '../../config/profile.js';
import fs from '../../styleguide/font/size';

export const navigationStyle = css`
		flex: 250px 0 0;
		background-color: rgba(90, 0, 0, 0.8);
		background-size: 16px 16px;
		display: flex;
		flex-direction: column;
		align-items: center;
	`,
	linkStyle = css`
		width: 100%;
		text-align: center;
		color: white;
		font-size: large;
		text-decoration: none;
		margin: 10px 0;
	`,
	navAvatarWrap = css`
		margin: 60px 0;
	`,
	navAvatar = css`
		width: 180px;
		height: 180px;
		background-color: rgba(0, 0, 0, 0.3);
		background-image: url(${config.meta.image});
		background-size: 180px;
		border: 3px solid white;
		border-radius: 50%;
	`,
	navName = show => css`
		font-size: ${fs.medium};
		color: #fff;
		text-transform: uppercase;
		font-weight: bold;
		width: 100%;
		padding: 5px;
		text-align: center;
		border-bottom: 1px dotted rgba(255, 255, 255, 0.4);
		transition: opacity 0.25s ease-in-out;
		opacity: ${show ? '1' : '0'};
	`;
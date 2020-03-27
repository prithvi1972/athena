import { css } from '@emotion/core';

export const navigationStyle = css`
		flex: 250px 0 0;
		background-color: rgba(90, 0, 0, 0.9);
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
	navAvatar = css`
		width: 180px;
		height: 180px;
		background-color: rgba(0, 0, 0, 0.3);
		background-image: url('https://media-exp1.licdn.com/dms/image/C4D03AQEhgK9m0MtfRw/profile-displayphoto-shrink_800_800/0?e=1590624000&v=beta&t=l0I9twl2O7XpUHZ5LodkHA7R91uWnqJxOHm_XP3a4Q4');
		background-size: 180px;
		border: 3px solid white;
		border-radius: 50%;
		margin: 60px 0;
	`;

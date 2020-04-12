import { css } from '@emotion/core';
import fs from '../../styleguide/font/size';

import config from '../../config/theme';

export const interestsWrapper = css`
		background-color: ${config.interests.overlay};
		height: calc(100% - 60px);
		width: calc(100% - 310px);
		padding: 30px;
		overflow: scroll;
	`,
	interestsH1 = css`
		font-weight: normal;
		text-transform: uppercase;
		margin: 0 0 20px;
		font-size: ${fs.xxlarge};
	`,
	interestsH2 = css`
		font-weight: normal;
		font-size: ${fs.medium};
		margin: 5px 0;
		font-style: italic;
	`;

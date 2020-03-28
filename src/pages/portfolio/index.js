/** @jsx jsx */
import { jsx } from '@emotion/core';

import { PortfolioTimeline } from '../../components/portfolioTimeline/index.js';
import { portfolioWrapper, portfolioH1, portfolioH2 } from './style.js';

export function Portfolio() {
	return (
		<div css={portfolioWrapper}>
			<h1 css={portfolioH1}>Portfolio</h1>
			<h2 css={portfolioH2}>My journey so far...</h2>
			<PortfolioTimeline />
		</div>
	);
}

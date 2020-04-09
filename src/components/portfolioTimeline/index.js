/** @jsx jsx */
import { jsx } from '@emotion/core';

import portfolio from '../../config/portfolio';
import { PortfolioItem } from '../portfolioItem';
import { timelineWrap } from './style';

export function PortfolioTimeline() {
	return (
		<div css={timelineWrap}>
			{portfolio.timelineItems.map((item, i) => (
				<PortfolioItem {...item} i={i} />
			))}
		</div>
	);
}

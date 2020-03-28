/**@jsx jsx*/
import { jsx } from '@emotion/core';

import { portfolioItemWrap, timeWrap, descriptionWrap, itemName, itemShortDescription, itemDescription } from './style';

export function PortfolioItem({ type, data: { time, name, shortDescription, description } }) {
	if (!time || !type) return null;
	return (
		<div css={portfolioItemWrap}>
			<div css={timeWrap}>{time}</div>
			<div css={descriptionWrap}>
				{name && <h3 css={itemName}>{name}</h3>}
				{shortDescription && <h4 css={itemShortDescription}>{shortDescription}</h4>}
				{description && <div css={itemDescription}>{description}</div>}
			</div>
		</div>
	);
}

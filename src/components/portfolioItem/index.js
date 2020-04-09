/**@jsx jsx*/
import { jsx } from '@emotion/core';

import config from '../../config/portfolio';
import {
	portfolioItemWrap,
	timeWrap,
	descriptionWrap,
	itemName,
	itemShortDescription,
	itemDescription,
	timeStyleTop,
	timeStyleBottom,
	technologyStyle,
} from './style';
import { buttonDark } from '../../theme/style';

function sanitizePortfolioItem({ time = {} }, i) {
	const prevItem = config.timelineItems[i + 1],
		prevEnd = (prevItem && prevItem.data && prevItem.data.time && prevItem.data.time.end) || null,
		start = !time.start || time.start === prevEnd ? '' : time.start,
		end = time.end || '';
	return { time: { start, end } };
}

export function PortfolioItem({ type, data: { time, name, subHeading, shortDescription, technologies, knowMore }, i }) {
	if (!time || !type) return null;
	const {
		time: { start, end },
	} = sanitizePortfolioItem({ time }, i);
	return (
		<div css={portfolioItemWrap}>
			<div css={timeWrap}>
				<div css={end !== '' && timeStyleTop}>{end}</div>
				<div css={end === '' && start !== '' && timeStyleBottom}>{start}</div>
			</div>
			<div css={descriptionWrap}>
				{name && <h3 css={itemName}>{name}</h3>}
				{subHeading && <h4 css={itemShortDescription}>{subHeading}</h4>}
				{Array.isArray(technologies) &&
				technologies.map(technology => <div css={technologyStyle}>{technology}</div>)
				}
				{shortDescription && <div css={itemDescription}>{shortDescription}</div>}
				{knowMore && <div css={buttonDark}>Know More</div>}
			</div>
		</div>
	);
}

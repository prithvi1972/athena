/** @jsx jsx */
import { jsx } from '@emotion/core';
import { interestDesc, interestsDataWrap, interestsItemWrap, interestTitle } from './style';

export function InterestsItem({ image, title, desc }) {
	if (!image || !title || !desc) return null;
	return (
		<div css={interestsItemWrap}>
			{image}
			<div css={interestsDataWrap}>
				<div css={interestTitle}>{title}</div>
				<div css={interestDesc}>{desc}</div>
			</div>
		</div>
	);
}

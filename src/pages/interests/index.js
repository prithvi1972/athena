/** @jsx jsx */
import { jsx } from '@emotion/core';

import { interestsWrapper, interestsH1, interestsH2 } from './style.js';
import { interests } from '../../config/interests';
import { InterestsItem } from '../../components/interestsItem';

export function Interests() {
	return (
		<div css={interestsWrapper}>
			<h1 css={interestsH1}>Interests</h1>
			{interests.map(interest => (
				<InterestsItem {...interest} />
			))}
		</div>
	);
}

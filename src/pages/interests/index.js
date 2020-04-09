/** @jsx jsx */
import { jsx } from '@emotion/core';

import { interestsWrapper, interestsH1, interestsH2 } from './style.js';

export function Interests() {
	return (
		<div css={interestsWrapper}>
			<h1 css={interestsH1}>Interests</h1>
			<h2 css={interestsH2}>Things I love to do...</h2>
		</div>
	);
}

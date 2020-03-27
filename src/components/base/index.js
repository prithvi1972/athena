/** @jsx jsx */
import { jsx } from '@emotion/core';

import { Navigation } from '../navigation';
import { MainContent } from '../mainContent';

import { baseStyle } from './style';

export function Base() {
	return (
		<div css={baseStyle}>
			<Navigation />
			<MainContent />
		</div>
	);
}

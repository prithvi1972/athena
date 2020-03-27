/** @jsx jsx */
import { jsx } from '@emotion/core';

import { seperator } from './style.js';

export function Seperator(color = '#fff', height = '2px', width = '100%') {
	return <div css={seperator(color, height, width)} />;
}

/** @jsx jsx */
import { jsx } from '@emotion/core';

import { iconWrap, socialIcon } from './style';

import { ReactComponent as FacebookIcon } from '../../static/img/social/facebook.svg';
import { ReactComponent as LinkedinIcon } from '../../static/img/social/linkedin.svg';

export function SocialIcons() {
	return (
		<div css={iconWrap}>
			<FacebookIcon css={socialIcon} />
			<LinkedinIcon css={socialIcon} />
		</div>
	);
}

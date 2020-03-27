/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import { navigationStyle, linkStyle, navAvatar } from './style';
import { SocialIcons } from '../socialIcons';

export function Navigation() {
	return (
		<div css={navigationStyle}>
			<div css={navAvatar} />
			<Link to="/" css={linkStyle}>
				Home
			</Link>
			<Link to="/portfolio" css={linkStyle}>
				Portfolio
			</Link>
			<Link to="/interests" css={linkStyle}>
				Interests
			</Link>
			<Link to="/contact" css={linkStyle}>
				Contact
			</Link>
			<SocialIcons />
		</div>
	);
}

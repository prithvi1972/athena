/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link, useHistory } from 'react-router-dom';
import { navigationStyle, linkStyle, navAvatar, navAvatarWrap, navName } from './style';
import { SocialIcons } from '../socialIcons';
import config from '../../config/profile';

export function Navigation() {
	const history = useHistory(),
		isHomePage = history.location.pathname === '/';
	return (
		<div css={navigationStyle}>
			<div css={navAvatarWrap}>
				<div css={navAvatar} />
				<h1 css={navName(!isHomePage)}>{config.meta.name}</h1>
			</div>
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

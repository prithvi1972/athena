/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';

import config from '../../config/profile.js';
import { Seperator } from '../../components/seperator/index.js';

import { homeWrapper, introHeading, introSubHeading, homeLink } from './style.js';

export function Home() {
	return (
		<div css={homeWrapper}>
			<h1 css={introHeading}>Hi, I am {config.meta.name}</h1>
			<Seperator color="transparent" />
			<h2 css={introSubHeading}>
				{config.meta.role} at <a href={config.company.url}>{config.company.name}</a>
			</h2>
			<Seperator color="transparent" />
			<Link to="/cv" css={homeLink}>
				Download CV
			</Link>
			<Link to="/portfolio" css={homeLink}>
				Browse Portfolio
			</Link>
		</div>
	);
}

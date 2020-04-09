/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';

import config from '../../config/profile';
import { Seperator } from '../../components/seperator/index';

import { homeWrapper, introHeading, introSubHeading } from './style';
import { button } from '../../theme/style';

export function Home() {
	return (
		<div css={homeWrapper}>
			<h1 css={introHeading}>Hi, I am {config.meta.name}</h1>
			<Seperator color="transparent" />
			<h2 css={introSubHeading}>
				{config.meta.role} at <a href={config.company.url}>{config.company.name}</a>
			</h2>
			<Seperator color="transparent" />
			<Link to="/cv" css={button}>
				Download CV
			</Link>
			<Link to="/portfolio" css={button}>
				Browse Portfolio
			</Link>
		</div>
	);
}

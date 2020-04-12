/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment } from 'react';

import { interestDescList, interestIcon } from '../components/interestsItem/style';

import { ReactComponent as FootballIcon } from '../static/img/interests/football.svg';
import { ReactComponent as SwimmingIcon } from '../static/img/interests/swimming.svg';
import { ReactComponent as DancingIcon } from '../static/img/interests/dance.svg';
import { ReactComponent as PaintingIcon } from '../static/img/interests/painting.svg';
import { ReactComponent as VolunteeringIcon } from '../static/img/interests/volunteer.svg';

export const interests = [
	{
		title: 'Football',
		image: <FootballIcon css={interestIcon} />,
		desc: (
			<i>
				State Level (Punjab)
				<br />
				<small>Center Forward Player</small>
			</i>
		),
	},
	{
		title: 'Swimming',
		image: <SwimmingIcon css={interestIcon} />,
		desc: (
			<i>
				State Level (Punjab)
				<br />
				<small>Played at matches at various levels</small>
			</i>
		),
	},
	{
		title: 'Dancing',
		image: <DancingIcon css={interestIcon} />,
		desc: (
			<small>
				<i>
					Guinnees world book record holder for world’s <b>largest bhangra troupe</b>
				</i>
			</small>
		),
	},
	{
		title: 'Painting',
		image: <PaintingIcon css={interestIcon} />,
		desc: (
			<i>
				The Silent poetry
				<br />
				<small>
					(My Painting Blog)
					<br />
					coming soon…
				</small>
			</i>
		),
	},
	{
		title: 'Volunteering',
		image: <VolunteeringIcon css={interestIcon} />,
		desc: (
			<i>
				(Art of Living)
				<ul css={interestDescList}>
					<li>Organize courses</li>
					<li>Manage campaigns</li>
					<li>Teach the underprivileged</li>
				</ul>
			</i>
		),
	},
];

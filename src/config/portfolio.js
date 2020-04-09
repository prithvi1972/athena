/**@jsx jsx*/
import { jsx } from '@emotion/core';

export default {
	timelineItems: [
		{
			type: 'job',
			data: {
				name: 'Magicpin',
				time: {
					start: 'Jan 2019',
					end: 'Present',
				},
				subHeading: 'Backend Software Developer',
				technologies: ['python', 'golang', 'kafka', 'redis', 'neo4j'],
				shortDescription: (
					<div>
						Solved problems at the merchant resulting in 90 percent efficiency which was 40 percent earlier
						<ul>
							<li>Created algorithms to decode, process and store the bill information</li>
							<li>Developed a survey API at the middleware</li>
							<li>Worked on bill detection techniques</li>
							<li>
								Extracted useful information from the bill images such as items, quantity, price, etc
							</li>
						</ul>
					</div>
				),
				knowMore: false,
			},
		},
	],
};

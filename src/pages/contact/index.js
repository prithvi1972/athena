/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';

import { Seperator } from '../../components/seperator/index';

import { contactMessage, contactWrapper, dnone, introHeading, introSubHeading } from './style';
import { button } from '../../theme/style';
import { Facebook, LinkedIn } from '../../components/socialIcons';

export function Contact() {
	// const [expandMessageBox, setExpandMessageBox] = useState(false),
	// 	[showSend, setShowSend] = useState(false);
	//
	// function handleMessageBoxFocus() {
	// 	setExpandMessageBox(true);
	// 	setShowSend(true);
	// }
	//
	// function sendMessage() {
	//
	// }

	return (
		<div css={contactWrapper}>
			<h1 css={introHeading}>CONTACT</h1>
			<Seperator color="transparent" />
			<h2 css={introSubHeading}>Feel free to drop a mail, or connect</h2>
			<Seperator color="transparent" />
			<div>
				<Facebook />
				<LinkedIn />
			</div>
			{/*<textarea*/}
			{/*	css={contactMessage(expandMessageBox)}*/}
			{/*	placeholder="Drop a message here"*/}
			{/*	onFocus={handleMessageBoxFocus}*/}
			{/*/>*/}
			{/*<Seperator color="transparent" />*/}
			{/*<div onClick={sendMessage} css={showSend ? button : dnone}>*/}
			{/*	Drop Message*/}
			{/*</div>*/}
		</div>
	);
}

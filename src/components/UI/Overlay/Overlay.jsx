import React from "react";
import { createPortal } from "react-dom";
import "./Overlay.scss";

// const Backdrop = () => {
// 	return <div className="backdrop"></div>;
// };

// const Modal = ({ content }) => {
// 	return <div className="wrapper modal">{content}</div>;
// };

const ModalOverlay = ({ content, target, closeModal }) => {
	return createPortal(
		<>
			{/* <Backdrop />
			<Modal content={content} /> */}
			<div className="backdrop" onClick={closeModal}></div>
			<div className="wrapper modal">{content}</div>
		</>,
		target
	);
};

const Overlay = ({ content, wrapperID = "root-overlay", onOverlayClick }) => {
	const target = document.getElementById(wrapperID);
	console.log(target);

	return (
		<ModalOverlay
			content={content}
			target={target}
			closeModal={onOverlayClick}
		/>
	);
};

export default Overlay;
// onOverlayClick={setOpenModal(false)}

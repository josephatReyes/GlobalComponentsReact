import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import './modal-alarms.css';
import Container from 'react-bootstrap/Container';

const ModalAlarm = (props) => {
	return (
		<Modal
			id="modal-alarms"
			size="lg"
			show={props.showModalAlarm}
			onHide={() => {
				props.closeModal();
			}}
			dialogClassName="modal-90w"
			aria-labelledby="example-custom-modal-styling-title"
		>
			<Modal.Header closeButton>
				<Modal.Title id="example-custom-modal-styling-title" className="title-modal-alarm">Active Event Details</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className="container indicators-alarms">
					<div className="row o-padding o-margin">
						<div className="col red  o-padding o-margin" />

						<div className="col  o-padding o-margin " />

						<div className="col red  o-padding o-margin">a</div>

						<div className="col  o-padding o-margin " />

						<div className="col red  o-padding o-margin" />
					</div>
				</div>

<div className="container">
    <div className="row">
        <div className="col">
            Tra
        </div>
    </div>
</div>
        
			</Modal.Body>
		</Modal>
	);
};

export default ModalAlarm;

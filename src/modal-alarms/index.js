import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import './modal-alarms.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { ReactComponent as IdNumber } from '../assets/img/id-number.svg';
import { ReactComponent as End } from '../assets/img/end.svg';
import { ReactComponent as Start } from '../assets/img/start.svg';
import { ReactComponent as NoAlarm } from '../assets/img/sin_alarms-gray.svg';
import { ReactComponent as Screen } from '../assets/img/icon_pantalla.svg';
import Table from 'react-bootstrap/Table';
/**
 * Here will draw a comment into the comments section
 * PROPS
 * @param {string} owner usename in the comment
 * @param {string} comment  message into the comment
 * @param {string} commentDate  message date
 * @param {boolean} isviewed  if is viewed or not
 */
const Comment = (props) => {
	return (
		<Col xs="12" className="comment-col">
			<Col className="comment-owner" xs="12">
				<span className="user-owner"> {props.owner}: </span> {props.comment}
			</Col>
			<Col className="is-viewed" xs="12">
				{props.isviewed ? 'Not  marked s view' : 'marked as view'}
				<span>{pipeDate(props.commentDate)}</span>
			</Col>
		</Col>
	);
};

/**
 * Draw a block header in the top of the modal
 * PROPS
 * @param {number} size number of columns
 * @param {string} image name of the image will be showed 
 * @param {string} title title will be showed in the block
 * @param {string} subtitle subtitle will be showd in the block
 */
const BlockHeader = (props) => {
	const Image = props.image;
	return (
		<Col className="block-header-ctn" xs={props.size}>
			<div className="labels-ctn" sm="12" xs="12">
				<div className="pos-top">
					<div className={'icon-' + props.image} />

					<div className="label-header">{props.title}</div>
				</div>
			</div>

			<div className="labels-ctn" xs="12">
				<div className="pos-bottom">{props.subtitle}</div>
			</div>
		</Col>
	);
};
/**
 * Here draws a subtitle into the modal with 12 cols as size
 * PROPS
 * @param {string} title title will be showed in the subtitle
 */
const ModalSubTitle = (props) => {
	return (
		<div className="row subtitle-modal-alarms o-padding o-margin">
			<div className="col ">{props.title}</div>
		</div>
	);
};

//Convert a large string in a short string
const pipeDateToString = (string) => {
	let stripped = string.includes('hours') ? string.replace('hours', 'h') : string.replace('hour', 'h');
	stripped = stripped.includes('minutes') ? stripped.replace('minutes', 'm') : stripped.replace('minute', 'm');
	stripped = stripped.includes('seconds') ? stripped.replace('seconds', 's') : stripped.replace('second', 's');
	stripped = stripped.includes('days') ? stripped.replace('days', 'd') : stripped.replace('day', 'd');
	return stripped;
};

//Convert a date in a short format like dd/mm/yy hh:mm
const pipeDate = (dateString) => {
	let today = new Date(dateString);
	let date =
		(today.getDate() < 10 ? '0' + today.getDate() : today.getDate()) +
		'-' +
		(today.getMonth() + 1 < 10 ? '0' + (today.getMonth() + 1) : today.getMonth + 1) +
		'-' +
		today.getFullYear();

	let time =
		(today.getHours() < 10 ? '0' + today.getHours() : today.getHours()) +
		':' +
		(today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes());
	let dateToDisplay = date + ' ' + time;
	//console.log(typeof dateString, date);
	return dateToDisplay;
};

/**
 * IMPORTANT
 * @constructor 
 * PROPS
 * @param {boolean} showModalAlarm INIDICATES IF THE MODAL WILL BE SHOWED.
 * @param {function} closeModal is used to changed the status of the showModalAlarm variable 
 * @param {string} startDate show the start date in the header of modal.
 * @param {number}  index	show the index in the header of the modal.
 * @param {string} endDate	show the end date in the header of modal.
 * @param {string} status show the status in the header of modal.
 * @param {string} tracking show the tracking name in the header of modal.
 * @param {array}  comments array of comments of event.
 * @param {array}  tracking array of data to fill the table.
*/
const DrawTable = (props) => {
	return (
		<Table striped bordered hover className="fixed_headers ">
			<thead>
				<tr>
					<th>Alarm</th>
					<th>Site</th>
					<th>Aknowledge</th>
					<th>Start</th>
					<th>Status Duration</th>
				</tr>
			</thead>
			<tbody>
				{props.data ? props.data.length > 0 ? (
					props.data.map((td, index) => {
						return (
							<tr key={index + 'table-alarms'}>
								<td>{td.value}</td>
								<td>{props.site}</td>
								<td>{JSON.stringify(td.status.know)}</td>
								<td>{td.start ? pipeDate(td.start) : ''}</td>
								<td>{td.durationString ? pipeDateToString(td.durationString) : ''} </td>
							</tr>
						);
					})
				) : (
					''
				) : (
					''
				)}
			</tbody>
		</Table>
	);
};

const ModalAlarm = (props) => {
	const [ dataTracking, setdataTracking ] = useState(props.tracking);
	const [ site, setSite ] = useState(props.site);
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
				<Modal.Title id="example-custom-modal-styling-title" className="title-modal-alarm">
					Active Event Details
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className="container indicators-alarms  o-padding ">
					<div className="row o-padding o-margin alarms-row-ctn">
						<BlockHeader size="2" title={'Id'} image={'id-number'} subtitle={props.index} />
						<BlockHeader size="3" title={'Alarm'} image={'no-alarm'} subtitle={props.status} />
						<BlockHeader
							size="3"
							title={'Site'}
							image={'screen'}
							subtitle={'BP-MADDOG - iDirect-X5-91482'}
						/>
						<BlockHeader size="2" title={'Start'} image={'start'} subtitle={props.startDate} />
						<BlockHeader size="2" title={'Duration'} image={'end'} subtitle={props.endDate} />
					</div>
				</div>
				<div className="container  o-padding ">
					<ModalSubTitle title={'Tracking'} />
				</div>

				<div className="container  alarms-box o-padding">
					{/* Aqui en esta seccion va una tabla  */}

					<DrawTable data={dataTracking} site={site} />
				</div>
				<div className="container  o-padding ">
					<ModalSubTitle title={'Comments'} />
				</div>
				<div className="container  o-padding comments-box ">
					<div className="row  o-padding o-margin comments-row-alarms  ">
						{props.comments.map((comment, index) => {
							return (
								<Comment
									key={'index-comment-alarms' + index}
									owner={comment.userName}
									isviewed={comment.readby.length > 0 ? true : false}
									comment={comment.msg}
									commentDate={comment.time}
								/>
							);
						})}
					</div>
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default ModalAlarm;

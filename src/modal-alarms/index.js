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

const Comment = (props) => {
	return (
		<Col xs="12" className="comment-col">
			<Col className="comment-owner" xs="12">
				<span className="user-owner"> {props.owner}: </span> {props.comment}
			</Col>
			<Col className="is-viewed" xs="12">
                {props.isviewed?"Not  marked s view": "marked as view"}
                <span>
                {props.commentDate}
                </span>
			</Col>
		</Col>
	);
};
const BlockHeader=props=>{
const Image= props.image;
    return(
        <Col class="block-header-ctn" xs={props.size}>

        <div className="labels-ctn" sm="12" xs="12">
            <div className="pos-top">
                <div className={"icon-"+ props.image}></div>
            
                <div className="label-header">{props.title}</div>
            </div>
        </div>


        <div className="labels-ctn" xs="12">
            <div className="pos-bottom">{props.subtitle}</div>
        </div>

    </Col>
    );
}
const ModalSubTitle = (props) => {
	return (
		<div className="row subtitle-modal-alarms o-padding o-margin">
			<div className="col ">{props.title}</div>
		</div>
	);
};

const DrawTable=props=>{

    return (
        <Table striped bordered hover className="fixed_headers ">
        <thead>
          <tr>
            <th>Alarm</th>
            <th>Site</th>
            <th>Aknowledge</th>
            <th>Start</th>
          </tr>
        </thead>
        <tbody>
            {props.data? props.data.length>0 ? props.data.map((td, index)=>{

                return (
            <tr key={index+"table-alarms"}>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
             </tr>

                );

            }):'':''}
          
        </tbody>
      </Table>
    );
}

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
				<Modal.Title id="example-custom-modal-styling-title" className="title-modal-alarm">
					Active Event Details
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className="container indicators-alarms  o-padding ">
					<div className="row o-padding o-margin alarms-row-ctn">
					<BlockHeader  size="2" title={"Id"} image={"id-number"} subtitle={"#444343"}/>
                    <BlockHeader size="3" title={"Alarm"}  image={"no-alarm"} subtitle={"Remote is unreachable"}/>
                    <BlockHeader size="3" title={"Site"}  image={"screen"} subtitle={"BP-MADDOG - iDirect-X5-91482"}/>
                    <BlockHeader size="2" title={"Start"}   image={"end"}subtitle={"02/03/19 13:37"}/>
                    <BlockHeader size="2" title={"Duration"}  image={"start"} subtitle={"26d 1h 27m 59s"}/>
				
					</div>
				</div>

				<div className="container  o-padding ">
					<ModalSubTitle title={'Tracking'} />
				</div>

				<div className="container  alarms-box o-padding">{/* Aqui en esta seccion va una tabla  */}
                
        

                    
               <DrawTable data={[1,2,3,4,6,7,8,9,10,11,12,123,13,1,2,3,5,13,]}/>
                
                </div>

				<div className="container  o-padding ">
					<ModalSubTitle title={'Comments'} />
				</div>

				<div className="container  o-padding comments-box ">
					<div className="row  o-padding o-margin comments-row  ">
						<Comment owner={"Isaias"} isviewed={false} comment={"comentario test"} commentDate={"29-09-19"} />
                        <Comment owner={"Isaias"} isviewed={false} comment={"comentario test"} commentDate={"29-09-19"} />
					</div>
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default ModalAlarm;

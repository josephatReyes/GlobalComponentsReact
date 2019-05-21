import React, { useState, useEffect, useRef } from 'react';
import { ValidationForm, SelectGroup, TextInputGroup } from 'react-bootstrap4-form-validation';
import Form from 'react-bootstrap/Form';
import Datetime from 'react-datetime';
import './datePicker.css';
/** 
@autor josephatR
Styles filter.css
**/
import './filters.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/**
 * @constructor
 * -->props<---
 * @param {string} type can be inputText, select calendar or rangeCalendar
 * @param {array} placeholder array of placeholders
 * @param {array} labels array of labels for the filters
 * @param {function} eventEmit function than send the data and  filter type after some changes  in the component
 * 
 */

const FilterComponent = (props) => {
	const [ input, setInput ] = useState('');
	const [ placeholders, setPlaceholders ] = useState(props.palceholders);
	const [ select, setSelect ] = useState('');
	const [ calendar, setCalendar ] = useState(null);
	const [ minDate, setMinDate ] = useState(null);
	const [ maxDate, setMaxDate ] = useState(null);
	const [ options, setOptions ] = useState(props.options);
	const [ labels, setLabels ] = useState(props.labels);
	const datePicker = useRef(null);
	const datePicker2 = useRef(null);
	const datePicker3 = useRef(null);


	//styles for cols
	const paddings = { paddingLeft: '0px', paddingRight: '0px', width: '90%' };
	useEffect(
		() => {
			emitEvent(createBody('select', select));
		},
		[ select ]
	);

	useEffect(
		() => {
			//	console.log('Component rerendered', props);
			setLabels(props.labels);
			setPlaceholders(props.placeholders);
		},
		[ props ]
	);

	useEffect(
		() => {
			emitEvent(
				createBody('calendar', {
					calendar: calendar ? (calendar.toDate ? calendar.toDate() : calendar) : calendar
				})
			);
		},
		[ calendar ]
	);

	useEffect(
		() => {
			emitEvent(
				createBody('rangeDate', {
					minDate: minDate ? (minDate.toDate ? minDate.toDate() : minDate) : minDate,
					maxDate: maxDate ? (maxDate.toDate ? maxDate.toDate() : maxDate) : maxDate
				})
			);
		},
		[ minDate, maxDate ]
	);

	//Here will be create a new response for father component
	const createBody = (input, data) => {
		return { input, data };
	};

	//Here Emit an event when some filter changes
	const emitEvent = (response) => {
		if (props.eventEmit) {
			props.eventEmit(response);
		}
	};
	//Here Emit an event when some filter changes
	const drawInput = (props) => {
		const changeInput = (e) => {
			setInput(e.target.value);
		};

		return (
			<div className="filter-ctn special-container appear">
				<div className="container">
					<Row className="filter-double-ctn">
						<Col style={paddings}>
							<div>
								<span>{labels ? labels[0] : ''}</span>	
								<div class="content-input-form">
								<Form.Control
									type="text"
									name="firstName"
									value={input}
									onChange={changeInput}
									placeholder={placeholders ? placeholders[0] : ''}
									className="customText"
								
								/>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		);
	};

	//Here draws a RangeDates  component
	const drawRangeDates = (props) => {
		return (
			<div className="filter-ctn special-container appear">
				<div className="container">
					<Row className="filter-double-ctn">
						<Col style={paddings}>
							<span>{labels ? labels[0] : ''}</span>
							<Datetime
							ref={datePicker}
							id="date"
								closeOnSelect={true}
								onChange={(newDate) => {
									setMinDate(newDate);
								}}


								onFocus={(e)=>{
									let height = window.innerHeight;
									let rdtPicker= document.getElementsByClassName("rdtOpen");
									let fatherNode=rdtPicker[0];
									
									if(height<360){
										fatherNode.lastChild.classList.add("moveToTop")	
									}else{
										console.log("SI entra pendejAAAAAA")
										fatherNode.lastChild.classList.remove("moveToTop")
									}
								
									console.log("height",height);
									console.log("Hola",fatherNode.lastChild);
								}}
								inputProps={{ readOnly: true, placeholder: 'dd/mm/yy hh:mm:ss' }}
							/>
						</Col>
						<Col xs={1} />

						<Col style={paddings}>
							<span>{labels ? labels[1] : ''}</span>
							<Datetime
								closeOnSelect={true}
								onChange={(newDate) => {
									setMaxDate(newDate);
								}}
								inputProps={{ readOnly: true, placeholder: 'dd/mm/yy hh:mm:ss' }}
							/>
						</Col>
					</Row>
				</div>
			</div>
		);
	};

	//Here draws a Calendar Component
	const drawCalendar = (props) => {
		return (
			<div className="filter-ctn special-container appear">
				<div className="container special-container">
					<Row className="filter-double-ctn">
						<Col style={paddings}>
							<span>{labels ? labels[0] : ''}</span>
							<Datetime
								closeOnSelect={true}
								onChange={(e) => {
									setCalendar(e);
								}}
								inputProps={{ readOnly: true, placeholder: 'dd/mm/yy hh:mm:ss' }}
							/>
						</Col>
					</Row>
				</div>
			</div>
		);
	};

	//Here draws a select component
	const drawSelect = () => {
		const changeSelect = (opt) => {
			setSelect(opt.target.value);
		};
		return (
			<div className="filter-ctn special-container appear">
				<div className="container">
					<Row className="filter-double-ctn">
						<Col style={paddings}>
							<div>
								<span>{props.labels ? props.labels[0] : ''}</span>

								<Form.Control
									as="select"
									className=" customText-select"
									name="color"
									id="select"
									value={select}
									onChange={changeSelect}
								>
									{options.map((option, index) => {
										return (
											<option key={index} value={option}>
												{option}
											</option>
										);
									})}
								</Form.Control>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		);
	};

	const drawDefault = () => {
		return <div className="filter-ctn " />;
	};

	return props.componentType === 'inputText'
		? drawInput({
				sendEvent: () => {
					emitEvent(createBody('inputText', input));
				}
			})
		: props.componentType === 'select'
			? drawSelect()
			: props.componentType === 'calendar'
				? drawCalendar()
				: props.componentType === 'rangeDate' ? drawRangeDates() : drawDefault();
};

export default FilterComponent;

import React, { useState, useEffect, useRef } from 'react';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import './modal-comments.css';
/**
 * 
 * @param {function} onSaveComment function after the user clicks the save icon.
 * @param {function} onDeleteComment function after the user clicks the delete icon.
 * @param {function} onEditComment function after the user click the edit icon.
 * @param {function} onViewComment function after the user click on like icon.
 * @param {function} closeModal		function after the user close modal.
 * @param {array} 	 comments array of comments to show in modal.
 * @param {boolean}  showModalComments boolean to display or not the modal.
 */
const Comment = (props) => {
	const [ editMode, setEditMode ] = useState(false);
	const changesInComment = useRef(null);

	useEffect(() => {}, [ editMode ]);

	const toggleEdit = () => {
		setEditMode(!editMode);
	};

	const saveChanges = () => {
		let newText = changesInComment.current.innerText;
		let propsCopy = { ...props };
		propsCopy.msg = newText;
		props.updateComment(propsCopy);
	};
	const viewComment = () => {
		console.log('View comment');
	};

	const deleteComment = (id) => {
		props.deleteComment(props.id);
	};

	return (
		<div className="comment-ctn-comments">
			<div className="img-ctn-comments">
				<div className="img-img-comments" />
			</div>

			<div className="info-ctn-comments">
				<div className="info-owner-comments">
					<div className="name">{props.userName}</div>
					<div className="counter"> #{props.index}</div>
				</div>
				<div className="date">{props.time}</div>

				<div
					contentEditable={editMode}
					ref={changesInComment}
					className="message"
					suppressContentEditableWarning={true}
				>
					{props.msg}
				</div>

				<div className="footer-ctn">
					{props.readby.length > 0 ? (
						<div className="like-ctn">
							<div className="like" onClick={viewComment} />
							<div className="label">Marked as Viewed</div>
						</div>
					) : (
						<div className="like-ctn">
							<div className="like-gray" onClick={viewComment} />
							<div className="label">Mark as Viewed</div>
						</div>
					)}

					<div className="actions-ctn">
						<div
							className="edit"
							onClick={() => {
								toggleEdit();
								changesInComment.current.focus();
							}}
						/>
						<div
							className="delete"
							onClick={() => {
								props.deleteComment(props.id);
							}}
						/>

						{editMode ? (
							<div
								className="save"
								onClick={() => {
									toggleEdit();
									saveChanges();
								}}
							/>
						) : (
							''
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

const ModalComments = (props) => {
	const [ comments, setComments ] = useState(props.comments);
	const [ newComment, setNewComment ] = useState('');
	const saveComment = () => {
		console.log('El nuevo comentario es...', newComment);
		props.onSaveComment(newComment);
	};
	const pressEnter = (e) => {
		if (e.charCode == 13) {
			saveComment();
		}
		if (e.keyCode == 13) {
			saveComment();
		}
	};
	const deleteComment = (id) => {
		props.onDeleteComment(id);
	};

	const updateComment = (comment) => {
		props.onEditComment(comment);
	};

	return (
		<Modal
			id="modal-comments"
			size="md"
			show={props.showModalComments}
			onHide={() => {
				props.closeModal();
			}}
			dialogClassName="modal-90w"
			aria-labelledby="example-custom-modal-styling-title"
		>
			<Modal.Header closeButton>
				<Modal.Title id="example-custom-modal-styling-title" className="title-modal-comments">
					COMMENTS- Events #{props.index}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className="container  o-padding comments-box-container ">
					<div className="row  o-padding o-margin comments-row-input  ">
						<Col className="comments-col-flex" id="comments-col">
							<div id="form-comments-input" className="form-group comment-col-form">
								<input
									name="comment"
									id="comment-input"
									required
									placeholder="Write a comment"
									value={newComment}
									onChange={(e) => {
										setNewComment(e.target.value);
									}}
									onKeyPress={pressEnter}
								/>
								<div className="arrow" onClick={saveComment} />
							</div>
						</Col>
					</div>
					<div id="comments-scroll" className=" o-padding o-margin comments-row  ">
						{comments.map((comment, index) => {
							return (
								<Comment
									key={'modalComment-' + index}
									id={comment._id}
									readby={comment.readby}
									index={index + 1}
									userName={comment.userName}
									msg={comment.msg}
									time={comment.time}
									updateComment={updateComment}
									deleteComment={deleteComment}
								/>
							);
						})}
					</div>
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default ModalComments;

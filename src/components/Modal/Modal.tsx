import React from 'react';
import './Modal.scss'

const Modal = (props: {content: string, color: string, img: string}) => (
        <div>
            <div className="modal" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="false">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title fs-1" style={{color: props.color}} id="exampleModalLabel">{props.content}</h5>
                            <img src={`../../img/${props.img}`} alt='sticker'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

export default Modal;

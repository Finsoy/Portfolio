import React from 'react';
import './WordCard.scss'
import Button from "../../../../components/Button/Button";

const WordCard = (props: { word: string, translation: string, soundFile: string, img: string }) => (
    <div className="card CategoriesCard" style={{'width': '15rem'}}>
        <div className="card-body categoriesCard-body">
            <div className='card-title__wrappers'>
                <h5 className="card-title">
                    <h6 className="card-subtitle mb-1 mt-1 text-muted">Word: {props.word}</h6>
                    <h6 className="card-subtitle mb-1 mt-1 text-muted">Translation: {props.translation}</h6>
                    <h6 className="card-subtitle mb-1 mt-1 text-muted">Sound File: {props.soundFile}</h6>
                    <img className="card-subtitle mb-2 mt-1 text-muted WordCard-image" src={`../../../../../${props.img}`}></img>
                </h5>
                <span className="title-cross">&times;</span>
            </div>
            <Button color='primary' text='Change'/>
        </div>
    </div>
    )


export default WordCard;

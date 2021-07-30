import React from 'react';
import './CategoriesCard.scss'
import Button from "../../../../components/Button/Button";

const CategoriesCard = (props: {title: string, numberOfWords: number}) => (
        <div className="card CategoriesCard" style={{'width': '15rem'}}>
            <div className="card-body categoriesCard-body">
                <div className='card-title__wrappers'><h5 className="card-title">{props.title}</h5>
                    <span className="title-cross">&times;</span>
                </div>

                <h6 className="card-subtitle mb-4 mt-2 text-muted">WORDS: {props.numberOfWords}</h6>
                <div className='card-body__btn-wrappers'><Button color='primary' text='Add word'/>
                    <Button color='primary' text='Update'/></div>

            </div>
        </div>
    )


export default CategoriesCard;

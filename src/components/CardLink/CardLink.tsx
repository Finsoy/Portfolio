import React from 'react';
import './CardLink.scss'


const CardLink = (props: {title: string, img: string}) => (
            <div className="card">
                <div className="card-img-top card-img">
                    <div className="card-img" style={{backgroundImage: `url('../../../../../${props.img}')`}}/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                </div>
            </div>
        )

export default CardLink;

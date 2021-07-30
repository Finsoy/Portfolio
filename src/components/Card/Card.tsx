import React, {useEffect} from 'react';
import './Card.scss'
import ICard from '../shared/Interface/ICard';
import RotateIcon from "./RotateIcon/RotateIcon";
import {store} from "../../redux/store";


export class Card extends React.Component<ICard, { isFlipped: boolean, isGame: boolean, isAnswered: boolean, }> {
    constructor(props: ICard) {
        super(props);
        this.state = {
            isFlipped: false,
            isGame: false,
            isAnswered: false,
        };
        this.handleRotateClick = this.handleRotateClick.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.changeCardView = this.changeCardView.bind(this)

        window.addEventListener('click', () => {
            this.changeCardView();
        })
    }

    handleRotateClick(event: React.MouseEvent<HTMLDivElement>): void {
        this.setState({isFlipped: !this.state.isFlipped})
        event.stopPropagation()
    }

    handleClick(): void {
        const audio = new Audio(`../../../${this.props.audioSrc}`)
        audio.play()
    }

    changeCardView(): void {
        if (this.state.isGame !== store.getState().game.isGame) {
            this.setState({isGame: store.getState().game.isGame})
        }
    }

    toggleClass(): void {
        this.setState({isAnswered: !this.state.isAnswered});
    }

    render(): JSX.Element {

        const statusFlipped = this.state.isFlipped;

        let element;
        if (this.state.isAnswered) {
            return (<div className="card active">
                    <div className="card-img-top card-img active">
                        <div className="card__front"
                             style={{backgroundImage: `url('../../../${this.props.image}')`}}/>
                    </div>
                </div>
            )
        }

        if (this.state.isGame) {
            return (<div className="card active" onClick={() => {
                    const checkStateAnswered = this.props.cardHandler?.();
                    if (checkStateAnswered) {
                        this.toggleClass();
                    }
                }}>
                    <div className={this.state.isAnswered ? "card-img-top card-img active" : "card-img-top card-img"}>
                        <div className="card__front"
                             style={{backgroundImage: `url('../../../${this.props.image}')`}}/>
                    </div>
                </div>
            )
        }

        if (statusFlipped) {
            element = <div className="card flipped" onMouseLeave={this.handleRotateClick}>
                <div className="card-img-top card-img">
                    <div className="card__front"/>
                    <div className="card__color"/>
                    <div className="card__back"
                         style={{
                             backgroundImage:
                                 `url('../../../${this.props.image}')`
                         }}/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{this.props.translation}</h5>
                </div>
            </div>
        } else {
            element = <div className="card" onClick={this.handleClick}>
                <div className="card-img-top card-img">
                    <div className="card__front"
                         style={{
                             backgroundImage:
                                 `url('../../../${this.props.image}')`
                         }}/>
                    <div className="card__color"/>
                    <div className="card__back"/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{this.props.word}</h5>
                    <RotateIcon handleRotateClick={(e: React.MouseEvent<HTMLDivElement>) => this.handleRotateClick(e)}/>
                </div>
            </div>
        }
        return element;
    };
}


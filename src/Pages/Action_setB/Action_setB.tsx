import '../../components/Main/Main.scss'
import React from 'react'
import { Redirect } from "react-router-dom"
import {Card} from "../../components/Card/Card";
import cards from '../../../public/cards';
import ICard from "../../components/shared/Interface/ICard";
import StartGameBtn from "../../components/StartGameBtn/StartGameBtn";
import {store} from "../../redux/store";
import Modal from "../../components/Modal/Modal";

class Action_setA extends React.Component <{}, { isGame: boolean, isWin: boolean, isGameStart: boolean, redirect: boolean, isSuccess: boolean, isFailure: boolean}> {
    private action_A: ICard[];

    private arrayCards: ICard[];

    private arrayCardsLength = 0;

    private randomInt = 0;

    private succsesCount = 0;

    private failureCount = 0;

    private successAudio = new Audio(`../../../audio/success.mp3`)

    private failureAudio = new Audio(`../../../audio/failure.mp3`)

    private winAudio = this.successAudio;

    private correctStar = `../../../img/star-win.svg`;

    private failureStar = `../../../img/star.svg`;

    private arrayOfStars: Array<JSX.Element> = [] ;

    constructor(props: {}) {
        super(props)

        this.state = {
            isGame: false,
            isWin: false,
            isGameStart: false,
            redirect: false,
            isSuccess: false,
            isFailure: false,

        }
        this.action_A = cards[2];
        this.arrayCards = [...this.action_A];
        this.arrayCardsLength = this.arrayCards.length
        this.randomInt = this.getRandomInt();

        window.addEventListener('click', () => {
            store.getState().game.isGame ?
                this.setState({isGame: false}) : this.setState({isGame: true})
        })
    }

    getRandomInt(): number {
        this.randomInt = Math.floor(Math.random() * this.arrayCardsLength);
        return this.randomInt;
    }

    cardValidation(word: string): boolean {
        let star: string;
        let starElement
        if (this.state.isGameStart) {
            const correctAudio = new Audio(`../../../audio/correct.mp3`)
            const errorAudio = new Audio(`../../../audio/error.mp3`)
            if ((this.arrayCards)[this.randomInt].word === word) {
                correctAudio.play();
                star = this.correctStar
                starElement = <img src={`${star}`} alt="star"/>
                this.arrayOfStars.push(starElement)
                this.succsesCount += 1;

                this.arrayCards.splice(this.randomInt, 1)
                this.arrayCardsLength = this.arrayCards.length - 1;
                this.randomInt = this.getRandomInt();

                if (this.arrayCardsLength >= 0) {
                    setTimeout(() => {
                        const audio = new Audio(`../../../${this.arrayCards[this.randomInt].audioSrc}`)
                        audio.play()
                    }, 1000)
                } else {
                    this.setState({isWin: true});

                    this.winAudio.play();
                    setTimeout(()=> {
                        this.setState({redirect: true})
                    },3000)
                }
                return true
            }
            errorAudio.play();

            star = this.failureStar
            starElement = <img src={`${star}`} alt="star" key={Date.now()}/>
            this.arrayOfStars.push(starElement)

            this.failureCount += 1;
            this.winAudio = this.failureAudio;

            return false
        }
        return false;
    }

    gameStartChangeState(): void {
        this.setState({isGameStart: true})
    }


    render(): JSX.Element {

        if (this.state.redirect) {
            return <Redirect to='/'/>;
        }

        if (this.state.isWin) {
            return <Modal content = {this.failureCount > 0 ? `Sorry, to many mistakes (${this.failureCount})` : 'Congratulations You Win!!!'}
                          color = {this.failureCount > 0 ? '#dc3545' : '#198754'}
                          img = {this.failureCount > 0 ? 'failure.jpg' : 'success.jpg'}/>
        }

        if (store.getState().game.isGame) {
            return (
                <main className='main-wrapper'>

                    <div className='main'>
                        <Card word={this.action_A[0].word} image={this.action_A[0].image}
                              translation={this.action_A[0].translation}
                              audioSrc={this.action_A[0].audioSrc}
                              cardHandler={() => this.cardValidation(this.action_A[0].word)}/>
                        <Card word={this.action_A[1].word} image={this.action_A[1].image}
                              translation={this.action_A[1].translation}
                              audioSrc={this.action_A[1].audioSrc}
                              cardHandler={() => this.cardValidation(this.action_A[1].word)}/>
                        <Card word={this.action_A[2].word} image={this.action_A[2].image}
                              translation={this.action_A[2].translation}
                              audioSrc={this.action_A[2].audioSrc}
                              cardHandler={() => this.cardValidation(this.action_A[2].word)}/>
                        <Card word={this.action_A[3].word} image={this.action_A[3].image}
                              translation={this.action_A[3].translation}
                              audioSrc={this.action_A[3].audioSrc}
                              cardHandler={() => this.cardValidation(this.action_A[3].word)}/>
                        <Card word={this.action_A[4].word} image={this.action_A[4].image}
                              translation={this.action_A[4].translation}
                              audioSrc={this.action_A[4].audioSrc}
                              cardHandler={() => this.cardValidation(this.action_A[4].word)}/>
                        <Card word={this.action_A[5].word} image={this.action_A[5].image}
                              translation={this.action_A[5].translation}
                              audioSrc={this.action_A[5].audioSrc}
                              cardHandler={() => this.cardValidation(this.action_A[5].word)}/>
                        <Card word={this.action_A[6].word} image={this.action_A[6].image}
                              translation={this.action_A[6].translation}
                              audioSrc={this.action_A[6].audioSrc}
                              cardHandler={() => this.cardValidation(this.action_A[6].word)}/>
                        <Card word={this.action_A[7].word} image={this.action_A[7].image}
                              translation={this.action_A[7].translation}
                              audioSrc={this.action_A[7].audioSrc}
                              cardHandler={() => this.cardValidation(this.action_A[7].word)}/>
                    </div>
                    <div>
                        {this.arrayOfStars}
                    </div>
                    <div onClick={() => {
                        this.gameStartChangeState()
                    }}>
                        <StartGameBtn packOfCards={this.arrayCards} randomInt={this.randomInt}/>
                    </div>
                </main>
            )
        }
        return (
            <main className='main-wrapper'>
                <div className='main'>
                    <Card word={this.action_A[0].word} image={this.action_A[0].image}
                          translation={this.action_A[0].translation}
                          audioSrc={this.action_A[0].audioSrc}
                          cardHandler={() => this.cardValidation(this.action_A[0].word)}/>
                    <Card word={this.action_A[1].word} image={this.action_A[1].image}
                          translation={this.action_A[1].translation}
                          audioSrc={this.action_A[1].audioSrc}
                          cardHandler={() => this.cardValidation(this.action_A[1].word)}/>
                    <Card word={this.action_A[2].word} image={this.action_A[2].image}
                          translation={this.action_A[2].translation}
                          audioSrc={this.action_A[2].audioSrc}
                          cardHandler={() => this.cardValidation(this.action_A[2].word)}/>
                    <Card word={this.action_A[3].word} image={this.action_A[3].image}
                          translation={this.action_A[3].translation}
                          audioSrc={this.action_A[3].audioSrc}
                          cardHandler={() => this.cardValidation(this.action_A[3].word)}/>
                    <Card word={this.action_A[4].word} image={this.action_A[4].image}
                          translation={this.action_A[4].translation}
                          audioSrc={this.action_A[4].audioSrc}
                          cardHandler={() => this.cardValidation(this.action_A[4].word)}/>
                    <Card word={this.action_A[5].word} image={this.action_A[5].image}
                          translation={this.action_A[5].translation}
                          audioSrc={this.action_A[5].audioSrc}
                          cardHandler={() => this.cardValidation(this.action_A[5].word)}/>
                    <Card word={this.action_A[6].word} image={this.action_A[6].image}
                          translation={this.action_A[6].translation}
                          audioSrc={this.action_A[6].audioSrc}
                          cardHandler={() => this.cardValidation(this.action_A[6].word)}/>
                    <Card word={this.action_A[7].word} image={this.action_A[7].image}
                          translation={this.action_A[7].translation}
                          audioSrc={this.action_A[7].audioSrc}
                          cardHandler={() => this.cardValidation(this.action_A[7].word)}/>
                </div>
            </main>
        )
    }

}

export default Action_setA;

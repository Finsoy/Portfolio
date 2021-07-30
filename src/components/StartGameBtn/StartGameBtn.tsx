import React from 'react';
import './StartGameBtn.scss'
import ICard from "../shared/Interface/ICard";


class StartGameBtn extends React.Component <{ packOfCards: ICard[], randomInt: number}, { isActive: boolean}> {
    private randomInt = this.props.randomInt;

    private audio: HTMLAudioElement;

    constructor(props: { packOfCards: ICard[], randomInt: number }) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.handleAudioClick = this.handleAudioClick.bind(this)
        this.state = {
            isActive: false,
        }
        this.audio = new Audio(`../../../${this.props.packOfCards[this.props.randomInt].audioSrc}`)
    }

    handleClick(): void {
        this.setState({isActive: true})
        this.handleAudioClick()
    }

    handleAudioClick(): void {
        this.audio = new Audio(`../../../${this.props.packOfCards[this.props.randomInt].audioSrc}`)
        this.audio.play()
    }


    render(): JSX.Element {
        let element;

        if (this.state.isActive) {
            element =
                <div className="d-flex justify-content-center">
                    <svg onClick={this.handleAudioClick} className='repeat-icon' id="Capa_1"
                         enableBackground="new 0 0 512 512" height="70" viewBox="0 0 512 512" width="70"
                         xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <g>
                                <g>
                                    <g>
                                        <path
                                            d="m378.588 133.412-.593.593c-13.486 13.486-15.666 34.403-5.667 50.644 12.789 20.774 20.171 45.217 20.171 71.351 0 75.266-61.233 136.499-136.499 136.499v82.414c120.903 0 218.913-98.011 218.913-218.913 0-42.269-11.98-81.74-32.729-115.203-13.876-22.379-44.976-26.005-63.596-7.385z"
                                            fill="#92dd7a"/>
                                    </g>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <g>
                                        <path
                                            d="m410.795 410.795c-16.092 16.092-42.183 16.092-58.276 0-16.092-16.093-16.092-42.183 0-58.276l-.031-.059c-24.718 24.725-58.848 40.039-96.488 40.039v82.414c60.451 0 115.18-24.502 154.795-64.118z"
                                            fill="#7ec66a"/>
                                    </g>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <g>
                                        <path
                                            d="m134.005 377.995c13.486-13.486 15.666-34.403 5.667-50.644-12.789-20.774-20.171-45.217-20.171-71.351 0-75.266 61.233-136.499 136.499-136.499v-82.414c-120.903 0-218.913 98.01-218.913 218.913 0 42.269 11.98 81.74 32.729 115.203 13.877 22.38 44.977 26.005 63.597 7.385z"
                                            fill="#92dd7a"/>
                                    </g>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <g>
                                        <path
                                            d="m101.205 101.205c16.092-16.092 42.183-16.092 58.276 0 16.092 16.093 16.092 42.183 0 58.276l.054.037c24.716-24.711 58.837-40.016 96.466-40.016v-82.415c-60.452 0-115.181 24.502-154.796 64.118z"
                                            fill="#7ec66a"/>
                                    </g>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <g>
                                        <path
                                            d="m256.769 4.235 78.783 58.205c11.147 8.236 11.147 24.907 0 33.143l-78.783 58.205c-13.601 10.048-32.847.338-32.847-16.572v-116.409c.001-16.91 19.246-26.62 32.847-16.572z"
                                            fill="#b1ef97"/>
                                    </g>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <g>
                                        <path
                                            d="m335.552 62.274-78.783-58.205c-13.601-10.048-32.847-.338-32.847 16.572v102.669c.001-59.932 72.558-89.902 111.63-61.036z"
                                            fill="#92dd7a"/>
                                    </g>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <g>
                                        <path
                                            d="m255.231 507.765-78.783-58.205c-11.147-8.236-11.147-24.907 0-33.143l78.783-58.205c13.601-10.048 32.847-.338 32.847 16.572v116.409c-.001 16.91-19.246 26.62-32.847 16.572z"
                                            fill="#b1ef97"/>
                                    </g>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <g>
                                        <path
                                            d="m176.448 449.726 78.783 58.205c13.601 10.048 32.847.338 32.847-16.572v-102.669c-.001 59.931-72.558 89.902-111.63 61.036z"
                                            fill="#92dd7a"/>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
        } else {
            element = <div className="d-flex justify-content-center" onClick={this.handleClick}>
                <button type="button" className="btn btn-primary startGame-btn">Start Game</button>
            </div>
        }
        return (
            <div>
                {element}
            </div>
        );
    }

}

export default StartGameBtn;

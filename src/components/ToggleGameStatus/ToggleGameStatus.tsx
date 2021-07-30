import './ToggleGameStatus.scss'
import '../shared/consts.scss'
import React, {Component} from "react";
import ToggleCircle from "./ToggleCircle/ToggleCircle";
import ToggleText from "./ToggleText/ToggleText";
import {store} from "../../redux/store";
import {gameOffAction, gameOnAction} from "../../redux/actions";

class ToggleGameStatus extends React.Component<{}, { isActive: boolean }> {
    constructor(props: object) {
        super(props);
        this.state = {
            isActive: true,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({isActive: !this.state.isActive})
        this.state.isActive ? store.dispatch(gameOnAction()) : store.dispatch(gameOffAction())
    }

    render() {
        const status = this.state.isActive;
        let element;
        if (status) {
            element = <div className="toggle" onClick={this.handleClick}>
                <ToggleCircle status={this.state}/>
                <ToggleText status={this.state}/>
            </div>
        } else {
            element = <div className="toggle active" onClick={this.handleClick}>
                <ToggleCircle status={this.state}/>
                <ToggleText status={this.state}/>
            </div>
        }
        return (
            <div>
                {element}
            </div>
        )

    }
}

export default ToggleGameStatus;

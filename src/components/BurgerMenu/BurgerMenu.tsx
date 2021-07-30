import './BurgerMenu.scss'
import React from "react";
import {NavLink} from 'react-router-dom'

class BurgerMenu extends React.Component<{}, {isChecked: boolean}>{
    constructor(props:{}) {
        super(props);
        this.state = {
            isChecked: false,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(): void {
        this.setState({isChecked: !this.state.isChecked})
    }

    render(): JSX.Element {
            return (
                <div className="hamburger-menu">
                    <input id="menu__toggle" type="checkbox" checked={this.state.isChecked}/>
                    <label className="menu__btn" htmlFor="menu__toggle" onClick={this.handleClick}>
                        <span/>
                    </label>
                    <ul className="menu__box">
                        <li><NavLink onClick={this.handleClick} exact className="menu__item" to="/">Main</NavLink></li>
                        <li><NavLink onClick={this.handleClick} exact className="menu__item" to='/action-A'>Action (set A)</NavLink></li>
                        <li><NavLink onClick={this.handleClick} exact className="menu__item" to='/action-B'>Action (set B)</NavLink></li>
                        <li><NavLink onClick={this.handleClick} exact className="menu__item" to='/animal-A'>Animal (set A)</NavLink></li>
                        <li><NavLink onClick={this.handleClick} exact className="menu__item" to='/animal-B'>Animal (set B)</NavLink></li>
                        <li><NavLink onClick={this.handleClick} exact className="menu__item" to='/clothes'>Clothes</NavLink></li>
                        <li><NavLink onClick={this.handleClick} exact className="menu__item" to='/emotions'>Emotions</NavLink></li>
                        <li><NavLink onClick={this.handleClick} exact className="menu__item" to='/fruits-A'>Fruits (set A)</NavLink></li>
                        <li><NavLink onClick={this.handleClick} exact className="menu__item" to='/fruits-B'>Fruits (set B)</NavLink></li>
                        <li><NavLink onClick={this.handleClick} exact className="menu__item" to='/admin'>Admin page</NavLink></li>
                    </ul>
                </div>
            )
    }

}

export default BurgerMenu;

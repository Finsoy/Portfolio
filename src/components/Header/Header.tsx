import './Header.scss'
import React from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import ToggleGameStatus from "../ToggleGameStatus/ToggleGameStatus";

const Header = (): JSX.Element => (
        <div className="header">
            <BurgerMenu/>
            <ToggleGameStatus/>
        </div>
    )

export default Header;

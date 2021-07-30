import './Main.scss'
import React from 'react'
import {NavLink} from 'react-router-dom'
import CardLink from "../CardLink/CardLink";
import cards from '../../../public/cards'
import ICard from "../shared/Interface/ICard";

const Main = () => {
    const titles: Array<string> = cards[0]
    const actionA: ICard[] = cards[1]
    const actionB: ICard[] = cards[2]
    const animalA: ICard[] = cards[3]
    const animalB: ICard[] = cards[4]
    const clothes: ICard[] = cards[5]
    const emotions: ICard[] = cards[6]
    const fruitsA: ICard[] = cards[7]
    const fruitsB: ICard[] = cards[8]
    return (
        <main className='main'>
            <NavLink className='card-link' to='/action-A'><CardLink title={titles[0]} img={actionA[1].image}/></NavLink>
            <NavLink className='card-link' to='/action-B'><CardLink title={titles[1]} img={actionB[1].image}/></NavLink>
            <NavLink className='card-link' to='/animal-A'><CardLink title={titles[2]} img={animalA[1].image}/></NavLink>
            <NavLink className='card-link' to='/animal-B'><CardLink title={titles[3]} img={animalB[1].image}/></NavLink>
            <NavLink className='card-link' to='/clothes'><CardLink title={titles[4]} img={clothes[1].image}/></NavLink>
            <NavLink className='card-link' to='/emotions'><CardLink title={titles[5]}
                                                                    img={emotions[1].image}/></NavLink>
            <NavLink className='card-link' to='/fruits-A'><CardLink title={titles[6]} img={fruitsA[1].image}/></NavLink>
            <NavLink className='card-link' to='/fruits-B'><CardLink title={titles[7]} img={fruitsB[1].image}/></NavLink>
        </main>
    )
}

export default Main;

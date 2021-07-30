import React from 'react';
import CategoriesCard from "./CategoriesCard/CategoriesCard";
import './AdminCategories.scss'
import cards from '../../../../public/cards'
import ICard from "../../../components/shared/Interface/ICard";

const AdminCategories = () => {
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
            <div className='adminCategories'>
                <CategoriesCard title={titles[0]} numberOfWords={actionA.length}/>
                <CategoriesCard title={titles[1]} numberOfWords={actionB.length}/>
                <CategoriesCard title={titles[2]} numberOfWords={animalA.length}/>
                <CategoriesCard title={titles[3]} numberOfWords={animalB.length}/>
                <CategoriesCard title={titles[4]} numberOfWords={clothes.length}/>
                <CategoriesCard title={titles[5]} numberOfWords={emotions.length}/>
                <CategoriesCard title={titles[6]} numberOfWords={fruitsA.length}/>
                <CategoriesCard title={titles[7]} numberOfWords={fruitsB.length}/>
            </div>
        )

}

export default AdminCategories;

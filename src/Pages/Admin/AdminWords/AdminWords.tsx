import React from 'react';
import './AdminWords.scss'
import cards from '../../../../public/cards'
import ICard from "../../../components/shared/Interface/ICard";
import WordCard from "./WordCard/WordCard";

const AdminWords = () => {
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
        <div>
            <h3 className='mt-2'>Category: {titles[0]}</h3>
            <div className='admin-words'>
                <WordCard word={actionA[0].word} translation={actionA[0].translation} soundFile={actionA[0].audioSrc}
                          img={actionA[0].image}/>
                <WordCard word={actionA[1].word} translation={actionA[1].translation} soundFile={actionA[1].audioSrc}
                          img={actionA[1].image}/>
                <WordCard word={actionA[2].word} translation={actionA[2].translation} soundFile={actionA[2].audioSrc}
                          img={actionA[2].image}/>
                <WordCard word={actionA[3].word} translation={actionA[3].translation} soundFile={actionA[3].audioSrc}
                          img={actionA[3].image}/>
                <WordCard word={actionA[4].word} translation={actionA[4].translation} soundFile={actionA[4].audioSrc}
                          img={actionA[4].image}/>
                <WordCard word={actionA[5].word} translation={actionA[5].translation} soundFile={actionA[5].audioSrc}
                          img={actionA[5].image}/>
                <WordCard word={actionA[6].word} translation={actionA[6].translation} soundFile={actionA[6].audioSrc}
                          img={actionA[6].image}/>
                <WordCard word={actionA[7].word} translation={actionA[7].translation} soundFile={actionA[7].audioSrc}
                          img={actionA[7].image}/>
            </div>
        </div>

    )

}

export default AdminWords;

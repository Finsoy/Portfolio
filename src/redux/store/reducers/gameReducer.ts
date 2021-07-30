import {GAME_OFF, GAME_ON} from "../../types";

const initialState = {
    isGame: false,
}

export const gameReducer = (state = initialState, action: { type: string }) => {
    switch (action.type) {
        case GAME_ON:
            return {...state, isGame: true}
        case GAME_OFF:
            return {...state, isGame: false}

        default:
            return state;
    }
}

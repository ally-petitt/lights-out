import { MAKE_MOVE } from "./actions";

function makeMoveReducer(state=[], action) {
    switch(action.type) {
        case MAKE_MOVE:
            return action.location
        
        default:
            return state;
    }
}

export default makeMoveReducer
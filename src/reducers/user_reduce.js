/* eslint-disable import/no-anonymous-default-export */
const INITIAL_STATE = {

    users:[]

}

export default (state = INITIAL_STATE,action) =>{
    switch (action.type) {
        case 'get_users':
            
            return { ...state, users:action.payload}
    
        default: return state;
    }
}
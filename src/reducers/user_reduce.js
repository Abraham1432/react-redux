/* eslint-disable import/no-anonymous-default-export */
const INITIAL_STATE = {

    users:[],
    loading:false,
    error:""

}

export default (state = INITIAL_STATE,action) =>{
    switch (action.type) {
        case 'get_users':
            
            return { ...state, users:action.payload,loading:false};
        case 'loading':
        
            return { ...state, loading:true}

        case 'error':
    
            return { ...state,error:action.payload,loading:false}

        default: return state;
    }
}
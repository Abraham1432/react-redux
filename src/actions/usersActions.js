import axios  from "axios";

export const get_users = () => async(dispatch) => {

    dispatch({
        type:"loading"
    })

    try{

      const url = "https://jsonplaceholder.typicode.com/usersdda";
      const api =  await axios.get(url)
    
      dispatch({
          type:'get_users',
          payload:api.data
      })

    } catch(error){

        dispatch({
            type:'error',
            payload:error.message
        })

    }


}
import axios  from "axios";

export const get_users = () => async(dispatch) => {

    dispatch({
        type:"loading"
    })

    try{
     //const url = "https://www.superheroapi.com/api.php/10158053293211733/search/ironman";
      const url = "https://jsonplaceholder.typicode.com/users";
      const api =  await axios.get(url)
    
      dispatch({
          type:'get_users',
          payload:api.data
      })

    } catch(error){

        console.log(error);

        dispatch({
            type:'error',
            payload:error.message
        })

    }


}
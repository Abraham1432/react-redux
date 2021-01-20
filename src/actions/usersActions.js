import axios  from "axios";

export const get_users = () => async(dispatch) => {

      // const url = "https:\\superheroapi.com/api/10158053293211733";
    const url = "https://jsonplaceholder.typicode.com/users";
    const api =  await axios.get(url)

    dispatch({
        type:'get_users',
        payload:api.data
    })

}
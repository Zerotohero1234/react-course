import axios from 'axios';
import { useState } from 'react';
import {css} from '@emotion/css';


const exampleJoke = {"categories":["money"],"created_at":"2020-01-05 13:42:25.628594","icon_url":"https://assets.chucknorris.host/img/avatar/chuck-norris.png","id":"EXq1Zi3pTPeLWJvidak70w","updated_at":"2020-05-22 06:16:41.133769","url":"https://api.chucknorris.io/jokes/EXq1Zi3pTPeLWJvidak70w","value":"Chuck Norris loans money to the World Bank."}

const AppApi = () =>{

    const [joke,setJoke] = useState(undefined)

    const onButtonClick = async () =>{
        console.log("Call api");
        const joke = await axios.get("https://api.chucknorris.io/jokes/random")
        setJoke(joke.data);
        // joke.then((response)=>{
        //     console.log(response.data);
        //     setJoke(response.data)
        // })
    }
    return(
        <div className={css`
            display:flex;
            flex-direction:column;
            max-width:200px;
        `}>
            <img src={joke?.icon_url} alt="chuck-norris-picture"/>
            {Boolean(joke)? joke.value : "No Joke"  }
            <button onClick={onButtonClick} className={css`
            margin-top:16px;
            `}
            >Call Api</button>
        </div>
    )
}

export default AppApi;
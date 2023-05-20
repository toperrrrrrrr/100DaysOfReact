import React from "react";
import {useEffect} from "react";

//76ddda82

 const API_Key = 'http://www.omdbapi.com/?apikey=76ddda82'; 

const App = () => {

    const searchitems = async (title) => {
        const response = await fetch(`${API_Key}&s=${title}`);
                const data = await response.json();
                console.log(data);
                return data;

                console.log(data.Search);
    }

    useEffect   (   ()  => {   searchitems('spiderman')      }, []);

    return (
            <div>
                <h1>Hello World</h1>
            </div>
        );

}


export default App;
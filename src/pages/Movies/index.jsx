import React, { useEffect } from "react";
import axios from "axios";

const Movies = () => {
    
    const options = {
        method: 'GET',
        url: 'https://hummingbirdv1.p.rapidapi.com/anime/steins-gate',
        headers: {
          'X-RapidAPI-Key': '8ec3de4a14msh0f499f9f91c12b6p196e1ejsn90a4731b814e',
          'X-RapidAPI-Host': 'hummingbirdv1.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });

    return (
        <>
        <h1>THIS IS MOVIES PAGE</h1>
        </>
    )
}

export default Movies;
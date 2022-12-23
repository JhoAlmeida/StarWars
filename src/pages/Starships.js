import React, { useState, useLayoutEffect } from 'react'
import axios from 'axios'
export default function Starships() {
    
    const [Starships, setStarships] = useState([])

    useLayoutEffect(() => {
        axios.get("https://swapi.dev/api/starships/")
            .then((retorno) => setStarships(retorno.data.results))
            .catch((e) => alert(e))

    }, [])
  
    return (
    <>Starships
    <div>
    <h1>Starships</h1>
    {
        Starships.map((item, key) =>
            <div> {item.name} </div>
    )
    }
    </div>
    
    </>
  )
}


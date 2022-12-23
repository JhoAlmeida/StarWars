import React, { useState, useLayoutEffect } from 'react'
import axios from 'axios'
export default function Pessoas() {
    
    const [Pessoas, setPessoas] = useState([])

    useLayoutEffect(() => {
        axios.get("https://swapi.dev/api/people/")
            .then((retorno) => setPessoas(retorno.data.results))
            .catch((e) => alert(e))

    }, [])
  
    return (
    <>Pessoas
    <div>
    <h1>Pessoas</h1>
    {
        Pessoas.map((item, key) =>
            <div> {item.name} </div>
    )
    }
    </div>
    
    </>
  )
}


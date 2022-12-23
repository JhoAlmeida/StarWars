import React, { useState, useLayoutEffect } from 'react'
import axios from 'axios'
export default function Filmes() {
    
    const [Filmes, setFilmes] = useState([])

    useLayoutEffect(() => {
        axios.get("https://swapi.dev/api/films/")
            .then((retorno) => setFilmes(retorno.data.results))
            .catch((e) => alert(e))

    }, [])
  
    return (
    <>Filmes
    <div>
    <h1>FILMES</h1>
    {
        Filmes.map((item, key) =>
            <div> {item.title} </div>
    )
    }
    </div>
    
    </>
  )
}



    
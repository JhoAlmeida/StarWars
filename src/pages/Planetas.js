import React, { useState, useLayoutEffect } from 'react'
import axios from 'axios'
export default function Planetas() {
    
    const [Planetas, setPlanetas] = useState([])

    useLayoutEffect(() => {
        axios.get("https://swapi.dev/api/planets/")
            .then((retorno) => setPlanetas(retorno.data.results))
            .catch((e) => alert(e))

    }, [])
  
    return (
    <>Planetas
    <div>
    <h1>Planetas</h1>
    {
        Planetas.map((item, key) =>
            <div> {item.name} </div>
    )
    }
    </div>
    
    </>
  )
}


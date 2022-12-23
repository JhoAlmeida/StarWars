import React, { useState, useLayoutEffect } from 'react'
import axios from 'axios'
export default function Especies() {
    
    const [Especies, setEspecies] = useState([])

    useLayoutEffect(() => {
        axios.get("https://swapi.dev/api/especies/")
            .then((retorno) => setEspecies(retorno.data.results))
            .catch((e) => alert(e))

    }, [])
  
    return (
    <>Especies
    <div>
    <h1>Especies</h1>
    {
        Especies.map((item, key) =>
            <div> {item.title} </div>
    )
    }
    </div>
    
    </>
  )
}


import React from 'react'
import ParteCima from "../../Assets/virada_direita.png"
import ParteBaixo from "../../Assets/virada_esquerda.png"
import  {useEffect, useState} from 'react'
import {api} from "../../../src/Services/api.js"
const Base = () => {

    const [pokemon, setPokemon] = useState ([])

    useEffect(() => {
       async function listaPokemon() {
        try{
            const response = await api.get("pokemon")
            setPokemon(response.data.results)
           
        }catch(e){
            console.log(e.error)
        }
       }
       listaPokemon()
    })


    return(
        <>
        <div className="cima">
        <img src={ParteCima} alt="a"/>
        {pokemon.map((poke)=>{
            return (
                <div key={poke.name}>
                   <h1> {poke.name}</h1>
                   <img src={poke.url}/>
                </div>
            )
        })}
        </div>

        <div className="baixo">
        <img src={ParteBaixo} alt="a"/>
        </div>
        </>
    )

}

export default Base
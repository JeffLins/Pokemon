import React from 'react'
import ParteCima from "../../Assets/virada_direita.png"
import ParteBaixo from "../../Assets/virada_esquerda.png"
import  {useEffect, useState} from 'react'
import {api} from "../../../src/Services/api.js"
import "../Pokebase/Pokeone.css"

const Base = () => {
    //Renderiza por id a imagem do pokemon
    const [pokemon, setPokemon] = useState ([])

    const pokeId = (url) =>{
        let idString = url.replace("https://pokeapi.co/api/v2/pokemon/", '').replace('/', '')

    if(idString.length === 1){
        idString = '00' + idString
    }else if(idString.length === 2){
        idString = '0' + idString
    }

    return idString
     }

    useEffect(() => {
       async function listaPokemon() {
        try{
            const response = await api.get("pokemon")
            // const data = response.data.pokemon_entries
            // const idpokemon = data.map(poke => poke.entry_number)
            setPokemon(response.data.results)
           console.log(pokeId("https://pokeapi.co/api/v2/pokemon/1/"))
        }catch(e){
            console.log(e.error)
        }
       }
       listaPokemon()
    },[])

    const Retorna = () =>{
        
    }





    return(
        <>
        <div className="cima">
        {/* <img src={ParteCima} alt="a"/> */}
        {pokemon.map((poke)=>{
            return (
                <div className="fotos"
                key={poke.name}>
                  <h1>
                    {poke.name}
                  </h1>
                   {/* <img src= {`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${ajustaId(poke)}.png`} /> */}
                </div>
            )
        })}
        </div>

        <div className="baixo">
        {/* <img src={ParteBaixo} alt="a"/> */}
        </div>
        </>
    )

}

export default Base
import React from 'react'
import ParteCima from "../../Assets/virada_direita.png"
import ParteBaixo from "../../Assets/virada_esquerda.png"
import Pokeone from "./Pokeone.css"


const Base = () => {

    return(
        <>
        <div className="cima">
        <img src={ParteCima} alt="a"/>
        </div>

        <div className="baixo">
        <img src={ParteBaixo} alt="a"/>
        </div>
        </>
    )

}

export default Base
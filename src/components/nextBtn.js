import React, { useState } from 'react'
import movies from '../movie.json'
import lock from "../icons8-next-64.png"

const NextBtn = (props) => {

    console.log(props.lastIndex);
    return (
        <>
            {props.lastIndex ? "" :
                <div className='lock-div'>
                    <img src={lock} style={{ cursor: "pointer", width: "20px", height: "20px" }} onClick={props.onClick} />
                </div>
            }
        </>
    )
}

export default NextBtn
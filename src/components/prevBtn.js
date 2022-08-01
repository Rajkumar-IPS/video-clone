import React, { useState } from 'react'
import lock from "../icons8-previous-50.png"

const PrevBtn = ( props ) => {

    return (
        <>
            { props.firstIndex ? "" :
                <div className='lock-div'>
                    <img src={ lock } style={ { cursor: "pointer", width: "23px", height: "23px" } } onClick={ props.onClick } data-bs-toggle="tooltip" data-bs-placement="top" title="play previous video" />
                </div>
            }
        </>
    )
}

export default PrevBtn
import React, { useState } from 'react'
import lock from "../icons8-previous-50.png"

const PrevBtn = () => {

    return (
        <>
            <div className='lock-div'>
                <img src={lock} style={{ cursor: "pointer", width: "23px", height: "23px" }} />
            </div>
        </>
    )
}

export default PrevBtn
import React, { useState } from 'react'
import lock from "../icons8-next-64.png"

const NextBtn = () => {

    return (
        <>
            <div className='lock-div'>
                <img src={lock} style={{ cursor: "pointer", width: "20px", height: "20px" }} />
            </div>
        </>
    )
}

export default NextBtn
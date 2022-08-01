import React, { useState } from 'react'
import movies from '../movie.json'
import lock from "../icons8-gear-90.png"

const Setting = (props) => {

    return (
        <>
            {/* <div className="dropdown">
                <div className='lock-div'>
                    
                </div>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div> */}
            <div class="dropdown align-self-center">
                <a class="" href="#" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={lock} style={{ cursor: "pointer", width: "25px", height: "25px" }} />
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a class="dropdown-item" href="#">720</a></li>
                    <li><a class="dropdown-item" href="#">480</a></li>
                    <li><a class="dropdown-item" href="#">360</a></li>
                </ul>
            </div>
        </>
    )
}

export default Setting
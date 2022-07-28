import React, { useState } from 'react'
import lock from "../icons8-lock-90.png"
import unlock from "../icons8-unlock-30.png"

const LockIcon = (props) => {
    const [lockStatus, setLockStatus] = useState(true)

    return (
        <>
            {props.lockStatus == true ?

                <img src={lock} style={{ cursor: "pointer", width: "25px", height: "25px" }} onClick={props.lockScreenFun} />
                : <img src={unlock} style={{ cursor: "pointer", width: "25px", height: "25px" }} onClick={props.lockScreenFun} />}
        </>
    )
}

export default LockIcon
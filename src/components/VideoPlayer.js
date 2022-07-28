import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Player, ControlBar, ReplayControl, ForwardControl, BigPlayButton } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";


const VideoPlayer = () => {
    const location = useLocation();
    const [lockStatus, setLockStatus] = useState(true)

    return (

        <>

            <div>{location.state.src}</div>
            <div>{location.state.currentTime}</div>


            <div className='d-flex justify-content-center'>
                <Player
                    fluid={false}
                    poster="/assets/poster.png"
                    src={location.state.src}
                    preload='none'
                    // ref={ player => {
                    //     setPlayer( player )
                    // } }
                    className="hoverrrr"
                    width={900}
                    height={600}

                >
                    <BigPlayButton position="center" />
                    {
                        lockStatus == true ?
                            <ControlBar autoHide={false} autoHideTime={3000}>
                                <p id='lock' style={{ fontSize: "14px" }} onClick={() => setLockStatus(false)} >lock</p>
                                <ReplayControl seconds={10} order={2.1} />
                                <ForwardControl seconds={10} order={2.2} />

                            </ControlBar> :
                            <ControlBar disableDefaultControls={true} >
                                <p id='lock' style={{ fontSize: "14px" }} onClick={() => setLockStatus(true)} >unlock</p>

                            </ControlBar>
                    }








                </Player>
            </div>
        </>
    )
}

export default VideoPlayer
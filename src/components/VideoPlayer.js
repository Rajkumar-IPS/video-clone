import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Player, ControlBar, ReplayControl, ForwardControl, BigPlayButton, ProgressControl, VolumeMenuButton } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";
import LockIcon from './lockIcon';


const VideoPlayer = () => {
    const location = useLocation();
    const [lockStatus, setLockStatus] = useState(true)


    const lockScreenFun = () => {
        lockStatus == true ?
            setLockStatus(false) :
            setLockStatus(true)
    }

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
                            <ControlBar autoHide={false} autoHideTime={3000} disableDefaultControls>
                                {/* <p id='lock' style={{ fontSize: "14px" }} onClick={() => setLockStatus(false)} >lock</p> */}
                                <LockIcon lockScreenFun={lockScreenFun} lockStatus={lockStatus} />
                                <ReplayControl seconds={10} order={2.1} />
                                <ForwardControl seconds={10} order={2.2} />
                                <VolumeMenuButton order={1} />
                                < ProgressControl width={1} />


                            </ControlBar> :
                            <ControlBar disableDefaultControls={true} >
                                {/* <p id='lock' style={{ fontSize: "14px" }} onClick={() => setLockStatus(true)} >unlock</p> */}
                                <LockIcon lockScreenFun={lockScreenFun} />

                            </ControlBar>
                    }








                </Player>
            </div>
        </>
    )
}

export default VideoPlayer
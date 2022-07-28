import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Player, ControlBar, ReplayControl, ForwardControl, BigPlayButton, ProgressControl, VolumeMenuButton, PlayToggle, FullscreenToggle } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";
import LockIcon from './lockIcon';


const VideoPlayer = () => {
    const location = useLocation();
    const [lockStatus, setLockStatus] = useState(true)
    const [player, setPlayer] = useState(true)
    const [currentTime, setCurrentTime] = useState()



    const lockScreenFun = () => {
        lockStatus == true ?
            setLockStatus(false) :
            setLockStatus(true)
    }

    const leftDoubleClick = () => {
        console.log("left");
        if (lockStatus == true) {
            player.replay(10)
        }
    }

    const rightDoubleClick = () => {
        console.log("right");
        if (lockStatus == true) {
            player.forward(10)
        }

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
                    className="hoverrrr"
                    width={900}
                    height={600}
                    ref={player => {
                        setPlayer(player)
                    }}
                    startTime={location.state.currentTime}
                    
                    autoPlay={true}


                >
                    <div className='d-flex' style={{ justifyContent: "space-between", height: "92%" }} >
                        <div className='' style={{ zIndex: 999, cursor: "pointer", width: "25%" }} onDoubleClick={leftDoubleClick}></div>
                        <div className='' style={{ zIndex: 999, cursor: "pointer", width: "25%" }} onClick={rightDoubleClick}></div>
                    </div>
                    <BigPlayButton position="center" />
                    {
                        lockStatus == true ?
                            <ControlBar autoHide={true} autoHideTime={3000} disableDefaultControls>
                                {/* <p id='lock' style={{ fontSize: "14px" }} onClick={() => setLockStatus(false)} >lock</p> */}
                                <LockIcon lockScreenFun={lockScreenFun} lockStatus={lockStatus} />

                                <PlayToggle order={1} />
                                <ReplayControl seconds={10} order={2.1} />
                                <ForwardControl seconds={10} order={2.2} />
                                <VolumeMenuButton order={1} vertical={true} />
                                <ProgressControl width={1} />
                                <FullscreenToggle className="ms-auto" order={3.1} />

                            </ControlBar> :
                            <ControlBar disableDefaultControls={true} >
                                {/* <p id='lock' style={{ fontSize: "14px" }} onClick={() => setLockStatus(true)} >unlock</p> */}
                                <LockIcon lockScreenFun={lockScreenFun} />

                            </ControlBar>
                    }

                </Player >
            </div >
        </>
    )
}

export default VideoPlayer
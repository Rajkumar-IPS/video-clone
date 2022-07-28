import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import {
    Player, ControlBar, ReplayControl, ForwardControl,
    BigPlayButton, ProgressControl, VolumeMenuButton, PlayToggle, FullscreenToggle, PlaybackRateMenuButton, CurrentTimeDisplay, TimeDivider
} from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";
import LockIcon from './lockIcon';
import forward from '../icons8-forward-10-60.png';
import backward from '../icons8-replay-10-60.png';


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

    const playRate = () => {
        // console.log(player.duration());
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
                    <div className='d-flex' style={{ justifyContent: "space-between", height: "92%" }} id="hideMe">
                        <div className='' style={{ zIndex: 999, cursor: "pointer", width: "25%", display: "flex", justifyContent: "center", alignItems: "center" }} >
                            <img src={backward} onDoubleClick={leftDoubleClick} style={{ width: "60px" }} />
                        </div >
                        <div className='' style={{ zIndex: 999, cursor: "pointer", width: "25%", display: "flex", justifyContent: "center", alignItems: "center" }} onClick={rightDoubleClick}>
                            <img src={forward} onDoubleClick={leftDoubleClick} style={{ width: "60px" }} />

                        </div>
                    </div>
                    <BigPlayButton position="center" />
                    {
                        lockStatus == true ?
                            <ControlBar autoHide={true} autoHideTime={3000} disableDefaultControls>
                                <LockIcon lockScreenFun={lockScreenFun} lockStatus={lockStatus} />

                                <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} />
                                <PlayToggle order={1} />
                                <ReplayControl seconds={10} order={2.1} />
                                <ForwardControl seconds={10} order={2.2} />
                                <CurrentTimeDisplay order={2} />
                                <TimeDivider order={2} />
                                <VolumeMenuButton order={1} vertical={true} />
                                <ProgressControl width={1} />
                                <FullscreenToggle className="ms-auto" order={3.1} />

                            </ControlBar> :
                            <ControlBar disableDefaultControls={true} >
                                <LockIcon lockScreenFun={lockScreenFun} />

                            </ControlBar>
                    }

                </Player >
            </div >
        </>
    )
}

export default VideoPlayer
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import {
    Player, ControlBar, ReplayControl, ForwardControl, BigPlayButton, ProgressControl, VolumeMenuButton, PlayToggle, FullscreenToggle, CurrentTimeDisplay,
    TimeDivider, DurationDisplay, RemainingTimeDisplay, PlaybackRateMenuButton
} from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";
import LockIcon from './lockIcon';
import forward from '../icons8-forward-10-60.png';
import backward from '../icons8-replay-10-60.png';
import playIcon from '../icons8-play-button-circled-90.png';
import pauseIcon from '../icons8-pause-90.png';
import movies from '../movie.json'
import $ from "jquery"
import NextBtn from './nextBtn';
import PrevBtn from './prevBtn';


const VideoPlayer = () => {
    const location = useLocation();
    const { id, currentTime } = useParams()

    const [lockStatus, setLockStatus] = useState(true)
    const [player, setPlayer] = useState(true)
    const [playVideo, setPlayVideo] = useState(true)
    // const [currentTime, setCurrentTime] = useState()



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
    const playClick = () => {
        player.play();
        setPlayVideo(true)
    }

    const stopClick = () => {
        player.pause();
        setPlayVideo(false)
    }

    const playRate = () => {
        // console.log(player.duration());
    }

    const mouserOver = () => {

    }

    const filterMovies = movies.videos.filter(val => val.id === id)

    return (

        <>

            {
                filterMovies.map(val =>
                    <>
                        <div className='d-flex justify-content-center align-items-center main-section'>
                            <div className='video-player-box' onMouseOver={mouserOver}>
                                <Player
                                    fluid={true}
                                    poster="/assets/poster.png"
                                    src={val.sources}
                                    preload='none'
                                    className="hoverrrr"
                                    // width={900}
                                    // height={600}
                                    ref={player => {
                                        setPlayer(player)
                                    }}
                                    startTime={currentTime}

                                    autoPlay={true}
                                    muted={true}

                                >

                                    <div className='d-flex hideDiv' style={{ justifyContent: "space-between", height: "100%", width: "100%", position: "absolute", top: 0, left: 0 }}>
                                        {lockStatus == true ?
                                            <>
                                                <div className='' style={{ zIndex: 999, cursor: "pointer", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} id="hideMe" onDoubleClick={leftDoubleClick}>
                                                    <img src={backward} onDoubleClick={leftDoubleClick} style={{ width: "60px" }} />
                                                </div >
                                                {playVideo == false ?
                                                    (
                                                        <div className='' style={{ zIndex: 999, cursor: "pointer", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} id="hideMe" onClick={playClick}>
                                                            <img src={playIcon} onClick={playClick} style={{ width: "60px" }} />
                                                        </div>) :
                                                    (<div className='' style={{ zIndex: 999, cursor: "pointer", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} id="hideMe" onClick={stopClick}>
                                                        <img src={pauseIcon} onClick={stopClick} style={{ width: "60px" }} />
                                                    </div>
                                                    )
                                                }
                                                <div className='' style={{ zIndex: 999, cursor: "pointer", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} id="hideMe" onDoubleClick={rightDoubleClick}>
                                                    <img src={forward} onDoubleClick={rightDoubleClick} style={{ width: "60px" }} />
                                                </div>
                                            </>
                                            : ""
                                        }
                                    </div>
                                    <BigPlayButton className="d-none" />

                                    {
                                        lockStatus == true ?
                                            <ControlBar autoHide={false} autoHideTime={3000} disableDefaultControls>
                                                <LockIcon lockScreenFun={lockScreenFun} lockStatus={lockStatus} />
                                                <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} />
                                                <PrevBtn />
                                                <PlayToggle order={1} />
                                                <NextBtn />

                                                {/* <ReplayControl seconds={10} order={2.1} /> */}
                                                {/* <ForwardControl seconds={10} order={2.2} /> */}
                                                <VolumeMenuButton order={1} vertical={true} />
                                                <ProgressControl />
                                                <RemainingTimeDisplay className="me-3" />
                                                <TimeDivider />
                                                <DurationDisplay className="" />
                                                <FullscreenToggle className="ms-auto" order={3.1} />

                                            </ControlBar> :
                                            <ControlBar disableDefaultControls={true} >
                                                <LockIcon lockScreenFun={lockScreenFun} />

                                            </ControlBar>
                                    }
                                </Player>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default VideoPlayer

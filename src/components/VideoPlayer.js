import React, { useEffect, useState } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom';
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
import home from "../icons8-home-120.png"
import Setting from './setting';



const VideoPlayer = () => {
    const location = useLocation();
    const { id, currentTime } = useParams()

    const [lockStatus, setLockStatus] = useState(true)
    const [player, setPlayer] = useState()
    const [playVideo, setPlayVideo] = useState(true)
    const navigate = useNavigate();
    const [resolutionSrc, setResolutionSrc] = useState()
    const [updateStartData, setUpdateStartData] = useState(false)






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


    const mouserOver = () => {

    }

    const filterMovies = movies.videos.filter(val => val.id === id)

    const lastIdFilter = movies.videos.slice(-1).pop(1)



    const nextVideoBtn = (e) => {
        const filterMoviesEx = movies.videos.filter(val => val.id === id)
        setResolutionSrc(null)

        navigate(`/videoplayer/${parseInt(filterMoviesEx[0].id) + 1}/0/720`)

    }
    const prevVideoBtn = (e) => {
        const filterMoviesEx = movies.videos.filter(val => val.id === id)
        setResolutionSrc(null)

        navigate(`/videoplayer/${parseInt(filterMoviesEx[0].id) - 1}/0/720`)

    }
    const backToHome = () => {
        navigate(`/`)
    }


    var i = null;
    $(".hideMe").hide();



    $("video").on("mousemove", () => {
        clearTimeout(i);
        $(".hideMe").show();

        setTimeout(() => {
            $(".hideMe").hide();
        }, 4000)
    })


    const onChangeResolution = (source) => {

        const filterMoviesExl = movies.videos.filter(val => val.id === id).map((val) => val.resolutions.find((v) => v.qlt == source.target.value)).map((x) => x?.sources)
        const filterMoviesExQlt = movies.videos.filter(val => val.id === id).map((val) => val.resolutions.find((v) => v.qlt == source.target.value)).map((x) => x?.qlt)
        const filterMoviesEx = movies.videos.filter(val => val.id === id)


        console.log(movies.videos.filter(val => val.id === id)[0]);
        setResolutionSrc(source.target.value == 720 ? movies.videos.filter(val => val.id === id)[0].sources : filterMoviesExl[0])


        navigate(`/videoplayer/${filterMoviesEx[0]?.id}/${$('video').get(0).currentTime}/${filterMoviesExQlt[0] == undefined ? 720 : filterMoviesExQlt[0]}`)
    }




    console.log('updateStartData', updateStartData)
    setTimeout((e) => {
        setUpdateStartData(true);
        // window.sessionStorage.setItem("adsStartTime", 30)
    }, 5000)


    return (

        <>
            {
                filterMovies.map(val =>
                    <>
                        <a className='btn' onClick={backToHome}>
                            <img src={home} style={{ cursor: "pointer", width: "40px", height: "40px" }} />
                        </a>
                        <div className='d-flex justify-content-center align-items-center main-section'>
                            <div className='video-player-box' onMouseOver={mouserOver}>
                                <Player
                                    fluid={true}
                                    poster="/assets/poster.png"
                                    src={updateStartData == true ? movies.ads : updateStartData == false ? val.sources : resolutionSrc ? resolutionSrc : val.sources}
                                    preload='none'
                                    className="hoverrrr"
                                    // width={900}
                                    // height={600}
                                    ref={
                                        playerVal => setPlayer(playerVal)
                                    }
                                    startTime={updateStartData == false ? window.sessionStorage.getItem("adsStartTime") : resolutionSrc ? currentTime : currentTime}

                                    autoPlay={true}
                                    muted={true}

                                >
                                    <div className='d-flex hideDiv' style={{ justifyContent: "space-between", height: "100%", width: "100%", position: "absolute", top: 0, left: 0 }}>
                                        {lockStatus == true ?
                                            <>

                                                <div style={{ zIndex: 999, cursor: "pointer", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} className="hideMe" onDoubleClick={leftDoubleClick}>
                                                    <img src={backward} onDoubleClick={leftDoubleClick} style={{ width: "60px" }} />
                                                </div >

                                                {playVideo == false ?
                                                    (
                                                        <div style={{ zIndex: 999, cursor: "pointer", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} className="hideMe" onClick={playClick}>
                                                            <img src={playIcon} onClick={playClick} style={{ width: "60px" }} />


                                                        </div>) :
                                                    (<div style={{ zIndex: 999, cursor: "pointer", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} className="hideMe" onClick={stopClick}>
                                                        <img src={pauseIcon} onClick={stopClick} style={{ width: "60px" }} />

                                                    </div>
                                                    )
                                                }
                                                <div style={{ zIndex: 999, cursor: "pointer", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} className="hideMe" onDoubleClick={rightDoubleClick}>
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

                                                <PrevBtn onClick={prevVideoBtn} firstIndex={movies.videos[0].id == id} />
                                                <PlayToggle order={1} />
                                                <NextBtn onClick={nextVideoBtn} lastIndex={lastIdFilter.id == id} />

                                                {/* <ReplayControl seconds={10} order={2.1} /> */}
                                                {/* <ForwardControl seconds={10} order={2.2} /> */}

                                                <ProgressControl />
                                                <RemainingTimeDisplay className="me-3" />
                                                <TimeDivider />
                                                <DurationDisplay className="" />
                                                <VolumeMenuButton order={2.1} vertical={true} />
                                                <Setting onChangeResolution={onChangeResolution} />

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

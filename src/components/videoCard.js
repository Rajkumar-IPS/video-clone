import React, { useEffect, useState } from 'react'
import videoArray from "../movie.json"
import { Player, ControlBar, ReplayControl, ForwardControl, BigPlayButton, PlayToggle, CurrentTimeDisplay, TimeDivider, FullscreenToggle, ProgressControl } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";
import $ from 'jquery'
import { useNavigate } from 'react-router-dom'
import VideoPlayer from './VideoPlayer';
const VideoCard = () => {
    const navigate = useNavigate();
    const [state, setState] = useState()
    const [player, setPlayer] = useState(true)
    const [lock, setLock] = useState({
        status: true
        , id: ""
    })


    console.log(videoArray);
    const [routerState, setRouterState] = useState({})

    // console.log( 'player', player )
    const mouseEnterFunction = (e) => {

        $(`#${e}`).prop('muted', true).get(0).play()
    }
    const mouseLeaveFunction = (e) => {
        $(`#${e}`).prop('muted', false).get(0).pause()

    }

    const details = (e) => {
        console.log(e.target.src);

        setRouterState({
            currentTime: $(`#${e.target.id}`).get(0).currentTime,
            src: e.target.src

        })

        navigate('/videoplayer/ ', {
            state: {
                currentTime: $(`#${e.target.id}`).get(0).currentTime,
                src: e.target.src
            }
        })
        window.sessionStorage.setItem("status", true)
    }

    return (
        <>
            < div className="container" >
                <div className='row mt-5' >
                    {videoArray.videos.map((val) => {
                        return (

                            <div className='col-lg-4 card-main-hover mt-3' key={val.id} onMouseEnter={(e) => mouseEnterFunction(val.id)} onMouseLeave={e => mouseLeaveFunction(val.id)} onClick={e => details(e)} >
                                <div className="card" style={{ width: "22rem" }} >
                                    <Player
                                        fluid={true}
                                        poster={val.thumb}
                                        src={val.sources}
                                        preload='none'
                                        // ref={ player => {
                                        //     setPlayer( player )
                                        // } }
                                        className="hoverrrr video-card"
                                        videoId={val.id}
                                    >
                                        <BigPlayButton position="center" />
                                        <ControlBar autoHide={true} autoHideTime={3000} disableDefaultControls>
                                            <PlayToggle order={1.1} />
                                            {/* {/ <LoadProgressBars / > /} */}
                                            < ProgressControl order={2.2} />
                                            <FullscreenToggle className="ms-auto" order={3.1} />
                                        </ControlBar>
                                    </Player>
                                </div>
                            </div>

                        )
                    })}
                </div>
            </div >
        </>
    )
}

export default VideoCard

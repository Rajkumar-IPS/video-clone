import React, { useEffect, useState } from 'react'
import videoArray from "../movie.json"
import { Player, ControlBar, ReplayControl, ForwardControl, BigPlayButton } from 'video-react';
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
    }

    return (
        <>
            < div className="container" >
                <div className='row mt-5' >
                    {videoArray.videos.map((val) => {
                        return (

                            <div className='col-lg-4 card-main-hover mt-3' key={val.id} onMouseEnter={(e) => mouseEnterFunction(val.id)} onMouseLeave={e => mouseLeaveFunction(val.id)} >
                                <div className="card" style={{ width: "22rem" }} >
                                    <video className='video-card' src={val.sources} id={val.id} preload='none' onClick={(e) => details(e)} poster={val.sources} />
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

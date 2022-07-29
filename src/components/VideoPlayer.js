import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import {
    Player, ControlBar, ReplayControl, ForwardControl, BigPlayButton, ProgressControl, VolumeMenuButton, PlayToggle, FullscreenToggle, CurrentTimeDisplay,
    TimeDivider, DurationDisplay, RemainingTimeDisplay,
} from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";
import LockIcon from './lockIcon';
import movies from '../movie.json'

const VideoPlayer = () => {
    const location = useLocation();
    const [ lockStatus, setLockStatus ] = useState( true )
    const [ player, setPlayer ] = useState( true )
    // const [ currentTime, setCurrentTime ] = useState()

    const { id, currentTime } = useParams()
    const lockScreenFun = () => {
        lockStatus == true ?
            setLockStatus( false ) :
            setLockStatus( true )
    }

    const leftDoubleClick = () => {
        console.log( "left" );
        if ( lockStatus == true )
        {
            player.replay( 10 )
        }
    }

    const rightDoubleClick = () => {
        console.log( "right" );
        if ( lockStatus == true )
        {
            player.forward( 10 )
        }

    }

    const filterMovies = movies.videos.filter( val => val.id === id )
    console.log( 'filterMovies', filterMovies )


    return (
        <>
            {
                filterMovies.map( val => <>
                    {/* 
                    <div>{ val.sources }</div>
                    <div>{ currentTime }</div> */}


                    <div className='d-flex justify-content-center align-items-center main-section'>
                        <div className='video-player-box'>
                            <Player
                                fluid={ true }
                                poster="/assets/poster.png"
                                src={ val.sources }
                                preload='none'
                                className="hoverrrr"
                                // width={ 900 }
                                // height={ 600 }
                                ref={ player => {
                                    setPlayer( player )
                                } }
                                startTime={ currentTime ? currentTime : 0 }
                                muted={ true }
                                autoPlay={ true }
                                pictureInPicture

                            >
                                <div className='d-flex' style={ { justifyContent: "space-between", height: "92%", width: "100%", position: "absolute", top: 0, left: 0 } } >
                                    <div className='' style={ { zIndex: 999, cursor: "pointer", width: "25%" } } onDoubleClick={ leftDoubleClick }></div>
                                    <div className='' style={ { zIndex: 999, cursor: "pointer", width: "25%" } } onClick={ rightDoubleClick }></div>
                                </div>
                                <BigPlayButton position="center" />
                                {
                                    lockStatus == true ?
                                        <ControlBar autoHide={ false } autoHideTime={ 3000 } disableDefaultControls>
                                            {/* <p id='lock' style={{ fontSize: "14px" }} onClick={() => setLockStatus(false)} >lock</p> */ }
                                            <LockIcon lockScreenFun={ lockScreenFun } lockStatus={ lockStatus } />

                                            <PlayToggle order={ 1 } />
                                            <ReplayControl seconds={ 10 } order={ 2.1 } />
                                            <ForwardControl seconds={ 10 } order={ 2.2 } />
                                            <VolumeMenuButton order={ 1 } vertical={ true } />
                                            <ProgressControl width={ 1 } />
                                            <RemainingTimeDisplay className="me-3" />
                                            <TimeDivider />
                                            <DurationDisplay />
                                            <FullscreenToggle className="ms-auto" order={ 3.1 } />

                                        </ControlBar> :
                                        <ControlBar disableDefaultControls={ true } >
                                            {/* <p id='lock' style={{ fontSize: "14px" }} onClick={() => setLockStatus(true)} >unlock</p> */ }
                                            <LockIcon lockScreenFun={ lockScreenFun } />

                                        </ControlBar>
                                }

                            </Player >
                        </div>
                    </div >
                </> )
            }
        </>
    )

}

export default VideoPlayer
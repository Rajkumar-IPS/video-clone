import React, { useEffect, useState } from 'react'
import videoArray from "../movie.json"
import { Player, ControlBar, ReplayControl, ForwardControl, BigPlayButton, PlayToggle, CurrentTimeDisplay, TimeDivider, FullscreenToggle, ProgressControl } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";
import $ from 'jquery'
import { useNavigate, useParams } from 'react-router-dom'
import VideoPlayer from './VideoPlayer';
const VideoCard = () => {
    const navigate = useNavigate();
    const [ state, setState ] = useState()
    const [ player, setPlayer ] = useState( true )
    const [ lock, setLock ] = useState( {
        status: true
        , id: ""
    } )



    // console.log(window.sessionStorage.getItem("ads"));


    // console.log( state );
    const [ routerState, setRouterState ] = useState( {} )

    // console.log( 'player', player )
    const mouseEnterFunction = ( e ) => {


        if (
            $( `#${ e }` ).prop( 'muted', true ).get( 0 ).play()
        )
        {
            setState( 1 )
        }
    }
    const mouseLeaveFunction = ( e ) => {
        $( `#${ e }` ).prop( 'muted', false ).get( 0 ).pause()
        $( `#${ e }` ).get( 0 ).load()
        // console.log( $( `#${ e }` ) );
    }
    const mouseBlurFunction = ( e ) => {
        $( `#${ e }` ).prop( 'muted', false ).get( 0 ).pause()
        $( `#${ e }` ).get( 0 ).load()
    }

    const details = ( e ) => {
        // console.log( e.target.src );

        // setRouterState( {
        //     currentTime: $( `#${ e.target.id }` ).get( 0 ).currentTime,
        //     src: e.target.src
        // } )
        window.sessionStorage.setItem( "item_key", false )
        window.sessionStorage.removeItem( "adsStartTime" )
        navigate( `/videoplayer/${ e.target.id }/${ $( `#${ e.target.id }` ).get( 0 ).currentTime }/720  ` )

    }

    return (
        <>
            < div className="container" >
                <div className='row mt-5' >
                    { videoArray.videos.map( ( val ) => {
                        return (

                            <div className='col-lg-4 col-md-6 col-sm-6 col-12 card-main-hover mt-3' key={ val.id }
                                onBlur={ e => mouseBlurFunction( val.id ) }
                                onMouseEnter={ ( e ) => mouseEnterFunction( val.id ) } onMouseLeave={ e => mouseLeaveFunction( val.id ) } onClick={ e => details( e ) } >
                                <div className="card video-card" style={ { width: "22rem", height: "300px" } } >
                                    <Player
                                        fluid={ true }
                                        poster={ val.thumb }
                                        src={ val.sources }
                                        preload='none'
                                        // ref={ player => {
                                        //     setPlayer( player )
                                        // } }
                                        className="hoverrrr "
                                        videoId={ val.id }
                                    >
                                        <BigPlayButton className="d-none" />
                                        <ControlBar autoHide={ true } autoHideTime={ 3000 } disableDefaultControls>
                                            <PlayToggle order={ 1.1 } />
                                            {/* {/ <LoadProgressBars / > /} */ }
                                            < ProgressControl order={ 2.2 } />
                                            <FullscreenToggle className="ms-auto" order={ 3.1 } />
                                        </ControlBar>
                                    </Player>
                                    <div className='description-section'>
                                        <img src={ val.thumb } className="video-sub-thumbnail" />
                                        <div className='text-start ms-3 d-flex flex-column justify-content-center'>
                                            <p className='video-title mb-1'>{ val.title }</p>
                                            <p className='video-desc mb-0'>{ val.subtitle }</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    } ) }
                </div>
            </div >
        </>
    )
}

export default VideoCard

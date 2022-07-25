import React, { useEffect, useState } from 'react'
import videoArray from "../movie.json"

const VideoCard = () => {

    return (
        <>
            <div className="container">
                <div className='row mt-5' >
                    {videoArray.videos.map((val, index) => {
                        return (
                            <>
                                <div className='col-lg-4 card-main-hover mt-3' key={index} >
                                    <div className="card" style={{ width: "18rem" }} >
                                        <video
                                            src={val.sources}
                                            controls
                                            muted={true}
                                            onMouseEnter={(e) => e.currentTarget.play()}
                                            onMouseLeave={(e) => e.currentTarget.pause()}
                                        />
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div >
        </>
    )
}

export default VideoCard
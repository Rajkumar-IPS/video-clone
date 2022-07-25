import React from 'react'
import videoArray from "../movie.json"

const videoCard = () => {

    console.log('videoArray', videoArray.videos)
    return (
        <>
            <div className="container">
                <div className='row'>
                    {videoArray.videos.map((val) => {
                        return (
                            <>
                                <div className='col-lg-4'>
                                    <div class="card" style={{ width: "18rem" }}>
                                        <video width="" height="240" controls>
                                            <source src={val.sources[0]} type="video/mp4" />
                                            <source src="movie.ogg" type="video/ogg" />
                                            Your browser does not support the video tag.
                                        </video>
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
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

export default videoCard

/* NO OLVIDES CAMBIAR EL REACT ROUTER DOM */
import React from 'react';

export const Details = () => {
    return (
        <div className="container align-items-center h-100">
            <div className="d-flex">
                <img src="https://yt3.googleusercontent.com/ytc/AOPolaT-60EgZMPStubu7XcNrZ9useOeTtyB-_yVsWvsAQ=s900-c-k-c0x00ffffff-no-rj" width="280" height="280" />
                <div className="ms-4 text-center mt-3">
                    <h1>Luke Skywalker</h1>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi</p>
                </div>
            </div>
            <div className="border-top h-10 my-4 border-danger"></div>
            <div className="d-flex justify-content-between text-danger text-center">
                <div>
                    <p>Name</p>
                    <p>Luke Skywalker</p>
                </div>
                <div>
                    <p>Birth Year</p>
                    <p>19BBY</p>
                </div>
                <div>
                    <p>Height</p>
                    <p>172</p>
                </div>
                <div>
                    <p>Skin Color</p>
                    <p>fair</p>
                </div>
                <div>
                    <p>Eye Color</p>
                    <p>Blue</p>
                </div>
            </div>
        </div>
    );
}
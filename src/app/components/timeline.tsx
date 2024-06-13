import React from 'react'

const   Timeline = () => {
    return (
        <ul id="timeline" className="timeline timeline-vertical pt-16 w-11/12 mx-auto">
            <h2 className="mb-12 md:px-32 text-3xl font-extrabold leading-9 text-neutral-100 text-center ">
                TIMELINE
            </h2>
            <li>
                <div className="timeline-start md:text-base text-sm md:mx-8 my-8 timeline-box bg-base-200 px-3 md:px-8">Yogyakarta &nbsp;: 6 Mei - 14 Mei 2024<br/>Jakarta &emsp;&emsp;: 6 Mei - 28 Mei 2024<br />Manado&emsp;&emsp;: 6 Mei - 5 Juni 2024</div>
                <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-end text-sm md:text-base my-8 bg-white text-base-100 px-3 md:px-8 timeline-box">Registrasi Offline</div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-end text-sm md:text-base md:mx-8 my-8 timeline-box bg-base-200 px-3 md:px-8">6 Mei - 25 Juni 2024</div>
                <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-start md:text-base text-sm bg-white text-base-100 px-3 md:px-8 timeline-box">Registrasi Online & Audisi</div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-start md:text-base text-sm my-8 md:mx-8 timeline-box bg-base-200 px-3 md:px-8">Yogyakarta &nbsp;: 18 Mei 2024<br/>Jakarta &emsp;&emsp;: 1 Juni 2024<br />Manado&emsp;&emsp;: 8 Juni 2024</div>
                <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-end text-sm md:text-base bg-white text-base-100 px-3 md:px-8 timeline-box">Audisi Offline (Tahap 1)</div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-end text-sm md:text-base md:mx-8 my-8 timeline-box bg-base-200 px-3 md:px-8">13 Juli 2024</div>
                <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-start md:text-base text-sm bg-white text-base-100 px-3 md:px-8 timeline-box">TOP 10 Indonesia (Tahap 2)</div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-start md:text-base text-sm md:mx-8 my-8 timeline-box bg-base-200 px-3 md:px-8">31 Juli 2024</div>
                <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-end text-sm md:text-base bg-white text-base-100 px-3 md:px-8 timeline-box">TOP Regional & Press Conference (Tahap 3)</div>
                <hr />
            </li>
            {/* <li>
                <hr />
                <div className="timeline-end text-sm md:text-base md:mx-8 my-8 timeline-box bg-base-200 px-3 md:px-8">16-17 Juli 2024</div>
                <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-start md:text-base text-sm bg-white text-base-100 px-3 md:px-8 timeline-box">Top Regional Photo Shooting</div>
                <hr />
            </li> */}
        </ul>
    )
}

export default Timeline
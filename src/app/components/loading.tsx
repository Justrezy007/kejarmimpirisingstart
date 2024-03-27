import React from 'react'

const Loading = () => {
    return (
        <div className="fixed h-screen w-screen bg-black bg-opacity-80 top-0 flex justify-center items-center left-0 z-50">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    )
}

export default Loading
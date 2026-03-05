import React, { useState, useEffect } from 'react'

function Github() {

    const [data, setData] = useState({})

    useEffect(() => {
        fetch("https://api.github.com/users/Pinkuu108")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div className='bg-gray-600 text-white text-3xl p-4'>
            Github Followers: {data.followers}
            <img src={data.avatar_url} alt="Git Picture" width={300} />
        </div>
    )
}

export default Github
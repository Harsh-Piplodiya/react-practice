import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    const data = useLoaderData();

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('url')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])

    return (
        <div className="text-center bg-gray-600 p-4 text-white m-4 text-3xl">Github Followers: {data.followers}
            <img src={data.avatar_url} alt="Git Pic" width={300}/>
        </div>
    )
}

export default Github;

export const githubInfoLoader = async() => {
    const response = await fetch('url');
    return response.json();
}
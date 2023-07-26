import React, {useEffect, useRef, useState} from "react";
import "./App.css";



function App() {
    const [posts, setposts] = useState()
    const inputText = useRef()
    const inputText2 = useRef()
    const sortByRecent = () => {
        // @ts-ignore
        let dataCopy = [...posts];
        dataCopy.sort((a, b) => a.id - b.id);
        // @ts-ignore
        setposts(dataCopy);
    };

    const sortByOldest = () => {
        // @ts-ignore
        let dataCopy = [...posts];
        dataCopy.sort((a, b) => b.id - a.id);
        // @ts-ignore
        setposts(dataCopy);
    };
    // @ts-ignore
    function Map(){
        // @ts-ignore
        return posts && posts.map((result)=>{
            // @ts-ignore
            return (
                <>
                    <input ref={inputText2} defaultValue={result.text}/>
                    <button onClick={async ()=> {
                        // @ts-ignore
                        let text = inputText2.current.value
                        // @ts-ignore
                        let response = await fetch(`http://localhost:3001/api/posts/${result.id}`, {
                            method: "PUT",
                            mode: "cors",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({text: text}),

                        })
                        let fetchedResult = await response.json()
                        console.log(fetchedResult)
                        setposts(fetchedResult)
                    }
                    }>update</button>
                    <button onClick={async ()=>{
                        // @ts-ignore
                        let response = await fetch(`http://localhost:3001/api/posts${result.id}`,{
                            method: "DELETE",
                            mode: "cors",
                        })

                        let fetchedResult = await response.json()
                        console.log(fetchedResult)
                        setposts(fetchedResult)

                    }} >delete</button>
                </>
            )
        })
    }

    //@ts-ignore
    useEffect(() => {
        async function GetAll (){
            // @ts-ignore
            let response = await fetch('http://localhost:3001/api/posts', {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            let fetchedResult = await response.json()
            setposts(fetchedResult)
            console.log(posts)
        }
    }, []);
    return (
        <div className={'main-content'}>
            <label htmlFor={'text'}></label>
            <input ref={inputText} name={'text'} type={"text"}/>
            <button onClick={async ()=>{
                // @ts-ignore
                let text = inputText.current.value
                // @ts-ignore
                let response = await fetch('http://localhost:3001/api/posts',{
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ text: text }),

                })

                let fetchedResult = await response.json()
                console.log(fetchedResult)
                setposts(fetchedResult)

            }}>Send new Post</button>
            <Map></Map>
            <button onClick={sortByOldest}>Sort by oldet</button>
            <button onClick={sortByRecent}>delete</button>
        </div>

    )
}

export default App;

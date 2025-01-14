import { Suspense, useState } from "react";
import { searchTodoAtom } from "../atoms";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";

export const Search = () => {

    const [text, setText] = useState('');

    const title = useRecoilValueLoadable(searchTodoAtom(text)) 

    if(title.state === 'loading'){
        return <div>
            loading...
        </div>
    }
    else if(title.state === 'hasError'){
        return <div>
            An error occured
        </div>
    }

    return <div>
        <br />
        <input id="ipBox" type="text" placeholder="Enter todo title"/>
        <button onClick={ () => {
            const title = document.querySelector('#ipBox').value
            setText(title)
        }}>Search</button>
        <h1>{title.contents.title}</h1>
        <h3>{title.contents.description}</h3>
    </div>
}

import { useRecoilValueLoadable } from "recoil"
import { findAllTodoAtom } from "../atoms"

export const AllTodos = () => {

    const allTodos = useRecoilValueLoadable(findAllTodoAtom)

    if(allTodos.state === 'loading'){
        return <div>
            loading...
        </div>
    }
    else if(allTodos.state === 'hasError'){
        return <div>
            An error occured        
        </div>
    }

    return <div>
        {allTodos.contents.map((todo) => (
            <div key={todo.id}>
                <h1>{todo.title}</h1>
                <h3>{todo.description}</h3>
            </div>
        ))}
    </div>
}
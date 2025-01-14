import { useRecoilValueLoadable } from "recoil"
import { notCompletedTodosAtom } from "../atoms"

export const NotCompletedTodos = () => {

    const notCompletedTodo = useRecoilValueLoadable(notCompletedTodosAtom)

    if(notCompletedTodo.state === 'loading'){
        return <div>
            loading...
        </div>
    }
    else if(notCompletedTodo.state === 'hasError'){
        return <div>
            An error occured
        </div>
    }
    return <div>
        {notCompletedTodo.contents.map((todo) => (
            <div key={todo.id}>
                <h1>{todo.title}</h1>
                <h3>{todo.description}</h3>
            </div>
        ))}
    </div>
}
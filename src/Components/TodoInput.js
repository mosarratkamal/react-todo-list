import {Component} from "react";
import TodoList from "./TodoList";

class TodoInput extends Component{

    render(){
        return(
            <div>
                <h1>I am into changed test TodoInput</h1>
                <TodoList/>
            </div>
        );
    }
}
export default TodoInput;
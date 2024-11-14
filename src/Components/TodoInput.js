import {Component} from "react";
import TodoList from "./TodoList";

class TodoInput extends Component{

    render(){
        return(
            <div>
                <h1>I am into changed TEST TodoInput</h1>
                <TodoList/>
            </div>
        );
    }
}
export default TodoInput;
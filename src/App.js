import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

class App extends Component {

  render(){
    return(
      <div>
        <div className="Container">
          <div className="row">
            <TodoInput/>
           
          </div>         
        </div>       
        
      </div>
    );
  }

}
export default App;

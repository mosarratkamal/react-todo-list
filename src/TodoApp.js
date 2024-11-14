import {useState} from "react";

const TodoApp = ()=>{

    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const addTask = () => {
        if (inputValue !== "") {
            setTasks([...tasks, { text: inputValue, completed: false }]);
            setInputValue("");
        }
    };

    const toggleComplete = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return(
        
        <div>
            <h2>My To-Do List</h2>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={addTask}>Add Task</button>

            <ol>{tasks.map((task, index) => (<li key={index}>
                        <input type="checkbox" checked={task.completed} onChange={() => toggleComplete(index)}/>
                        <span >{task.text}</span>
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}
export default TodoApp;
// -----------------------------
{/* <ul style={{ listStyleType: 'none', padding: 0 }}>{tasks.map((task, index) => (<li key={index}
                        style={{
                            textDecoration: task.completed ? 'line-through' : 'none',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }} >
                        <input type="checkbox" checked={task.completed} onChange={() => toggleComplete(index)}/>
                        <span style={{ marginRight: '10px' }}>{task.text}</span>
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul> */}

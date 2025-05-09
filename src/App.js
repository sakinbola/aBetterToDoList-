import {useState} from 'react';
import './app.css';

// li element
function List({description , id , typeofelement , onDone}) {
  const class_name = typeofelement
  // either tolielement or dolielement
  // if (typeofelement === "to") {
  //   class_name = "tolistelement";
  // }
  // else {
  //   class_name = "donelistlement";
  // }

  return (
    <div id={"task-container-${id}"}> 
      <li className = {class_name} > {description} </li>
      <button onClick = {() => onDone(id,description)} className = "done_button" > toDone Button </button>
    </div>
  );
}

function ListDone ({description,id,typeofelement,onDelete}) {
  const class_name = typeofelement
  // either tolielement or dolielement
  // if (typeofelement === "to") {
  //   class_name = "tolistelement";
  // }
  // else {
  //   class_name = "donelistlement";
  // }

  return (
    <div id={"task-container-done-${id}"}> 
      <li className = {class_name} > {description} </li>
      <button onClick = {() => onDelete(id)} className = "delete_button" > Deletion Button </button>
    </div>
  );
}


// function AddList() {
//   const[inputValue,setInputValue] = useState('');
//   // use state variable to change input value 

//   const InputChnage = (event) => {
//     setInputValue(event.target.value);
//   }
//   List(description, "tolielement")
// }

function App() {
const [tasks,setTasks] = useState([]);
const [newTask, setNewTask] = useState('');
const [done,setdoneTasks] = useState([]);
// const [deletion, setDeletion] = useState('');
const [history, setHistory] =  useState([]);


const addTask = () => {
  if (newTask.trim() !=='') {
    // if text has been written
    const id_var = Date.now();
    const text_var = newTask;

    setTasks([...tasks, {id:id_var,text:text_var,type:"to"}]);
    // so id becomes current date , text becomes the task entered , type becomes to represtning todolsit

    const nextHistory = ([...history, [id_var,text_var]]);
    // create a tuple with id var and text var as identifers for deleteion
    setHistory(nextHistory);
    // update historu

    setNewTask('');
    // resetes newTask

  }
}

const DeleteTask =  (idToDelete) => {
  const updatedDoneTasks = done.filter(done => done.id !== idToDelete);
  setdoneTasks(updatedDoneTasks);
  // idtoDelete would be the id 
  // tasks.filter is way of removal in react creates new array 
  // iterates over each task if its not equal to id then include if its removes 

}

const DoneTask = (idtoMove,description) => {
  setdoneTasks([...done, {id:idtoMove,text:description,type:"do"}]);
  const updatedTasks = tasks.filter(task => task.id !== idtoMove);
  setTasks(updatedTasks);
}


const historyTask = () => {

}

const InputChange = (event) => {
  // evenet when a dom elemnt changes or is clicked event occurs
  setNewTask(event.target.value);
  // event.target is the property of the event referring the to the sepcific dom
  // that trigger ti value is the current value that the user has entered into the input field 

}

  return (
    <div className="todolist">
      <h1> Basic To Do List App</h1>
        <div className = "container"> 
            <div className = "container2"> 
              <button onClick={addTask}> Add Task </button>
              <input type="text" value={newTask} onChange={InputChange}></input>
              <button onClick={historyTask} > History Task </button>
            </div>
            <div className="toElements"> 
              <h2> To Elements </h2>
              <ul>
                {/* map built in js array method , iterates over every item in array 
                creates new arr based on the result of the function your provide  */}
                {/* => arrow functions , key must be provided when using map*/}
                {tasks.map((task) => (
                  <List key={task.id} description={task.text} id={task.id} typeofelement={task.type} onDone={DoneTask}/>
                  // key used by react to identify elements in a list 
                  // so it can efficently update dom 
                  // update task 
                ))}
              </ul>
            </div>
            <div className ="doneElements">
                <h2> Do Elements </h2>
                <ul>
                  {done.map((done) => (
                    <ListDone key={done.id} description = {done.text} id={done.id} typeofelement = {done.type} onDelete={DeleteTask}/>
                  ))}
                </ul>
            </div>
        </div>
    </div>
  );
}

export default App;

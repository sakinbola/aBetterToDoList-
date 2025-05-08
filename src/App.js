
import './app.css';

function App() {
  return (
    <div className="todolist">
      <h1> Basic To Do List App</h1>
        <div className = "container"> 
            <div className="toElements"> 
              <h2> To Elements </h2>
              <ul>
                <li> Example 1 </li>
                <li> Example 2</li>
                <li> Example 3</li>
              </ul>
            </div>
            <div className ="doneElements">
                <h2> Do Elements </h2>
                <ul>
                  <li> Example 1</li>
                  <li> Example 2</li>
                  <li> Example 3</li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default App;

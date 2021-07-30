import './App.css';
import TaskList from './components/TaskList';
import User from './components/User';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {

  const add = () => {
    console.log("adding....");
  };

  const deletes = () => {
    console.log("deleting...");
  };

  return (
    <Provider store={store}>
      <div className="App">
        <User />
        <TaskList />
        <br />
        <button onClick={add}>Add Task</button>{" "}
        <button onClick={deletes}>Delete Task</button>
      </div>
    </Provider>
  );
}

export default App;

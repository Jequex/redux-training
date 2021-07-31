import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import User from './components/User';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {


  return (
    <Provider store={store}>
      <div className="App">
        <User />
        <TaskList />
        <TaskForm />
      </div>
    </Provider>
  );
}

export default App;

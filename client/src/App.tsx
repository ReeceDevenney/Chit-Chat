import './App.css';
import './components/Sidebar'
import Sidebar from './components/Sidebar';
import Chatbox from './components/Chatbox';

function App() {
  return (
    <div className='grid-cols-12 grid'>
    <Sidebar/>
    <Chatbox/>
    </div>
  );
}

export default App;

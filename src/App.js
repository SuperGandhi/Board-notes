import './App.css';
// import Form from './components/Form';
import ListTasks from './components/ListTasks';
// import dogebeta from './images/dogebeta.png'


function App() {
  return (
    <div className="app-works">
      <div classNamew="betadoge-logo-container">
          {/* <img 
            src={dogebeta} 
            className="betadoge-logo"
            alt ="dogebeta"
            /> */}
      </div>
      <div className="works-main-list">
          <h1>My tasks</h1>
          <ListTasks/>
      </div>
    </div>
  );
}

export default App;

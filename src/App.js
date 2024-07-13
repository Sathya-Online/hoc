import logo from './logo.svg';
import './App.css';
import BaseComponent from './BaseComponent';
import SmallComponent from './SmallComponent';
import { withEffect } from './HOC';

function App() {
  const NewBaseComponent = withEffect(BaseComponent);
  const NewSmallComponent = withEffect(SmallComponent);
  return (
    <div className="App">
        <NewBaseComponent value="BaseComponent"/>
        <NewSmallComponent value="SmallComponent"/>
    </div>
  );
}

export default App;

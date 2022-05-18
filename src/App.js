import './App.css';
import Bank from './components/Bank';
import Email from './components/Email';
import End from './components/End';
import Header from './components/Header';
import Info from './components/Info';
import Intro from './components/Intro';
import Invest from './components/Invest';
import Support from './components/Support';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Intro></Intro>
      <Invest></Invest>
      <Bank></Bank>
      <Email></Email>
      <Info></Info>
      <Support></Support>
      <End></End>
    </div>
  );
}

export default App;

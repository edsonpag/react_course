import './App.css';

import Header from './components/Header/Header';
import Tweet from './components/Tweet/Tweet';
import NewTweetButton from './components/NewTweetButton/NewTweetButton';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="app">
      <Header />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <NewTweetButton />
      <Navbar />
    </div>
  );
}

export default App;

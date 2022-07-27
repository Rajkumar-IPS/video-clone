import './App.css';
import VideoCard from './components/videoCard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VideoPlayer from './components/VideoPlayer';
function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={ <VideoCard /> } />
          <Route exact path='/videoplayer/' element={ <VideoPlayer /> } />



        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import Header from './components/header/index';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/index';
import About from './pages/about/index';
import Classes from './pages/classes/index';
import Blog from './pages/blog/index';
import Gallery from './pages/gallery/index';
import Contacts from './pages/contacts/index';
import SignUp from './pages/signUp/index';
function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/classes' element={<Classes/>}/>
    <Route path='/blog' element={<Blog/>}/> 
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/contacts' element={<Contacts/>}/>
    <Route path='/signUp' element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;

import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import CoverPage from "./CoverPage/cover";
import HomePage from "./Home/HomePage";
import AuthorComp from "./Author/AuthorComp";
import MainCharComp from "./MainCharacter/MainCharComp";
import HogwartsComp from "./Hogwarts/HogwartsComp";
import BookDescComp from "./BookDesc/BookDescComp";
import TictactoeComp from "./Tictactoe/TictactoeComp";

function App() {
  return (
    <>
      <Routes basename="/Harry-Potter-React-Frontend">
        <Route exact path="/" element={<CoverPage></CoverPage>} />
        <Route path="/home" element={<HomePage></HomePage>} />
        <Route path="/book/:id" element={<BookDescComp></BookDescComp>} />
        <Route path="/author" element={<AuthorComp></AuthorComp>} />
        <Route path="/mainchar" element={<MainCharComp></MainCharComp>} />
        <Route path="/hogwarts" element={<HogwartsComp></HogwartsComp>} />
        <Route path="/tictactoe" element={<TictactoeComp/>} />
      </Routes>
    </>
  );
}

export default App;

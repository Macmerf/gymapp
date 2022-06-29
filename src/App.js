import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExercisesWindow from "./pages/ExercisesWindow";
import Exsercise from "./pages/Exsercise";
import "./static/styles/App.scss";

function App() {
  return (
    <div className="App">
      <header className="pt-5 pb-4">
        <h1 className="app-title text-center">Тренировка дома</h1>
      </header>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ExercisesWindow />} />
        <Route path="/exercise/:type" element ={<Exsercise />} />
      </Routes>
    </BrowserRouter>
    <footer>
      <h3 className="app-title text-center my-4">
        Здесь ты можешь начать постепенно развивать свое тело без тренажерных залов
      </h3>
    </footer>
    </div>
  );
}

export default App;

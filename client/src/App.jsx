import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TaskPage } from "./pages/TaskPage";
import { TaskForm } from "./pages/TaskForm";
import { Navigation } from "./components/Navigation";
import { Counter } from "./components/Counter";
import { Invert } from "./components/Invert";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <BrowserRouter>
      <div className="grid container  my-5 grid-cols-2">
        <Counter />
        <Invert />
      </div>
      <hr className="mx-10 mt-10"/>
      <div className="container mx-auto">
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/tasks" />} />
          <Route path="/tasks" element={<TaskPage />} />
          <Route path="/tasks-create" element={<TaskForm />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from "../components/Main";

import Quiz from "../components/Quiz";
import Result from "../components/Result";
import '../styles/App.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>
  },
  {
    path: "/quiz",
    element: <Quiz></Quiz>
  },
  {
    path: "/result",
    element: <Result></Result>
  }
])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Filmes from "./pages/Filmes";
import Especies from "./pages/Especies";
import Duvidas from "./pages/Duvidas";
import Pessoas from "./pages/Pessoas";
import Planetas from "./pages/Planetas";
import Starships from "./pages/Starships";
import Sobre from "./pages/Sobre";
import './assets/css/estilos.css'
import Cadastro from "./pages/Cadastro";



function App() {

  const [login, setLogin] = useState(false)

  const verificarLogin = () => {
    setLogin(sessionStorage.getItem("login"))
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/menu",
      element: login ? <Menu /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/cadastro",
      element: login ? <Cadastro /> : <Login verificarLogin={verificarLogin} />,
    },
    {       path: "/filmes",       element: login ? <Filmes /> : <Login verificarLogin={verificarLogin} />,     },
    {       path: "/Especies",       element: login ? <Especies /> : <Login verificarLogin={verificarLogin} />,     },
    {       path: "/Pessoas",       element: login ? <Pessoas /> : <Login verificarLogin={verificarLogin} />,     },
    {       path: "/Duvidas",       element: login ? <Duvidas /> : <Login verificarLogin={verificarLogin} />,     },
    {       path: "/Planetas",       element: login ? <Planetas /> : <Login verificarLogin={verificarLogin} />,     },
    {       path: "/Starships",       element: login ? <Starships /> : <Login verificarLogin={verificarLogin} />,     },
    {       path: "/Sobre",       element: login ? <Sobre /> : <Login verificarLogin={verificarLogin} />,     },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;

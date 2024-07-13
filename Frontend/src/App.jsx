import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Planets from "./Components/Planets/Planets";
import Navbar from "./Components/HomePage/Navbar/Navbar"; // Changed Home page to HomePage for consistency
import Solarsystem from "./Components/HomePage/Solarsystem/Solarsystem"; // Changed Home page to HomePage for consistency
import News from "./Components/News/News";
import Login from "./Components/Login/Login";

function App() {
  useEffect(() => {
    if (window.location.pathname==="/") {
      const container = document.querySelector(".ct");
      if (container) {
        const [heading, paragraph] = container.children;
        heading.style.top = "0";
        heading.style.opacity = "1";
        paragraph.style.top = "0";
        paragraph.style.opacity = "1";
      }
    }
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="Container">
          <Navbar />
          {localStorage.getItem("isLogged") == "true" &&
            <h1 className="welcome">{`Welcome ${localStorage.getItem("name")}`}</h1>
          }
          <div className="ct">
            <h1>
              <span className="cosmic">Cosmic</span> <span className="voyage">Voyage</span>
            </h1>
            <p>That's one small step for man, one giant leap for mankind.</p>
          </div>
          <Solarsystem />
        </div>
      ),
    },
    {
      path: "/planets",
      element: <Planets />,
    },
    {
      path: "/news",
      element: <News />,
    },
    {
      path: "/login",
      element: <Login />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;

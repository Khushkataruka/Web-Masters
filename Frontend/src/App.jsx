import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Planets from "./Components/Planets/Planets";
import Navbar from "./Components/HomePage/Navbar/Navbar"; // Changed Home page to HomePage for consistency
import Stars from "./Components/Stars/Stars";
import Galaxies from "./Components/Galaxies/Galaxies";
import Solarsystem from "./Components/HomePage/Solarsystem/Solarsystem"; // Changed Home page to HomePage for consistency
import News from "./Components/News/News";
import Login from "./Components/Login/Login";
import Sc from "./Components/HomePage/Sc/Sc";
import Center from "./Components/Center/Center";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Constellation from "./Components/Constellations/Constellation";
import Forgot from "./Components/Forgot/Forgot";
import ResetPassword from "./Components/ResetPassword/Resetpassword";
import GeneralQuiz from './Components/Quiz/GeneralQuiz';
import Type_quiz from "./Components/Quiz/Type_quiz";
import GalaxyQuiz from "./Components/Quiz/GalaxyQuiz";
import PlanetsQuiz from "./Components/Quiz/PlanetsQuiz";
import Constellationquiz from "./Components/Quiz/Constellationquiz";


function App() {
  useEffect(() => {
    if (window.location.pathname === "/") {
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

          <div className="ct">
            <h1>
              <span className="cosmic">Cosmic</span> <span className="voyage">Voyage</span>
            </h1>
            <p>That's one small step for man, one giant leap for mankind.</p>
          </div>
          <Solarsystem />
          <Sc />
          <Footer />
        </div>
      ),
    },
    {
      path: "/planets",
      element: <>
        <Planets />
        <Footer />
      </>
    },
    {
      path: "/Stars",
      element: (
        <>
          <Stars />
          <Footer />
        </>
      ),
    },
    {
      path: "/Galaxies",
      element: (
        <>
          <Galaxies />
          <Footer />
        </>
      ),
    },
    {
      path: "/news",
      element: <>
        <News />
      </>
    },
    {
      path: "/login",
      element: <>
        <Login />
        <Footer />
      </>
    },
    {
      path: "/about",
      element: <>
        <About />
        <Footer />
      </>
    },
    {
      path: "/contact",
      element: <>
        <Contact />
        <Footer />
      </>
    },
    {
      path: "/center",
      element: <>
        <Center />
        <Footer />
      </>
    },
    {
      path: "/constellation",
      element: <><Constellation />
        <Footer /></>
    },
    {
      path: "/forget",
      element: <><Forgot /></>
    },
    {
      path: "/reset-password/:id/:token",
      element: <><ResetPassword /></>
    },
    {
      path: "/quiz",
      element: <>
        <Navbar />
        <Type_quiz />
        <Footer />
      </>
    },
    {
      path: "/quiz-general",
      element: <>
        <Navbar />
        <GeneralQuiz />
        <Footer />

      </>
    },
    {
      path: "/quiz-galaxies",
      element: <>
        <Navbar />
        <GalaxyQuiz />
        <Footer />

      </>
    },
    {
      path: "/quiz-planets",
      element: <>
        <Navbar />
        <PlanetsQuiz />
        <Footer />

      </>
    },
    {
      path: "/quiz-constellation",
      element: <>
        <Navbar />
        <Constellationquiz />
        <Footer />

      </>
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;

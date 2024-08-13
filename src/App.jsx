import { useState } from "react";
import Header from "./Layouts/Header";
import { Contact } from "./Pages/Contact/Contact";
import { About } from "./Pages/About/About";
import { Projects } from "./Pages/Projects/Projects";
import { Home } from "./Pages/Home/Home";

function App() {
  return (
    <>
      <Header />
      <Home/>
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;

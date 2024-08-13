import { useState } from "react";
import Header from "./Layouts/Header";
// import Home from "./Sections/Home"
import { Contact } from "./Sections/Contact";
import { Service } from "./Sections/Service";
import { Standings } from "./Sections/Standings";
import { Hola } from "./Sections/Hola";
import { Projects } from "./Pages/Projects/Projects";

function App() {
  return (
    <>
      <Header />
      {/* <Home/> */}
      <Contact />
      <Service />
      <Standings />
      <Hola />
      <Projects />
    </>
  );
}

export default App;

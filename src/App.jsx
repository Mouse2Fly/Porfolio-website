import { BrowserRouter, Route, Routes } from "react-router-dom";

import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Header from "./components/Header/Header";
import Contacts from "./components/contacts/Contacts";

import "./App.css"

function App() {


  return (
    <BrowserRouter>
        <Header/>
        <main className="container">
            <Routes>
                <Route index element={<AboutMe />} />
                <Route path="projects" element={<Projects />} />
                <Route path="contacts" element={<Contacts />} />
            </Routes>
        </main>
    </BrowserRouter>
  )
}

export default App

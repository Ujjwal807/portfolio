import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";
import Applayout from "./components/Applayout";
import Contact from "./pages/Contact";

function App() {
  const projects = [
    {
      img: "/discord.jpeg",
      name: "Discord Clone",
      des: "This project is a React-based clone of the Discord landing page, including fully functional login and signup pages. The clone accurately replicates the design and layout of the original Discord pages,",
    },
    {
      img: "/fastPizza.jpeg",
      name: "Fast React Pizza App",
      des: "Discover our pizza ordering app, where you can easily browse and order from a selection of delicious, pre-made pizzas. Simply choose your favorite pizza from our menu, place your order, and enjoy a quick and hassle-free experience!",
    },
    {
      img: "/onlineSenctenceCounter.jpeg",
      name: "Online Sentence Counter",
      des: "online sentence counter is a web-based tool that accurately counts the number of sentences in a given text, while also providing a range of additional features to enhance your writing experience",
    },
  ];
  return (
    <div className="flex justify-center ">
      <div className="max-w-7xl no-scrollbar overflow-y-scroll h-screen w-full mt-5">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Applayout />}>
              <Route path="/" index element={<Home projects={projects} />} />
              <Route
                path="/projects"
                element={<ProjectPage projects={projects} />}
              />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

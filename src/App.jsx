import About from "./components/Router/About";
import Home from "./components/Router/Home";
import Labs from "./components/Router/Labs";
import MainHeader from "./components/Router/MainHeader";
import NotFound from "./components/Router/NotFound";
import Support from "./components/Router/Support";
import { Route, Routes, NavLink } from "react-router";

export default function App() {
  return (
    <div className="h-screen flex items-center flex-col mt-10 gap-24 text-lg">
      <nav>
        <ul className="flex gap-6">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<MainHeader />} >
        <Route index element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

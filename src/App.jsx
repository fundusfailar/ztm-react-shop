import { Routes, Route } from "react-router"

import Navigation from "./routes/navigation/navigation.component";

import SignIn from "./routes/sign-in/sign-in.component";
import Home from "./routes/home/home.component";

const Shop = () => {
  return <div><h1>Ich bin die Shop Komponente</h1></div>
}

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="sign-in" element={<SignIn />}></Route>
      </Route>
    </Routes>
  );
}

export default App;

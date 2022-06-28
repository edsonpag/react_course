import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home/Home";
import Navigation from "./routes/Navigation/Navigation";
import Authentication from "./routes/Authentication/Authentication";

function Shop() {

  return(
    <h1>Shop</h1>
  );
}

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="authentication" element={<Authentication />}/>
      </Route>
    </Routes>
  );
  
}

export default App;

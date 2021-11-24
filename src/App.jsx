import React from "react";
import Header from "./components/shared/header/Header.component";

//FontAwesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter,Routes,Route,Outlet } from "react-router-dom";
import Home from "./pages/home/Home.component";
import Login from "./pages/login-register/Login.component";

library.add(fas,fab);


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes that fall under the regular layout with header and footer */}
        <Route path="/" element={<Layout />}> 
          <Route index element={<Home />} />
          <Route path="publish"/>
          <Route path="realastate"/>
        </Route>
        {/* Routes that do not follow the regular layout */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

function Layout () {
  return (
    <div>
      <Header/>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App;

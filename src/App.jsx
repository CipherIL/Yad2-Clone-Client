import React from "react";
import Header from "./components/shared/header/Header.component";
import { BrowserRouter,Routes,Route,Outlet } from "react-router-dom";
import { PrivateUserRoute } from "./routes/PrivateUser.route";
import UserContextProvider from "./contexts/User.context";

//Component Imports
import Home from "./pages/home/Home.component";
import Login from "./pages/login-register/Login.component";
import PageNotFound from "./pages/notFound/PageNotFound.component";
import Publish from './pages/publish/Publish.component'
import Realastate from './pages/realastate/Realastate.component'
//FontAwesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas,fab);

function App() {
  return (
    <BrowserRouter>
    <UserContextProvider>
      <Routes>
        {/* Routes that fall under the regular layout with header and footer */}
        <Route path="/" element={<Layout />}> 
          <Route index element={<Home />} />
        </Route>
        {/* Routes that do not follow the regular layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/publish" element={<PrivateUserRoute><Publish/></PrivateUserRoute>}/>
        <Route path="realastate" element={<PrivateUserRoute><Realastate/></PrivateUserRoute>}/>
        <Route path="*" element={[<Header />,<PageNotFound />]}/>
      </Routes>
    </UserContextProvider>
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

import React from "react";
import Header from "./components/shared/header/Header.component";
import { BrowserRouter,Routes,Route,Outlet } from "react-router-dom";
import { PrivateUserRoute } from "./routes/PrivateUser.route";
import UserContextProvider from "./contexts/User.context";

//Component Imports
import Home from "./pages/home/Home.component";
import Login from "./pages/login-register/Login.component";
import PageNotFound from "./pages/notFound/PageNotFound.component";
import Realastate from './pages/realastate/Realastate.component'
import PublishHeader from "./pages/publish/page-parts/PublishHeader.component";
import PublishPrivateRealestate from "./pages/publish/page-parts/PublishPrivateRealestate.component";

//FontAwesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import PublishMain from "./pages/publish/page-parts/PublishMain.component";
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
        {/* Publish Routes */}
        <Route path="/publish" element={<PrivateUserRoute><PublishLayout/></PrivateUserRoute>}>
          <Route index element={<PublishMain/>}/>
          <Route path="?cat=realestate-private" element={<PublishPrivateRealestate/>}/>
        </Route>
        {/* Routes that do not follow the regular layout */}
        <Route path="/login" element={<Login />} />
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

function PublishLayout () {
  return (
    <>
      <PublishHeader/>
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default App;

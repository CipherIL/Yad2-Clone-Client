import React from "react";
import Header from "./components/shared/header/Header.component";
import { BrowserRouter,Routes,Route,Outlet } from "react-router-dom";
import { PrivateUserRoute } from "./routes/PrivateUser.route";
import UserContextProvider from "./contexts/User.context";

//Component Imports
import Home from "./pages/home/Home.component";
import Login from "./pages/login-register/Login.component";
import PageNotFound from "./pages/notFound/PageNotFound.component";
import RealastateForSale from './pages/realastate/RealastateForSale.component'
import PublishHeader from "./pages/publish/publish-parts/publishHeader/PublishHeader.component";
import PublishMain from "./pages/publish/publish-parts/publishMain/PublishMain.component";
import PublishPrivateRealestate from "./pages/publish/publishPrivateRealestate/PublishPrivateRealestate.component";
import FinishArea from "./pages/publish/finishArea/FinishArea.component";
import RealestateSubHeader from './pages/realastate/RealestateSubHeader.component';
import Realestate from './pages/realastate/Realestate.component';

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
        {/* Routes that do not follow a layout */}
        <Route path="/login" element={<Login />} />
        
        {/* Publish Routes */}
        <Route path="/publish" element={<PublishLayout/>}>
          <Route index element={<PublishMain/>}/>
          <Route path="realestate-private" element={<PublishPrivateRealestate/>}/>
          <Route path="finishArea" element={<FinishArea/>}/>
        </Route>

        {/* Routes that fall under the regular layout with header and footer */}
        <Route path="/" element={<Layout />}> 
          <Route index element={<Home />} />
          <Route path="realestate" element={<RealestateLayout/>}>
            <Route index element={<Realestate/>}/>
            <Route path="forsale" element={<RealastateForSale/>}/>
          </Route>
          <Route path="*" element={<PageNotFound />}/>
        </Route>     
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
    <PrivateUserRoute>
      <PublishHeader/>
      <main>
        <Outlet/>
      </main>
    </PrivateUserRoute>
  )
}

function RealestateLayout () {
  return (
    <>
    <RealestateSubHeader/>
    <Outlet/>
    </>
  )
}
export default App;

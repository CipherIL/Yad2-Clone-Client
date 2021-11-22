import React from "react";
import Header from "./components/shared/header/Header.component";

//FontAwesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas,fab);


function App() {
  return (
    <Header/>
  );
}

export default App;

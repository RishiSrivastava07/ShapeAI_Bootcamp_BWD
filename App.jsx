import React from 'react';
import Header from "./Header";
import List from "./List";
import Footer from "./Footer";

function App(){
    return(
        <div id="specific">
        <Header />
        <div id="un">
           <List />
           <List />
           <List />
        </div>
        <Footer />
       </div>
    );
}
export default App
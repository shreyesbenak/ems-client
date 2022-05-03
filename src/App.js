import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Signin from "./Page/Signin/Signin";
import Sidebar from "./Component/Sidebar/Sidebar";



function App() {
  return (
    <>
      <Router>
        {/* <Topbar /> */}
        <div className="container">



          <Switch>

            <Route exact path="/">
              <Signin />
             
            </Route>
            <Route exact path="/home">
            
              <Sidebar/>
            </Route>


           



            
          

           

          


            {/* for admin Route */}

{/* 
            <Route path="/admin/dashboard">
              <AdminSidebar />
              <Home />
            </Route> */}
          
           
          </Switch>
       

        </div>
      </Router>
    </>

  );
}

export default App;

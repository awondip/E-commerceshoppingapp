import React, { Children } from "react";
import Header from "./header";
import './style.css';


export const Layout = ({children}) => {
  return (
    <div>
      <Header />
      <div>
        {children} 
      </div>
    </div>
  
  );
};
export default Layout

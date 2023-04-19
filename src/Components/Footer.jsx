import React from "react";

export const Footer = () => {
    const style = {
        position: "relative",
        top: "70vh"
    }

  return(
    <div className="container-fluid bg-dark text-muted text-center p-3"
    style={style}>
        <h6 className="my-3">&copy; All right reserved. 2023<br/>
            Chinmay Samarth D.H. 
            
        </h6>
    </div>
  )
};
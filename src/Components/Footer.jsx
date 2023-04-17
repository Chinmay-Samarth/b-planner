import React from "react";

export const Footer = () => {
    const style = {
        position: "relative",
        top: "40vh"
    }

  return(
    <div className="container-fluid bg-dark text-muted text-center p-3"
    style={style}>
        <h6>&copy; All right reserved. 
            Chinmay Samarth D.H. 
            2023
        </h6>
    </div>
  )
};
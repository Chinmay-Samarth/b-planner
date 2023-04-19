import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


export const Home = () => {
    const {user} = useAuth0(); 
    const style = {
        width:"18rem",
        background:"#CAFAFE",
        boxShadow : "1px 2px 2px "
    }
  return (
  <>
  <div className="container-fluid">
    <h1 className="py-3">Welcome, {user.name}</h1>
    <p className="py-3">Hey there, here is what this planner can do</p>
    <div className="d-flex flex-row gap-5 justify-content-center row  py-3">
        <div className="card col-md-4 col-sm-12" style={style}>
            <div className="card-body">
                <h5 className="card-title">Inventory</h5>
                <p className="card-text">Create or Upload items</p>
            </div>
        </div>
        <div className="card col-md-4 col-sm-12" style={style}>
            <div className="card-body">
                <h5 className="card-title">Transactions</h5>
                <p className="card-text">Create purchase/sales documents</p>
            </div>
        </div>
        <div className="card col-md-4 col-sm-12" style={style}>
            <div className="card-body">
                <h5 className="card-title">Payments</h5>
                <p className="card-text">Take control of your cashflow</p>
            </div>
        </div>
    </div>
  </div>
  </>
  )
};

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Footer } from "./Footer";

export const Home = () => {
    const {user} = useAuth0(); 
  return (
  <>
  <div className="container-fluid">
    <h1 className="py-3">Welcome, {user.name}</h1>
    <p className="py-3">Hey there, here is what this planner can do</p>
    <div className="d-flex flex-row gap-5  py-3">
        <div className="card" style={{width:"18rem"}}>
            <div className="card-body">
                <h5 className="card-title">Inventory</h5>
                <p className="card-text">Create or Upload items</p>
            </div>
        </div>
        <div className="card" style={{width:"18rem"}}>
            <div className="card-body">
                <h5 className="card-title">Transactions</h5>
                <p className="card-text">Create purchase/sales documents</p>
            </div>
        </div>
        <div className="card" style={{width:"18rem"}}>
            <div className="card-body">
                <h5 className="card-title">Payments</h5>
                <p className="card-text">Take control of your cashflow</p>
            </div>
        </div>
    </div>
  </div>
  <Footer/>
  </>
  )
};

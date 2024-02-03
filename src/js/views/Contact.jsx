import React, { useContext, useEffect,useState } from "react"
import  {Context} from "../store/appContext.js"
import { useNavigate } from "react-router";

export const Contact=() => {
    const{store, actions} = useContext (Context);
    const navigate = useNavigate ()


    const editTask = (item) => {
        actions.assignUser(item);
        navigate('/contactedit/')
    }

    
    return (
        <div className="container-fluid mt-5">
            <h1 className="text-center fw-bold text-sucess">Contact list</h1>
            <div className="row mt-5 d-flex. justify-content-center align-items-center text-center">
                {store.users.map((item)=> (
                <div key={item.id} className="col-lg-2 mb-2">
                    <div className="card text-bg-dark" style={{maxWidth:"18rem"}}>
                        <div className="card-header fs-4 fw-bold"><p>{item.full_name}</p></div>
                        <div className="card-body">
                            <h5 className="card-title">{item.email}</h5>
                            <p className="card-text">{item.address}</p>
                            <p className="card-text">{item.phone}</p>
                        </div>
                        <div className="interface d-flex gap-2 mb-2 justify-content-between">
                                <span onClick={() => { editTask(item) }} className="mx-2">
                                    <i className="fas fa-edit"></i>
                                </span>
                                <span onClick={() => {actions.deleteContact(item.id) }} className="mx-2 text-danger">
                                    <i className="fas fa-trash"></i>
                                </span>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}
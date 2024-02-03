import React, { useContext, useState } from "react";
import { Link, useActionData, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const AddContact = () => {
    const { store, actions } = useContext(Context)
    // Definir todos los estados.
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [agenda, setAgenda] = useState("Agenda-Mercedes0708");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate(); 

    const handleSubmit = (event) => {
        event.preventDefault();
        // Crear el objeto que le voy a enviar como parametro al action.create.user
        const dataToSend = {
            "full_name": name,
            "email": email,
            "agenda_slug": agenda,
            "address": address,
            "phone": phone,
        }  // Email, fullname, agenda...(exactos que están en el json)
        actions.createUser(dataToSend) 
        navigate("/contact")    
    }

    
    
    return(
        <form onSubmit={handleSubmit}>
            <div className="container pt-5">
                <div className="titulo">
                    <h1 className="fs-4 fw-bold text-center text-center">Añadir Contacto</h1>
                </div>
                <div className="mb-3">
                    <label htmlFor="text-name" className="form-label fw-bold">Nombre y Apellidos</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="text-name" placeholder="Nombre Completo"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="text-name" className="form-label fw-bold">Nº Telefono</label>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" className="form-control" id="phone-number" placeholder="+34"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="text-name" className="form-label fw-bold">Dirección</label>
                    <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="form-control" id="text-adress" placeholder="Dirección Postal"/>
                </div>
                <div className="d-grid">
                    <button className="btn btn-primary" type="submit">Guardar</button>
                </div>
            </div>
        </form>

    )
}
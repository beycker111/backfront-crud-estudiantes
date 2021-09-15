import React, { useState, Fragment } from 'react';
 import Table from './Table';
import { useForm } from "react-hook-form";

export default function Formularios() {

  const { register, errors, handleSubmit } = useForm();

  const [stud, setstud] = useState({
    id: 0,
    name: '',
    lastname: '',
    birthday: '',
    email: '',
    phone: '',
    grade: ''
  })

  

  const onSubmit = (data) => {

    //e.target.reset();
    setstud(data) 
    
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nombre</label>
        <input
          placeholder="Ingrese los nombres"
          type="text" 
          {...register("name")}         
          required
        />

        <label>Apellido</label>
        <input
          placeholder="Ingrese apellidos"    
          type="text"
          {...register("lastname")}          
          required
        />
        <label>Ingresar fecha de nacimiento</label>
        <input type="date"name="trip-start" {...register('birthday')}/>
        <label>Ingresar email</label>
        <input
          placeholder="Ingrese el email"
          type="text" 
          {...register("email")}         
          required
        />
        <label>Ingresar telefono</label>
        <input
          placeholder="Ingrese el telefono"
          type="text" 
          {...register("phone")}         
          required
        />
        <label>Ingresar grado</label>
        <input
          placeholder="Ingresar el grado"
          type="text" 
          {...register("grade")}         
          required
        />
        

        <button variant="contained" color="primary">
          Envia
        </button>
      </form>
      <Table stud={stud}/>
    </Fragment>
    
  );

}






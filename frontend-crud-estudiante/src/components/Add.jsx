import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

const Add = (props) => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {

    //e.target.reset();
    console.log(data);

    props.addUser(data);
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
        <input type="date"name="trip-start" />
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
    </Fragment>
  );
};

export default Add;

import React, { useState, Fragment } from 'react';
 import Table from './Table';
import { useForm } from "react-hook-form";
// import { v4 as uuidv4 } from 'uuid';

export default function Formularios() {

  const [student, setStudent] = useState([]);


  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    setStudent((student) => [...student, data]);
    console.log(data);
    e.target.reset()
  };

  return (
    <>
      <h2>Agregar Estudiante</h2>
      <Fragment>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Nombre</label>
          <input
            type="text"
            className="form-control my-2"
            {...register("nombre", { required: true, pattern: /^[a-zA-ZÀ-ÿ\s]{1,40}$/ })}
          />
          {errors.nombre?.type === 'required' && <span className="text-danger text-small d-block mb-2">Campo nombre es requerido</span>}
          {errors.nombre?.type === 'pattern' && <span className="text-danger text-small d-block mb-2">El campo no puede contener numeros ni caracteres especiales</span>}

          
          <label>Apellido</label>
          <input type="text"
            className="form-control my-2"
            {...register("text", { required: true, min: 0 })}/>

          {errors.edad?.type === 'required' && <span className="text-danger text-small d-block mb-2">Campo fecha de nacimiento requerido</span>}
        
          <label>Edad</label>
          <input type="date"
            className="form-control my-2"
            {...register("age", { required: true })}

          />
          {errors.age?.type === 'required' && <span className="text-danger text-small d-block mb-2">Campo Email requerido</span>}
          
          <label>Email</label>
          <input
            type="text"
            className="form-control my-2"
            {...register("email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}
          />
          {errors.email?.type === 'required' && <span className="text-danger text-small d-block mb-2">Email es requerido</span>}
          {errors.email?.type === 'pattern' && <span className="text-danger text-small d-block mb-2">Debe ingresar '@'</span>}

          <label>Telefono</label>
          <input
            type="text"
            className="form-control my-2"
            {...register("telefono", { required: true, pattern: /^[A-Za-z]+$/i })}
          />
          {errors.telefono?.type === 'required' && <span className="text-danger text-small d-block mb-2">Telefono es requerido</span>}
          

          <label>Grado</label>
          <select {...register("ocupacion")}
            className="form-select my-2">
            <option value="Jardin">Jardin</option>
            <option value="Primaria">Primaria</option>
            <option value="Bachillerato">Bachillerato</option>
          </select>

          <button
            className="btn btn-primary my-2">
            Guardar</button>
        </form>
      </Fragment>
      <Table data={student} />
    </>

  );
}




//export default Add;

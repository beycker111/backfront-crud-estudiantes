import React, { useState, Fragment } from 'react';
 import Table from './Table';
import { useForm } from "react-hook-form";
// import { v4 as uuidv4 } from 'uuid';

export default function Formularios() {

  const [student, setStudent] = useState({
    
  });


  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    setStudent((student) => [...student, data]);
    console.log(student);
    e.target.reset()
  };

  return (
    <>
      <h2>Formulario</h2>
      <Fragment>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Nombre</label>
          <input
            type="text"
            className="form-control my-2"
            {...register("nombre", { required: true, pattern: /^[A-Za-z]+$/i })}
          />
          {errors.nombre?.type === 'required' && <span className="text-danger text-small d-block mb-2">Nombre es requerido</span>}
          {errors.nombre?.type === 'pattern' && <span className="text-danger text-small d-block mb-2">Nombre no acepta numeros</span>}

          
          <label>Apellido</label>
          <input type="text"
            className="form-control my-2"
            {...register("text", { required: true, min: 0 })}

          />
          {errors.edad?.type === 'required' && <span className="text-danger text-small d-block mb-2">Fecha de nacimiento requerido</span>}
        
          <label>Edad</label>
          <input type="date"
            className="form-control my-2"
            {...register("email", { required: true, min: 0 })}

          />
          {errors.edad?.type === 'required' && <span className="text-danger text-small d-block mb-2">Email requerido</span>}

      

          <label>Ocupacion</label>
          <select {...register("ocupacion")}
            className="form-select my-2">
            <option value="estudiante">estudiante</option>
            <option value="empleado">empleado</option>
            <option value="jubilado">jubilado</option>
          </select>

          <button
            className="btn btn-primary my-2">
            Guardar Persona</button>
        </form>
      </Fragment>
      <Table data={student} />
    </>

  );
}



// import React, { Fragment } from "react";
// import { useForm } from "react-hook-form";

// const Add = (props) => {
//   const { register, errors, handleSubmit } = useForm();

//   const onSubmit = (data, e) => {

//     //e.target.reset();
//     console.log(data);

//     props.addUser(data);
//   }

//   return (
//     <Fragment>
//       <form onSubmit={handleSubmit(onSubmit)}>
        
//       <label>Nombre</label>
//         <input
//           placeholder="Ingrese los nombres"
//           type="text" 
//           {...register("name")}         
//           required
//         />

//         <label>Apellido</label>
//         <input
//           placeholder="Ingrese apellidos"    
//           type="text"
//           {...register("lastname")}          
//           required
//         />
//         <label>Ingresar fecha de nacimiento</label>
//         <input type="date"name="trip-start" />
//         <label>Ingresar email</label>
//         <input
//           placeholder="Ingrese el email"
//           type="text" 
//           {...register("email")}         
//           required
//         />
//         <label>Ingresar telefono</label>
//         <input
//           placeholder="Ingrese el telefono"
//           type="text" 
//           {...register("phone")}         
//           required
//         />
//         <label>Ingresar grado</label>
//         <input
//           placeholder="Ingresar el grado"
//           type="text" 
//           {...register("grade")}         
//           required
//         />

//         <button variant="contained" color="primary">
//           Envia
//         </button>
//       </form>
//     </Fragment>
//   );
// };

// export default Add;

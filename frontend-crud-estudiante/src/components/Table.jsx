import React, {useState, useEffect, createContext, useRef, useContext} from "react";
import Store from "../store/Store"
   

const Table = (props) => {

   const { dispatch, state } = useContext(Store);

   const updateListStudent = () => {
      fetch(props.HOST_API + "/listStudents")
      .then(response => response.json())
      .then((list) => {
        dispatch({ type: "update-list-student", list })
      })
    }

    useEffect(() => {
      updateListStudent();
    }, [state.list.lenght, dispatch]);

    const onDelete = (id) => {
      fetch(props.HOST_API + "/deleteStudentById/" + id, {
        method: "DELETE"
      }).then((list) => {
         updateListStudent();
      })
    };

    

   return (
      <div>
         <h3>Tabla de Personas</h3>
         <table>
            <thead>
               <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Fecha de nacimiento</th>
                  <th>Email</th>
                  <th>Telefono</th>
                  <th>Grado</th>
                  <th>Acciones</th>
               </tr>
            </thead>
            <tbody>
               {
                  state.list.map((element) => (
                    <tr key={element.id}>
                        <td>{element.name}</td>
                        <td>{element.lastname}</td>
                        <td>{element.birthday}</td>
                        <td>{element.email}</td>
                        <td>{element.phone}</td>
                        <td>{element.grade}</td>
                        <td>
                            <button className="button muted-button">Editar</button>
                            <button className="btn btn-danger" onClick={() => onDelete(element.id)}>Eliminar</button>
                           
                        </td>
                        <td>
                        
                        </td>
                    </tr>
                  
               ))
               }
            </tbody>
         </table>
      </div>
   );
};

export default Table;
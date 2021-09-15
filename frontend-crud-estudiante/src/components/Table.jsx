import React, {useState, useEffect} from "react";

const Table = () => {

    const HOST_API = 'http://localhost:8080/api'
    const[data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            let studentData = await fetch(HOST_API + "/listStudents");
            let json = await studentData.json();
            console.log(json);
            setData([...data,json]);
        }
    
        getData()
      }, [])
    

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
                  
                  data.length > 0 ? (
                  data.map((el) => (
                    <tr key={el.id}>
                        <td>{el.name}</td>
                        <td>{el.lastname}</td>
                        <td>{el.birthday}</td>
                        <td>{el.email}</td>
                        <td>{el.phone}</td>
                        <td>{el.grade}</td>
                        <td>
                            <button classname="button muted-button">Editar</button>
                            <button classname="button muted-button">Eliminar</button>
                        </td>
                    </tr>
                  ))
               ) : (
                  <tr>
                     <td colSpan="4">La tabla no tiene personas ingresadas</td>
                  </tr>
               )}
            </tbody>
         </table>
      </div>
   );
};

export default Table;
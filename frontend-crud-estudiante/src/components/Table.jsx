import React, {useState, useEffect, createContext, useRef, useContext} from "react";
import axios from "axios";


const Table = () => {

    
   const[students, setStudents] = useState([]);

   //  window.addEventListener("load", async function(event) {
   //    let studentData = await fetch(HOST_API + "/listStudents");
   //    let json = await studentData.json();
   //    prueba.forEach(element => {
   //       setData([...data,element]);
   //    });
   //    console.log(data )
   //  });
   const HOST_API = 'http://localhost:8080/api'
   useEffect(()=>{
      axios.get(HOST_API+'/listStudents').then(res => res.data).then(data => setStudents(data));
   },[]
   )
   console.log(students)
   
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
                  
                  
                  students.map((el) => (
                    <tr key={el.id}>
                        <td>{el.name}</td>
                        <td>{el.lastname}</td>
                        <td>{el.birthday}</td>
                        <td>{el.email}</td>
                        <td>{el.phone}</td>
                        <td>{el.grade}</td>
                        <td>
                            <button className="button muted-button">Editar</button>
                            <button className="button muted-button">Eliminar</button>
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
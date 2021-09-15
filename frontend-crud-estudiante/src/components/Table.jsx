import React, {useState, useEffect, createContext, useRef, useContext} from "react";
import axios from "axios";


const Table = (props) => {

   
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

   const listAllStudents = () =>{
      axios.get(HOST_API+'/listStudents').then(res => res.data).then(data => setStudents(data));
   }
   useEffect(()=>{
     
      onSave(props.stud);
      
      listAllStudents();
   },[students.length]
   )

   
   const onSave = (stud) =>{
   let header = JSON.stringify(stud);
     axios.post(HOST_API + '/saveStudent',header).then(res => res.data).then(data => [...students,...data]);
     
     listAllStudents();
   }
   const onDelete = (id) => {
      axios.delete(HOST_API+'/deleteStudentById/' + id).then(()=>{
         listAllStudents();
      });
     
  }
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
                            <button className="btn btn-danger" onClick={() => onDelete(el.id)} >Eliminar</button>
                           
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
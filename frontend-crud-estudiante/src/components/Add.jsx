import React, { useRef, useContext, useState, Fragment } from 'react';
import Store from "../store/Store"

const Add = (props) => {

  const formRef = useRef(null);

  const { dispatch, state: {item} } = useContext(Store);

  const [state, setState] = useState({item});

  const onAdd = (event) => {

    event.preventDefault();

    const request = {
      id: null,
      name: state.name,
      lastname: state.lastname,
      birthday: state.birthday,
      email: state.email,
      phone: state.phone,
      grade: state.grade
    };

    console.log(request);


    fetch(props.HOST_API + "/saveStudent", {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then((stud) => {
        dispatch({ type: "add-student", item: stud });
        setState({ name: '', lastname: '', birthday: '',  email: '', phone: '', grade: ''});
        formRef.current.reset();
      });
  }

  const onEdit = (event) => {
    event.preventDefault();

    const request = {
      id: item.id,
      name: state.name,
      lastname: state.lastname,
      birthday: state.birthday,
      email: state.email,
      phone: state.phone,
      grade: state.grade
    };

    console.log(request);
    
    fetch(props.HOST_API + "/updateStudent", {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then((studentUpdate) => {
        //dispatch({ type: "update-item", item: todo });

        setState({ item: {} });
        item.id = 0;
        item.name = '';
        item.lastname = '';
        item.birthday = '';
        item.email = '';
        item.phone = '';
        item.grade = '';
        formRef.current.reset();
        
        //state.edit = !state.edit;
        //
      });
      
  }

  return (
    <Fragment>
      <form ref={formRef}>
      <label>Nombre</label>
        <input
          placeholder="Ingrese los nombres"
          type="text"
          name="name"
          defaultValue={item.name}
          onChange={(event) => {
            setState({ ...state, name: event.target.value })
          }}        
          required
        />

        <label>Apellido</label>
        <input
          placeholder="Ingrese apellidos"    
          type="text"
          name="lastname"
          defaultValue={item.lastname}
          onChange={(event) => {
            setState({ ...state, lastname: event.target.value })
          }}        
          required
        />
        <label>Ingresar fecha de nacimiento</label>
        <input type="date"name="trip-start" name="birthday"
        onChange={(event) => {
          setState({ ...state, birthday: event.target.value })
        }}/>
        <label>Ingresar email</label>
        <input
          placeholder="Ingrese el email"
          type="text"
          name="email"
          defaultValue={item.email}
          onChange={(event) => {
            setState({ ...state, email: event.target.value })
          }}  
          required
        />
        <label>Ingresar telefono</label>
        <input
          placeholder="Ingrese el telefono"
          type="text"
          name="phone"
          defaultValue={item.phone}
          onChange={(event) => {
            setState({ ...state, phone: event.target.value })
          }}        
          required
        />
        <label>Ingresar grado</label>
        <input
          placeholder="Ingresar el grado"
          type="text"
          name="grade"
          defaultValue={item.grade}
          onChange={(event) => {
            setState({ ...state, grade: event.target.value })
          }}      
          required
        />
        

        {/*<button variant="contained" color="primary">
          Envia
        </button>*/}
        {item.id && <button onClick={onEdit}>Actualizar</button>}
        {!item.id && <button onClick={onAdd}>Agregar</button>}
      </form>
    </Fragment>
    
  );

}

export default Add;




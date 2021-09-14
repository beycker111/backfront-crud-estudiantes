import React, { Fragment } from 'react'
import Add from './components/Add'

const HOST_API = 'http://localhost:8080/api'

const List = () => {

}

function App() {
  return (
    <Fragment>
      <div className="container">
        <h1>Aplicación agregar estudiante</h1>
        <div className="row">
          <div className="col-md-6">
            <Add />
          </div>
          <div className="col-md-6">
            
          </div>
        </div>
      </div>
      
    </Fragment>
  );
}

export default App;

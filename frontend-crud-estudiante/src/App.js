import React, { Fragment } from 'react'
import Formularios from './components/Add'
import Table from './components/Table'

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
            <Formularios />
          </div>
          <div className="col-md-6">
            {/*<Table />*/}
          </div>
        </div>
      </div>
      
    </Fragment>
  );
}

export default App;

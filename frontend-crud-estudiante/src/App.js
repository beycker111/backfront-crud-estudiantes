import React, { Fragment } from 'react'
import Add from './components/Add'
import Table from './components/Table'
import StoreProvider from './store/StoreProvider';

const HOST_API = 'http://localhost:8080/api'


function App() {
  return (
    <StoreProvider>
      <div class="my-4 mx-5">
        <h2 align="center" class="mb-4">Estudiantes</h2>
        <Add HOST_API={HOST_API} />
        <Table HOST_API={HOST_API} />
      </div>
    </StoreProvider>
  );
}

export default App;

import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";

import './App.css';
import { Routes } from './components/Routes';
import { store, persistor } from "./store";

function App() {
  
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
    <Routes />
    </PersistGate>
    </Provider>
  );
}

export default App;

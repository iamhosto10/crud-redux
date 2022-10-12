import "./App.css";
import Header from "./Components/Header";
import Productos from "./Components/Productos";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NuevoProducto from "./Components/NuevoProducto";
import EditarProductos from "./Components/EditarProductos";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<Productos />} />
            <Route path="/productos/nuevo" element={<NuevoProducto />} />
            <Route path="/productos/editar/:id" element={<EditarProductos />} />
          </Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;

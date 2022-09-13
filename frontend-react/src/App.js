import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormState from "./Context/Form/FormState"; // To use react context API
import PrivateRoutes from "./utils/PrivateRoutes"; // To use private route
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import NavigationBar from "./components/NavigationBar";
import About from "./components/About";
import ServerError from "./components/ServerError";
import Alert from "./components/Alert";
import PrintInvoiceForm from "./components/PrintInvoiceForm";
import UpdateInvoice from "./components/UpdateInvoice";

const App = () => {
  return (
    <FormState>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Home />} exact />
            <Route path="/printInvoice" element={<PrintInvoiceForm />} exact />
            <Route path="/updateInvoice" element={<UpdateInvoice />} exact />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/serverError" element={<ServerError />} />
        </Routes>
        <Alert />
      </BrowserRouter>
    </FormState>
  );
};

export default App;

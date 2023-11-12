import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./ui/AppLayout";
import Table from "./pages/Expanses";
import AddNewBillForm from "./pages/AddNewBillForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="table" element={<Table />} />
          <Route path="/newBill" element={<AddNewBillForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

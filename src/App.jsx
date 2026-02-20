import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import PurchaserDashboard from "./pages/PurchaserDashboard/PurchaserDashboard";
import SellerDashboard from "./pages/SellerDashboard/SellerDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/purchaser" element={<PurchaserDashboard />} />
        <Route path="/seller" element={<SellerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

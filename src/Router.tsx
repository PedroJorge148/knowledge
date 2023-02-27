import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./components/layouts/DefaultLayout";
import { Cashflow } from "./pages/Cashflow/Cashflow";
import { Login } from "./pages/Login";
import { BookSales } from "./pages/Sales/BookSales";
import { BookStock } from "./pages/Stock/BookStock";
// import Test from "./pages/Navtest/Test";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      {/* <Route path="/test" element={<Test />} /> */}
      <Route path="/dashboard" element={<DefaultLayout />}>
        <Route path="/dashboard/" element={<BookStock />} />
        <Route path="/dashboard/sales" element={<BookSales />} />
        <Route path="/dashboard/cashflow" element={<Cashflow />} />
      </Route>
    </Routes>
  )
}
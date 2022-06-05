import Header from "./components/Layout/Header";
import ItemList from "./components/Items/ItemList";
import LoginForm from "./components/UI/LoginForm";
import RegisterForm from "./components/UI/RegisterForm";
import Cart from "./components/Cart/Cart";
import Pages from "./Pages/Pages";
import OrderPage from "./Pages/OrderPage";
import MyOrderPage from "./Pages/MyOrderPage";
import { useAppDispatch, useAppSelector } from "./components/Store/hooks";
import { userAction } from "./components/Store/user-slice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const dispatch = useAppDispatch();
  const modalClose = () => dispatch(userAction.modalClose());
  const status = useAppSelector((state) => state.user.status);
  const item = useAppSelector((state) => state.cart.items);
  console.log(item);
  return (
    <BrowserRouter>
      {status === "Login" && <LoginForm modalClose={modalClose} />}
      {status === "Register" && <RegisterForm modalClose={modalClose} />}
      {status === "Cart" && <Cart modalClose={modalClose} />}
      <Header />
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/product/:item" element={<Pages />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/myorder" element={<MyOrderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

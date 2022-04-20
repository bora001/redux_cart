import Header from "./components/Layout/Header";
import ItemList from "./components/Items/ItemList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LoginForm from "./components/UI/LoginForm";
import RegisterForm from "./components/UI/RegisterForm";
import Cart from "./components/Cart/Cart";
import "./App.css";
import { userAction } from "./components/Store/user-slice";
import Pages from "./Pages/Pages";
import OrderPage from "./Pages/OrderPage";
import CompletePage from "./Pages/CompletePage";

function App() {
  const dispatch = useDispatch();
  const modalClose = () => dispatch(userAction.modalClose());
  const status = useSelector((state) => state.user.status);

  return (
    <BrowserRouter>
      {status === "Login" && <LoginForm modalClose={modalClose} />}
      {status === "Register" && <RegisterForm modalClose={modalClose} />}
      {status === "Cart" && <Cart modalClose={modalClose} />}
      <Header />
      <Routes>
        <Route path="/" element={<ItemList />} exact />
        <Route path="/product/:item" element={<Pages />} exact />
        <Route path="/order" element={<OrderPage />} exact />
        <Route path="/complete_order" element={<CompletePage />} exact />
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

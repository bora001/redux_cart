import Header from "./components/Layout/Header";
import ItemList from "./components/Items/ItemList";
import { useSelector, useDispatch } from "react-redux";
import LoginForm from "./components/UI/LoginForm";
import RegisterForm from "./components/UI/RegisterForm";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const modalClose = () => dispatch({ type: "modalClose" });
  // const isLogin = useSelector((state) => state.isLogin);
  const status = useSelector((state) => state.status);
  console.log(status);
  return (
    <div>
      <Header />
      {status === "Login" && <LoginForm modalClose={modalClose} />}
      {status === "Register" && <RegisterForm modalClose={modalClose} />}
      <ItemList />
    </div>
  );
}

export default App;

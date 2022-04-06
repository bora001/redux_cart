import Header from "./components/Layout/Header";
import ItemList from "./components/Items/ItemList";
import { useSelector } from "react-redux";
import LoginForm from "./components/UI/LoginForm";
import RegisterForm from "./components/UI/RegisterForm";
import "./App.css";

function App() {
  // const isLogin = useSelector((state) => state.isLogin);
  const status = useSelector((state) => state.status);
  console.log(status);
  return (
    <div>
      <Header />
      {status === "Login" && <LoginForm />}
      {status === "Register" && <RegisterForm />}
      <ItemList />
    </div>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import UserForm from "./components/UserForm";

function App() {
  return (
    <fieldset className="container">
      <legend>App.js</legend>
      <UserForm />
    </fieldset>
  );
}

export default App;

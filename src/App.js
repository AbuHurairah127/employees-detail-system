import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import AddEmployeeButton from "./components/buttons/AddEmployeeButton";
import InputForm from "./components/inputForm/InputForm";
import OutputTable from "./components/outputTable/OutputTable";
function App() {
  return (
    <div className="App">
      <h1 style={{ color: "#1d3557" }} className="pt-2 display-5">
        Employees Details
      </h1>
      <div className="border-bottom border-secondary mt-3 w-75 m-auto"></div>
      <AddEmployeeButton />
      <div className="border-bottom border-secondary my-3 w-75 m-auto"></div>
      <InputForm />
      {/* <OutputTable /> */}
    </div>
  );
}

export default App;

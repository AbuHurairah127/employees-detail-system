import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AddEmployeeButton from './components/buttons/AddEmployeeButton';
import InputForm from './components/inputForm/InputForm';
import OutputTable from './components/outputTable/OutputTable';
function App() {
  return (
    <div className="App">
    <h1 style={{color:'#1d3557'}} className='pt-2 display-5'>Employees List</h1>
    <div className="border-bottom mt-3 w-75 m-auto"></div>
    <AddEmployeeButton />
    <InputForm />
    <OutputTable />
    </div>
  );
}

export default App;

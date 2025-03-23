import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import NavbarComponent from './NavbarComponent';
import FormComponent from './FormComponent';
import '../Styles/App.css';
import Homepage from '../Pages/Homepage';


function App() {
  return (
          <>
            <NavbarComponent />
            {/* <Homepage/> */}
            <FormComponent />
          </>
    )
}

export default App

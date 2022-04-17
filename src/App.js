import GridArray from './test';
import './App.css';

import { useNavigate } from 'react-router-dom';

import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseconfig';
const app = initializeApp(firebaseConfig);

function App() {
//   const navigate = useNavigate()
//   const loginHandler = () => {
//     navigate('/login')
//   }

  return (
    <div className=" bg-yellow-200 m-5 rounded-2xl">
      <div>
        <GridArray/>
      </div>
    </div>
  );
}

export default App;

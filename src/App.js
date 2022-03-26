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
    <div className="grid grid-rows-3 bg-yellow-200 m-5 rounded-2xl">
      <div></div>
      <div>
        <p className="text-6xl text-amber-900 font-Oswald text-right px-5 pb-2">
          W E L C O M E
        </p>
        <GridArray/>
      </div>
      <div></div>
    </div>
  );
}

export default App;

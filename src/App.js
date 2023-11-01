import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MasterLayout from './layout/masterLayout/MasterLayout';
import { NoMatch } from './pages/no-match/NoMatch';
import { FormCreateTemplatePage } from './pages/create-form-template/pages/FormCreateTemplatePage';


function App() {
  return (
    <Routes>
        <Route path="/" element={<MasterLayout />}>
          <Route index element={<FormCreateTemplatePage />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
  );
}

export default App;

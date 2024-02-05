import { useState } from 'react';
import Menu from './bases/Menu';
import Index from './pages/Index';
import RecursosPrensa from './pages/RecursosPrensa';
import Convocatoria from './pages/Convocatoria';
import Galeria from './pages/Galeria'
const Home = () => {
  const [page, setPage] = useState(0);

  const modules = [<Index key={`Index`}/>, <RecursosPrensa key={`RecursosPrensa`}/>, <Convocatoria key={`Convocatoria`}/>, <Galeria key={`Galeria`}/>]


  return (
    <div>
      <Menu setPage={setPage}/>
       {modules[page]}
    </div>
  );
};

export default Home;

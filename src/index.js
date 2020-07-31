import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video';

const Pagina404 = () => (
  <div>
    Erro Página 404
    </div>
)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
       <Route path="/" component={App} exact>
       <Route path="/cadastro/video" component={CadastroVideo} />
       <Route component={Pagina404} />
       </Route>
    </Switch>
  </BrowserRouter>,
  
  document.getElementById('root')
);

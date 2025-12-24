import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home";
import Favoritos from "./routes/Favoritos";
import SobreNos from "./routes/SobreNos";
import MinhaEstante from "./routes/MinhaEstante";
import Categorias from "./routes/Categorias";
import reportWebVitals from "./reportWebVitals";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* Agora todos os elementos respeitam o limite de largura */
  }

  body {
    width: 100%;
    height: 100%;
    overflow-x: hidden; /* Garante que nada escape pela lateral */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  li {
    list-style: none;    
  }

`;

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh; /* Ocupa exatamente a altura da tela */
  overflow: hidden; /* Evita que o pai transborde */
`

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
      <BrowserRouter>  {/* encapsula todas as rotas */}
        <MainLayout>
          <Header />
            <Routes>       {/* define as rotas */}
            <Route path="/" element={<Home/>} />
            <Route path="/favoritos" element={<Favoritos/>} />
            <Route path="/sobre-nos" element={<SobreNos/>} />
            <Route path="/minha-estante" element={<MinhaEstante/>} />
            <Route path="/categorias" element={<Categorias/>} />
          </Routes>
        </MainLayout>
      </BrowserRouter> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

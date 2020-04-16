import React from "react";
import './styles.css';

export default function Find() {
  return(
    <section className="find">
      <div className="container">
        <div className="find-text">
          <h1>Encontre as melhores oficina para o seu carro.</h1>
          <p>
            Encontre as melhores oficinas para o seu projeto. <br />
            Busque por Mecânica, Elétrica, Interior, Exterior entre Outros...
          </p>
          <button className="button" type="button">Buscar oficinas</button>
        </div>
      </div>
      
    </section>
    
  )
}
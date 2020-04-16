import React from 'react';
import './styles.css';
//import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import imgTeste from "../../assets/imgTeste.jpg";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'


export default function Stores() {

  return(
    <section className="stores">
      
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Oficinas mais populares</h2>
          </div>
          <div className="col-md-12">
            <ul className="nav nav-tabs" role="tablist">
              <li role="presentation" className="active">
                <a href="#mecanica" aria-controls="mecanica" role="tab" data-toggle="tab">
                  Mecânica
                </a>
              </li>
              <li role="presentation">
                <a href="#eletronica" aria-controls="eletronica" role="tab" data-toggle="tab">
                  Eletrônica
                </a>
              </li>
              <li role="presentation">
                <a href="#internas" aria-controls="internas" role="tab" data-toggle="tab">
                  Partes Internas
                </a>
              </li>
              <li role="presentation">
                <a href="#externas" aria-controls="externas" role="tab" data-toggle="tab">
                  Partes Externas
                </a>
              </li>
              <li role="presentation">
                <a href="#outros" aria-controls="outros" role="tab" data-toggle="tab">
                  Outros
                </a>
              </li>
            </ul>
            <div className="tab-content" >
              <div role="tabpanel" className="tab-pane active" id="mecanica">
                <OwlCarousel items={3} className="owl-theme"  margin={8} >
                  <div><img className="img" src= {imgTeste} alt=""/></div>  
                  <div><img className="img" src= {imgTeste} alt=""/></div>
                  <div><img className="img" src= {imgTeste} alt=""/></div>
                  <div><img className="img" src= {imgTeste} alt=""/></div> 
                  <div><img className="img" src= {imgTeste} alt=""/></div>  
                  <div><img className="img" src= {imgTeste} alt=""/></div>  
                  <div><img className="img" src= {imgTeste} alt=""/></div>
                </OwlCarousel>  
              </div>
              <div role="tabpanel" className="tab-pane" id="eletronica">
              </div>
              <div role="tabpanel" className="tab-pane" id="internas">
              </div>
              <div role="tabpanel" className="tab-pane" id="externas">
              </div>
              <div role="tabpanel" className="tab-pane" id="outros">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  }
import React from "react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import './styles.css';

export default function Share() {
  return(
    <section className="share">
      <div className="container">
        <div className="share-text">
          <h1>Compartilhe com os amigos.</h1>
          <p>
            As oficinas que você e eles precisam podem estar mais perto que você imagina.
          </p>
          <div className="social">
            <p>Compartilhe: 
              <FiFacebook size={20} color="#fff" />
              <FiInstagram size={20} color="#fff" />
              <FiTwitter size={20} color="#fff" />
            </p>
          </div>
        </div>
      </div>
    </section>
    
  )
}
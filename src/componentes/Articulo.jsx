import React, { Component } from "react";
import PilasConvencionales from './Pilas'
import BateriasLitio  from './Baterias'
import Hidrogeno from "./Hidrogeno";

class Articulo extends Component {
    render() {
      return (
        <div>
          <PilasConvencionales />
          <br />
          <BateriasLitio />
          <br />
          <Hidrogeno />          
        </div>
      )
    }
}
	
export default Articulo;

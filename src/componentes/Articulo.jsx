import React, { Component, useState } from "react";
import PilasConvencionales from './Pilas'
import BateriasLitio  from './Baterias'
import Hidrogeno from "./Hidrogeno";
import Likes from "./Likes";
import Bitcoin from "./Bitcoins";
class Articulo extends Component {
    render() {
      return (
        <div>
          <PilasConvencionales />
          <br />
          <BateriasLitio />
          <br />
          <Hidrogeno />          
          <br />
          <Likes />
          <br />
          <Bitcoin />
        </div>
      )
    }
}
	
export default Articulo;

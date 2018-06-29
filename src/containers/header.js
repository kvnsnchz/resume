import React, { Component } from 'react';
import image from '../images/foto.jpg';

class Header extends Component {
  render () {
    return (
      <div className="main-wrapper">
        <div className="text-info">
          <h1>Kevin Sánchez</h1>
          <h3>Estudiante de Ingenieria Informatica</h3>
          <p>
            Desarrollador en los framework Yii, Laravel, Ionic y lenguajes JAVA, C++, C#, JAVASCRIPT.
            Conocimientos en el Desarrollo de app nativas para Android en el IDE AndroidStudio. Manejo del motor
            gráfico Unity y el Modelador 3D Blender.
          </p>
        </div>
        <img className="my-sexy-photo" src={image} alt="mi cara fea" />
      </div>
    );
  }
}

export default Header;

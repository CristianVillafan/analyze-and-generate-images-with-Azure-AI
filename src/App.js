//import React from 'react';
import React, { Component } from 'react';
import analyzeImage from './azure-image-analysis.js';

class App extends Component {
  // Definición de las funciones
  state = {
    inputValue: '',
  };

  // Función asíncrona para manejar la acción 1
  action1 = async () => {
    try {
      const url = this.state.inputValue;
      const results = await analyzeImage(url);
      console.log("Resultados:", results);
      console.log("Acción 1 terminada");
    } catch (error) {
      console.error("Error al analizar la imagen:", error);
    }
    // Puedes realizar acciones adicionales aquí
  };

  action2 = () => {
    var input = this.state.inputValue;
    console.log('Acción 2', input);
    // Puedes realizar acciones adicionales aquí
  };

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <section>
        <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
        <button onClick={this.action1} type='button'>Analizar Imagen</button>
        <button onClick={this.action2}>Generar imagen</button>
      </section>
    );
  }
}

export default App;
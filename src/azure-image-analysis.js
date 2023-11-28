import React, { Component } from 'react';
import axios from 'axios';

class AnalizeImage extends Component {
  state = {
    inputValue: '',
    analysisResult: null,
    error: null,
  };

  // Función asíncrona para llamar a la API de análisis de imágenes de Azure
  analyzeImage = async () => {
    try {
      const { inputValue } = this.state;
      
      // Reemplaza 'YOUR_AZURE_API_KEY' y 'YOUR_AZURE_ENDPOINT' con tu clave y punto de conexión de Azure respectivamente
      const apiKey = '7ab391b9ff37432481976c7c75e58e97';
      const endpoint = 'https://prueba-cv-villafan.cognitiveservices.azure.com/';

      const response = await axios.post(
        `${endpoint}/computervision/imageanalysis:analyze&api-version=2023-02-01-preview`,
        {
          url: inputValue,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': apiKey,
          },
        }
      );

      // Actualiza el estado con los resultados de la API
      this.setState({ analysisResult: response.data, error: null });
    } catch (error) {
      console.error('Error al llamar a la API de análisis de imágenes de Azure:', error);
      this.setState({ analysisResult: null, error: 'Error al analizar la imagen.' });
    }
  };

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    const { analysisResult, error } = this.state;

    return (
      <section>
        <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
        <button onClick={this.analyzeImage} type='button'>Analizar Imagen</button>

        {analysisResult && (
          <div>
            <h2>Resultados:</h2>
            <pre>{JSON.stringify(analysisResult, null, 2)}</pre>
          </div>
        )}

        {error && (
          <div>
            <h2>Error:</h2>
            <p>{error}</p>
          </div>
        )}
      </section>
    );
  }
}

export default AnalizeImage;

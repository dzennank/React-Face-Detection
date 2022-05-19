import { useEffect, useRef } from 'react';
import * as faceapi from 'face-api.js'
import './App.css';

function App() {

  const imgRef = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    const loadModels = () => {
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
        faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
        faceapi.nets.faceExpressionNet.loadFromUri('/models'),

      ]).then(console.log('its done')).catch((err) => console.log(err));
    };
    imgRef.current && loadModels()
  }, [])
  return (
    <div>
    <img 
    ref={imgRef}
    src='https://images.pexels.com/photos/9371782/pexels-photo-9371782.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' 
    alt='' 
    width='740'
    height='650'
    />
    <canvas width='740' height='650'ref={canvasRef}/>
    </div>

  );
}

export default App;

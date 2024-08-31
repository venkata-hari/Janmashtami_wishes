import React, { useState, useEffect, Fragment, useRef } from 'react';
import KrishnaImage_One from './Assets/1.png';
import KrishnaImage_Two from './Assets/2.png';
import KrishnaImage_Three from './Assets/3.png';
import KrishnaImage_Four from './Assets/4.gif';
import KrishnaImage_Five from './Assets/5.png';
import Share from './Assets/share.png';
import ShareButtons from './ShareButtons';
import Audio from './Assets/song.mp3'
import ReactAudioPlayer from 'react-audio-player'; 
import './App.css';

const data = [
  { id: 1, img: KrishnaImage_Two },
  { id: 2, img: KrishnaImage_Three },
  { id: 3, img: KrishnaImage_Four },
  { id: 4, img: KrishnaImage_Five }
];

function App() {
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState(true);
  const [name, setName] = useState('');
  const [display, setDisplay] = useState(true);
  const canvasRef = useRef(null);


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % data.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      const flowers = [];
      const numFlowers = 100;

      function Flower(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 2;
        this.speed = Math.random() * 1 + 0.5;
        this.angle = Math.random() * Math.PI * 2;
      }

      Flower.prototype.update = function () {
        this.x += Math.sin(this.angle) * this.speed;
        this.y += Math.cos(this.angle) * this.speed;
        if (this.x < 0 || this.x > canvasRef.current.width) this.x = Math.random() * canvasRef.current.width;
        if (this.y < 0 || this.y > canvasRef.current.height) this.y = Math.random() * canvasRef.current.height;
      };

      Flower.prototype.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'pink';
        ctx.fill();
        ctx.closePath();
      };

      for (let i = 0; i < numFlowers; i++) {
        flowers.push(new Flower(Math.random() * canvasRef.current.width, Math.random() * canvasRef.current.height));
      }

      function animate() {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        flowers.forEach(flower => {
          flower.update();
          flower.draw();
        });
        requestAnimationFrame(animate);
      }

      animate();
    }
  }, []);



  const handleCreate = (e) => {
    e.preventDefault();
    setValue(!value);
  };

  const isFormComplete = () => {
    return name.trim() !== '';
  };

  return (
    <Fragment>
      {value ?
        <div className='root' style={{ height: '100vh', overflow: 'hidden' }}>
          <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} style={{ position: 'absolute', zIndex: 900 }}></canvas>
          <form onSubmit={handleCreate} style={{ position: 'absolute', zIndex: 1900 }}>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name | First Wishes' />
            <button disabled={!isFormComplete()} style={{ cursor: 'pointer', background: !isFormComplete() ? 'grey' : '#4527a0' }}>Create</button>
          </form>
        </div>
        : <div className='root'>
          <ReactAudioPlayer src={Audio} autoPlay loop/>
          <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} style={{ position: 'absolute', zIndex: 900 }}></canvas>
          <div className='share_Btns'>
          {!display && <ShareButtons />}
          </div>
          <div className='share_icon'>
            <img src={Share} alt='' style={{ width: '40px', cursor: 'pointer' }} onClick={() => setDisplay(!display)} />
          </div>
          <h1 className='name'>{name}</h1>
          <img src={KrishnaImage_One} alt='' className='krishnaimage' />
          <figure>
            <img src={data[index].img} alt='' style={{ width: '180px', height: '180px' }} />
          </figure>
          <h3 style={{ color: 'white', width: '60%', textAlign: 'center' }}>
            May Lord Krishna always shower his blessings on you.
            And may every year Janmashtami bring lots of happiness for you and your family.
            Wishing you a very Happy Janmashtami
          </h3>
          
        </div>}
    </Fragment>
  );
}

export default App;

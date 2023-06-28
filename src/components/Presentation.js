import imgProfile from '../medias/profile-picture.webp'
import '../styles/css/presentation.css'
import Typewriter from 'typewriter-effect/dist/core';
import { useEffect } from 'react';



function Presentation() {

  useEffect(() => {
    const txtAnim = document.querySelector('.txtAnim');
    
    new Typewriter(txtAnim, {
      loop: true,
      deleteSpeed: 10
    })
    .changeDelay(30)
    .typeString('<strong>Thomas Bouffard</strong>')
    .pauseFor(2000)
    .deleteChars(15)
    .pauseFor(1000)
    .start();
    }, []);

    return <>
    <section className='container' id='presentation'>
        <div className='presentation'>
        <div className='presentation__img'>
          <img src={imgProfile} alt="" />
        </div>
      <div className='presentation__text'>
        <h1 className='presentation__title'>Bonjour ! ✌️</h1>
        <p className='presentation__p'>Je suis <span className='txtAnim'></span></p>
      </div>
      </div>
    </section>
    </>
}

export default Presentation
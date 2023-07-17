
import './index.css';

import backgroud from './images/desktop/image-header.jpg'

import ovoD from './images/desktop/image-transform.jpg'
import copoD from './images/desktop/image-stand-out.jpg'
import laranjaD from './images/desktop/image-photography.jpg'
import cerejaD from './images/desktop/image-graphic-design.jpg'

import ovoM from './images/mobile/image-transform.jpg'
import copoM from './images/mobile/image-stand-out.jpg'
import laranjaM from './images/mobile/image-photography.jpg'
import cerejaM from './images/mobile/image-graphic-design.jpg'
import arrow from './images/icon-arrow-down.svg'



import dataClient from './people'

function App() {



  return (
    <div className="lg">

      <div
        className="flex-col bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroud})`, width: '100%', height: "90vh" }}
        id='About'
      >
        <div className='flex flex-col w-full text-center justify-center'>
          <h1 className='text-4xl mt-48' style={{ letterSpacing: '15px' }} >WE ARE CREATIVES</h1>
          <img className='h-32 w-8 self-center mt-24' src={arrow}></img>
        </div>
      </div>



      <div className="w-full"   id='Services'>
        <div className="flex flex-col-reverse  sm:flex-row ">
          <div className="flex flex-col justify-center items-center w-full sm:w-1/2  p-10 md:flex-col-reverse">
            <div className='w-[60%]'>
              <h1 className='text-5xl font-black mb-10 text-indigo-950'>Transform your brand</h1>
              <p className='mb-10 text-slate-500'>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you</p>
              <a className='text-gray-950 font-black '><span className='border-b-4 border-b-yellow-500'>LEARN MORE</span></a>
            </div>
          </div>
          <div className="w-full sm:w-1/2 bg-yellow-300">
            <img
              className="w-full h-auto bg-cover"
              src={ovoD}
              alt="Imagem responsiva"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 bg-red-600 ">
            <img
              className="w-full h-full bg-cover"
              src={copoD}
              alt="Imagem responsiva"
            />
          </div>
          <div className="flex flex-col justify-center items-center w-full sm:w-1/2  p-10">
            <div className="w-[80%] " >
              <div className='flex flex-col w-full justify-center'>
                <h1 className='text-5xl font-black mb-10 text-indigo-950'>Stand out to the right audience</h1>
                <p className='mb-10 text-slate-500 text-lg'>Using a collaborative formula of designer, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
                <a className='text-gray-950 font-black '><span className='border-b-4 border-b-red-500'>LEARN MORE</span></a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div
            className="w-full h-[440px] sm:w-1/2 bg-cover bg-center bg-no-repeat flex  flex-col justify-center text-center items-center"
            style={{ backgroundImage: `url(${cerejaD})` }}
          >
            <div className='md:mt-120'>
              <h1 className="text-4xl mt-56  mb-12 text-green-950 font-black ">Graphic Design</h1>
            </div>
            <p className='text-green-950 w-80 '>Great desing makes you memorable. We deliver artwork that underscores your brand message and captures potential clientes’ attention</p>
          </div>

          <div
            className="w-full h-[440px]  sm:w-1/2 bg-cover bg-center bg-no-repeat flex  flex-col justify-center text-center items-center"
            style={{ backgroundImage: `url(${laranjaD})` }}
          >
            <h1 className='text-4xl mt-56 mb-12 text-sky-950 font-black'>Photography</h1>
            <p className='text-sky-950 w-80 '>Increase your credibility by getting the most stunning, high-quality photos that improve your business image</p>
          </div>
        </div>
      </div>



      <div className="w-full mt-12" >
        <h1 className='text-center mb-24 font-serif text-xl  tracking-widest  font-black text-slate-600 '>CLIENT TESTEMONIALS</h1>
        <div className='flex flex-col items-center justify-center sm:flex-row h-auto sm:w-auto sm:h-auto' >
          {dataClient.clientes.map((item, index) => (
            <div key={index} className='flex flex-col items-center justify-center w-full sm:py-9 mb-12'>
              <img src={item.img} className="rounded-full" alt={item.nome} />
              <p className='text-center mt-12 mb-12 w-[80%] font-serif font-normal leading-loose'>{item.bio}</p>
              <h4 className='text-center font-sans font-black mb-2 text-zinc-800'>{item.nome}</h4>
              <h1 className='text-center font-mono font-italic text-slate-400'>{item.profissao}</h1>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full flex flex-col sm:flex-row'   id='Projects'>
        {dataClient.serviços.map((item) => (
          <div>
            <img className='w-full h-auto bg-cover ' src={item.img} ></img>
          </div>
        ))
        }
      </div>

      <div className='flex flex-col items-center bg-teal-200'>
        <h1 className='text-center mt-12 mb-8 font-normal font-bold text-4xl text-teal-800'>sunnyside</h1>
        <ul className='flex item space-x-8 mt-4 mb-12'>
          <li><a className='text-teal-800'>About</a></li>
          <li><a className='text-teal-800'>Services</a></li>
          <li><a className='text-teal-800'>Projects</a></li>
        </ul>
        <ul className='flex item space-x-8 mb-12'>
          {dataClient.social.map((item, index) => (
            <li key={index}>
              <button ><img src={item.img}></img></button>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default App;

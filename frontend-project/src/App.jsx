import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import photo1 from './assets/0eb8c52ca6ac84dc9577e65f10400524636eed2a - Copy.jpg'
import photo2 from './assets/8f1a5b8e169f4818add73b93c625cfa07ccaa2cb.jpg'
import photo3 from './assets/5f0e84cee65e4d4c4d750e5cfd867ce060c824a5.jpg'
import photo5 from './assets/06c8673d442ac54d6a4f2e795077ae8ca8731dec - Copy.jpg'
import photo6 from './assets/06c8673d442ac54d6a4f2e795077ae8ca8731dec.jpg'
import photo7 from './assets/9f9a8a399e9151c8f621b5f5b487fb1088058659 - Copy.jpg'
import photo8 from './assets/51b8ac75072a008e4436aad85c0de3ef7e045a10.jpg'
import photo9 from './assets/345bb818039a05150261ca05cb1d94cd3ff84e75 - Copy.jpg'
import photo10 from './assets/470a44e95f49eda8e46db29939e985a626aaf0d4 - Copy.png'
import photo11 from './assets/705f03c999cf9339978086343f1d0cefa2e0a6da (1) - Copy.jpg'
import photo12 from './assets/40414cf6d1a69af57617aa36f0c83d7c9c567f6c.jpg'
import photo13 from './assets/41060f57f528dd9026fa418a6040afa701b85e98 - Copy.jpg'
import photo14 from './assets/a89e99325d5e2f8096252ed2a2c788dcc2629367 - Copy.jpg'
import photo15 from './assets/af73f751a1d9604372742f6052ebadbceae8c150 - Copy.jpg'
import photo16 from './assets/c02ab6c9402cd374af6ab350a42fcfabfe485954 - Copy.jpg'
import photo17 from './assets/c58c9de62d80ad7b9730d7f210891596c561c0e2.jpg'
import photo18 from './assets/ccc523126c1ba7860b178ac839fc449f3dddf6c3 - Copy.jpg'
import photo19 from './assets/cf73073447e6ea7bbd8dec8b7b23ec59a551d075.jpg'
import photo20 from './assets/d91db53f3f3fe0d08bd7528c294baf75b4f0e777 - Copy.jpg'
import photo21 from './assets/dab4b837a0d0d6d20ed1c6333cb0c08732515cf2.jpg'
import photo22 from './assets/e4fc7310fe1c7cbb9e77a46e6b5756a9c80d2f0e - Copy.jpg'
import photo23 from './assets/efaad9ab52d061106f039baff326ccd7d5de7eb5 - Copy (2).jpg'
import photo24 from './assets/f2e3f4d422c53fcef046321d501313b77d9dd4de (1).jpg'

import photo4 from './assets/8f1a5b8e169f4818add73b93c625cfa07ccaa2cb.jpg'

function App() {
  const [count, setCount] = useState(0)

 
  const photos = [
    photo1,  
    photo2,  
    photo3,  
    photo4,  
    photo5,  
    photo6, 
    photo7,  
    photo8,  
    photo9,  
    photo10, 
    photo11, 
    photo12, 
    photo13,  
    photo14, 
    photo15, 
    photo16, 
    photo17, 
    photo18, 
    photo19, 
    photo20, 
    photo21, 
    photo22, 
    photo23, 
    photo24  
  ];

  return (
    <>
      <div className="w-screen min-h-screen bg-black text-white font-inter overflow-auto">
      
        <header className="relative flex items-center justify-between px-6 py-4">
         
          <div className="flex flex-col items-start text-xl font-bold">
            <img src="https://www.talaprattoy.com/images/logo.png" alt="Tala Prattoy Logo" className="w-40 h-20 mb-1" />
            <span className="text-sm"></span>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-20 text-xl">
            <span>About</span>
            <span>Service</span>
            <span>Albums</span>
            <span>Stories</span>
          </div>

          
          <div>
            <button className="bg-white text-red-600 px-4 py-2 rounded-full">Contact Us</button>
          </div>
        </header>

        <main className="px-4 sm:px-8 pt-8 pb-16">
        
          <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {/* Uses photos[1] to photos[4] */}
            {photos.slice(16,20).map((photo, index) => (
              <div key={index} className="relative">
                <img src={photo} alt={`Photo ${index + 1}`} className="w-full h-auto object-cover rounded-lg" />
              </div>
            ))}
          </section>

          <section className="relative mb-10">
       
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center w-full">
              <span className="text-5xl sm:text-7xl font-black tracking-wider bg-gradient-to-r from-red-500 to-yellow-500 text-white bg-clip-text text-transparent shadow-2xl whitespace-nowrap">
                Tala Prattoy
              </span>
              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                <button className="bg-white text-red-600 font-semibold px-6 py-2 rounded-full text-lg shadow-md hover:bg-gray-100 transition-colors">Art Walkthrough</button>
                <button className="border border-red-600 text-white font-semibold px-6 py-2 rounded-full text-lg shadow-md hover:bg-red-600 hover:text-white transition-colors">Privileged Entry</button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            
              {photos.slice(4, 8).map((photo, index) => (
                <div key={index} className="relative">
                  <img src={photo} alt={`Photo ${index + 5}`} className="w-full h-auto object-cover rounded-lg" />
                </div>
              ))}
            </div>
          </section>

         
          <section className="min-h-screen bg-black text-white font-inter flex items-center justify-center p-4 sm:p-8 md:p-12">
            <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
            
              <div className="flex-1 text-center md:text-left max-w-2xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
                  About Tala
                </h1>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                  Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining
                  the tools and methods of art and art installations interpreting the formative stages
                  of the festival. Tala Prattoy's work emphasis has always been on Durga Puja as a
                  specific art genre where the public space is being transformed into an art venue. We
                  are committed to make that art global. Tala Prattoy upholds the art aspects of
                  Durga Puja. Essence of creativity combining the tools and methods of art and art
                  installations interpreting the formative stages of the festival. Tala Prattoy's work
                  emphasis has always been on Durga Puja as a specific art genre where the public
                  space is being transformed into an art venue. We are committed to make that art
                  global.
                </p>
              
                <div className="flex flex-col sm:flex-row gap-6 w-full justify-center md:justify-start mt-6">
                  <img
                    src={photos[23]} 
                    alt="Art Installation 2"
                    className="w-full sm:w-1/2 md:w-auto max-w-xs h-auto rounded-lg shadow-lg object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://placehold.co/290x200/1a202c/ffffff?text=Image+Not+Available";
                    }}
                  />
                  <img
                    src={photos[8]} 
                    alt="Art Installation 3"
                    className="w-full sm:w-1/2 md:w-auto max-w-xs h-auto rounded-lg shadow-lg object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://placehold.co/290x200/1a202c/ffffff?text=Image+Not+Available";
                    }}
                  />
                </div>
              </div>

           
              <div className="flex-1 flex justify-center md:justify-end">
                <img
                  src={photos[14]} 
                  alt="Art Installation"
                  className="w-full max-w-md md:max-w-xl lg:max-w-2xl h-auto rounded-lg shadow-lg object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/600x400/1a202c/ffffff?text=Image+Not+Available";
                  }}
                />
              </div>
            </div>
          </section>

       
          <section className="py-12 sm:py-16 md:py-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
              
              <div className="flex-1 flex justify-center md:justify-start">
                <img
                  src={photos[6]} 
                  alt="Discover Tala"
                  className="w-full max-w-md md:max-w-xl lg:max-w-2xl h-auto rounded-lg shadow-lg object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/653x597/1a202c/ffffff?text=Image+Not+Available";
                  }}
                />
              </div>
             
              <div className="flex-1 text-center md:text-left max-w-2xl">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
                  Discover Tala
                </h2>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                  Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the
                  tools and methods of art and art installations interpreting the formative stages of the
                  festival. Tala Prattoy's work emphasis has always been on Durga Puja as a specific art genre
                  where the public space is being transformed into an art venue. We are committed to make
                  that art global. Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity
                  combining the tools and methods of art and art installations interpreting the formative
                  stages of the festival. Tala Prattoy's work emphasis has always been on Durga Puja as a
                  specific art genre where the public space is being transformed into an art venue. We are
                  committed to make that art global.
                </p>
              </div>
            </div>
          </section>

     
          <section className="py-12 sm:py-16 md:py-20 bg-gray-900 rounded-lg shadow-xl mb-10">
            <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 p-6">
        
              <div className="flex-1 text-center md:text-left max-w-2xl">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Lorem Ipsum
                </h2>
                <p className="text-base sm:text-lg leading-relaxed text-gray-300">
                  Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity
                  combining the tools and methods of art and art installations interpreting
                  the formative stages of the festival.
                </p>
              </div>

             
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:w-auto">
                <div className="text-center sm:text-left">
                  <p className="text-4xl sm:text-5xl font-bold text-red-500">500K+</p>
                  <p className="text-lg text-gray-300">Existing Partnerships</p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-4xl sm:text-5xl font-bold text-red-500">5M</p>
                  <p className="text-lg text-gray-300">Existing Partnerships</p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-4xl sm:text-5xl font-bold text-red-500">100K+</p>
                  <p className="text-lg text-gray-300">Existing Partnerships</p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-4xl sm:text-5xl font-bold text-red-500">5M</p>
                  <p className="text-lg text-gray-300">Award Winning</p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 sm:py-16 md:py-20">
            <div className="container mx-auto">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-10">
                Objective & features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-10">
              
                <div className="rounded-lg overflow-hidden shadow-lg bg-gray-900 p-4">
                  <img
                    src={photos[19]} 
                    alt="Feature 1"
                    className="w-full h-64 object-cover rounded-lg mb-4"
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/2a303c/ffffff?text=Feature+1"; }}
                  />
                  <h3 className="text-xl font-semibold text-red-500 mb-2">Durga Puja Art Installation</h3>
                  <p className="text-sm text-gray-300">
                    Tala Prattoy, endeavouring towards global art forever, projects this year’s Durga Puja Art as celebrating the journey of a Durga Puja Artist. It thus highlights Kahan – a narration by Susanta Paul, the Artist of high repute.
                  </p>
                </div>
              
                <div className="rounded-lg overflow-hidden shadow-lg bg-gray-900 p-4">
                  <img
                    src={photos[0]} 
                    alt="Feature 2"
                    className="w-full h-64 object-cover rounded-lg mb-4"
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/2a303c/ffffff?text=Feature+2"; }}
                  />
                  <h3 className="text-xl font-semibold text-red-500 mb-2">Community Engagement</h3>
                  <p className="text-sm text-gray-300">
                   2024 introduces a never-seen-before guided walkthrough in Tala Prattoy Durga Puja Art venue where visitors may, in groups, see the artworks through a smooth walk with a guide. Here the guide is the Artist himself. This programme is chargeable and the visitors have to buy tickets for booking the slots of different times
                  </p>
                </div>
              
                <div className="rounded-lg overflow-hidden shadow-lg bg-gray-900 p-4">
                  <img
                    src={photos[21]} 
                    alt="Feature 3"
                    className="w-full h-64 object-cover rounded-lg mb-4"
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/2a303c/ffffff?text=Feature+3"; }}
                  />
                  <h3 className="text-xl font-semibold text-red-500 mb-2">Traditional Craftsmanship</h3>
                  <p className="text-sm text-gray-300">
                    Learning provides the environment and inspiration to create and exhibit that brings people together to build connections to community.
                  </p>
                </div>
               
                <div className="rounded-lg overflow-hidden shadow-lg bg-gray-900 p-4">
                  <img
                    src={photos[22]} 
                    alt="Feature 4"
                    className="w-full h-64 object-cover rounded-lg mb-4"
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/2a303c/ffffff?text=Feature+4"; }}
                  />
                  <h3 className="text-xl font-semibold text-red-500 mb-2">Cultural Interpretation</h3>
                  <p className="text-sm text-gray-300">
                   Installation Art is an artistic genre of multi-dimensional works which are generally site-specific. It’s aim – to see a generation of exquisite artists to emerge
                  </p>
                </div>
              </div>

             <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
                <img
                  src={photo9} 
                  alt="Video Thumbnail"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                   
                    e.target.src = "https://placehold.co/800x500/ff0000/ffffff?text=Video+Loading+Error";
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <button className="text-white text-6xl focus:outline-none">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.604 3.113A1.125 1.125 0 0 1 9 15.125V8.875c0-.935 1.01-1.49 1.82-1.014l5.604 3.113Z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="py-12 sm:py-16 md:py-20 text-center">
            <div className="container mx-auto">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10">Award</h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-8">Learning provides the environment and inspiration to create and exhibit that brings people together to build connections to community.</p>
              <div className="flex flex-wrap justify-center gap-8">
              
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-800 rounded-full flex items-center justify-center text-5xl font-bold text-red-500 shadow-lg overflow-hidden">
                    <img
                      src={photos[9]} 
                      alt={`Award Icon ${i + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/96x96/888888/ffffff?text=Award"; }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-12 sm:py-16 md:py-20 bg-gray-900 rounded-lg shadow-xl mb-10 text-center">
            <div className="container mx-auto p-6">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Advertise With Us</h2>
              <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-8">
                Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the tools and methods of art and art installations interpreting the formative stages of the festival. </p>
              <button className="bg-red-600 text-white font-semibold px-8 py-3 rounded-full text-lg shadow-md hover:bg-red-700 transition-colors">
                Learn More
              </button>
            </div>
          </section>

          <section className="py-12 sm:py-16 md:py-20">
            <div className="container mx-auto">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-10">Gallery</h2>
              <p>Learning provides the environment and inspiration to create and exhibit that brings people together to build connections to community.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {photos.slice(1, 9).map((photo, index) => (
                  <div key={index} className="relative group rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={photo}
                      alt={`Gallery Image ${index + 1}`}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/300x200/333333/ffffff?text=Image+Error"; }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-lg font-semibold">View Detail</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
           <section className="py-12 sm:py-16 md:py-20">
            <div className="container mx-auto">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-10">Tala In News</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {photos.slice(15,21).map((photo, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-lg bg-gray-900 p-4">
                    <img
                      src={photo}
                      alt={`News Image ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                      onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/300x200/444444/ffffff?text=News+Image"; }}
                    />
                    <h3 className="text-xl font-semibold text-red-600 mb-2">Encouraging Craftsmanship {index + 1}</h3>
                    <p className="text-sm text-gray-300">
                      Short description of the news article or event. This text provides a brief summary of the content.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
         <footer className="bg-gray-950 text-gray-400 py-12 px-4 sm:px-8">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
     
            <div className="col-span-1 md:col-span-1 flex flex-col items-start">
              <div className="flex flex-col items-start text-xl font-bold mb-4">
                <img src="https://www.talaprattoy.com/images/logo.png" alt="Tala Prattoy Logo" className="w-40 h-20 mb-1" />
                <span className="text-sm text-white"></span>
              </div>
              <p className="text-sm leading-relaxed mb-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              </p>
              <h3 className="text-lg font-semibold text-white mb-4">Join Newsletters</h3>
              <div className="flex w-full">
                <input
                  type="email"
                  placeholder="Insert your mail here"
                  className="flex-grow p-3 rounded-l-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                />
                <button className="bg-red-600 p-3 rounded-r-lg hover:bg-red-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>

    
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-red-500 transition-colors">Movies</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">TV Show</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Videos</a></li>
              </ul>
            </div>

           
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Media Group</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-red-500 transition-colors">Nice Studio</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Nice News</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Nice TV</a></li>
              </ul>
            </div>

            
            <div className="flex flex-col">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Sitemap</h3>
                <ul className="space-y-2 text-sm mb-6">
                  <li><a href="#" className="hover:text-red-500 transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-red-500 transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-red-500 transition-colors">Press</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="tel:+2713866473637" className="hover:text-red-500 transition-colors">+271 386-647-3637</a></li>
                  <li><a href="mailto:ourstudio@hello.com" className="hover:text-red-500 transition-colors">ourstudio@hello.com</a></li>
                  <li>8819 Ohio St. South Gate, California 90280</li>
                </ul>
              </div>
            </div>
          </div>

          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
            Copyright © {new Date().getFullYear()} mossArt, Designed & Developed Ethically by Ethical Den
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;

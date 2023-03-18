import React from 'react'

export default function Home() {
  return (
    <section id='about'>
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center bg-blue-500">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mg-16 md:mb-0 items-center text-center">
         <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Hi, I'm Joanne.
          <br className="hidden lg:inline-block"/> Client focused Web Developer.
         </h1>
         <p className="mb-8 leading-relaxed">
          Enthusiastic front end web developer who has just completed a bootcamp with edX online learning
          where I developed skills in HTML, CSS, JavaScript, React to name a few. Thriving on a challenge 
          and is excited about the future and completing any projects. 
         </p>
        
        </div>
      </div>
  
</section>
  );
  }
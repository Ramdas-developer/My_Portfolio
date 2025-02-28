"use client"
import Head from 'next/head';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | MERN Developer</title>
        <meta name="description" content="MERN Stack Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header className="bg-black text-white p-5 fixed top-0 left-0 w-full z-50 shadow-md border-b-2 border-yellow-300"> 
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-yellow-500">Ramdas Singh</h1>
          <nav>
            <ul className="flex space-x-8 text-white">
            <li><ScrollLink to="hero" smooth={true} duration={500}>Home</ScrollLink></li>
            <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li>
            <li><ScrollLink to="skills" smooth={true} duration={500}>Skills</ScrollLink></li>
            <li><ScrollLink to="projects" smooth={true} duration={500}>Projects</ScrollLink></li>
              <li><Link href="https://www.linkedin.com/in/ramdas-singh/">Linkedin</Link></li>
              <li><Link href="https://github.com/Ramdas-developer">GitHub</Link></li>
            </ul>
          </nav>
        </div>
      </header>
       
      <main className="container bg-black text-white mx-auto py-10 pt-10">
        {/*hero section */}
        <section id="hero" className="flex items-center justify-between ms-10 py-10 ">
          <div className='text-left w-1/2'>
          <h2 className="text-5xl font-extrabold">Hi, I am </h2>
          <h1 className="text-6xl font-extrabold text-yellow-400">Ramdas Singh,</h1>
          <h2 className="mt-3 text-3xl font-bold">
             I'm a <span className="text-purple-600">
             <Typewriter
                words={['MERN Stack Developer', 'React Developer', 'Node.js Developer', 'Full Stack Developer']}
                loop={0} // Infinite loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={70}
                delaySpeed={2000}
             />
                 </span>
          </h2>
          
          <h2 className="text-2xl font-bold">Building scalable and efficient web applications using <br/> ReactJs, NextJs, NodeJs, Express and MongoDb.</h2>
          </div>

          <div className='w-1/2 flex justify-center mt-10'>
            <img src='/computer1.jpg' alt="profile" className='w-50 h-50 shadow-lg' />
          </div>
        </section>

        {/*About*/}
        <section id="about" className="text-left ms-10 py-20 mt-10">
          <h1 className="text-6xl text-center font-bold mb-8">About Me</h1>
          <h2 className="text-4xl font-bold">
             Hey, I'm <span className="text-yellow-400">Ramdas Singh</span><br/>
             <span className="text-purple-600"> MERN Stack Developer</span><br/> 
             who thrives on building **high-performance,<br/> scalable, and user-centric applications.**
          </h2>
  
          <p className="mt-5 text-xl leading-relaxed">
          I specialize in crafting **blazing-fast** web applications with **React, Next.js, Node.js, Express, and MongoDB.**  
          My mission? To **solve real-world problems** through **clean code, intuitive UI, and robust backend architecture.**  
          I don’t just build websites—I create **experiences that drive impact** 🚀.
          </p>

          <p className="mt-5 text-xl leading-relaxed">
          I thrive in fast-paced environments, love **debugging the impossible,** and constantly push myself to **learn, adapt, and innovate.**  
          Whether it’s optimizing APIs for speed, architecting scalable databases, or designing pixel-perfect frontends,  
          I bring a **problem-solving mindset** and a **get-it-done attitude.**
          </p>

          <p className="mt-5 text-xl font-bold text-yellow-300">
          Let’s connect and build something extraordinary together! 💡
          </p>

          <div className='mt-8'>
           <a href='/Ramdas Singh Resume.pdf' download className='bg-yellow-500 text-black px-6 py-3 text-lg font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300'>
           📄 Download CV
           </a>
          </div>
        </section>
        
        {/*Skills*/}
        <section id="skills" className="py-10">
          <h3 className="text-3xl text-center font-bold mb-6">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 m-3 border rounded-lg shadow">
              <h4 className="text-xl font-semibold">Frontend</h4>
              <p className="mt-2">Description of the project.</p>
              <Link href="/projects/project1" className="text-blue-500">View Details</Link>
            </div>
            <div className="p-4 border rounded-lg shadow">
              <h4 className="text-xl font-semibold">Backend</h4>
              <p className="mt-2">Description of the project.</p>
              <Link href="/projects/project2" className="text-blue-500">View Details</Link>
            </div>
          </div>
        </section>

        {/*Projects*/}
        <section id="projects" className="py-10">
          <h3 className="text-3xl text-center font-bold mb-6">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 m-3 border rounded-lg shadow">
              <h4 className="text-xl font-semibold">Project 1</h4>
              <p className="mt-2">Description of the project.</p>
              <Link href="/projects/project1" className="text-blue-500">View Details</Link>
            </div>
            <div className="p-4 border rounded-lg shadow">
              <h4 className="text-xl font-semibold">Project 2</h4>
              <p className="mt-2">Description of the project.</p>
              <Link href="/projects/project2" className="text-blue-500">View Details</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white text-center p-4">
        <p>&copy; 2025 Your Name. All rights reserved.</p>
      </footer>
    </>
  );
}

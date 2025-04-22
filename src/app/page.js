"use client"
import Head from 'next/head';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {

  useEffect(()=>{
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  },[])

  return (
    <>
      <Head>
        <title>Portfolio | MERN Developer</title>
        <meta name="description" content="MERN Stack Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header data-aos="zoom-in" className="bg-black text-white p-5 fixed top-0 left-0 w-full z-50 shadow-md border-b-2 border-yellow-300"> 
        <div className="container mx-auto flex justify-between items-center cursor-pointer">
        <ScrollLink to="hero" smooth={true} duration={400}><h1 className="text-2xl font-bold text-yellow-500">Ramdas Singh</h1></ScrollLink>
          <nav>
            <ul className="flex space-x-8 text-white">
            <li><ScrollLink to="hero" smooth={true} duration={400}>Home</ScrollLink></li>
            <li><ScrollLink to="about" smooth={true} duration={400}>About</ScrollLink></li>
            <li><ScrollLink to="skills" smooth={true} duration={400}>Skills</ScrollLink></li>
            <li><ScrollLink to="projects" smooth={true} duration={400}>Projects</ScrollLink></li>
              <li><Link href="https://www.linkedin.com/in/ramdas-singh/" target='_blank'>Linkedin</Link></li>
              <li><Link href="https://github.com/Ramdas-developer" target='_blank'>GitHub</Link></li>
            </ul>
          </nav>
        </div>
      </header>
       
      <main className=" bg-black text-white w-full py-10 pt-10">
        {/*hero section */}
        <section id="hero" className="flex items-center justify-between mx-10 py-20 mt-10">
          <div className='text-left w-1/2'>
          <h2 data-aos="fade-right" data-aos-duration="800" className="text-5xl font-extrabold">Hi, I am </h2>
          <h1 data-aos="fade-right" data-aos-duration="1000" className="text-6xl font-extrabold text-yellow-400">Ramdas Singh,</h1>
          <div data-aos="zoom-in-right" data-aos-duration="500">
          <h2 className="mt-3 text-3xl font-bold">
             I'm a <span className="text-purple-600">
             <Typewriter
                words={['MERN Stack Developer', 'React Developer', 'Node.js Developer']}
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
          </div>

          <div data-aos="fade-left" className='w-1/2 flex justify-center m-10'>
            <img src='/computer1.jpg' alt="profile" className='w-50 h-50 shadow-lg' />
          </div>
        </section>

        {/*About*/}
        <section data-aos="fade-down" id="about" className="text-left mx-10 py-20 mt-20">
          <h1 data-aos="zoom-out" className="text-6xl text-center font-bold mb-8">About Me</h1>
          <h2 className="text-4xl font-bold">
             Hey, I'm <span className="text-yellow-400">Ramdas Singh</span><br/>
             <span className="text-purple-600"> MERN Stack Developer</span><br/> 
             who thrives on building high-performance,<br/> scalable, and user-centric applications.
          </h2>
  
          <p className="mt-5 text-xl leading-relaxed">
          I specialize in crafting blazing-fast web applications with React, Next.js, Node.js, Express, and MongoDB.  
          My mission? To solve real-world problems** through **clean code, intuitive UI, and robust backend architecture.
          I don’t just build websites—I create **experiences that drive impact 🚀.
          </p>

          <p className="mt-5 text-xl leading-relaxed">
          I thrive in fast-paced environments, love debugging the impossible, and constantly push myself to learn, adapt, and innovate. 
          Whether it’s optimizing APIs for speed, architecting scalable databases, or designing pixel-perfect frontends,  
          I bring a problem-solving mindset and a get-it-done attitude.
          </p>

          <p className="mt-5 text-xl font-bold text-yellow-300">
          Let’s connect and build something extraordinary together! 💡
          </p>

          <div data-aos="zoom-out" className='mt-8'>
           <a href='/Ramdas Singh D.pdf' download className='bg-yellow-500 text-black px-6 py-3 text-lg font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300'>
           📄 Download CV
           </a>
          </div>
        </section>
        
        {/*Skills*/} 
        
        <section id="skills" className="mx-10 py-20 mt-10">                                                
          <h3 data-aos="zoom-out" className="text-6xl text-center font-bold mb-12">Skills</h3>
          <div data-aos="zoom-in" className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
            {/* Frontend Skills */}
            <div className="p-6 border rounded-lg shadow-lg bg-gray-900 transition-transform hover:scale-105 hover:shadow-xl hover:border-yellow-400 hover:bg-gray-800 duration-300">
              <h4 className="text-3xl font-semibold text-yellow-400 mb-4">Frontend Development</h4>
              <ul className="list-disc list-inside text-xl text-gray-300">
                <li>HTML & CSS</li>
                <li>JavaScript</li>
                <li>React.js & Next.js</li>
                <li>Tailwind CSS & Bootstrap</li>
                <li>Redux & Context API</li>
                <li>Responsive & Mobile-first Design</li>
              </ul>
            </div>
            {/* Backend Skills */}
            <div className="p-6 border rounded-lg shadow-lg bg-gray-900 transition-transform hover:scale-105 hover:shadow-xl hover:border-yellow-400 hover:bg-gray-800 duration-300">
              <h4 className="text-3xl font-semibold text-yellow-400 mb-4">Backend Development</h4>
              <ul className="list-disc list-inside text-xl text-gray-300">
                <li>Node.js & Express.js</li>
                <li>MongoDB & Mongoose</li>
                <li>RESTful APIs & GraphQL</li>
                <li>JWT Authentication & OAuth</li>
                <li>WebSockets & Real-time Data</li>
                <li>Cloud Storage (AWS, Firebase)</li>
              </ul>
            </div>
          </div>
        </section>

        {/*Projects*/}
        <section id="projects" className="py-10 px-10">
          <h3 data-aos="zoom-out" className="text-6xl text-center font-bold mb-8">Projects</h3>
          <div data-aos="flip-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'HRMS Management', img: '/HRMS view.png', link: 'https://hrms-management.vercel.app/' },
              { title: 'Social Media App', img: '/project2.jpg', link: 'https://socialapp.example.com' },
              { title: 'Blog CMS', img: '/project3.jpg', link: 'https://blogcms.example.com' }
            ].map((project, index) => (
              <div key={index} className="p-4 border rounded-lg shadow bg-gray-800 transition transform hover:scale-105 hover:shadow-2xl hover:border-yellow-400 hover:bg-gray-700 duration-300">
                <img src={project.img} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
                <h4 className="text-xl font-semibold text-yellow-400">{project.title}</h4>
                <p className="mt-2 text-gray-300">A full-stack application built using the MERN stack.</p>
                <a href={project.link} target="_blank" className="mt-4 inline-block bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300">Live Demo</a>
              </div>
            ))}
          </div>
  
        </section>
      </main>

      <footer className="bg-gray-900 text-white text-center p-4">
      <div className="flex justify-center space-x-6 mb-3">
    <a data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="700" data-aos-delay="300" href="https://wa.me/9877323956" target="_blank" rel="noopener noreferrer" className="text-green-600 text-4xl hover:text-green-500 aos-init aos-animate">
      <FaWhatsapp />
    </a>
    <a data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="700" data-aos-delay="400" href="https://github.com/Ramdas-developer" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-4xl hover:text-gray-500">
      <FaGithub />
    </a>
    <a data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="700" data-aos-delay="500" href="https://www.linkedin.com/in/ramdas-singh/" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-4xl hover:text-blue-500">
      <FaLinkedin />
    </a>
    <a data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="700" data-aos-delay="600" href="mailto:ramdassinghmt30@gmail.com" className="text-red-400 text-4xl hover:text-red-500" target="_blank" rel="noopener noreferrer">
      <FaEnvelope />
    </a>
  </div>
        {/* <p>&copy; 2025 Your Name. All rights reserved.</p> */}

      </footer>
    </>
  );
}

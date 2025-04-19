import  React from 'react';

export default function Services() {
   return(
     <>
     <div className="text-white w-screen h-[70vh]   flex  items-center justify-center p-5">
  <div className="w-full md:w-[80%] p-5 items-center justify-center ">
    <h1 className="text-2xl font-bold mt-5 text-center">
      My <span className="glow-text m-2">Services</span>
    </h1>

    <div className="flex flex-wrap gap-4 mt-5 justify-center">
      {/* Service Card 1 */}
      <div className="w-full sm:w-[45%] md:w-[30%] overflow-hidden border border-[#22d3ee] shadow-md rounded-lg p-4 hover:scale-105 transition-all duration-300">
        <h2 className="text-lg font-semibold mb-2 glow-text">Frontend Development</h2>
        <p className="text-sm">
          Modern and responsive UI using <strong>React.js</strong>, <strong>Tailwind CSS</strong>, and reusable components.
        </p>
      </div>

      {/* Service Card 2 */}
      <div className="w-full sm:w-[45%] md:w-[30%] overflow-hidden border border-[#22d3ee] shadow-md rounded-lg p-4 hover:scale-105 transition-all duration-300">
        <h2 className="text-lg font-semibold mb-2 glow-text">Backend Development</h2>
        <p className="text-sm">
          Build secure and scalable APIs with <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MongoDB</strong>.
        </p>
      </div>

      {/* Service Card 3 */}
      <div className="w-full sm:w-[45%] md:w-[30%] overflow-hidden border border-[#22d3ee] shadow-md rounded-lg p-4 hover:scale-105 transition-all duration-300">
        <h2 className="text-lg font-semibold mb-2 glow-text">Full Stack Projects</h2>
        <p className="text-sm">
          Complete web applications from design to deployment — frontend, backend, and database integration.
        </p>
      </div>
    </div>
  </div>
</div>
     </>
   )
}
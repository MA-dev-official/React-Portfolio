import  React from 'react';

export default function About() {
   return(
     <>
     <div className="text-white w-screen flex flex-col sm:flex-row sm:container mx-auto items-center justify-center p-5">
  <div className="w-full sm:w-[60%] p-5 flex flex-col overflow-hidden">
    <h1 className="text-2xl font-bold mt-10">
      About <span className="glow-text m-2">Me</span>
    </h1>
    <p className="text-sm mt-3">
      I'm <span className="glow-text">Muhammad Ahmad</span>, a passionate and self-taught <strong>Full Stack Web Developer</strong> from Pakistan. I specialize in creating fast, responsive, and modern web applications using the latest technologies like <strong>React.js, Node.js, MongoDB</strong>, and <strong>Tailwind CSS</strong>.
    </p>
    <p className="text-sm mt-2">
      From designing beautiful frontends to building powerful backends, I love solving real-world problems with code. I started my journey by learning HTML, CSS, and JavaScript on mobile, and now I'm building complete apps and exploring frameworks like <strong>Next.js</strong> and <strong>Express.js</strong>.
    </p>
    <p className="text-sm mt-2">
      I'm always up for a challenge and constantly working on improving my skills, learning new technologies, and collaborating with developers around the world.
    </p>
    <p className="text-sm mt-2">
      Let's build something amazing together — feel free to <span className="glow-text">connect</span> with me!
    </p>

    <div className="flex gap-4 mt-5">
      <button className="bg-[#22d3ee] p-1 w-[100px] text-black rounded-lg shadow">My Work</button>
      <button className="border-2 border-[#22d3ee] p-1 w-[100px] rounded-lg shadow glow-text">Resume</button>
    </div>
  </div>
</div>
     </>
   )
}
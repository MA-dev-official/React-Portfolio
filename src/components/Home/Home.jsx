import  React from 'react';
import profile from '../../assets/profile.jpeg'
export default function Home() {
   return(
     <>
     <div className="text-white  w-screen flex flex-col lg:flex-row-reverse sm:container  mx-auto items-center justify-center   p-5 sm:pt-20 ">
     <div className="size-[250px] md:size-[350px] overflow-hidden profileBorder rounded-full pb-8  m-2 relative z-10 ">
     <img src={profile} alt="profile" className="rounded-full w-full  h-full object-cover " />
     </div>
     <div className="w-full sm:w-[60%]   p-5 flex flex-col   overflow-hidden">
     <h1 className="text-2xl font-bold mt-6">Hi, I'm <span className="glow-text m-2">Muhammad</span>Ahmad</h1>
  <div className="flex relative size-fit ">
  <h2 className="text-xl font-bold">I'm a full stack<span className="glow-text m-2">Web Developer</span></h2><span className="Typing"></span>
  </div>
       <p className="text-sm">
       Passionate Web Developer 💻 | Creating clean, responsive 
websites 🌐 | Always learning & building cool stuff 🚀 | Let's connect & create something amazing together! 🤝
       </p>
       <div className="flex gap-4 mt-4">
         <div className="size-fit rounded-full">
  <div className="inline-block rounded-full shadow">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="#22d3ee"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  </div>
</div>
       <div className= " size-fit rounded-full ">
       <a 
  href="https://github.com/MA-dev-official?tab=overview&from=2025-04-01&to=2025-04-21" 
  target="_blank" 
  rel="noopener noreferrer"
  className="inline-block  rounded-full shadow "
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="#22d3ee"
    stroke="black"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 1C5.925 1 1 5.925 1 12c0 4.867 3.163 8.984 7.548 10.435.552.102.752-.24.752-.533 0-.263-.01-1.137-.015-2.063-3.073.668-3.719-1.48-3.719-1.48-.502-1.276-1.227-1.616-1.227-1.616-1.003-.686.076-.672.076-.672 1.108.078 1.69 1.138 1.69 1.138.986 1.688 2.587 1.2 3.22.918.1-.714.386-1.2.702-1.477-2.455-.279-5.037-1.228-5.037-5.465 0-1.207.432-2.194 1.138-2.967-.114-.28-.492-1.405.108-2.93 0 0 .927-.296 3.036 1.134a10.52 10.52 0 0 1 2.766-.372c.938.004 1.884.127 2.766.372 2.106-1.43 3.032-1.134 3.032-1.134.602 1.525.224 2.65.11 2.93.708.773 1.136 1.76 1.136 2.967 0 4.248-2.586 5.182-5.047 5.455.396.342.75 1.017.75 2.05 0 1.48-.014 2.673-.014 3.037 0 .296.198.64.756.53C19.84 20.98 23 16.867 23 12c0-6.075-4.925-11-11-11z"/>
  </svg>
</a>
       </div>
         <div className="size-fit rounded-full">
  <a 
    href="https://www.instagram.com/m.a_dev_official?igsh=MTdscWxmeWc2dXlrYg==" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-block rounded-full shadow"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="#22d3ee"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/>
    </svg>
  </a>
</div>
         <div className="size-fit rounded-full">
  <div className="inline-block rounded-full shadow">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="#22d3ee"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.3 4.3 0 0 0 1.89-2.37 8.66 8.66 0 0 1-2.73 1.04 4.27 4.27 0 0 0-7.27 3.89A12.14 12.14 0 0 1 3.16 4.58a4.27 4.27 0 0 0 1.32 5.7 4.2 4.2 0 0 1-1.94-.53v.05a4.27 4.27 0 0 0 3.42 4.18 4.3 4.3 0 0 1-1.93.07 4.27 4.27 0 0 0 3.98 2.96 8.57 8.57 0 0 1-5.3 1.83A8.72 8.72 0 0 1 2 19.54a12.06 12.06 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2v-.56A8.65 8.65 0 0 0 24 5.1a8.36 8.36 0 0 1-2.54.7z"/>
    </svg>
  </div>
           
</div>
       </div>

    <div className="flex gap-4 mt-5">
    <button className="bg-[#22d3ee] p-1 w-[80px] text-black rounded-lg shadow ">Hire</button>
    <button className="border-2 border-[#22d3ee] p-1 w-[80px] rounded-lg shadow glow-text">Contact</button>  
    </div>  
     </div>   
     </div>
     </>
   )
}

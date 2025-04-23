import  React from 'react';

export default function Contact() {
   return(
     <>
     <div className="text-white w-screen flex flex-col items-center justify-center p-5">
  <div className="w-full sm:w-[80%] md:w-[60%] p-5">
    <h1 className="text-2xl font-bold text-center mt-5">
      <span className="glow-text">Contact</span> Me
    </h1>
    <p className="text-center text-sm mt-2">
      Have a project in mind or just want to say hello? Fill out the form and let's connect!
    </p>

    <form className="mt-6 flex flex-col gap-4">
      <input
        type="text"
        placeholder="Your Name"
        className="p-2 rounded-md bg-transparent border border-[#22d3ee] text-white focus:outline-none"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="p-2 rounded-md bg-transparent border border-[#22d3ee] text-white focus:outline-none"
      />
      <textarea
        rows="5"
        placeholder="Your Message"
        className="p-2 rounded-md bg-transparent border border-[#22d3ee] text-white focus:outline-none resize-none"
      ></textarea>
      <button
        type="submit"
        className="bg-[#22d3ee] text-black rounded-md p-2 mt-2 hover:bg-cyan-400 transition-all duration-300"
      >
        Send Message
      </button>
    </form>
  </div>
</div>
     </>
   )
}
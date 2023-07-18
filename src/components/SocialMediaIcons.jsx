import linkdein from "../assets/linkedin.png";
import fb from "../assets/facebook.png";
import ig from "../assets/instagram.png"
import git from "../assets/github.png"

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center w-1/3 md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/Aenon.santiago"
        target="_blank"
        rel="noreferrer"
      >
        <img src={fb} alt="fb"/>
      </a>

      
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/aenon-jorish-santiago-466492246/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkdein} alt="ig"/>
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/aenon.j/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={ig} alt="ig"/>
      </a>

      <a
        className="mt-[2px] hover:opacity-50 transition duration-500"
        href="https://github.com/aenonjori"
        target="_blank"
        rel="noreferrer"
      >
        <img src={git} alt="github"/>
        
      </a>
    </div>
  );
};

export default SocialMediaIcons;

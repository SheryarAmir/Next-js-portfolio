import { navlinks } from '@/constant/constant';
import { CgClose } from 'react-icons/cg';
import { Link as ScrollLink } from 'react-scroll'; // Use ScrollLink here

// Props type
type props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: props) => {
  const navOpen = showNav ? 'translate-x-0' : '-translate-x-[100%]';

  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black h-screen opacity-70`}
      ></div>

      {/* Navlinks */}
      <div
        className={`text-white ${navOpen} transform transition-all duration-500 delay-300 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#0f0715] space-y-6 z-[10000]`}
      >
        {navlinks.map((navlink) => {
          return (
            <ScrollLink
              key={navlink.id}
              to={navlink.URL} // The URL corresponds to the section ID
              smooth={true}
              duration={1000} // Adjust this value for slower scroll (1000 ms = 1 second)
              onClick={closeNav} // Close the mobile nav when a link is clicked
            >
              <p className="nav__link text-[20px] ml-12 border-b-[1.5px] pt-6 sm:text-[30px]">
                {navlink.label}
              </p>
            </ScrollLink>
          );
        })}
        {/* Close button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white"
        />
      </div>
    </div>
  );
};

export default MobileNav;

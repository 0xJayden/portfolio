export default function Navbar() {
  return (
    <div id="home" className="w-full flex justify-between font-normal sm:px-10">
      <p>Jayden Davila</p>
      <ul className="flex justify-between w-[200px]">
        <li className="hover:text-[#5adfaa] cursor-pointer transition-all duration-300 ease-in-out">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="hover:text-[#5adfaa] cursor-pointer transition-all duration-300 ease-in-out">
          <a href="#socials">Socials</a>
        </li>
        {/* <li className="hover:text-[#5adfaa] cursor-pointer transition-all duration-300 ease-in-out">
          Bio
        </li> */}
      </ul>
    </div>
  );
}

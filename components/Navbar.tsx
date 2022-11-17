export default function Navbar() {
  return (
    <div className="w-full flex justify-between font-normal">
      <p>Jayden Davila</p>
      <ul className="flex justify-between w-[200px]">
        <li className="hover:text-[#5adfaa] cursor-pointer transition-all duration-300 ease-in-out">
          Portfolio
        </li>
        <li>Contact</li>
        <li>Bio</li>
      </ul>
    </div>
  );
}

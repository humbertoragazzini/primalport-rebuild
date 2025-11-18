import { FaBeer } from "react-icons/fa";

export default function PpButton() {
  return (
    <button className="border-2 border-white text-white rounded-xl py-3 px-4 flex items-center">
      <span className="block">Some text for the button</span>
      <FaBeer size={32} className="ml-3" />
    </button>
  );
}

import { Mail, MapPin, Phone } from "lucide-react";
import logo from '../../../assets/logo.png'
const Footer = () => {
  return (
    <footer className="flex flex-col gap-3 w-full bg-blue-100 border-t p-5 md:p-10">
      <div className="border-b w-full flex flex-col md:flex-row md:justify-between gap-3">
        <div className="flex">
          <img className="h-8" src={logo} alt="Logo" />
        </div>
        <div className="flex-1 flex flex-col md:flex-row justify-end gap-4">
          <div className="flex gap-2 items-center">
            <Phone size={12} className="text-blue-500" />
            <h2 className="text-sm text-gray-600">+20 1025946540</h2>
          </div>
          <div className="flex gap-2 items-center">
            <Mail size={12} className="text-blue-500" />
            <h2 className="text-sm text-gray-600">shofy@gmail.com</h2>
          </div>
          <div className="flex gap-2 items-center">
            <MapPin size={12} className="text-blue-500" />
            <h2 className="text-sm text-gray-600">Sheben Elkom</h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <h3 className="text-xs text-gray-700">
          © 2024 . All rights reserved by [Eng Ibrahim Shebl]
        </h3>
      </div>
    </footer>
  );
}
export default Footer
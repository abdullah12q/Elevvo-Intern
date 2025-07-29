import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-8 mt-16">
      <div className="mb-4">
        <a href="#" className="mx-2 text-blue-600">
          Contact
        </a>
        <a href="#" className="mx-2 text-blue-600">
          Privacy
        </a>
      </div>
      <div className="flex justify-center mx-2 gap-4">
        <a href="https://wa.me/+201009977022" target="_blank">
          <FaWhatsapp size={24} color="green" />
        </a>
        <a href="https://www.instagram.com/abdullahmohamed91" target="_blank">
          <FaInstagram size={24} color="#E1306C" />
        </a>
      </div>
      <p className="mt-4 text-sm text-gray-600">
        © 2025 TaskFlow. All rights reserved.
      </p>
    </footer>
  );
}

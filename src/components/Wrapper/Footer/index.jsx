import { Divider } from "antd";

const Footer = () => {
  return (
    <div className="bg-[#eaeef2] mt-4 py-9">
      <footer className="container px-2 md:p-0 mx-auto flex justify-around flex-wrap">
        <div className="flex flex-col items-center">
          <img src="/logo.svg" width={50} />
          <p className="text-[#c1c9d1] text-center md:text-left">
            Specialized in providing high-quality earbuds for you
          </p>
        </div>
        <div>
          <p className="text-md mb-3">SHOP</p>
          <ul className="text-[#c1c9d1]">
            <li>
              <a
                className="hover:text-black transition-all duration-200"
                href="#"
              >
                Earbuds
              </a>
            </li>
            <li>
              <a
                className="hover:text-black transition-all duration-200"
                href="#"
              >
                Headphones
              </a>
            </li>
            <li>
              <a
                className="hover:text-black transition-all duration-200"
                href="#"
              >
                Sport Headsets
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-md mb-3">COMPANY</p>
          <ul className="text-[#c1c9d1]">
            <li>
              <a
                className="hover:text-black transition-all duration-200"
                href="#"
              >
                About us
              </a>
            </li>
            <li>
              <a
                className="hover:text-black transition-all duration-200"
                href="#"
              >
                Contacts
              </a>
            </li>
            <li>
              <a
                className="hover:text-black transition-all duration-200"
                href="#"
              >
                Affiliates
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-md mb-3">SUPPORT</p>
          <ul className="text-[#c1c9d1]">
            <li>
              <a
                className="hover:text-black transition-all duration-200"
                href="#"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                className="hover:text-black transition-all duration-200"
                href="#"
              >
                Cookie Policy
              </a>
            </li>
            <li>
              <a
                className="hover:text-black transition-all duration-200"
                href="#"
              >
                Terms of Use
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="container mx-auto">
        <Divider />
        <p className="text-center text-muted">Copyright © 2023 Niteki</p>
      </div>
    </div>
  );
};

export default Footer;

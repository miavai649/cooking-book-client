import { Footer } from "flowbite-react";
import React from "react";
import logo from '../../assets/brand-icon/restaurant-menu.png';

const MyFooter = () => {
    return (
        <Footer container={true}>
  <div className="w-full text-center">
    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
      <Footer.Brand
        href="https://flowbite.com"
        src={logo}
        alt="Flowbite Logo"
        name="Cooking Book"
      />
      <Footer.LinkGroup>
        <Footer.Link href="#">
          About
        </Footer.Link>
        <Footer.Link href="#">
          Privacy Policy
        </Footer.Link>
        <Footer.Link href="#">
          Licensing
        </Footer.Link>
        <Footer.Link href="#">
          Contact
        </Footer.Link>
      </Footer.LinkGroup>
    </div>
    <Footer.Divider />
    <Footer.Copyright
      href="#"
      by="Mahmudul Haque Noor™"
      year={2023}
    />
  </div>
</Footer>
    )
}

export default MyFooter;
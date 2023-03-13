import Facebook from "../assets/img/Facebook.svg";
import Instagram from "../assets/img/Instagram.svg";
import Twitter from "../assets/img/Twitter.svg";
import logocoffee from "../assets/img/logo.svg";

function Footer() {
  return (
    <div>
      <footer className="bg-gray-100 py-20">
        <div className="container mx-auto max-w-5xl flex flex-row  space-x-24">
          <div className="flex-1 space-y-5">
            <img src={logocoffee} alt="logo lasles vpn" className="w-12" />
            <div>
              Coffee Shop is a store that sells some good <br />
              meals, and especially coffee. We provide <br />
              high quality beans
            </div>
            <div className="flex flex-row">
              <img src={Facebook} alt="facebook icon" className="w-16 h-16" />
              <img src={Twitter} alt="twitter icon" className="w-16 h-16" />
              <img src={Instagram} alt="IG icon" className="w-16 h-16" />
            </div>
            <div>©2023Coffeeshop</div>
          </div>
          <div className="">
            <div className="text-lg font-semibold mb-6">Product</div>
            <ul className="space-y-6 text-sm text-gray-500">
              <li>Download</li>
              <li>Pricing</li>
              <li>Locations</li>
              <li>Countries</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <div className="text-lg font-semibold mb-6">Engage</div>
            <ul className="space-y-6  text-sm text-gray-500">
              <li>Coffe Shop ? </li>
              <li>FAQ</li>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

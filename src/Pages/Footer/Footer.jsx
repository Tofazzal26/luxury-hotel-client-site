import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="p-10 bg-base-200 text-base-content">
        <div className="footer container mx-auto">
          <nav className="space-y-2">
            <h6 className="text-black text-xl font-semibold">Products</h6>
            <a className="link link-hover font-semibold text-[14px]">
              Prices Drop
            </a>
            <a className="link link-hover font-semibold text-[14px]">
              New Products
            </a>
            <a className="link link-hover font-semibold text-[14px]">
              Best Sales
            </a>
            <a className="link link-hover font-semibold text-[14px]">
              Contact Us
            </a>
          </nav>
          <nav className="space-y-2">
            <h6 className="text-black text-xl font-semibold">Login</h6>
            <a className="link link-hover font-semibold text-[14px]">Stores</a>
            <a className="link link-hover font-semibold text-[14px]">Login</a>
            <a className="link link-hover font-semibold text-[14px]">
              Contact Us
            </a>
            <a className="link link-hover font-semibold text-[14px]">
              My Account
            </a>
          </nav>
          <nav className="space-y-2">
            <h6 className="text-black text-xl font-semibold">Your Account</h6>
            <a className="link link-hover font-semibold text-[14px]">
              Personal Info
            </a>
            <a className="link link-hover font-semibold text-[14px]">Orders</a>
            <a className="link link-hover font-semibold text-[14px]">Login</a>
            <a className="link link-hover font-semibold text-[14px]">
              Addresses
            </a>
          </nav>
          <form className="space-y-2">
            <h6 className="text-black text-xl font-semibold">
              Join Our Newsletter Now
            </h6>
            <fieldset className="form-control w-80 space-y-2">
              <label className="label">
                <span className="label-text font-semibold text-[14px]">
                  Get E-mail updates about our latest shop and special offers.s
                </span>
              </label>
              <div className="join">
                <input
                  type="text"
                  placeholder="Your Email Address"
                  className="input input-bordered join-item"
                />
                <button className="btn bg-[#94c341] text-white join-item">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
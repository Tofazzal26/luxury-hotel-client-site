import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="p-10 bg-base-200 text-base-content">
        <div className="footer container mx-auto">
          <nav className="space-y-2">
            <h6 className="text-black text-xl font-semibold">Location</h6>
            <a className="link link-hover font-semibold text-[14px]">
              Barcelona
            </a>
            <a className="link link-hover font-semibold text-[14px]">London</a>
            <a className="link link-hover font-semibold text-[14px]">
              New Work
            </a>
            <a className="link link-hover font-semibold text-[14px]">Paris</a>
          </nav>
          <nav className="space-y-2">
            <h6 className="text-black text-xl font-semibold">Social</h6>
            <a className="link link-hover font-semibold text-[14px]">
              Instagram
            </a>
            <a className="link link-hover font-semibold text-[14px]">
              Facebook
            </a>
            <a className="link link-hover font-semibold text-[14px]">Twitter</a>
            <a className="link link-hover font-semibold text-[14px]">
              Linkdein
            </a>
          </nav>
          <nav className="space-y-2">
            <h6 className="text-black text-xl font-semibold">Language</h6>
            <a className="link link-hover font-semibold text-[14px]">English</a>
            <a className="link link-hover font-semibold text-[14px]">France</a>
            <a className="link link-hover font-semibold text-[14px]">
              United State
            </a>
          </nav>
          <form className="space-y-2">
            <h6 className="text-black text-xl font-semibold">
              Join Our Newsletter Now
            </h6>
            <fieldset className="form-control lg:w-80 space-y-2">
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
                <button className="btn bg-[#94c341] text-white join-item px-2 lg:text-base lg:px-4 text-[12px] py-2">
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

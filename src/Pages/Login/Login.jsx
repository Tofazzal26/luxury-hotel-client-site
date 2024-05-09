const Login = () => {
  return (
    <div className="min-h-[calc(100vh-332px)]">
      <div className="mt-[80px]">
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  ">
          <div className="flex flex-col justify-between">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
                Let's talk!
              </h2>
              <div className="">Vivamus in nisl metus? Phasellus.</div>
            </div>
            <img
              src="assets/svg/doodle.svg"
              alt=""
              className="p-6 h-52 md:h-64"
            />
          </div>
          <form noValidate="" className="space-y-6">
            <div>
              <label htmlFor="email" className="text-[15px] font-semibold">
                Username or email
              </label>
              <input
                id="email"
                type="email"
                placeholder=""
                className="w-full p-3 border outline-none rounded"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-[15px] font-semibold">
                Passwords
              </label>
              <input
                id="password"
                type="password"
                className="w-full p-3 border outline-none rounded "
              />
            </div>
            <button
              type="Login"
              className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-[#94c341] text-white "
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import { useForm } from "react-hook-form";
import newsLetter from "../../../public/newsletter/newsletter.gif";
const NewsLetter = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
  };

  return (
    <div>
      <div className="my-12">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
          <div className="col-span-2">
            <div>
              <img src={newsLetter} alt="" />
            </div>
          </div>
          <div className="col-span-3 border">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 lg:p-8"
            >
              <div className="space-y-4">
                <h1 className="text-center font-semibold text-3xl">
                  JOIN OUR NEWSLETTER
                </h1>
                <p className="font-semibold text-lg text-center mx-auto text-[#8a8a8a] lg:w-[500px]">
                  Subscribe our newsletter to receive the lates news and
                  exclusive offers every week, No Span
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="w-full p-3 border outline-none mt-4"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-500">
                      This Email field is required
                    </span>
                  )}
                </div>

                <button className="w-full p-3 text-base font-bold tracking-wide uppercase rounded bg-[#ffae4c] text-white ">
                  SUBSCRIBE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

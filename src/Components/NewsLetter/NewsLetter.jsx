import { useForm } from "react-hook-form";
import newsLetter from "../../../public/newsletter/newsletter.gif";
import Swal from "sweetalert2";
import useAuthUser from "../../UseHooks/AllAuth/useAuthUser";

const NewsLetter = () => {
  const allAuth = useAuthUser();
  const { user } = allAuth;

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const name = data.name;
    const number = data.number;
    Swal.fire("We will let you know if we have any offers... Thanks You");
    reset();
  };

  return (
    <div>
      <div className="my-12">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 items-center">
          <div className="col-span-2">
            <div>
              <img src={newsLetter} alt="" />
            </div>
          </div>
          <div className="col-span-3 border">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-2 lg:p-8"
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
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full p-3 border outline-none mt-4"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-red-500">
                      This Name field is required
                    </span>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="number"
                    placeholder="Number"
                    className="w-full p-3 border outline-none mt-4"
                    {...register("number", { required: true })}
                  />
                  {errors.number && (
                    <span className="text-red-500">
                      This Number field is required
                    </span>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    readOnly
                    name="email"
                    defaultValue={user?.email}
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

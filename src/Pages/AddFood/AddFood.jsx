import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
const AddFood = () => {
  const [startDate, setStartDate] = useState(new Date());

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const name = data.name;
    const photo = data.photo;
    const email = data.email;
    const password = data.password;
  };

  return (
    <div className="min-h-[calc(100vh-332px)]">
      <div className="mt-[80px]">
        <div>
          <div className="mt-[80px]">
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg  md:px-12 lg:px-16 xl:px-32">
              <div className="border">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6 lg:p-8"
                >
                  <h1 className="text-3xl text-center font-semibold">
                    Add <span className="text-[#94c341]">Food</span>
                  </h1>

                  {/* first input 1 */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[15px] font-semibold">
                        Food Name
                      </label>
                      <input
                        type="text"
                        name="foodName"
                        placeholder=""
                        className="w-full p-3 border outline-none "
                        {...register("foodName", { required: true })}
                      />
                      {errors.foodName && (
                        <span className="text-red-500">
                          This Food Name field is required
                        </span>
                      )}
                    </div>
                    <div>
                      <label className="text-[15px] font-semibold">
                        Food Image
                      </label>
                      <input
                        type="text"
                        name="foodImage"
                        placeholder=""
                        className="w-full p-3 border outline-none "
                        {...register("foodImage", { required: true })}
                      />
                      {errors.foodImage && (
                        <span className="text-red-500">
                          This Food Image field is required
                        </span>
                      )}
                    </div>
                  </div>

                  {/*  input 2 */}

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[15px] font-semibold">
                        Food Quantity
                      </label>
                      <input
                        type="text"
                        name="foodQuantity"
                        placeholder=""
                        className="w-full p-3 border outline-none "
                        {...register("foodQuantity", { required: true })}
                      />
                      {errors.foodQuantity && (
                        <span className="text-red-500">
                          This Food Quantity field is required
                        </span>
                      )}
                    </div>
                    <div>
                      <label className="text-[15px] font-semibold">
                        Pickup Location
                      </label>
                      <input
                        type="text"
                        name="pickupLocation"
                        placeholder=""
                        className="w-full p-3 border outline-none "
                        {...register("pickupLocation", { required: true })}
                      />
                      {errors.pickupLocation && (
                        <span className="text-red-500">
                          This Pickup Location field is required
                        </span>
                      )}
                    </div>
                  </div>

                  {/* input 3 */}

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[15px] font-semibold">
                        Additional Notes
                      </label>
                      <input
                        type="text"
                        name="note"
                        placeholder=""
                        className="w-full p-3 border outline-none "
                        {...register("note", { required: true })}
                      />
                      {errors.note && (
                        <span className="text-red-500">
                          This Additional Notes field is required
                        </span>
                      )}
                    </div>
                    <div>
                      <label className="text-[15px] font-semibold">
                        Expired Date/Time
                      </label>
                      <br />
                      <h2 className="w-full border">
                        <DatePicker
                          className="py-[12px] px-3 outline-none"
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        />
                      </h2>
                    </div>
                  </div>

                  {/* input 4 */}

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[15px] font-semibold">Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder=""
                        className="w-full p-3 border outline-none "
                        {...register("name", { required: true })}
                      />
                      {errors.name && (
                        <span className="text-red-500">
                          This Name field is required
                        </span>
                      )}
                    </div>
                    <div>
                      <label className="text-[15px] font-semibold">Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder=""
                        className="w-full p-3 border outline-none "
                        {...register("email", { required: true })}
                      />
                      {errors.email && (
                        <span className="text-red-500">
                          This Email field is required
                        </span>
                      )}
                    </div>
                  </div>

                  {/* input 5 */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[15px] font-semibold">
                        Donator Image
                      </label>
                      <input
                        type="text"
                        name="donatorImage"
                        placeholder=""
                        className="w-full p-3 border outline-none "
                        {...register("donatorImage", { required: true })}
                      />
                      {errors.donatorImage && (
                        <span className="text-red-500">
                          This Donator Image field is required
                        </span>
                      )}
                    </div>
                    <div>
                      <label className="text-[15px] font-semibold">
                        Food Status
                      </label>
                      <input
                        type="text"
                        name="foodStatus"
                        placeholder=""
                        className="w-full p-3 border outline-none "
                        {...register("foodStatus", { required: true })}
                      />
                      {errors.foodStatus && (
                        <span className="text-red-500">
                          This Food Status field is required
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    type="Login"
                    className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-[#94c341] text-white "
                  >
                    Add Food
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFood;

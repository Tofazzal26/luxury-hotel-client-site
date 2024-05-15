import gallery1 from "../../../public/Gellary/Gelery1.jpg";
import gallery2 from "../../../public/Gellary/Gelery2.jpg";
import gallery3 from "../../../public/Gellary/Gelery3.jpg";
import gallery4 from "../../../public/Gellary/Gelery4.jpg";
import gallery5 from "../../../public/Gellary/Gelery5.jpg";
import gallery6 from "../../../public/Gellary/Gelery6.jpg";
import gallery7 from "../../../public/Gellary/Gelery7.jpg";
import gallery8 from "../../../public/Gellary/Gelery8.jpg";
import gallery9 from "../../../public/Gellary/Gelery9.jpg";
import gallery10 from "../../../public/Gellary/Gelery10.jpg";

const Gallary = () => {
  return (
    <div>
      <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          {/* Open the modal using document.getElementById('ID').showModal() method */}

          <img
            onClick={() => document.getElementById("my_modal_1").showModal()}
            src={gallery1}
            alt="1"
            className="style w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-warning absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <div
                className="bg-[url('../../../public/Gellary/Gelery1.jpg')]"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "50vh",
                  borderRadius: "10px",
                }}
              ></div>
            </div>
          </dialog>
          {/* Open the modal using document.getElementById('ID').showModal() method */}

          <img
            alt="2"
            src={gallery2}
            onClick={() => document.getElementById("my_modal_2").showModal()}
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          />
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-warning absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <div
                className="bg-[url('../../../public/Gellary/Gelery2.jpg')]"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "50vh",
                  borderRadius: "10px",
                }}
              ></div>
            </div>
          </dialog>
          <img
            alt="2"
            src={gallery3}
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          />
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-warning absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <div
                className="bg-[url('../../../public/Gellary/Gelery3.jpg')]"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "50vh",
                  borderRadius: "10px",
                }}
              ></div>
            </div>
          </dialog>
          <img
            alt="2"
            src={gallery4}
            onClick={() => document.getElementById("my_modal_4").showModal()}
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          />
          <dialog id="my_modal_4" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-warning absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <div
                className="bg-[url('../../../public/Gellary/Gelery4.jpg')]"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "50vh",
                  borderRadius: "10px",
                }}
              ></div>
            </div>
          </dialog>
          <img
            alt="2"
            src={gallery5}
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          />
          <dialog id="my_modal_5" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-warning absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <div
                className="bg-[url('../../../public/Gellary/Gelery5.jpg')]"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "50vh",
                  borderRadius: "10px",
                }}
              ></div>
            </div>
          </dialog>
          <img
            alt="2"
            src={gallery6}
            onClick={() => document.getElementById("my_modal_6").showModal()}
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          />
          <dialog id="my_modal_6" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-warning absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <div
                className="bg-[url('../../../public/Gellary/Gelery6.jpg')]"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "50vh",
                  borderRadius: "10px",
                }}
              ></div>
            </div>
          </dialog>
          <img
            alt="2"
            src={gallery7}
            onClick={() => document.getElementById("my_modal_7").showModal()}
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          />
          <dialog id="my_modal_7" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-warning absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <div
                className="bg-[url('../../../public/Gellary/Gelery7.jpg')]"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "50vh",
                  borderRadius: "10px",
                }}
              ></div>
            </div>
          </dialog>
          <img
            alt="2"
            src={gallery8}
            onClick={() => document.getElementById("my_modal_8").showModal()}
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          />
          <dialog id="my_modal_8" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-warning absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <div
                className="bg-[url('../../../public/Gellary/Gelery8.jpg')]"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "50vh",
                  borderRadius: "10px",
                }}
              ></div>
            </div>
          </dialog>
          <img
            alt="2"
            src={gallery9}
            onClick={() => document.getElementById("my_modal_9").showModal()}
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          />
          <dialog id="my_modal_9" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-warning absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <div
                className="bg-[url('../../../public/Gellary/Gelery9.jpg')]"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "50vh",
                  borderRadius: "10px",
                }}
              ></div>
            </div>
          </dialog>
          <img
            src={gallery10}
            alt="10"
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
          />
        </div>
      </section>
    </div>
  );
};

export default Gallary;

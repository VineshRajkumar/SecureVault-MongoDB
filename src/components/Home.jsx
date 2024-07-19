import React from "react";
import { useState, useEffect } from "react";
//to use react-tostify for notifications do npm install --save react-toastify then import these two statement
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [changePhotos, setChangePhotos] = useState(false);
  const [form, setform] = useState({ url: "", username: "", password: "" }); //form has the data of username password url
  const [formArray, setFormArray] = useState([]); //Array where multiple forms will be stored
  const [copied, setcopied] = useState(-1);

  const handleCopied = (index) => {
    const copytoclipboard = formArray[index];
    const format = `URL: ${copytoclipboard.url}\nUsername: ${copytoclipboard.username}\nPassword: ${copytoclipboard.password}`;
    navigator.clipboard.writeText(format);

    setcopied(index); //when clicked pass the index value to copied. So copied === index clicked so it will show "check_circle"
    setTimeout(() => {
      setcopied(-1); //for 1 sec let the copied value be the index then chnage it to -1 .Since copied after 1sec chnages to  copied !== index so it will show "content_copy"
    }, 1000);
  };
  const handleChangePhotoClick = () => {
    setChangePhotos(!changePhotos);
  };

  const getPasswordForMongoDB = async () => {
    let req = await fetch("http://localhost:3000/");

    let pass = await req.json();
    console.log(pass);
    setFormArray(pass);
  };

  // useEffect used to loading password       //you can check previous keys in console in application tab in localhost5173
  useEffect(() => {
    getPasswordForMongoDB();
  }, []);

  const SavePasswordOnClick = async () => {
    if (
      form.url.length >= 4 &&
      form.username.length >= 1 &&
      form.password.length >= 3
    ) {
      toast.success("Password Saved Successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      const newFormArray = [...formArray, form]; //unpack formarray add last elemt form(which has latest data)
      setFormArray(newFormArray); //this will update form array

      let res = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      
      //localStorage.setItem("data", JSON.stringify(newFormArray)); //saving form array in local stroage by converting it ot json string
      console.log("Done");
      setform({ url: "", username: "", password: "" });
    } else {
      toast("Error: Password Not Saved!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    //console.log(newFormArray); //form array takes time to get updated thats why newFormArray
  };
  const handleSavingFormToLocalStorage = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleEditToLocalStrg = async (index) => {
    const editing = formArray[index]; //taking the data of clicked item
    setform({
      ...form, //spread form then spred the url,password,username in the form tab
      url: editing.url,
      username: editing.username,
      password: editing.password,
    });
    const rmdata = formArray.filter((item, idx) => idx !== index); //deleting the selected index to edit
    const { _id } = formArray[index];
    setFormArray(rmdata);
    // if (onClick={SavePasswordOnClick}) {
      await fetch("http://localhost:3000/", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: _id }),
      });
      //localStorage.setItem("data", JSON.stringify(rmdata)); //deleting from localStorage also
    // }
  };

  const handleDeleteFromLocalStrg = async (index) => {
    let asktodel = confirm("Are you sure you want to delete this entry?");
    if (asktodel) {
      const rmdata = formArray.filter((item, idx) => idx !== index);
      const { _id } = formArray[index];
      setFormArray(rmdata);
      let res = await fetch("http://localhost:3000/", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: _id }),
      });
      // localStorage.setItem("data", JSON.stringify(rmdata));
      toast.error("Password Deleted!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div>
      {/* to use tostify:- put this tost container code and the thing for which you want to show toast place the toast emitter code there  */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="flex justify-center items-center mx-auto my-16 flex-col ">
        <div className="text-3xl font-bold flex py-2">
          <span className="text-black">Secure</span>
          <span className="text-green-500">Vault</span>
        </div>
        <div className="text-lg mb-7">
          <span>Your Data, Fortified</span>
        </div>
        <div></div>
        <div className="w-full  lg:w-[68%] sm:w-[75%] max-[640px]:w-[90%] mb-4">
          <input
            type="text"
            placeholder="Enter Website URL"
            className="w-full border-[2px] border-green-500 rounded-2xl   pl-8 focus:outline-none focus:border-black"
            value={form.url}
            name="url"
            onChange={handleSavingFormToLocalStorage}
          />
        </div>
        <div className="w-full  flex flex-row mb-8 justify-center ">
          <input
            type="text"
            placeholder="Enter UserName"
            className="w-full border-[2px] border-green-500 rounded-2xl lg:w-[50%] sm:w-[50%] max-[640px]:w-[50%] max-[640px]:placeholder:text-left max-[640px]:placeholder:text-xs   mx-2  pl-8 focus:outline-none focus:border-black "
            value={form.username}
            name="username"
            onChange={handleSavingFormToLocalStorage}
          />
          <div className=" relative flex items-center border-[2px] border-green-500 rounded-2xl lg:w-1/6 sm:w-[23%] max-[640px]:w-[35%] max-[640px]:text-xs max-[640px]:text-center mx-2  focus:outline-none focus:border-black">
            <input
              type={changePhotos ? "text" : "password"}
              placeholder="Enter Password"
              className="w-full rounded-2xl pl-8  flex-grow focus:outline-black max-[640px]:py-1 max-[640px]:pl-3   "
              value={form.password}
              name="password"
              onChange={handleSavingFormToLocalStorage}
            />
            <span
              className="material-symbols-outlined cursor-pointer right-1 absolute bg-white rounded-xl "
              onClick={() => {
                handleChangePhotoClick("visibility");
              }}
            >
              {changePhotos ? "visibility" : "visibility_off"}
            </span>
          </div>
        </div>
        <div>
          <button
            className="bg-green-400 border-[2px] hover:bg-green-300 border-black rounded-3xl px-7 py-1 flex justify-center items-center "
            onClick={SavePasswordOnClick}
          >
            {/* <to use lordicon  */}
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            <span className="px-2 font-sans font-semibold  ">Save</span>
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col  ">
        <div className="text-left w-[68%] text-xl font-bold max-[640px]:w-[87%] ">
          Your Passwords
        </div>
        {formArray.length === 0 ? (
          <div className="text-left w-[68%] text-base mt-10 mb-[30vh] max-[640px]:w-[87%]">
            No Passwords to Show
          </div>
        ) : (
          <table className="table-auto my-16 border-[2px] border-black  w-3/5  ">
            <thead className="bg-green-300">
              <tr>
                <th className="border-[2px] border-black py-3 px-1 max-[640px]:px-0 max-[321px]:text-[10px] max-[640px]:text-xs ">
                  Website URL
                </th>
                <th className="border-[2px] border-black py-3 px-1 max-[640px]:px-0 max-[321px]:text-[10px] max-[640px]:text-xs">
                  Username
                </th>
                <th className="border-[2px] border-black py-3 px-1 max-[640px]:px-0 max-[321px]:text-[10px] max-[640px]:text-xs">
                  Password
                </th>
                <th className="border-[2px] border-black py-3 px-1 max-[640px]:px-0 max-[321px]:text-[10px] max-[640px]:text-xs">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {formArray.map((item, index) => (
                <tr
                  key={index}
                  className="border-[2px] border-black py-3 px-1 max-[640px]:px-0 max-[321px]:text-[10px] max-[640px]:text-xs"
                >
                  <td className=" border-[2px] border-black py-3 px-1 max-[640px]:px-0 max-[321px]:text-[10px] max-[640px]:text-xs text-center">
                    <a href={item.url} target="_blank">
                      {item.url}
                    </a>
                  </td>

                  <td className="border-[2px] border-black py-3 px-1 max-[640px]:px-0 max-[321px]:text-[10px] max-[640px]:text-xs text-center">
                    {item.username}
                  </td>

                  <td className="border-[2px] border-black py-3 px-1 max-[640px]:px-0 max-[321px]:text-[10px] max-[640px]:text-xs text-center">
                    {"*".repeat(item.password.length)}
                  </td>

                  <td className="  border-[2px] border-black py-3 px-1 max-[640px]:px-0 max-[321px]:text-[10px] max-[640px]:text-xs text-center max-[889px]:flex max-[889px]:flex-col max-[889px]:items-center">
                    <span
                      class="material-symbols-outlined cursor-pointer "
                      onClick={() => handleCopied(index)}
                    >
                      {copied === index ? "check_circle" : "content_copy"}
                    </span>
                    <lord-icon
                      src="https://cdn.lordicon.com/igljtrxq.json"
                      trigger="hover"
                      colors="primary:#000000,secondary:#000000"
                      onClick={() => handleEditToLocalStrg(index)}
                    ></lord-icon>
                    <lord-icon
                      src="https://cdn.lordicon.com/vlnvqvew.json"
                      trigger="hover"
                      colors="primary:#000000,secondary:#000000"
                      onClick={() => handleDeleteFromLocalStrg(index)}
                    ></lord-icon>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Home;

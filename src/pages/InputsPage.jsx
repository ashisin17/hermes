import React, { useState } from "react";
// Import your logo image
import logoImage from "../images/logo.png";
import nameImage from "../images/name_only.png";
import "../output.css";
import BottomBar from "./BottomBar.jsx"

export default function InputsPage() {
  const [partySize, setPartySize] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handlePartySizeSelection = (size) => {
    setPartySize(`${size}`);
    // Close the dropdown
    setDropdownOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const data = {
      destination: formData.get("destination"),
      budget: formData.get("budget"),
      startDate: formData.get("startDate"),
      endDate: formData.get("endDate"),
      attractions: {
        museums: formData.get("museums") === "on",
        food: formData.get("food") === "on",
        shopping: formData.get("shopping") === "on",
        views: formData.get("views") === "on",
      },
      partySize,
    };

    console.log(data);

    // Replace the URL with your backend API endpoint
    // fetch("https://your-backend-api-endpoint.com/submit", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => response.json())
    //   .then((result) => {
    //     console.log("Success:", result);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };

  return (
    <div>
      <div className="ps-1rem">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Saved Trips</a></li>
                <li><a>Account</a></li>
              </ul>
            </div>
          </div>

        
          <div className="navbar-center">
            {/* <a className="font-bold text-2xl">Hermes</a> */}
            <img src={nameImage} alt="Logo" className="h-12 mt-2 -ml-3.5" />
          </div>
        </div>

        {/* end of navbar */}
        <form className="inputs flex flex-wrap pl-4 mt-8" onSubmit={handleSubmit}>
          <div className="flex-1 pr-4 ml-12 mb-4 flex flex-col">
            <div className="mb-6">
              <input type="text" name="destination" placeholder="Destination" className="input input-bordered input-sm w-full max-w-xs" />
            </div>
            <div className="mb-6">
              <input type="text" name="budget" placeholder="Budget" className="input input-bordered input-sm w-full max-w-xs" />
            </div>
            <div className="mb-6">
              <span className="label-text mr-2">Start Date:</span>
              <input type="date" name="startDate" className="input input-bordered input-sm w-full max-w-xs" style={{ width: '150px' }} />
            </div>
            <div>
              <span className="label-text mr-2">End Date: &nbsp;</span>
              <input type="date" name="endDate" className="input input-bordered input-sm w-full max-w-xs" style={{ width: '150px' }} />
            </div>
          </div>
          <div className="flex-1 pr-4 mb-4 ml-12 mr-12">
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text font-bold text-lg">Attractions:</span>
              </label>
              <label className="label cursor-pointer flex justify-between">
                <span className="label-text">Museums</span>
                <input type="checkbox" name="museums" className="checkbox checkbox-xs ml-2" />
              </label>
              <label className="label cursor-pointer flex justify-between">
                <span className="label-text">Food</span>
                <input type="checkbox" name="food" className="checkbox checkbox-xs ml-2" />
              </label>
              <label className="label cursor-pointer flex justify-between">
                <span className="label-text">Shopping</span>
                <input type="checkbox" name="shopping" className="checkbox checkbox-xs ml-2" />
              </label>
              <label className="label cursor-pointer flex justify-between">
                <span className="label-text">Views</span>
                <input type="checkbox" name="views" className="checkbox checkbox-xs ml-2" />
              </label>
            </div>
          </div>
          <div className="flex-1 pr-4 mb-4">
            <div className="dropdown dropdown-bottom ml-24 w-4/5 ">
              <div tabIndex={0} role="button" className="btn btn-ghost m-1 w-4/5 bg-lightgray" onClick={() => setDropdownOpen(!dropdownOpen)}>
                Party Size: {partySize}
              </div>
              {dropdownOpen && (
                <ul tabIndex={0} className="dropdown-content bg-lightgray z-[1] menu p-2 shadow rounded-box w-4/5">
                  <li><a onClick={() => handlePartySizeSelection("1")}>1</a></li>
                  <li><a onClick={() => handlePartySizeSelection("2")}>2</a></li>
                  <li><a onClick={() => handlePartySizeSelection("3")}>3</a></li>
                  <li><a onClick={() => handlePartySizeSelection("4")}>4</a></li>
                  <li><a onClick={() => handlePartySizeSelection("5")}>5</a></li>
                  <li><a onClick={() => handlePartySizeSelection("6")}>6</a></li>
                  <li><a onClick={() => handlePartySizeSelection("7")}>7</a></li>
                  <li><a onClick={() => handlePartySizeSelection("8+")}>8+</a></li>
                </ul>
              )}
            </div>
          </div>
          <div style={{ flex: '1 1 100%', textAlign: 'right', paddingRight: '16px', marginRight: '3rem' }}>
            <button type="submit" className="btn btn-ghost">Submit</button>
          </div>  

        </form>
      </div>
    </div>
  );
}

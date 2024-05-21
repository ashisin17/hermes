import React, { useRef, useState } from "react";

export default function InputsPage() {
  const dateInputRef = useRef(null);

  const handleDateButtonClick = () => {
    dateInputRef.current.click();
    dateInputRef.current.showPicker();

  };

  const [partySize, setPartySize] = useState("Party Size");

  const handlePartySizeSelection = (size) => {
    setPartySize(`Party Size: ${size}`);
  };
  return (
    <div>
      <div className="ps-1rem">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Saved Trips</a></li>
                <li><a>Account</a></li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <a className="btn btn-ghost text-xl">Hermes</a>
          </div>
        </div>
        <div className="inputs" style={{ display: 'flex', flexDirection: 'column', paddingLeft: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>

            <input type="text" placeholder="Destination" className="input input-bordered input-sm w-full max-w-xs" style={{ marginBottom: '16px', marginRight: '100px' }} />
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text font-bold" style={{ marginRight: '10px' }}>Attractions: </span>
                <span className="label-text " style={{ marginRight: '10px' }}>Museums</span>
                <input type="checkbox" defaultChecked className="checkbox checkbox-xs" style={{ marginRight: '10px' }} />
                <span className="label-text" style={{ marginRight: '10px' }}>Food</span>
                <input type="checkbox" defaultChecked className="checkbox checkbox-xs" style={{ marginRight: '10px' }} />
                <span className="label-text" style={{ marginRight: '10px' }}>Shopping</span>
                <input type="checkbox" defaultChecked className="checkbox checkbox-xs" style={{ marginRight: '10px' }} />
              </label>
            </div>
            <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="btn m-1">{partySize}</div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a onClick={() => handlePartySizeSelection("1")}>1</a></li>
                <li><a onClick={() => handlePartySizeSelection("2")}>2</a></li>
                <li><a onClick={() => handlePartySizeSelection("3")}>3</a></li>
                <li><a onClick={() => handlePartySizeSelection("4")}>4</a></li>
                <li><a onClick={() => handlePartySizeSelection("5")}>5</a></li>
                <li><a onClick={() => handlePartySizeSelection("6")}>6</a></li>
                <li><a onClick={() => handlePartySizeSelection("7")}>7</a></li>
                <li><a onClick={() => handlePartySizeSelection("8+")}>8+</a></li>
              </ul>
            </div>
          </div>
          <input type="text" placeholder="Budget" className="input input-bordered input-sm w-full max-w-xs" style={{ marginBottom: '16px' }} />

          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
            <span className="label-text" style={{ marginBottom: '10px', marginRight: '10px' }}>Start Date:</span>
            <input type="date" ref={dateInputRef} className="input input-bordered input-sm w-full max-w-xs" style={{ width: '150px', marginRight: '10px' }} />
            <span className="label-text" style={{ marginBottom: '10px', marginRight: '10px' }}>End Date:</span>
            <input type="date" ref={dateInputRef} className="input input-bordered input-sm w-full max-w-xs" style={{ width: '150px' }} />

          </div>
        </div>

      </div>


    </div>
  );
}
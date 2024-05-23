import React from "react";
import githubLogo from "../images/github.svg"; // Import your GitHub logo SVG
import "../output.css";

export default function BottomBar() {
  return (
    <>
      <div className="btm-nav flex justify-between items-center">
        <div className="flex-1 prose max-w-full">
          <h3 className="pl-8 text-black text-sm whitespace-nowrap">Hermes © 2024</h3>
        </div>
        <div className="flex items-end pr-8">
          <a href="https://github.com/ashisin17/hermes" className="btn btn-ghost text-black">
            <img src={githubLogo} alt="GitHub Logo" className="h-5 w-5" />
          </a>
          
        </div>
      </div>
    </>
  );
}

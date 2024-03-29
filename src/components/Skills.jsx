import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import C_Sharp from "../assets/C-Sharp.png";
import DotNet from "../assets/Dotnet.png";
import mysql from "../assets/mysql1.jpeg";
import mysqlserver from "../assets/mysqlserver.jpeg";
import docker from "../assets/docker1.jpeg";
import azure from "../assets/azure.jpeg";
import agile from "../assets/agile.png";
import jira from "../assets/jira.png";
import microservices from "../assets/microservices.png";
import "../css/General.css";
import Progress from "./Progress";

const Skills = ({ light }) => {
  const bgColor = light ? "bg-white" : "bg-[#0a192f]";
  //const textColor = light ? "text-dark" : "text-gray-300";
  const textColor1 = light ? "text-dark" : "text-[#ccd6f6]";
  const textColor2 = light ? "text-dark" : "text-[#8892b0]";
  return (
    <div name="skills" className={`w-full ${bgColor} general`}>
      {/* Container */}
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p
            className={`text-3xl font-bold inline border-b-4 border-yellow-600 ${textColor1}`}
          >
            Skills
          </p>
          <p className={`py-4 ${textColor2}`}>
            These are some of the technologies and tools I am proficient with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-9">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-5">
            <img
              className="w-20 mx-auto"
              src={C_Sharp}
              alt=".C_Sharp icon"
              style={{ marginTop: "-5px" }}
            />
            <p className={`mt-2 mb-4 ${textColor2}`}>C_Sharp</p>
            <Progress completed={90} />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-5">
            <img className="w-40 mx-auto" src={DotNet} alt=".Net icon" />
            <p className={`my-4 ${textColor2}`}>.Net</p>
            <Progress completed={90} />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-5">
            <img className="w-20 mx-auto" src={GitHub} alt="GITHUB icon" />
            <p className={`my-4 ${textColor2}`}>GIT & GITHUB</p>
            <Progress completed={90} />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-5">
            <img
              className="mx-auto"
              src={mysqlserver}
              alt="GITHUB icon"
              style={{ width: "100px" }}
            />
            <p className={`my-4 ${textColor2}`}>SQL Server</p>
            <Progress completed={80} />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-5">
            <img
              className="mx-auto"
              src={mysql}
              alt="GITHUB icon"
              style={{ width: "100px" }}
            />
            <p className={`my-4 ${textColor2}`}>MySQL</p>
            <Progress completed={80} />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-5">
            <img
              className="mx-auto"
              src={docker}
              alt="GITHUB icon"
              style={{ width: "100px" }}
            />
            <p className={`my-4 ${textColor2}`}>Docker</p>
            <Progress completed={80} />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-5">
            <img
              className="mx-auto"
              src={azure}
              alt="GITHUB icon"
              style={{ width: "100px" }}
            />
            <p className={`my-4 ${textColor2}`}>Azure</p>
            <Progress completed={80} />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-5">
            <img
              className="mx-auto"
              src={microservices}
              alt="GITHUB icon"
              style={{ width: "100px" }}
            />
            <p className={`my-4 ${textColor2}`}>Microservices</p>
            <Progress completed={85} />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-5">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="JAVASCRIPT icon"
            />
            <p className={`my-4 ${textColor2}`}>JAVASCRIPT</p>
            <Progress completed={80} />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-5">
            <img className="w-20 mx-auto" src={ReactImg} alt="REACT icon" />
            <p className={`my-4 ${textColor2}`}>REACT</p>
            <Progress completed={80} />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-5">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className={`my-4 ${textColor2}`}>HTML</p>
            <Progress completed={90} />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-5">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className={`my-4 ${textColor2}`}>CSS</p>
            <Progress completed={85} />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-5">
            <img className="w-20 mx-auto" src={Tailwind} alt="TAILWIND icon" />
            <p className={`my-4 ${textColor2}`}>TAILWIND</p>
            <Progress completed={85} />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-5">
            <img className="w-20 mx-auto" src={agile} alt="TAILWIND icon" />
            <p className={`my-4 ${textColor2}`}>AGILE</p>
            <Progress completed={90} />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-5">
            <img className="w-20 mx-auto" src={jira} alt="TAILWIND icon" />
            <p className={`my-4 ${textColor2}`}>JIRA</p>
            <Progress completed={90} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

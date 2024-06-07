import { useState } from "react";
import { MdSchool, MdWork } from "react-icons/md";
import {
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiCss3,
  SiHtml5,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiSequelize,
  SiRedis,
  SiGraphql,
  SiApollographql,
  SiAmazonaws,
  SiFirebase,
  SiSupabase,
  SiVercel,
  SiGithub,
  SiPostman,
  SiGit,
  SiVite,
  SiExpo,
  SiAndroidstudio,
  SiVisualstudiocode,
} from "react-icons/si";

export default function About() {
  const [selectedContent, setSelectedContent] = useState("profile");
  return (
    <div id="about" className="flex flex-col items-center min-h-screen">
      <h1 className="text-6xl font-bold mb-4 py-10">About Me</h1>

      {/* Menu */}
      <div class="w-full flex justify-center">
        <div class="max-w-6xl w-full mx-6">
          <div class="flex justify-between max-w-6xl">
            {/* Button 1 */}
            <button
              type="button"
              onClick={() => setSelectedContent("profile")}
              class={`flex-grow inline-flex items-center justify-center px-4 py-2 text-md font-medium text-gray-900 bg-indigo-300 border border-gray-900 rounded-l-lg hover:bg-gray-300 hover:text-gray-900 focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-300 focus:text-gray-900 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 ${
                selectedContent === "profile" ? "bg-gray-300 text-gray-900" : ""
              }`}
            >
              <svg
                class="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              Profile
            </button>

            {/* Button 2 */}
            <button
              type="button"
              onClick={() => setSelectedContent("education")}
              class={`flex-grow inline-flex items-center justify-center px-4 py-2 text-md font-medium text-gray-900 bg-indigo-300 border border-gray-900 hover:bg-gray-300 hover:text-gray-900 focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-300 focus:text-gray-900 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 ${
                selectedContent === "education"
                  ? "bg-gray-300 text-gray-900"
                  : ""
              }`}
            >
              <svg
                class="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <polygon points="12,3 1,9 12,15 23,9 " />
                <polygon points="19,12.8 12,17 5,12.8 5,17.2 12,21 19,17.2 " />
                <rect height="8" width="2" x="21" y="9" />
              </svg>
              Education
            </button>

            {/* Button 3 */}
            <button
              type="button"
              onClick={() => setSelectedContent("experience")}
              class={`flex-grow inline-flex items-center justify-center px-4 py-2 text-md font-medium text-gray-900 bg-indigo-300 border border-gray-900 hover:bg-gray-300 hover:text-gray-900 focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-300 focus:text-gray-900 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 ${
                selectedContent === "experience"
                  ? "bg-gray-300 text-gray-900"
                  : ""
              }`}
            >
              <svg
                class="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <g id="info" />
                <g id="icons">
                  <path
                    d="M18,7h-1V6c0-2.2-1.8-4-4-4h-2C8.8,2,7,3.8,7,6v1H6c-2.2,0-4,1.8-4,4v7c0,2.2,1.8,4,4,4l12,0c2.2,0,4-1.8,4-4v-7   C22,8.8,20.2,7,18,7z M10,6c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v1h-4V6z M13,19h-2c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1h2   c0.6,0,1,0.4,1,1C14,18.6,13.6,19,13,19z"
                    id="work"
                  />
                </g>
              </svg>
              Experience
            </button>

            {/* Button 4 */}
            <button
              type="button"
              onClick={() => setSelectedContent("skill")}
              class={`flex-grow inline-flex items-center justify-center px-4 py-2 text-md font-medium text-gray-900 bg-indigo-300 border border-gray-900 rounded-r-lg hover:bg-gray-300 hover:text-gray-900 focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-300 focus:text-gray-900 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 ${
                selectedContent === "skill" ? "bg-gray-300 text-gray-900" : ""
              }`}
            >
              <svg
                class="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M15,18H9c0,0.2,0,0.8,0,1c0,1.7,1.3,2,3,2s3-0.3,3-2C15,18.8,15,18.2,15,18z" />
                <path d="M13.5,20h-3c0,0.1,0,0.4,0,0.5c0,0.8,0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5C13.5,20.4,13.5,20.1,13.5,20z" />
                <path d="M19,9c0-3.9-3.2-7.1-7.1-7C8.2,2.1,5.1,5.1,5,8.7c-0.1,2.4,1,4.6,2.8,5.9C8.6,15.2,9,16.1,9,17v0h6v0c0-0.9,0.4-1.8,1.1-2.4  C17.9,13.4,19,11.3,19,9z" />
              </svg>
              Skill
            </button>
          </div>
        </div>
      </div>
      {/* End of Menu */}

      {/* Content */}
      {selectedContent === "profile" && (
        <div className="flex flex-col md:flex-row items-center justify-center md:space-y-0 md:space-x-10 mt-20 animate__animated animate__fadeInRight">
          <img
            className="w-60 h-60 md:w-96 md:h-96 object-cover rounded-full border-2 mb-6 md:mb-0"
            src="../../foto1.png"
            alt="user photo"
          />
          <div className="w-full md:w-1/2 animate__animated animate__fadeInRight">
            <p
              className="text-sm md:text-xl text-justify px-10"
              style={{ whiteSpace: "pre-line", fontFamily: "Poetsen One" }}
            >
              Hello! 👋 My name is Dea Puspita Dwi Andari. I'm a passionate
              full-stack developer based in Jakarta, Indonesia. My journey into
              the world of programming began when I enrolled in the{" "}
              <span className="text-blue-500">
                Fullstack Javascript Immersive Program at Hacktiv8 Indonesia.
              </span>
              {"\n"}
              <br />
              Graduating from the program in May 2024, I emerged with a solid
              foundation in both front-end and back-end development.
              {"\n"}
              <br />I specialize{" "}
              <span className="text-blue-500">
                in JavaScript, HTML, CSS, Typescript, and PHP Programming.
              </span>
              {"\n"}
              <br />
              As a developer, I am dedicated to continuously expanding my
              knowledge and skills to stay at the forefront of industry trends
              and best practices. I'm excited about the opportunity to
              collaborate and create meaningful experiences through technology.{" "}
              <span className="text-blue-500">
                Let's build something amazing together!
              </span>
            </p>
          </div>
        </div>
      )}

      {selectedContent === "education" && (
        <div class="flex items-center justify-center pt-20 p-4">
          <div class="flex flex-col grid-cols-9 p-20 mx-auto md:grid">
            <div class="flex md:contents flex-row-reverse">
              <div class="relative p-20 my-6 bg-blue-950 rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto animate__animated animate__fadeInRight">
                <h3 class="text-lg font-semibold lg:text-xl">
                  HACKTIV8 INDONESIA
                </h3>
                <p class="mt-2 leading-6 font-bold">
                  FULLSTACK JAVASCRIPT IMMERSIVE PROGRAM
                </p>
                <span class="absolute text-sm pt-2 whitespace-nowrap">
                  February 2024 - May 2024
                </span>
              </div>
              <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div class="flex items-center justify-center w-6 h-full">
                  <div class="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300"></div>
                </div>
                <div class="absolute w-20 h-20 -mt-10 -ml-7 bg-blue-950 border-4 border-indigo-400 rounded-full top-1/2 flex items-center justify-center">
                  <MdSchool className="text-indigo-400 w-10 h-10" />
                </div>
              </div>
            </div>

            <div class="flex md:contents">
              <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div class="flex items-center justify-center w-6 h-full">
                  <div class="w-1 h-full bg-indigo-300"></div>
                </div>
                <div class="absolute w-20 h-20 -mt-10 -ml-7 bg-blue-950 border-4 border-indigo-400 rounded-full top-1/2 flex items-center justify-center">
                  <MdSchool className="text-indigo-400 w-10 h-10" />
                </div>
              </div>
              <div class="relative p-20 my-6 bg-blue-950 bg-blue-950 rounded-xl col-start-6 col-end-10 mr-auto animate__animated animate__fadeInLeft">
                <h3 class="text-lg font-semibold lg:text-xl">
                  BACHELOR OF COMPUTER ENGINEERING
                </h3>
                <p class="mt-2 leading-6 font-bold">
                  TELKOM UNIVERSITY BANDUNG
                </p>
                <span class="absolute text-sm pt-2 whitespace-nowrap">
                  2013 - 2017
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedContent === "experience" && (
        <div class="flex items-center justify-center pt-20 p-4">
          <div class="flex flex-col grid-cols-9 p-20 mx-auto md:grid">
            <div class="flex md:contents flex-row-reverse">
              <div class="relative p-20 my-6 bg-blue-950 rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto animate__animated animate__fadeInRight">
                <h3 class="text-lg font-semibold lg:text-xl">
                  PT MITRA INTEGRASI INFORMATIKA
                </h3>
                <p class="mt-2 leading-6 font-bold">TECHNICAL WRITER</p>
                <span class="absolute text-sm pt-2 whitespace-nowrap">
                  May 2021 - January 2024
                </span>
              </div>
              <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div class="flex items-center justify-center w-6 h-full">
                  <div class="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300"></div>
                </div>
                <div class="absolute w-20 h-20 -mt-10 -ml-7 bg-blue-950 border-4 border-indigo-400 rounded-full top-1/2 flex items-center justify-center">
                  <MdWork className="text-indigo-400 w-10 h-10" />
                </div>
              </div>
            </div>

            <div class="flex md:contents">
              <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div class="flex items-center justify-center w-6 h-full">
                  <div class="w-1 h-full bg-indigo-300"></div>
                </div>
                <div class="absolute w-20 h-20 -mt-10 -ml-7 bg-blue-950 border-4 border-indigo-400 rounded-full top-1/2 flex items-center justify-center">
                  <MdWork className="text-indigo-400 w-10 h-10" />
                </div>
              </div>
              <div class="relative p-20 my-6 bg-blue-950 rounded-xl col-start-6 col-end-10 mr-auto animate__animated animate__fadeInLeft">
                <h3 class="text-lg font-semibold lg:text-xl">
                  SANGGAR INDAH GROUP
                </h3>
                <p class="mt-2 leading-6 font-bold">MARKETING DATA</p>
                <span class="absolute text-sm pt-2 whitespace-nowrap">
                  February 2020 - May 2021
                </span>
              </div>
            </div>

            <div class="flex md:contents flex-row-reverse">
              <div class="relative p-20 my-6 bg-blue-950 rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto animate__animated animate__fadeInRight">
                <h3 class="text-lg font-semibold lg:text-xl">BANK SINARMAS</h3>
                <p class="mt-2 leading-6 font-bold">IT USER MANAGEMENT</p>
                <span class="absolute text-sm pt-2 whitespace-nowrap">
                  October 2018 - July 2019
                </span>
              </div>
              <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div class="flex items-center justify-center w-6 h-full">
                  <div class="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300"></div>
                </div>
                <div class="absolute w-20 h-20 -mt-10 -ml-7 bg-blue-950 border-4 border-indigo-400 rounded-full top-1/2 flex items-center justify-center">
                  <MdWork className="text-indigo-400 w-10 h-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedContent === "skill" && (
        <div className="flex flex-col items-center justify-center pt-10">
          <h1 className="text-3xl font-bold mb-4">Programming Language</h1>
          <div className="flex flex-wrap justify-center gap-4 pt-10">
            {/* Card 1 */}
            <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-sm animate__animated animate__backInLeft">
              <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
                <SiJavascript className="flex items-center justify-center text-8xl mb-4" />
                <div className="overflow-hidden">
                  <h3 className="flex items-center justify-center mt-2 text-sm text-zink-500 text-justify font-bold">
                    Javascript
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-sm animate__animated animate__backInLeft">
              <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
                <SiTypescript className="flex items-center justify-center text-8xl mb-4" />
                <div className="overflow-hidden">
                  <h3 className="flex items-center justify-center mt-2 text-sm text-zink-500 text-justify font-bold">
                    Typescript
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-sm animate__animated animate__backInLeft">
              <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
                <SiPhp className="flex items-center justify-center text-8xl mb-4" />
                <div className="overflow-hidden">
                  <h3 className="flex items-center justify-center mt-2 text-sm text-zink-500 text-justify font-bold">
                    PHP
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-sm animate__animated animate__backInLeft">
              <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
                <SiCss3 className="flex items-center justify-center text-8xl mb-4" />
                <div className="overflow-hidden">
                  <h3 className="flex items-center justify-center mt-2 text-sm text-zink-500 text-justify font-bold">
                    CSS
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-sm animate__animated animate__backInLeft">
              <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
                <SiHtml5 className="flex items-center justify-center text-8xl mb-4" />
                <div className="overflow-hidden">
                  <h3 className="flex items-center justify-center mt-2 text-sm text-zink-500 text-justify font-bold">
                    HTML
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-4 pt-20">Database</h1>
          <div className="flex flex-wrap justify-center gap-4 pt-10">
            {/* Card 1 */}
            <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-sm animate__animated animate__backInLeft">
              <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
                <SiMysql className="flex items-center justify-center text-8xl mb-4" />
                <div className="overflow-hidden">
                  <h3 className="flex items-center justify-center mt-2 text-sm text-zink-500 text-justify font-bold">
                    MYSQL
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-sm animate__animated animate__backInLeft">
              <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
                <SiPostgresql className="flex items-center justify-center text-8xl mb-4" />
                <div className="overflow-hidden">
                  <h3 className="flex items-center justify-center mt-2 text-sm text-zink-500 text-justify font-bold">
                    PostgreSQL
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-sm animate__animated animate__backInLeft">
              <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
                <SiMongodb className="flex items-center justify-center text-8xl mb-4" />
                <div className="overflow-hidden">
                  <h3 className="flex items-center justify-center mt-2 text-sm text-zink-500 text-justify font-bold">
                    MongoDB
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-sm animate__animated animate__backInLeft">
              <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
                <SiRedis className="flex items-center justify-center text-8xl mb-4" />
                <div className="overflow-hidden">
                  <h3 className="flex items-center justify-center mt-2 text-sm text-zink-500 text-justify font-bold">
                    Redis
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-4 pt-20">Libraries/Framework</h1>
          <div className="flex flex-wrap justify-center gap-4 pt-10">
            {/* Card 1 */}
            <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-sm animate__animated animate__backInLeft">
              <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
                <SiReact className="flex items-center justify-center text-8xl mb-4" />
                <div className="overflow-hidden">
                  <h3 className="flex items-center justify-center mt-2 text-sm text-zink-500 text-justify font-bold">
                    React
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-sm animate__animated animate__backInLeft">
              <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
                <SiRedux className="flex items-center justify-center text-8xl mb-4" />
                <div className="overflow-hidden">
                  <h3 className="flex items-center justify-center mt-2 text-sm text-zink-500 text-justify font-bold">
                    Redux
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-sm animate__animated animate__backInLeft">
              <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
                <SiNextdotjs className="flex items-center justify-center text-8xl mb-4" />
                <div className="overflow-hidden">
                  <h3 className="flex items-center justify-center mt-2 text-sm text-zink-500 text-justify font-bold">
                    Next.js
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-sm animate__animated animate__backInLeft">
              <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
                <SiTailwindcss className="flex items-center justify-center text-8xl mb-4" />
                <div className="overflow-hidden">
                  <h3 className="flex items-center justify-center mt-2 text-sm text-zink-500 text-justify font-bold">
                    Tailwind css
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-sm animate__animated animate__backInLeft">
              <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
                <SiBootstrap className="flex items-center justify-center text-8xl mb-4" />
                <div className="overflow-hidden">
                  <h3 className="flex items-center justify-center mt-2 text-sm text-zink-500 text-justify font-bold">
                    Bootstrap
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-sm animate__animated animate__backInLeft">
              <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
                <SiNodedotjs className="flex items-center justify-center text-8xl mb-4" />
                <div className="overflow-hidden">
                  <h3 className="flex items-center justify-center mt-2 text-sm text-zink-500 text-justify font-bold">
                    Node.js
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 7 */}
            <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-sm animate__animated animate__backInLeft">
              <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
                <SiExpress className="flex items-center justify-center text-8xl mb-4" />
                <div className="overflow-hidden">
                  <h3 className="flex items-center justify-center mt-2 text-sm text-zink-500 text-justify font-bold">
                    Express js
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 8 */}
            <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-sm animate__animated animate__backInLeft">
              <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
                <SiSequelize className="flex items-center justify-center text-8xl mb-4" />
                <div className="overflow-hidden">
                  <h3 className="flex items-center justify-center mt-2 text-sm text-zink-500 text-justify font-bold">
                    Sequelize
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 9 */}
            <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-sm animate__animated animate__backInLeft">
              <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
                <SiNodedotjs className="flex items-center justify-center text-8xl mb-4" />
                <div className="overflow-hidden">
                  <h3 className="flex items-center justify-center mt-2 text-sm text-zink-500 text-justify font-bold">
                    Node.js
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 10 */}
            <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-sm animate__animated animate__backInLeft">
              <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
                <SiGraphql className="flex items-center justify-center text-8xl mb-4" />
                <div className="overflow-hidden">
                  <h3 className="flex items-center justify-center mt-2 text-sm text-zink-500 text-justify font-bold">
                    Graphql
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 11 */}
            <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-sm animate__animated animate__backInLeft">
              <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
                <SiApollographql className="flex items-center justify-center text-8xl mb-4" />
                <div className="overflow-hidden">
                  <h3 className="flex items-center justify-center mt-2 text-sm text-zink-500 text-justify font-bold">
                    Apollo Graphql
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-4 pt-20">Cloud Computing</h1>
          <div className="flex flex-wrap justify-center gap-4 pt-10">
            {/* Card 1 */}
            <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-sm animate__animated animate__backInLeft">
              <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
                <SiAmazonaws className="flex items-center justify-center text-8xl mb-4" />
                <div className="overflow-hidden">
                  <h3 className="flex items-center justify-center mt-2 text-sm text-zink-500 text-justify font-bold">
                    AWS
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-sm animate__animated animate__backInLeft">
              <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
                <SiFirebase className="flex items-center justify-center text-8xl mb-4" />
                <div className="overflow-hidden">
                  <h3 className="flex items-center justify-center mt-2 text-sm text-zink-500 text-justify font-bold">
                    Firebase
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-sm animate__animated animate__backInLeft">
              <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
                <SiSupabase className="flex items-center justify-center text-8xl mb-4" />
                <div className="overflow-hidden">
                  <h3 className="flex items-center justify-center mt-2 text-sm text-zink-500 text-justify font-bold">
                    Supabase
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-sm animate__animated animate__backInLeft">
              <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
                <SiVercel className="flex items-center justify-center text-8xl mb-4" />
                <div className="overflow-hidden">
                  <h3 className="flex items-center justify-center mt-2 text-sm text-zink-500 text-justify font-bold">
                    Vercel
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-sm animate__animated animate__backInLeft">
              <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
                <SiGithub className="flex items-center justify-center text-8xl mb-4" />
                <div className="overflow-hidden">
                  <h3 className="flex items-center justify-center mt-2 text-sm text-zink-500 text-justify font-bold">
                    Github
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-4 pt-20">Tools</h1>
          <div className="flex flex-wrap justify-center gap-4 pt-10">
            {/* Card 1 */}
            <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-sm animate__animated animate__backInLeft">
              <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
                <SiPostman className="flex items-center justify-center text-8xl mb-4" />
                <div className="overflow-hidden">
                  <h3 className="flex items-center justify-center mt-2 text-sm text-zink-500 text-justify font-bold">
                    Postman
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-sm animate__animated animate__backInLeft">
              <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
                <SiGit className="flex items-center justify-center text-8xl mb-4" />
                <div className="overflow-hidden">
                  <h3 className="flex items-center justify-center mt-2 text-sm text-zink-500 text-justify font-bold">
                    Git
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-sm animate__animated animate__backInLeft">
              <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
                <SiVite className="flex items-center justify-center text-8xl mb-4" />
                <div className="overflow-hidden">
                  <h3 className="flex items-center justify-center mt-2 text-sm text-zink-500 text-justify font-bold">
                    Vite
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-sm animate__animated animate__backInLeft">
              <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
                <SiExpo className="flex items-center justify-center text-8xl mb-4" />
                <div className="overflow-hidden">
                  <h3 className="flex items-center justify-center mt-2 text-sm text-zink-500 text-justify font-bold">
                    Expo
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-sm animate__animated animate__backInLeft">
              <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
                <SiAndroidstudio className="flex items-center justify-center text-8xl mb-4" />
                <div className="overflow-hidden">
                  <h3 className="flex items-center justify-center mt-2 text-sm text-zink-500 text-justify font-bold">
                    Android Studio
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-sm animate__animated animate__backInLeft">
              <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
                <SiVisualstudiocode className="flex items-center justify-center text-8xl mb-4" />
                <div className="overflow-hidden">
                  <h3 className="flex items-center justify-center mt-2 text-sm text-zink-500 text-justify font-bold">
                    Visual Studio Code
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

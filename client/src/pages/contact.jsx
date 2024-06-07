import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "../style/style.css";

export default function Contact() {
  return (
    <div className="flex flex-col items-center min-h-screen py-20 px-4 bg-transparent">
      <h1 className="text-6xl font-bold mb-20">Contact Me</h1>
      <div className="flex flex-wrap justify-between w-full">
        <div className="w-full md:w-1/2 flex items-center justify-end animate__animated animate__fadeInLeft">
          <div class="form-container">
            <form class="form">
              <div class="form-group">
                <label for="email">Name</label>
                <input required="" name="name" id="name" type="text" />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input required="" name="email" id="email" type="text" />
              </div>
              <div class="form-group">
                <label for="textarea">Message</label>
                <textarea
                  required=""
                  cols="50"
                  rows="10"
                  id="textarea"
                  name="textarea"
                >
                  {" "}
                </textarea>
              </div>
              <button class="w-40 h-12 bg-blue-950 cursor-pointer rounded-3xl border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#9748FF] transition duration-300 ease-in-out">
                <span class="font-medium group-hover:text-white">Send</span>
              </button>
            </form>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center bg-opacity-80 rounded-xl p-8">
          <div className="max-w-sm">
            <div className="flex flex-col space-y-16">
              <div class="card">
                <div class="card_content animate__animated animate__bounceInLeft">
                  <h2 className="text-3xl font-bold mb-14">Contact Info</h2>
                  <div className="flex items-center mb-14">
                    <div className="icon-bg rounded-full bg-blue-950 h-14 w-14 flex items-center justify-center mr-5">
                      <FaPhone className="text-white text-2xl" />
                    </div>
                    <div>
                      <span className="font-bold text-lg">Phone</span>
                      <span className="block text-xl">+62852 1846 2201</span>
                    </div>
                  </div>
                  <div className="flex items-center mb-14">
                    <div className="icon-bg rounded-full bg-blue-950 h-14 w-14 flex items-center justify-center mr-5">
                      <FaEnvelope className="text-white text-2xl" />
                    </div>
                    <div>
                      <span className="font-bold text-lg">Email</span>
                      <span className="block text-xl">deapuspita1796@gmail.com</span>
                    </div>
                  </div>
                  <div className="flex items-center mb-14">
                    <div className="icon-bg rounded-full bg-blue-950 h-14 w-14 flex items-center justify-center mr-5">
                      <FaMapMarkerAlt className="text-white text-2xl" />
                    </div>
                    <div>
                      <span className="font-bold text-lg">Location</span>
                      <span className="block text-xl">Tanah Kusir, Jakarta Selatan, Indonesia</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

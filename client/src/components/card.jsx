import { FaGithub, FaGlobe } from "react-icons/fa";
export default function Card() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {/* Card 1 */}
      <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-md max-h-md animate__animated animate__bounceInLeft">
        <div className="rounded-[10px] max-h-auto bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
          <img
            src="../sahabathukum.png"
            className="max-w-full h-auto mb-2"
          ></img>
          <div className="text-md font-bold pt-6">
            {" "}
            Sahabat Hukum
            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 ml-6">
              Final Project Hacktiv8
            </span>
          </div>
          <div className="overflow-hidden">
            <h3 className="mt-2 text-sm text-zink-500 text-justify">
              Sahabat Hukum is a website designed to bridge the gap between
              users and lawyers. Sahabat Hukum is created with the aim of making
              it easier for the lower and middle class to seek legal assistance.
              The main feature of this website is that users can directly chat
              with lawyers for free.
            </h3>
          </div>
          <div className="mt-4 flex justify-between">
            <a
              href="https://sahabathukum.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGlobe className="text-gray-600 ml-2" size={30} />
            </a>
            <a
              href="https://github.com/andaridea/sakum"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-gray-600 ml-2" size={30} />
            </a>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-md max-h-md animate__animated animate__bounceInLeft">
        <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
          <img src="../digimap.png" className="max-w-full h-200 mb-2"></img>
          <div className="text-md font-bold pt-6">
            {" "}
            Digimap Clone
            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 ml-6">
              Project Phase 3 Hacktiv8
            </span>
          </div>
          <div className="overflow-hidden">
            <h3 className="mt-2 text-sm text-zink-500 text-justify">
              An e-commerce website using Typescript and Next.js with features
              such as login, register, show product list, show product details,
              add to wishlist, remove wishlist, search products by name,
              pagination (implement infinite scroll). Reference website:
              digimap.co.id
            </h3>
          </div>
          <div className="mt-4 flex justify-between">
            <a
              href="https://digimap.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGlobe className="text-gray-600 ml-2" size={30} />
            </a>
            <a
              href="https://github.com/andaridea/digimap-clone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-gray-600 ml-2" size={30} />
            </a>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-md max-h-md animate__animated animate__bounceInLeft">
        <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
          <img
            src="../linkedin.png"
            className="max-w-full h-auto mb-2"
            style={{height:"222px"}}
          ></img>
          <div className="text-md font-bold pt-6">
            {" "}
            LinkedIn Mobile App Clone
            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 ml-6">
              Project Phase 3 Hacktiv8
            </span>
          </div>
          <div className="overflow-hidden">
            <h3 className="mt-2 text-sm text-zink-500 text-justify">
              My Social Media App is a client-server application. It includes
              features such as Register, Login, Add Post, Show Post, Comment
              Post (Embedded Document), Displaying Followers and Following of
              each user (Reference with $lookup), and Like Post feature. Mobile
              app reference: LinkedIn.
            </h3>
          </div>
          <div className="mt-4 flex justify-between">
            <a
              href="https://expo.dev/accounts/andaridea/projects/client/updates/947aaf1a-a0b3-4e8e-8eb3-78b20ed64fe5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGlobe className="text-gray-600 ml-2" size={30} />
            </a>
            <a
              href="https://github.com/andaridea/linkedin-clone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-gray-600 ml-2" size={30} />
            </a>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-md max-h-md animate__animated animate__bounceInLeft">
        <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-lg max-h-lg">
          <img src="../connectr.png" className="max-w-full h-auto mb-2"></img>
          <div className="text-md font-bold pt-6">
            {" "}
            Connectr
            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 ml-6">
              Group Project Phase 2 Hacktiv8
            </span>
          </div>
          <div className="overflow-hidden">
            <h3 className="mt-2 text-sm text-zink-500 text-justify">
              It's a web-based chatting application where we can chat with
              others in real-time. It includes features such login, register,
              update profile, add contact, delete contact, and real-time
              chatting. This is a group project at phase 2 Hacktiv8 Bootcamp,
              use Socket.io for a real time chat
            </h3>
          </div>
          <div className="mt-4 flex justify-between">
            <a
              href="https://connectr-6384e.web.app/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGlobe className="text-gray-600 ml-2" size={30} />
            </a>
            <a
              href="https://github.com/andaridea/linkedin-clone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-gray-600 ml-2" size={30} />
            </a>
          </div>
        </div>
      </div>

      {/* Card 5 */}
      <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-md max-h-md animate__animated animate__bounceInLeft">
        <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-lg max-h-lg">
          <img src="../staycation.png" className="max-w-full h-auto mb-2"></img>
          <div className="text-md font-bold pt-6">
            {" "}
            Staycation
            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 ml-6">
              Individual Project Phase 2 Hacktiv8
            </span>
          </div>
          <div className="overflow-hidden">
            <h3 className="mt-2 text-sm text-zink-500 text-justify">
              Simply booking hotel website, use a third-party payment gateway
              also integrates a third-party API for data seeding. Additionally,
              the website offers social media sign-in functionality through
              Google, search hotel by name and implemented infinite scrolling
              for pagination.
            </h3>
          </div>
          <div className="mt-4 flex justify-between">
            <a
              href="https://github.com/andaridea/linkedin-clone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-gray-600 ml-2" size={30} />
            </a>
          </div>
        </div>
      </div>

      {/* Card 6 */}
      <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-md max-h-md animate__animated animate__bounceInLeft">
        <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-lg max-h-lg">
          <img src="../medical.png" className="max-w-full h-auto mb-2"></img>
          <div className="text-md font-bold pt-6">
            {" "}
            Medical Record
            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 ml-6">
              Pair Project Phase 1 Hacktiv8
            </span>
          </div>
          <div className="overflow-hidden">
            <h3 className="mt-2 text-sm text-zink-500 text-justify">
              A simple CRUD (Create, Read, Update, Delete) website functionality
              to streamline doctors' management of patient records. They can
              create, view, update, and delete medical records with ease and
              efficiency. Doctors can access, edit, and remove medical records
              effortlessly.
            </h3>
          </div>
          <div className="mt-4 flex justify-between">
            <a
              href="https://github.com/yehezkielt/phase1project"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-gray-600 ml-2" size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

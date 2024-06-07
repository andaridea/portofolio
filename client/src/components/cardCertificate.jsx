import { FaGithub, FaGlobe } from "react-icons/fa";
export default function CardCertificate() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {/* Card 1 */}
      <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-sm animate__animated animate__animate__fadeInDownBig">
        <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
          <img src="../cssbasic.png" className="max-w-full h-auto mb-2"></img>
          <div className="text-md font-bold pt-6">
            {" "}
            CSS Certificate : CSS Basic{" "}
          </div>
          <div className="overflow-hidden">
            <h3 className="mt-2 text-sm text-zink-500 text-justify font-bold">
              HackerRank
            </h3>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-sm animate__animated animate__animate__fadeInDownBig">
        <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
          <img src="../reactbasic.png" className="max-w-full h-auto mb-2"></img>
          <div className="text-md font-bold pt-6">
            {" "}
            React Certificate : React Basic{" "}
          </div>
          <div className="overflow-hidden">
            <h3 className="mt-2 text-sm text-zink-500 text-justify font-bold">
              HackerRank
            </h3>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-sm animate__animated animate__animate__fadeInDownBig">
        <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
          <img src="../sqlbasic.png" className="max-w-full h-auto mb-2"></img>
          <div className="text-md font-bold pt-6">
            {" "}
            SQL Certificate : SQL Basic{" "}
          </div>
          <div className="overflow-hidden">
            <h3 className="mt-2 text-sm text-zink-500 text-justify font-bold">
              HackerRank
            </h3>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-sm animate__animated animate__animate__fadeInDownBig">
        <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
          <img src="../javascript.png" className="max-w-full h-auto mb-2"></img>
          <div className="text-md font-bold pt-6">
            {" "}
            Javascript Certificate : Javascript Basic{" "}
          </div>
          <div className="overflow-hidden">
            <h3 className="mt-2 text-sm text-zink-500 text-justify font-bold">
              HackerRank
            </h3>
          </div>
        </div>
      </div>

      {/* Card 5 */}
      <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-sm animate__animated animate__animate__fadeInDownBig">
        <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
          <img
            src="../problemsolving.png"
            className="max-w-full h-auto mb-2"
          ></img>
          <div className="text-md font-bold pt-6">
            {" "}
            Problem Solving : Problem Solving Basic{" "}
          </div>
          <div className="overflow-hidden">
            <h3 className="mt-2 text-sm text-zink-500 text-justify font-bold">
              HackerRank
            </h3>
          </div>
        </div>
      </div>

      {/* Card 6 */}
      <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-sm animate__animated animate__animate__fadeInDownBig">
        <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
          <img
            src="../datascientist.jpg"
            className="max-w-full h-auto mb-2"
            style={{height: "260px"}}
          ></img>
          <div className="text-md font-bold pt-6">
            {" "}
            Program Professional Academy{" "}
          </div>
          <div className="overflow-hidden">
            <h3 className="mt-2 text-sm text-zink-500 text-justify font-bold">
              Kementrian Komunikasi dan Informatika
            </h3>
          </div>
        </div>
      </div>

      {/* Card 7 */}
      <div className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] max-w-sm animate__animated animate__animate__fadeInDownBig">
        <div className="rounded-[10px] bg-blue-950 p-3 pt-6 sm:p-4 max-w-full">
          <img src="../web.jpg" className="max-w-full h-auto mb-2"></img>
          <div className="text-md font-bold pt-6">
            {" "}
            Web Master Non Wordpress Training{" "}
          </div>
          <div className="overflow-hidden">
            <h3 className="mt-2 text-sm text-zink-500 text-justify font-bold">
              Webhozz
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

import { ReactTyped } from "react-typed";
import '@fortawesome/fontawesome-free/css/all.css';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-10">
      <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{fontFamily: "Roboto Condensed"}}>Hello👋 My name is Dea</h1>
      <div className="text-3xl md:text-5xl font-bold mb-4 px-4 sm:px-10 lg:px-20 xl:px-32" style={{fontFamily: "Roboto Condensed"}}>
        I'm a {' '}
        <ReactTyped
          strings={[
            "Backend Developer",
            "Frontend Developer",
          ]}
          typeSpeed={60}
          backSpeed={50}
          loop
          className="text-blue-500" style={{fontFamily: "Roboto Condensed"}}
        />
      </div>
      <h2 className="text-lg md:text-xl">Based in Jakarta, Indonesia.</h2>
      <a href="#about" class="fa-solid fa-caret-down text-4xl md:text-6xl absolute bottom-10 animate-bounce"></a>
    </div>
  );
}

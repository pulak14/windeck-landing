
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-blue-600 mb-4 animate-fade-in">404</h1>
        <p className="text-xl text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
          Oops! We couldn't find the page you're looking for.
        </p>
        <a 
          href="/" 
          className="btn-primary inline-block animate-fade-in"
          style={{ animationDelay: "200ms" }}
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

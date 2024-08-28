import React from "react";
import {Link} from "react-router-dom"

const ErrorPage = () => {
  return (
    <div>
      <h2 className="text-center">Opps!!!</h2>

      

      <Link to="/"><button>Go back to Home</button></Link>
    </div>
  );
};

export default ErrorPage;
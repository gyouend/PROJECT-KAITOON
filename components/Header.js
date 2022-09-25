import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  return (
    <div className="row">
      <div className="col-md-3 ms-5 mt-2 mb-2 ">
        <label style={{ color: "green", fontSize: 18, fontFamily: "bold" }}>
          MEB: Publisher Console
        </label>
      </div>
      <div className="col-md-6 mb-2"></div>
      <div className="col-md-2 mb-2 text-center ">
        <img src=".."></img><br></br> 
        <label style={{ color: "green" }}>username</label>
      </div>
      <hr></hr>
    </div>
  );
}

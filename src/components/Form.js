import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <>
      <form>
        <div className="login animate_zoom">
          <label>
            Name:
            <br />
            <input className="tab" type="text" placeholder="Enter Name" />
          </label>
          <br />
          <label>
            Number:
            <br />
            <input className="tab" type="number" placeholder="Enter Number" />
          </label>
          <br />
          <label>
            Email:
            <br />
            <input className="tab" type="email" placeholder="Enter Email" />
          </label>
          <br />
          <label>
            DOB:
            <br />
            <input className="tab" type="date" />
          </label>
          <div className="btn_group">
            <button className="cancelbtn">Cancel</button>
            <button className="submitbtn">Submit</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;

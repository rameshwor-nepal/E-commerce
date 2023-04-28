import React, { useState } from "react";

const InputField = (props) => {
  const [value, setValue] = useState("");

  function keyInput(e) {
    setValue(e.target.value);
  }
  return (
    <>
      <p className="text-[14px] font-medium px-20  ">{props.title}</p>
      <div className=" ml-20 mt-2">
        <input
          type={props.type}
          className="h-10 w-[20rem] pl-3 border-2 border-purple-300 rounded-md placeholder:text-[12px]"
          placeholder={props.placeholder}
          value={value}
          onChange={(e) => keyInput(e)}
        />
      </div>
    </>
  );
};

export default InputField;

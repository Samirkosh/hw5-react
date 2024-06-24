import React, { useState } from "react";

export const MyButton = ({ children, className, onclick, ...restProops }) => {
  const [deleteValue, setDeleteValue] = useState([]);

  return (
    <button onClick={onclick} {...restProops} className={className}>
      {children}
    </button>
  );
};

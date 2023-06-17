import * as React from "react";

const Assigned = ({ assignitem }) => {
  return (
    <div>
      <img src={assignitem.avatar_url} alt={""} style={{ width: "20px" }} />
    </div>
  );
};

export default Assigned;

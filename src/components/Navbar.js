import React from "react";

const Navbar = ({ filteritem, menuList }) => {
  return (
    <>
      <div className="navbar">
        <div className="btn-group">
          {menuList.map((curElem) => {
            return (
              <button
                className="btn"
                key={curElem}
                onClick={() => filteritem(curElem)}
              >
                {curElem}
              </button>
            );
          })}
          ;
        </div>
      </div>
    </>
  );
};
export default Navbar;

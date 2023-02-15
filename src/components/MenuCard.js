import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <div className="card-container">
        {menuData.map((curElem) => {
          const { num, category, name, image } = curElem;
          return (
            <>
              <div className="card" key={num}>
                <div className="card-body" key={num}>
                  {/* <span className="card-number">{num}</span> */}
                  <span className="card-type">{category}</span>
                  <span className="card-name">{name}</span>
                  <img src={image} alt="" className="card-image" />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default MenuCard;

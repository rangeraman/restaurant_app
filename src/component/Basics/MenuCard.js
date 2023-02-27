import React from 'react'

const MenuCard = ({menudate}) => {
    console.log(menudate);
  return (
    <>
    <section className="main-card--cointainer">
        {menudate.map((curElem) => {
          const {id, name, category, image, description } = curElem;
          
           return (
            <>
            <div className="card-container" key={id}>
        <div className="card">
          <div className="card-body">
            <span className="card-number card-circle subtle">
            {id}</span>
            <span className="card-author subtle">{name}</span>
            <h1 className="card-title">{name}</h1>
            <span className="card-description subtle">
              {description}
            </span>
            <div className="card-read">Read</div>
          </div>
          <img src={curElem.image} 
          alt="images" 
          className="card-media"/>

          <span className="card-tag subtle">Order Now</span>
        </div>
      </div>
      </>
           )
        })}
    </section>
    </>
  )
}

export default MenuCard;
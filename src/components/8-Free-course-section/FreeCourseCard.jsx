import React from "react";

const FreeCourseCard = (props) => {
  const { imgUrl, title, students, rating } = props.items;

  return (
    <div className="single__free__course">
      <div className="free__course__img mb-5">
        <img src={imgUrl} alt="" className="w-100" />
        <button className="btn free__btn">Free</button>
      </div>

      <div className="free__course__details">
        <h6>{title}</h6>

        <div className="d-flex  gap-5 align-content-end">
          <span className="gap-2">
            <i class="ri-user-line"></i> {students}k
          </span>

          <span className="gap-2">
            <i class="ri-star-fill align-items-center"></i> {rating}k
          </span>
        </div>
      </div>
    </div>
  );
};

export default FreeCourseCard;

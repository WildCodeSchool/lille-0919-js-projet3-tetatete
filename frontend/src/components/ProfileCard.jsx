import React from "react";
import { Link } from "react-router-dom";
import "./styles/ProfileCard.scss";

function ProfileCard(props) {
  return (
    <article className={props.mainStyle}>
      <Link to={`/${props.url}/${props.id}`}>
        <figure>
          <img src={props.img} alt={props.name} />
        </figure>
        <div className={props.style}>
          <div className="titleBorder"></div>
          <div className="titleLayout">
            <h3>{props.name}</h3>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default ProfileCard;

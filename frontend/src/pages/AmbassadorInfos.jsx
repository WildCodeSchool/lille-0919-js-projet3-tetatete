import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/AmbassadorInfos.scss";

function AmbassadorInfos(props) {
  const [ambassador, setAmbassador] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/ambassador/${props.match.params.id}`)
      .then(res => {
        setAmbassador(res.data[0]);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [setAmbassador]);

  return (
    <div className="AmbassadorInfos center">
      <div className="photo">
        <img src={ambassador.img} alt="" className="ambassadorPhoto" />
      </div>
      <div className="content">
        <div className="titleAndTags">
          <h3>
            {ambassador.firstname} {ambassador.lastname}
          </h3>
          <ul>
            <li>
              <img
                className="profileTag"
                src="https://via.placeholder.com/50x50"
                alt="..."
              />
            </li>
            <li>
              <img
                className="profileTag"
                src="https://via.placeholder.com/50x50"
                alt="..."
              />
            </li>
            <li>
              <img
                className="profileTag"
                src="https://via.placeholder.com/50x50"
                alt="..."
              />
            </li>
          </ul>
        </div>

        <p>{ambassador.resume}</p>
      </div>
    </div>
  );
}

export default AmbassadorInfos;

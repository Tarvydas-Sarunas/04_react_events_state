import { useState } from "react";
import { personData } from "../persons/data";

export default function SectionList() {
  const [mainArr, setMainArr] = useState(personData);

  return (
    <section className="grid">
      {/* suku map cikla ir gaminu counterius*/}
      {mainArr.map((pObj) => (
        <div className="counter" key={pObj.id}>
          <img src={pObj.img} className="card-img-top" alt={pObj.name} />
          <div className="card-body">
            <h5 className="card-title">{pObj.name}</h5>
            <p className="card-text">{pObj.hobby}</p>
          </div>
        </div>
      ))}
    </section>
  );
}


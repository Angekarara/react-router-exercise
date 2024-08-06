import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch(`api/vans`)
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);
  console.log(vans);
  const vanElements = vans.map((van) => (
    <div key={van.id}>
      <Link to={`/vans/${van.id}`}>
        <img src={van.imageUrl} className="w-96" />
        <div>
          <h3>{van.name}</h3>
          <p>
            {van.price} <span>/day</span>
          </p>
        </div>
        <i className="">{van.type}</i>
      </Link>
    </div>
  ));
  return (
    <div className="">
      <h1 className="text-3xl py-10 text-center">Explore our van options</h1>
      <div className="flex flex-wrap gap-12 px-28 py-10 text-center">
        {vanElements}
      </div>
    </div>
  );
}
export default Vans;

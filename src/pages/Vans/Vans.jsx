import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

function Vans() {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  useEffect(() => {
    fetch(`api/vans`)
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);
  console.log(vans);

  const filtered = typeFilter
    ? vans.filter((char) => char.type === typeFilter)
    : vans;

  const vanElements = filtered.map((van) => (
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
      <div className="flex justify-evenly ">
        <Link to="?type=simple" className="bg-[#FFEAD0] p-3 rounded-md">
          Simple
        </Link>
        <Link to="?type=luxury" className="bg-[#FFEAD0] p-3 rounded-md">
          Luxury
        </Link>
        <Link to="?type=rugged" className="bg-[#FFEAD0] p-3 rounded-md">
          Rugged
        </Link>
        <Link to="." className="underline underline-offset-1">Clear filter</Link>
      </div>
      <div className="flex flex-wrap gap-12 px-28 py-10 text-center">
        {vanElements}
      </div>
    </div>
  );
}
export default Vans;

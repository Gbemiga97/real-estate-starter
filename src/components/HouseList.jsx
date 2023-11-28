import { Link } from "react-router-dom";
import { useHouseContext } from "../HouseContext/HouseContext";
import {House} from ".";
import { ImSpinner2 } from 'react-icons/im'


const HouseList = () => {
  const {houses, loading} = useHouseContext()


  //if loading is true
  if(loading) {
    return (<ImSpinner2 className="mx-auto  text-violet-700 
    text-4xl animate-spin mt-[15rem]" />)
  }


  if(houses.length < 1) {
    return <div className="mx-auto text-center mt-48 text-3xl text-gray-400">Sorry, nothing found</div>
  }

  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14 mx-auto">
          {
            houses.map((house) => (
              <Link className="w-full" key={house.id} to={`/property/${house.id}`}>
              <House house={house} />
              </Link>
            ))
          }
        </div>
      </div>
    </section>
  )
};

export default HouseList;

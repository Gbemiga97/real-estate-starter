import { BiArea, BiBath, BiBed } from 'react-icons/bi'
import { Link, useParams } from 'react-router-dom';
import { housesData } from '../data';

const PropertyDetails = () => {

  const {id} = useParams()
  

  const house = housesData.find(house => {
    return house.id === parseInt(id)
  })

  const { 
    name, 
    type, 
    description, 
    imageLg, 
    country, 
    address, 
    bedrooms,
    bathrooms,
    surface,
    year,
    price,
    agent } = house


  



  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
          <div>
            <h2 className='text-2xl font-semibold' >{name}</h2>
            <h3 className='text-lg mb-4'>{address}</h3>
          </div>
          <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
            <div className='bg-green-500 text-white px-3 rounded-full'>{type}</div>
            <div className='bg-violet-500 text-white px-3 rounded-full'>{country}</div>
            </div>
          <div className='text-3xl font-semibold text-violet-600'>$ {price}</div>
        </div>
        <div className='flex flex-col items-start gap-8 lg:flex-row'>
          <div className='max-w-[768px]'>
            <div className='mb-8'>
              <img src={imageLg} alt={name} />
            </div>
            <div className='flex gap-x-6 text-violet-700 mb-6'>
              <div className='flex gap-x-2 items-center justify-center'>
                <BiBed className='text-2xl' />
                <p>{bedrooms}</p>
              </div>
              <div className='flex gap-x-2 items-center justify-center'>
                <BiBath className='text-2xl' />
                <p>{bathrooms}</p>
              </div>
              <div className='flex gap-x-2 items-center justify-center'>
                <BiArea className='text-2xl' />
                <p>{surface}</p>
              </div>
            </div>
            <p>{description}</p>
          </div>

          <div className='flex-1 w-full mb-8 border border-gray-300 rounded-lg px-6 py-8'>
            <div className='flex items-center gap-x-4 mb-8'>
              <div className='w-20 h-20 border border-gray-300 rounded-full'>
                <img src={agent.image} alt={agent.name} />
              </div>
              <div>
              <p className='font-bold text-lg'>
                {agent.name}
                </p>
                <Link to='' className='text-violet-700 text-sm'>View Listings</Link>
                </div>
            </div>

            <form className='flex flex-col gap-y-4'>
              <input
              className='border border-gray-300 focus:border-violet-700
              outline-none rounded w-full px-4 h-14 text-sm'
              placeholder='Name'
              type="text" />
              <input
              className='border border-gray-300 focus:border-violet-700
              outline-none rounded w-full px-4 h-14 text-sm'
              placeholder='Email address'
              type="email" />
              <input 
              className='border border-gray-300 focus:border-violet-700
              outline-none rounded w-full px-4 h-14 text-sm'
              placeholder='Phone number'
              type="text" />
              <textarea className='border border-gray-300 focus:border-violet-700
              outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400'
              placeholder='Message'
              defaultValue={`Hello I am interested in ${[name]}`}
              ></textarea>
              <div className='flex gap-x-2 '>
                <button className='bg-violet-700 hover:bg-violet-800 text-white
                rounded p-4 text-sm w-full transition'>
                  Send message</button>
                <button className='border border-violet-700 text-violet-700
                hover:border-violet-500 hover:text-violet-500 rounded p-4 text-sm
                w-full transition'>
                  Call</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </section>
  )
};

export default PropertyDetails;

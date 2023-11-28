import {  createContext, useContext, useEffect, useState } from "react";
import { housesData } from "../data";



const HouseContext = createContext()
export const useHouseContext = () => useContext(HouseContext)


const HouseContextProvider = ({children}) => {
  const [houses, setHouses] = useState(housesData)
  const [country, setCountry] = useState('Location (any)')
  const [countries, setCountries] = useState([])
  const [property, setProperty] = useState('Property (any)')
  const [properties, setProperties] = useState([])
  const [price, setPrice] = useState('Price range (any)')
  const [loading, setLoading] = useState(false)



  useEffect(() => {
    const allCountries = houses.map(house => house.country) 
    
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)]
    
    setCountries(uniqueCountries)
  },[])



  useEffect(() => {
    const allProperties = houses.map(house => house.type)
    
    const uniqueProperties = ['Property (any)', ... new Set(allProperties) ]

    setProperties(uniqueProperties)
  }, [])


  const handleClick = () => {

    //set Loading
    setLoading(true)

    //create a function that checks if the string includes '(any)'
    const isDefault = (str) => str.split(' ').includes('(any)')

    //get first value of price and parse it to number
    const minPrice = parseInt(price.split(' ')[0])

    //get second value of price which is the maximum & parse it to number
    const maxPrice = parseInt(price.split(' ')[2])

    const newHouses = housesData.filter(house => {
      const housePrice = parseInt(house.price)

      //if all values are selected return the selected houses
      if(house.country === country && 
        house.type === property && 
        housePrice >= minPrice &&
        housePrice <= maxPrice
        ) {
        return house
      }

      //if all values are default return all values
      if(isDefault(country) &&
          isDefault(property) &&
          isDefault(price) ) {
            return house
          }

      //if country is not default return all country
      if(!isDefault(country) &&
        isDefault(property) &&
         isDefault(price)) {
          return house.country === country
         }

         //if property is not default return property
         if(!isDefault(property) &&
             isDefault(country) &&
             isDefault(price) ) {
              return house.type === property
             }

          //if price is not default return price
          if(!isDefault(price) && 
             isDefault(country) && 
             isDefault(property)) {
              if(housePrice >= minPrice &&
                 housePrice <= maxPrice) {
                  return house
                 }
             }

          //if country and property is not default
          if(!isDefault(country) && 
             !isDefault(property) && 
             isDefault(price)) {
              return house.country === country &&
                     house.type === property
             }
    
             // if country and price is not default
             if(!isDefault(country) && 
                !isDefault(price) && 
                isDefault(property) ) {
                  if(housePrice >= minPrice &&
                     housePrice <= maxPrice) {
                      return house.country === country
                     }
                }

                //if proper and price is not default
                if(isDefault(country) && 
                   !isDefault(property) &&
                   !isDefault(price) ) {
                    if(housePrice >= minPrice &&
                       housePrice <= maxPrice) {
                        return house.type === property
                    }
                   }
    })


    setTimeout(() => {
      return newHouses.length < 1 ? setHouses([])
      : setHouses(newHouses),
      setLoading(false)
    }, 1000)
  }


  const contextValue = {
    country, 
    setCountry, 
    countries, 
    setCountries, 
    property,
    setProperty,
    properties,
    price,
    setPrice,
    houses,
    loading,
    handleClick
  }
  return (
    <HouseContext.Provider value={contextValue}>
      {children}
    </HouseContext.Provider>
  )
};

export default HouseContextProvider;

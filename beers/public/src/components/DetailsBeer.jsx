import { useState, useEffect } from 'react'
import { ImSpinner } from 'react-icons/im';
import { IoMdHome } from 'react-icons/io'
import Axios from 'axios'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import Header from './Header';
import './DetailsBeer.css'

const  DetailsBeer = () => {

  const {beerId} = useParams();
  const [beersData, setBeersData] = useState([])
  const [beerDetails, setBeerDetails] = useState({
    name: "",
    image_url: "",
    tagline: "",
    description: "",
    abv: 0,
    ibu: 0,
    ingredients: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get("https://api.punkapi.com/v2/beers").then((response)=>{
      setBeersData(response.data)
      setLoading(false);
    })
  },[])

  useEffect(() => {
      const specificBeer = beersData.find((beer) => beer.id == beerId);
      if (specificBeer) {
        setBeerDetails({
          name: specificBeer.name,
          image_url: specificBeer.image_url,
          tagline: specificBeer.tagline,
          description: specificBeer.description,
          abc: specificBeer.abv,
          ibu: specificBeer.ibu,
          ingredients: specificBeer.ingredients
        });
      }
  }, [beersData, beerId])

  console.log(beerDetails)
  return (
    <div className='beerContainer'>
      <Header/>
      <Link to='/'>
        <button className='backButton'><IoMdHome></IoMdHome></button>
      </Link>
        {loading ? (
        <div><ImSpinner></ImSpinner></div>
      ) : (
        <>
        <div className='wrapper'>
          <div className='beerDetails'>
            <div className='card'>
            {[1, 3, 11, 21, 20, 24].includes(Number(beerId)) ? (
              <div className="beerImageSmall">
                <img src={beerDetails.image_url} alt="name"></img>
              </div>
              ) : (
                <div className="beerImageLarge">
                <img src={beerDetails.image_url} alt="name"></img>
              </div>
              )}
            </div>
              <div className="beerInformation">
                <h2 className="nameBeer">Name: {beerDetails.name}</h2>
                <h4 className="taglineBeer">Tagline: {beerDetails.tagline}</h4>
                <h4 className='descriptionBeer'>Description: {beerDetails.description}</h4>
                <h4 className='abcBeer'>Abv: {beerDetails.abc}</h4>
                <h4 className='ibuBeer'>Ibu: {beerDetails.ibu}</h4>
                <div className='ingredientsBeer'>Ingredients:
                  <h4>Hops:</h4>
                    {Array.isArray(beerDetails.ingredients.hops) && beerDetails.ingredients.hops.map(hop => (
                      <p>{hop.name} - {hop.add}, {hop.amount.value} {hop.amount.unit}, {hop.attribute}</p>
                    ))}
                  <h4>Malt:</h4>
                    {Array.isArray(beerDetails.ingredients.malt) && beerDetails.ingredients.malt.map(malt => (
                      <p>{malt.name} - {malt.amount.value} {malt.amount.unit}</p>
                    ))}
                  <h4>Yeast:</h4>
                  <p>{beerDetails.ingredients.yeast}</p>
              </div>
            </div>
          </div>
        </div>
        </>
      )}
    </div>
  )
}

export default DetailsBeer
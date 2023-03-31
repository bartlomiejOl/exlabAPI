import React from 'react'
import { ImSpinner } from 'react-icons/im';
import { useState, useEffect } from 'react';
import Axios from 'axios'
import './Home.css';
import BeersList from './BeersList'
import Pagination from './Pagination';
import Header from './Header';

const  Home = () => {

  const [beersData, setBeersData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [howManyBeers, setHowManyBeers] = useState(12)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get("https://api.punkapi.com/v2/beers")
      .then((response) => {
        setBeersData(response.data);
        setLoading(false);
      })
  }, []);
  const lastBeer = currentPage * howManyBeers;
  const firstBeer = lastBeer - howManyBeers;
  const curentBeers = beersData.slice(firstBeer, lastBeer);

  return (
    <div className="Home">
      <Header />
      {loading ? (
        <div><ImSpinner></ImSpinner></div>
      ) : (
        <>
          <BeersList beersData={curentBeers} />
          <Pagination
            allBeers={beersData.length}
            howManyBeers={howManyBeers}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
}
export default Home
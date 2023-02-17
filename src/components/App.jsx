import { useState, useEffect } from 'react';

import 'styles/styles.css';
import { Loader } from 'components/Loader/Loader';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { fetchPhotosByQuery } from '../services/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';


export function App () {

const [hits, setHits] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState('');
const [page, setPage] = useState(1);
const [isEmpty, setIsEmpty] = useState(false);
const [showLoadMore, setShowLoadMore] = useState(false);
const [query, setQuery] = useState('');

useEffect(() => {
  if (!query) return;

  const getImages = async () => {
    setIsLoading(true);
    try {
        const { hits, totalHits } = await fetchPhotosByQuery(query, page);
        if (hits.length === 0) {
          setIsEmpty(true);
          return;
        }
        setHits(prevState => [...prevState, ...hits]);
        setShowLoadMore(page < Math.ceil(totalHits / 12));
      } catch(error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
  };
  getImages();
}, [page, query]);
  
  const onSubmit = query => {
      setQuery(query);
      setHits([]);
      setIsLoading(false);
      setIsEmpty(false);
      setError('');
      setPage(1);
      setShowLoadMore(false);
  };

  const handlerLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
      <>
      <div className='App'>               
        {isLoading && <Loader />}
        <Searchbar onSubmit={onSubmit} />
        {isEmpty ? (
        <p>No photos found</p>
      ) : (
       <ImageGallery hits={hits}/>
      )}
        {showLoadMore && (
          <Button type="button" onClick={handlerLoadMore} />
        )}
      {error && <p>Error: {error.message}</p>}
      </div>
      </>
    );
  }


import { useState } from 'react';
import PropTypes from 'prop-types';
import 'styles/styles.css';
 
export function Searchbar ({onSubmit}) {

const [query, setQuery] = useState('');

 const handlerInput = ({ target }) => {
    setQuery(target.value.trim());
  };

  const handlerSubmit = event => {
    event.preventDefault();
    onSubmit(query);
    setQuery('');
  };
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={handlerSubmit}>
        <button type="submit" className="SearchForm-button">🔍
        <span className="SearchForm-button-label">Search</span>
        </button>
        <input
        className="SearchForm-input"
        type="text"
        autoComplete="off"
        value={query || ''}
        autoFocus
        placeholder="Search images and photos"
        name="query"
        onChange={handlerInput}
        />   
      </form>
      </header>
    );
  }


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  query: PropTypes.string,
};

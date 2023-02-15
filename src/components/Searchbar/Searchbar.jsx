import { Component } from 'react';
import PropTypes from 'prop-types';
import 'styles/styles.css';
 
export class Searchbar extends Component {
  state = {
    query: '',
  };

  handlerInput = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handlerSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };
  
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handlerSubmit}>
        <button type="submit" className="SearchForm-button">🔍
        <span className="SearchForm-button-label">Search</span>
        </button>
        <input
        className="SearchForm-input"
        type="text"
        autoComplete="off"
        value={this.state.query || ''}
        autoFocus
        placeholder="Search images and photos"
        name="query"
        onChange={this.handlerInput}
        />   
      </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  query: PropTypes.string,
};

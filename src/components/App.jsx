import React , { Component } from 'react';

import 'styles/styles.css';
import { Loader } from 'components/Loader/Loader';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { fetchPhotosByQuery } from '../services/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';


export class App extends Component {
  state = {
    hits: [],
    isLoading: false,
    error: '',
    page: 1,
    showLoadMore: false,
    query: '',
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ isLoading: true });
      try {
        const { hits, totalHits } = await fetchPhotosByQuery(query, page);
        this.setState((prevState) => ({
          hits: [ ...prevState.hits, ...hits],
          showLoadMore: page < Math.ceil(totalHits / 12),
        }));
      } catch (error) {
      } finally {
        this.setState({ isLoading: false });
      }
    };
  };

  onSubmit = query => {
    this.setState({
      query,
      hits: [],
      isloading: false,
      error: '',
      page: 1,
      showLoadMore: false,
    });
  };

  handlerLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { showLoadMore, isLoading } = this.state;
    return (
      <>
      <div className='App'>               
        {isLoading && <Loader />}
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery hits={this.state.hits}/>
        {showLoadMore && (
          <Button type="button" onClick={this.handlerLoadMore} />
        )}
      </div>
      </>
    );
  }
}


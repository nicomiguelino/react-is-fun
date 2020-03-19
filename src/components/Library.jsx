import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Book } from './Book';
import { Hiring } from './Hiring';
import { NotHiring } from './NotHiring';

class Library extends Component {
  static defaultProps = {
    books: [
      {
        title: 'Tahoe Tales',
        author: 'Chet Whitley',
        pages: 1000
      }
    ]
  }

  state = {
    open: false,
    freeBookmark: true,
    hiring: true,
    data: [],
    loading: false
  }

  componentDidMount() {
    this.setState({
      loading: true
    });

    fetch('https://hplussport.com/api/products/price/sort/asc/qty/1')
      .then(data => data.json())
      .then(data => this.setState({data: data.slice(4, 5), loading: false}));
  }

  componentDidUpdate() {
    console.log("The component just updated");
  }

  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  render() {
    const { books } = this.props;

    return (
      <div>
        {this.state.hiring ? <Hiring/> : <NotHiring/>}

        {this.state.loading
          ? "Loading..."
          : <div>
              {this.state.data.map((product, index) => {
                return (
                  <div key={index}>
                    <h3>Library Product of the Week</h3>
                    <h4>{product.name}</h4>
                    <img alt={product.name} src={product.image}/>
                  </div>
                );
              })}
            </div>}

        <h1>The library is {this.state.open ? 'open' : 'closed'} </h1>

        <button onClick={this.toggleOpenClosed}>Change</button>

        {books.map((book, index) => <Book
          key={index}
          title={book.title}
          author={book.author}
          pages={book.pages}
          freeBookmark={this.state.freeBookmark}/>)}
      </div>
    );
  }
};

Library.propTypes = {
  books: PropTypes.array
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  pages: PropTypes.number,
  freeBookmark: PropTypes.bool
}

export default Library;
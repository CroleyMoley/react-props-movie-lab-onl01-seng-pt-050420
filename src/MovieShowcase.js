import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'


export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
  return movieData.map((data, index) => {
    return (
      <div>
        <MovieCard
        key={index}
        title={data.title}
        IMDBRating={data.IMDBRating}
        genres={data.genres}
        poster={data.poster}
        />
      </div>
    )
  })

  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    ) 
  }
}

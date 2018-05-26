var movies = [
  {
      id: 1,
      src: './img/hp.jpg',
      title: 'Harry Potter',
      desc: 'film o czarodzieju'
  },
  {
      id: 2,
      src: './img/kl.jpg',
      title: 'Król Lew',
      desc: 'Film o królu sawanny'
  },
  {
      id: 3,
      src:'./img/och.jpg',
      title: 'Ojciec Chrzestny',
      desc: 'Opowieść o nowojorskiej rodzinie mafijnej. Starzejący się Don Corleone pragnie przekazać władzę swojemu synowi.'
  }
];

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      React.createElement('li', {key: this.props.movie.id},
      React.createElement(MovieTitle, {title: this.props.movie.title}),
      React.createElement(MovieDesc, {desc: this.props.movie.desc}),
      React.createElement(MovieImg, {src: this.props.movie.src}),
      )
    )
  }
});


var MovieElem = React.createClass({
  propTypes: {
    movies: React.PropTypes.array.isRequired
  },

  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {},
          this.props.movies.map(function(movie) {
            return React.createElement(Movie, {key: movie.id, movie: movie});
          })
        )
      )
    )
  }
});

var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      React.createElement('h2', {}, this.props.title)
    )
  }
});

var MovieDesc = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      React.createElement('p', {}, this.props.desc)
    )
  }
});

var MovieImg = React.createClass({
  propTypes: {
    src: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      React.createElement('img', {src: this.props.src})
    )
  }
});


var movieElements = React.createElement(MovieElem, {movies: movies});
ReactDOM.render(movieElements, document.getElementById('app'));
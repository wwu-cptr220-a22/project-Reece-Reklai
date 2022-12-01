import React, { Component } from 'react' // import React Component
import './style.css'
import _ from 'lodash'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { pets: props.pets }
  }
  render() {
    const breeds = Object.keys(_.groupBy(this.props.pets, 'breed'))
    return (
      <div id="app">
        <header className="jumbotron jumbotron-fluid py-4">
          <div className="container">
            <h1>Adopt a Pet</h1>
          </div>
        </header>

        <main className="container">
          <div className="row">
            <div id="navs" className="col-3">
              <BreedNav breeds={breeds} />
              <AboutNav />
            </div>
            <div id="pet-list" className="col-9">
              <h2>Dogs for Adoption</h2>
              <PetList pets={this.state.pets} />
            </div>
          </div>
        </main>

        <footer className="container">
          <small>Images from <a href="http://www.seattlehumane.org/adoption/dogs">Seattle Humane Society</a></small>
        </footer>
      </div>
    )
  }
}
export class PetList extends Component {
  render() {
    const dogCards = this.props.pets.map((pet) =>
      <PetCard key={pet.name} dog={pet} />
    )
    return (
      <div className="card-deck">
        {dogCards}
      </div>
    )
  }
}
export class AboutNav extends Component {
  render() {
    return (
      <nav id="about-links">
        <h2>About</h2>
        <ul className="list-unstyled">
          <li><a href="#/">How to Adopt</a></li>
          <li><a href="#/">Volunteering</a></li>
          <li><a href="#/">Events</a></li>
          <li><a href="#/">Donate</a></li>
          <li><a href="#/">About Us</a></li>
        </ul>
      </nav>
    )
  }
}
export class BreedNav extends Component {
  render() {
    const links = this.props.breeds.map((breed) => {
      return <li key={breed}><a href="#/">{breed}</a></li>
    });
    return (
      <nav id="breed-links">
        <h2>Pick a Breed</h2>
        <ul className="list-unstyled">
          {links}
        </ul>
      </nav>
    )
  }
}

export class PetCard extends Component {
  render() {
    const dog = this.props.dog
    return (
      <div className="card">
        <img className="card-img-top" src={dog.img} alt={dog.name} />
        <div className="card-body">
          <h3 className="card-title">{dog.name}</h3>
          <p className="card-text">{dog.sex} {dog.breed}</p>
        </div>
      </div>
    )
  }
}

export default App

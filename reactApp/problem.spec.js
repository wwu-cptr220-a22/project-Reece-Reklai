import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// solution classes
import App, { AboutNav, BreedNav, PetCard, PetList } from './src/App'

// include custom matchers
const styleMatchers = require('jest-style-matchers')
expect.extend(styleMatchers)
const path = require('path')

// test data
const TEST_PETS = [
  { name: 'Pet A', sex: 'Male', breed: 'Breed A', img: 'imgA' },
  { name: 'Pet B', sex: 'Male', breed: 'Breed B', img: 'imgB' },
  { name: 'Pet C', sex: 'Male', breed: 'Breed A', img: 'imgC' }
]

/* Begin the tests */

describe('Source code is valid', () => {
  test('JavaScript lints without errors', async () => {
    const sources = ['App.js'].map((src) => path.join(__dirname, 'src', src))
    const linterOptions = {} // this should be sufficient with other fields
    sources.forEach((source) => {
      expect([source]).toHaveNoEsLintErrors(linterOptions) // test each
    })
  })
})

describe('The pet adoption app', () => {
  it('renders without crashing', () => {
    render(<App pets={TEST_PETS} />)
  })

  it('renders the App page structure', () => {
    render(<App pets={TEST_PETS} />)

    // header
    expect(document.querySelectorAll('.jumbotron.jumbotron-fluid').length).toBe(1)
    expect(document.querySelector('h1').textContent).toEqual('Adopt a Pet')

    // main (includes columns)
    expect(document.querySelectorAll('.col-3').length).toBe(1)
    expect(document.querySelectorAll('.col-9').length).toBe(1)

    // footer
    expect(document.querySelector('footer').textContent).toEqual('Images from Seattle Humane Society')
  })

  it('renders the AboutNav component', () => {
    render(<AboutNav />)

    expect(screen.getByRole('heading', { level: 2, name: 'About' })).toBeInTheDocument() // page contains component
    expect(document.querySelectorAll('#about-links li a').length).toBe(5) // includes all the links
  })

  it('renders the BreedNav component', () => {
    render(<BreedNav breeds={['Breed A', 'Breed B']} />)

    expect(screen.getByRole('heading', { level: 2, name: 'Pick a Breed' })).toBeInTheDocument() // page contains component
    expect(document.querySelectorAll('#breed-links li a').length).toBeGreaterThan(0) // includes links (some)
  })

  it('renders BreedNav with correct props', () => {
    render(<BreedNav breeds={['Breed A', 'Breed B']} />)

    const breedNavLinks = document.querySelectorAll('#breed-links li a')
    expect(breedNavLinks.length).toBe(2) // actually count
    expect(breedNavLinks[0].textContent).toEqual('Breed A') // check entries
    expect(breedNavLinks[1].textContent).toEqual('Breed B') // check entries
  })

  it('renders the PetCard components', () => {
    const pet = TEST_PETS[0] // which pet
    render(<PetCard mutt={pet} />)

    const cardImg = screen.getByRole('img')
    expect(cardImg.src).toEqual('http://localhost/' + pet.img)
    expect(cardImg.alt).toEqual(pet.name)
    const cardTitle = document.querySelector('.card-title')
    expect(cardTitle.textContent.trim()).toEqual(pet.name)
    const cardText = document.querySelector('.card-text')
    expect(cardText.textContent.trim()).toEqual(`${pet.sex} ${pet.breed}`)
  })

  it('renders the PetList component', () => {
    render(<PetList pets={TEST_PETS} />)

    expect(screen.getByRole('heading', { level: 2, name: 'Dogs for Adoption' })).toBeInTheDocument() // check heading
    expect(screen.getAllByRole('img').length).toBe(TEST_PETS.length) // has the correct number of images
  })

  it('has an `App#adopt()` callback', () => {
    render(<App pets={TEST_PETS} />)

    expect(screen.queryAllByText(/\(Adopted\)/).length).toBe(0)
    userEvent.click(screen.getByRole('heading', { name: 'Pet A' }))
    expect(screen.getByText(/Pet A \(Adopted\)/)).toBeInTheDocument()
  })
})

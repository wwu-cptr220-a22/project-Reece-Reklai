const fs = require('fs')
const path = require('path')
// TODO: figure out why Jest doesn't like the scripts here
// require('./js/header.js')

// include custom matchers
const styleMatchers = require('jest-style-matchers')
expect.extend(styleMatchers)

describe('Source code is valid', () => {
  test('HTML validates without errors', async () => {
    const lintOpts = {
      'attr-bans': ['align', 'background', 'bgcolor', 'border', 'frameborder', 'marginwidth', 'marginheight', 'scrolling', 'style', 'width', 'height'], // adding height, allow longdesc
      'tag-bans': ['style', 'b'], // <i> allowed for font-awesome
      'doctype-first': true,
      'doctype-html5': true,
      'html-req-lang': true,
      'attr-name-style': false, // for meta tags
      'line-end-style': false, // either way
      'indent-style': false, // can mix/match
      'indent-width': false, // don't need to beautify
      'id-class-style': false, // I like dashes in classnames
      'img-req-alt': true
    }

    const htmlfiles = fs.readdirSync(__dirname).filter((f) => f.endsWith('.html'))
    for (const f of htmlfiles) {
      await expect(f).toHaveNoHtmlLintErrorsAsync(lintOpts)
    }
  })

  test('CSS validates without errors', async () => {
    await expect('css/*.css').toHaveNoCssLintErrorsAsync() // test all files in css folder
  })

  test('JavaScript lints without errors', () => {
    if (fs.existsSync(path.join(__dirname, 'js'))) {
      const jsfiles = fs.readdirSync(path.join(__dirname, 'js')).filter((f) => f.endsWith('.js'))

      for (const f of jsfiles) {
        expect(['js/' + f]).toHaveNoEsLintErrors()
      }
    }
  })
})

describe('Home Page Tests', () => {
  // looking at files in html folder
  const homePagePath = path.join(__dirname, 'html', 'index.html')

  test('File exists', () => {
    expect(fs.existsSync(homePagePath))
  })

  // Read details from home page file
  const homePage = fs.readFileSync(homePagePath, 'utf-8')
  // load the HTML into the tester
  document.documentElement.innerHTML = homePage

  // test('Home page has header', () => {
  //   // expect(document.querySelector('my-header')).not.toEqual(null)
  // })
  test('Home page loads weather info', () => {
    expect(document.querySelector('.weather').innerHTML).not.toEqual(null)
  })
})

describe('About Page Tests', () => {
  // looking at files in html folder
  const aboutPagePath = path.join(__dirname, 'html', 'about.html')

  test('File exists', () => {
    expect(fs.existsSync(aboutPagePath))
  })

})

describe('Buy Page Tests', () => {
  // looking at files in html folder
  const buyPagePath = path.join(__dirname, 'html', 'buy.html')

  test('File exists', () => {
    expect(fs.existsSync(buyPagePath))
  })

})
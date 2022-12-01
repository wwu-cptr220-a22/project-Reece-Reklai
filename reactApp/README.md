# Problem: Pet Adoption (Interactive)

In this exercise you will practice developing a React application with components, props, state, and events.
You will do this by converting an existing "static" site into a dynamic one.

Specifically, you will be implementing a dynamic site supporting pet adoption (like at an animal shelter).
You can see what the site will look like by opening up the **`pets-mockup/index.html`** file in a browser: you will produce a dynamic, interactive version of this site using React.

## Running the Program
Because this app is created with React (and scaffolded through [Create React App](https://github.com/facebook/create-react-app)), you will need to install dependencies and run a developer web server in order to transpile and view the application.
You can run this server by using the command:

```bash
# from inside the `problem-a/` folder
cd path/to/problem-a

# install dependencies
npm install  # only once

# run the server
npm start
```

You can then view the rendered page *in a web browser*.
Remember to check the Developer console for any errors!

## Exercise Instructions
To complete the exercise, edit the included **`src/App.js`** file and add in the required code.
Note that you should ***NOT*** edit any of the other provided files (including `index.js` or `index.html`).

(To make testing easier and more consistent, you will be defining all components for your App inside of the `App.js` module, as opposed to organizing them into separate modules).

**Background**: The first step to creating a React app is determining what components your page will need.
One good way to do this is to start with a *static* version of the page (e.g., pure HTML/CSS) and try and break it up into different "parts".
These will often correspond to semantic sectioning or `<div>` elements.

- Think about what "boxes" you would break the page up into!

You can then convert each of these parts into a React Component, as detailed below:

1. First, implement a component **`App`** that will represent the "overall" application.
    This component will be responsible for representing the *outline* of the page: think everything inside the `<body>` (though major sections will be defined by other components to keep things separated).

    Give the `App` component a `render()` function that will output the main "page structure" found in the `pets-mockup/index.html` file (you can and should copy-and-paste from that HTML file into JSX!).
    This should include the `<header>`, `<main>`, and `<footer>` sections.
    *DO* include the `#navs` and `#pet-list` divs, but *DO NOT* include the contents of those divs&mdash;that will be defined by separate components later.

    - Remember to change all the `class` attributes into `className` attributes.

    This should allow you to see the header and footer of the page.

2. While the Bootstrap framework is imported in the `public/index.html` file from a CDN, the custom CSS file will also need to be included in your app.
    Luckily, Create React App's webpack configuration supports the ability to `import` CSS files directly into the app!

    Copy the `style.css` file into the app's `src/` folder, and then `import` the file.
    You will need to include the full filename (with `.css` extension).
    This import should NOT be assigned a name (since it isn't a variable you want to reference later).

    This should cause the header to become the correct shade of blue.

3. The next component of your app you should add is the "About" navigation links.
    Implement a component **`AboutNav`** that will `render()` the contents of that `<nav>` element (again, copy-and-paste from the `pets-mockup/index.html` file).

    Modify the `App` component's `render()` function so that it renders an instance of the `<AboutNav>` in the appropriate spot in the DOM structure.

    Your page should now show that list of links.

4. The remainder of the application will be dynamically generated based on the pets currently available for adoption&mdash;for example the "Breeds" navigation will only include links to breeds that are currently in the shelter.

    The provided `index.js` file has imported a JSON file containing some sample pets, and passes this data to the `<App>` as a **`pets`** prop.

    (Normally you would want to load the data dynamically in the `componentDidMount()` callback, but it is being passed in as a prop for testing).

    Visually confirm that the data has been imported in the `index.js` file and is passed as a prop to the instantiated `<App>`.
    Realize that you can access this data as `this.props.pets` inside the `App` component.
    Otherwise there is no code you need to write for this step!

5. Implement a **`BreedNav`** component that will represent the "Breeds" navigation links.
    This component should accept a **`breeds`** prop that is an *array of strings* (pet breeds), and render a link for each element in the array.

    - You can copy the `<nav>` element, heading, and structure from the mockup `index.html`.

    - Use the `.map()` function to map the `breeds` prop to an array of `<li>` elements, each including an `<a>` element showing the name of the breed (they can link to nowhere with `href=""`).
    Remember to give each `<li>` element a `key` attribute!

    Next, modify the `App` component so that it renders the `<BreedNav>` element in the correct place in the DOM hierarchy.
    You will need to pass it an array of breed names (strings) as a `breeds` prop, which you should get from the `this.props.pets` array.

    - A nice (but not required) way to extract the list of breeds names from the `this.props.pets` array is to use the Lodash [`.groupBy()`](https://lodash.com/docs/4.17.15#groupBy) function.
        You will need to `import` the Lodash library (e.g., with `import _ from 'lodash'`), which has already been included and downloaded as a dependency.
        Check the linked documentation for the function to determine how to group elements in an array by a particular property (it will be like the second example, but using the `breed` property instead of the `length` property).
        You can then use the `Object.keys()` function to extract the keys of that object (which will be the breeds) as an array.

    When completed, this step should cause the navigation to appear with links to the 4 different breeds.

6. The next step is to fill in the cards representing the different pets to adopt.
    Because you want to repeat the same "card" structure multiple times, it makes sense to make a Component class that can be instantiated multiple times.
    Implement a **`PetCard`** component that will represent a single pet card (which should be passed in as a *prop*.
    This prop's value will be an Object like those in the `dogs.json` array).

    - You can copy-and-paste the HTML for a card from the mockup `index.html` file.
        Each card in the example has the same structure, just different content values.

    - Be sure and give the `<img>` an `alt` attribute that is the pet's name (reference the value from the *prop*)!

    - **Note** You will need to copy the `img/` directory from the `pets-mockup` into your app's **`public/`** folder in order to make the referenced images available to display.

7. In order to organize the cards into a single group, you should implement another component **`PetList`** (making this a separate components helps keep your program organized, so you can reuse the card grid elsewhere if desired).
    This component should take as a **`pets`** prop an *array* of pet objects (similar to the `dogs.json` array).
    It should `.map()` array to an array of `PetCard` components, and then render those elements.

    - Note that you will need to pass in a pet object as prop to each `PetCard` as you instantiate it&mdash;luckily each card expects such a prop!

    - Again, copy-and-paste the "heading" for the card list from the mockup `index.html` file.

    Finally, modify the `App` component so that it renders the `PetList` at the appropriate place in the DOM hierarchy.

    Your app should now show all the page's content&mdash;you've converted the HTML/CSS into React!


8. The last part of the exercise is to make the page *interactive*.
    In particular, you will add the ability to click on a pet card to mark it as "adopted"&mdash;this will change the data stored in the model (the array of objects), and cause the page to "re-render" the associated card to also display `(Adopted)` after the pet's name.

    Because the pet data will now need to change over the life of the application, it should be stored in the [**state**](https://reactjs.org/docs/state-and-lifecycle.html) of the `App` Component, instead of just as an unchangeable prop.
    Add a **constructor** to the `App` component which will assign the `pets` prop to a **`pets`** property in the `this.state` object.
    You will also need to modify the `render()` function to refer to the property in the state (rather than in the props).

9. Add a new method **`adopt()`** to the `App` component that takes in the *name* of a pet (a String), and modifies the Object representing that pet in the `pets` state variable so that the pet's `adopted` property becomes `true`.

    - Because this function will be called from an event handle, you'll want to define it as a *public class field*.
        Alternatively, you can wrap it in an arrow function when specified as a callback.

    - Since you'll be wanting to modify elements in the state *based on* the current state, you'll need to call the **`setState()`** method and pass it an (anonymous) callback function.
        This function should expect a parameter representing the current `state` and do the following:

        1. Then locate the correct pet Object inside the current `state.pets` array (the Lodash [`.find()`](https://lodash.com/docs/4.17.10#find) function can help.
            Look at the examples for how you can find an object that has a particular property, such as the `name`).

        2. Assign a new value to that object's `adopted` property, indicating the pet is adopted.

        3. `return` an Object of values to change in the state&mdash;namely, that the `pets` value should now have the updated `state.pets` value.

    Also modify the `PetCard` component so that *if* the pet has been adopted, the text `(Adopted)` is shown next to the pet's name.
    You can include this by creating a local variable for the `displayedName` (and using an if/else to set that), or by using an inline [ternary operator](https://reactjs.org/docs/conditional-rendering.html#inline-if-else-with-conditional-operator).

    (You can test this modification by *temporarily* adding a `<button>` to the `App` that will call the method with a hard-coded pet name when clicked, or proceed to the next step to complete the app).

10. The last step is to give each `PetCard` an `onClick` event handler which will (eventually) call the `adopt()` method you created in `App` as a callback.
    But in order for the `PetCard` to have access to this callback function, it will need to be given a reference to it as a *prop*.

    Modify the `PetCard` class so that takes in an **`adoptCallback`** prop.
    When the Component is clicked, it should execute this callback function, passing it the name of the pet (which was also given it as a prop)!

    - Because you will need access to the `this` to refer to `this.props` and pass in the correct value, you'll need to either give the `PetCard` a new method (defined as a public class field) to handle the click, or pass the `onClick` handler an *arrow function* that will call the `this.props.adoptCallback()` function.

    Since the `PetCard` component now needs an `adoptCallback` prop, that will need to be provided by the `PetList` component!
    But since that too will need to know what function to pass to the `<PetCard>`, you will **also** need to modify the `PetList` component so it takes an **`adoptCallback`** prop (which will then be passed down to the `PetCard`).
    You're passing a value (which happens to be a function) down the tree!

    Finally, you can have the `App` component pass in its `adopt` method to the `<PetList>` (which will then pass it down to to the `<PetCard>`).
    Be sure that you defined the `adopt()` function as either a public class field, or that you wrapped it in an *arrow function* to maintain the `this` context.

With all this in place, you should be able to click on a `PetCard` to mark that pet as adopted (at least locally until the page reloads)!

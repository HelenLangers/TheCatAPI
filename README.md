<a name="readme-top"></a>

<!-- PROJECT NAME -->
<h3 align="center">The Cat Gallery</h3>

  <p align="center">
    A technical challenge using theCatAPI.com
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The App</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#roadmap">Roadmap</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE App -->
# About The App

The acceptance criteria provided for me:

Listing the Cats
- Create a page at "/" that lists the first 20 cat images, in descending order.
- Display in a responsive way, up to a maximum of 4 cat images per row, it should neatly scale down to 340px wide viewport and ensure images are not stretched.

Voting the Cats
- On the listing at "/" add a "vote up" and "vote down" button below each of the cat images that calls the API saving the vote made on the Cat.

Scoring the Cats
- Display the score for each cat below the image using the API endpoint. The score is equal to (number of up votes - number of down votes).



<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* HTML
* CSS
* Javascript
* React (useState, useEffect, useContext)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- NOTES -->
### Notes
- [ ] Whilst Redux is a much better state management tool for React, the demands of still being in full time education at CodeClan necessitate me to implement useContext here as it's something that I already know how to use.
- [ ] I have placed my API key in a git-ignored config file here. I contemplated making the API calls in a server.js using node-fetch but the API has CORS enabled so decided to keep it client side.
- [ ] I have started self-teaching about accessibility and have implemented some aria labels and tab indexes here.


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started
### Installation

1. Clone the repo
    ```sh
    git clone git@github.com:HelenLangers/TheCatApi.git
    ```
2. Install dependencies
    ```sh
    npm i
    ```
3. Create a config.js file in the src folder and enter your api key:
    ```sh
    const config = {
    api_key: {your thecatapi api key here}
    }
    export default config
    ```
4. Start the app
    ```sh
    npm start
    ```
5. View the app at localhost:3000 if it doesns't automatically open.


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Helen Langridge - [Twitter](https://twitter.com/HelenCycling) - [LinkedIn](https://www.linkedin.com/in/helen-langridge-62b32b166/) - [Personal Website](https://www.helenlangridge.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [theCatAPI](https://thecatapi.com/)
* [FontAwesome](https://fontawesome.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

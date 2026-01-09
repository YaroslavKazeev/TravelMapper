# TravelMapper

TravelMapper is a web application that provides Google Maps-like functionality, allowing users to set starting points and destinations and view driving routes. It uses Google Places API for location suggestions and Maps Embed API for route display.

This is a responsive app; it adjusts the layout to devices of different sizes. TravelMapper is a single-page application (SPA). It dynamically updates the HTML and CSS using JavaScript DOM manipulation. The app interacts with an API to grab data as the user requests it. Possible errors are shown to the user on the web page.

This application is the project assignment and belongs to the API chapter of the HackYourFuture curriculum.

The application uses:

- Google Places API to provide real-time location suggestions as the user types.
- Maps Embed API to show the map with the route between the origin and destination points.

It demonstrates how to access an API from the front-end and how you might handle errors in a user-friendly way.

## Tech Stack

- **HTML5** - Structure and markup
- **CSS3** - Styling and responsive design
- **JavaScript (ES6+)** - Application logic and DOM manipulation
- **Google Places API** - Location autocomplete and suggestions
- **Google Maps Embed API** - Route visualization and map display

## Getting Started

### Local Setup

It is a static front‑end app and should be served with a local live server (VS Code or another IDE) to avoid issues with API scripts.

```bash
#1 Clone this repository (or download and unpack the archive)
$ git clone https://github.com/YaroslavKazeev/TravelMapper.git

#2 Go into the repository
$ cd TravelMapper
```

#3 Create the environment file

- Copy [example-env.js](example-env.js) to [env.js](env.js) in the project root.
- Put your Google API key into [env.js](env.js) as described in the example file.

#4 Run with a live server

- VS Code: install the “Live Server” extension, open [index.html](index.html), and choose “Open with Live Server”.
- Other IDEs: use a Live Server (or similar) plugin to serve the project folder, then open [index.html](index.html) via that server.

#5 Open the served URL (e.g., http://localhost:5500) in your browser

## Running the App

### What You'll See

- Two text input fields for the starting point and destination location names.
- Clickable suggestion of the location names as soon as the user makes input.
- The placeholder with the picture of the map will be replaced with the embedded Google map when the user clicks the "Go" button.
- Several driving routes are shown on the map.
- Error handling when requests fail

> **Note**: This app uses the public Google APIs, which begins to rate for more than 1000 requests.

## Code Architecture

The folder structure as used in this repo is similar to the one mostly used in REACT-based projects:

```text
public\
src\
└── pages\
└── util\
└── views\
└── app.js
└── constants.js
index.html
```

This application follows the **Page/View/State Model**. This architecture separates concerns by dividing the application into three main components: Page, View, and State. Each component has its own responsibilities, which makes the code easier to maintain and understand.

At the highest root level, there are files and folders for project configuration and documentation. Only the native application components are displayed in the code architecture tree above. Each of these folders has its own README file. The entry point is the index.html file, which downloads the application to the browser.

Some files and folders belong to third-party software used in the project. For example, .gitignore defines what content is not for the commiting to the remote repository, such as env.js.

# Hacking News Web Scraping Project

This project consists of an application that scrapes news from the website "https://news.ycombinator.com/" and provides an interface to view the latest news, filter it and display additional details.

## Installation

Clone this repository to your local machine.
Navigate to the project directory.
Run the following command to install the necessary dependencies: npm install

## Usage

Once the dependencies are installed, you can run the application with the following command:
npm run dev

This will start the server and you can access the application from your web browser by visiting "http://localhost:3000".

## Features

- **News Listing:** Displays a list of the latest news fetched from "https://news.ycombinator.com/".
- **Filtering:** Users can filter the information by the number of words contained in the title of the news
- **Sorting:** The filtered news can be sorted by the number of comments if it has more than 5 words in the title, while if it has equal to or less than five words, it will be sorted by points.
  
## Contribution

If you wish to contribute to the development of this application, you should follow these steps:

1. Fork the repository.
2. Create a new branch for your feature (git checkout -b feature/new-feature).
3. Make your changes and ensure the code follows the established conventions.
4. Semantically commit your changes (git commit -am 'feat: add new feature').
5. Push your changes to your remote repository (git push origin feature/new-feature).
6. Create a new pull request from your branch to the main branch of the original repository.

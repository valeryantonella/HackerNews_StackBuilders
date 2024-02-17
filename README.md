# Hacking News Web Scraping Project

## Overview
This repository contains the code for a web crawler implemented in [insert your preferred language]. The web crawler is designed to extract information from the first 30 entries on Hacker News. It retrieves details such as the title, order number, number of comments, and points for each entry. Additionally, the crawler allows for filtering operations based on specific criteria, as outlined below.

## Installation

Clone this repository to your local machine.
Navigate to the project directory.
Run the following command to install the necessary dependencies: npm install

## Features

- **News Listing:** Scrapes data from Hacker News and displays a list of the latest news fetched from "https://news.ycombinator.com/".
  Extracts the following information for each entry:
    - Title 
    - Order number
    - Number of comments
    - Points
- **Filtering:** Users can filter the information by the number of words contained in the title of the news.
    - Filters entries with more than five words in the title, ordered by the number of comments.
    - Filters entries with less than or equal to five words in the title, ordered by points.
 
## Usage

Once the dependencies are installed, you can run the application with the following command: npm run dev

This will start the server and you can access the application from your web browser by visiting "http://localhost:3000".

## Testing

To run the tests, execute the following command in your terminal: npm run test

**Test Cases**
- Filter Functions
  Test cases for filter functions include:
    1. Valid input arrays with various entries.
    2. An empty input array to test edge cases.
- Sorting Functions
  Test cases for sorting functions include:
    1. Valid input arrays with various entries.
    2. An empty input array to test edge cases.

These test cases cover the functionality of the filter and sorting functions under different scenarios, ensuring the reliability and correctness of the code.

## Contribution

If you wish to contribute to the development of this application, you should follow these steps:

1. Fork the repository.
2. Create a new branch for your feature (git checkout -b feature/new-feature).
3. Make your changes and ensure the code follows the established conventions.
4. Semantically commit your changes (git commit -am 'feat: add new feature').
5. Push your changes to your remote repository (git push origin feature/new-feature).
6. Create a new pull request from your branch to the main branch of the original repository.

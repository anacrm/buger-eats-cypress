# buger-eats-cypress

## Description
A project to practice and showcase how to write automated tests in JavaScript using Cypress.

This project contains many test scenarios for the [buger eats](https://buger-eats-qa.vercel.app/).

## Usage

Requirements:
* node v16.16.0 (or newer)
* npm v8.11.0 (or newer)

Clone the repository and install the dependencies

```
git clone https://github.com/anacrm/buger-eats-cypress.git
cd buger-eats-cypress
npm install
```

To open the cypress Launchpad (interactive mode) 
```
npm run cy:interactive
```

To run the tests in headless mode generating a report
```
npm run cy:report
```
## Test Report
After running the tests, the reports will be available in both HTML and JSON formats. And the reports files can be found in the `reports` folder:

* mochawesome-html-report 
* report.json

The html report can be opened on the browser and here is an example of how it looks:

![HTML report](readme/htmlReport.png)

## GitHub Actions 

On the repository there is a Github action that runs on every push, running the tests and publishing the results to Cypress cloud dashboard.

## Contact

You can contact me here on GitHub, via [LinkedIn](https://www.linkedin.com/in/ana-reis-qa/) or email at reismedeiros.ana@gmail.com
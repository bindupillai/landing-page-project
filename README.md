# landing-page-project
Interface and Architecture
Criteria	Submission Requirements
Architecture

The project should have a structure like the one shown below. All files shown must be present and the app must successfully render a home page with clear design and functionality added when index.html is loaded in the browser. No errors should display in console.

css
- styles.css	
index.html
js
- app.js
README.md
Usability

All features are usable across modern desktop, tablet, and phone browsers.
A Responsive layout of the landing page should be created to use across all devices.
Make sure that the navigation bar is responsive too across all these devices.
Responsiveness can be verified by inspecting the landing page using the Developer Tools option on Google Chrome Browser.
Styling

Styling should be added for active states.
Set CSS class active state when the element is in the viewport.
The active section in the Navbar should be highlighted.
HTML Structure

There are at least 4 sections that have been added to the page.

Landing Page Behavior
Criteria	Submission Requirements
Navigation

Navigation is built dynamically as an unordered list. Start with empty ul and dynamically build navigation using Append, appendChild, and innerHTML.

Section Active State

It should be clear which section is being viewed while scrolling through the page.

Tip: Detect the element location relative to the viewport using .getBoundingClientRect() built-in function.

Scroll to Anchor

When clicking an item from the navigation menu, the link should scroll to the appropriate section. You can use the following methods to fulfill this criterion:

Use addEventListener('click',....) to listen to the click event.
Use preventDefault() as if there is a default event occurring we need to stop that.
There are several javascript methods for scrolling, scroll(), scrollBy(), and scrollIntoView() are all acceptable.
A smooth scrolling behavior is expected in the project.
Documentation
Criteria	Submission Requirements
README

The ReadMe file should replace the given texts on the README template with specific information for this project. It doesn’t have to be thorough, but should have some basic information, eg. project description, usage, dependencies, and use correct the markdown syntax.

References: markdown guide(opens in a new tab) and example of README contents(opens in a new tab)

Comments

Comments should be present at the beginning of each procedure and class.

Bonus: Great to have comments before crucial code sections within the procedure. Refer to Udacity JavaScript Style Guide - Comments(opens in a new tab) for standard best practices.

Code Quality

Code should be formatted with consistent, logical, and easy-to-read formatting.

Tip: Carefully follow the best practices mentioned in the Code formatting section of the guide

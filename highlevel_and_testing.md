## High level project overview

# Our group is part of the team of people working on the AGMeeting application. This application is a mobile and web application designed to be used by both people looking to organize meetings and those attending meetings. As the name implies the main functionality of the application caters to things like annual general meetings where there is a large number of people in attendance. The software allows for meeting participants to engage in a meeting that adheres to the Roberts Rules. These rules are intended to keep meetings flowing smoothly and ensure people do not speak out of turn. The main user group, as stated previously would be people hosting annual general meetings and looking for a way to easily moderate and control the flow of said meetings. AGMeeting will provide a wide range of functionality for doing so such as allowing for motions, seconds and comments etc…


## Testing and CI strategy

# Mocha or Jest for unit testing of both front and back end (one benefit of an express backend is the usage of javascript, make use of javascript testing frameworks)
# Mocha offers simple asynchronous testing and includes promises, which will be important for both the front end and back end
# Simple to run a group of tests placed in a single directory
# Nice fully fledged extension for VS code which will help with development
# Try to adhere to a test driven development strategy (create tests and have all methods etc pass the tests instead of the reverse)
# For for the overall testing strategy we will utilize a number of different procedures to ensure new code does not break the existing codebase etc
# All pull requests for new branches containing code for a Jira task will be reviewed by at least one other team member and individually tested by the person submitting the pr
# Once branches are merged we will conduct integration testing on the development branch by all team members before merging the changes into the production code
# Black box testing will be conducted on develop code by team members to ensure proper functionality before being pushed to production
# Branches should be created off of the develop branch, which should theoretically always contain functional code
# As for our CI strategy, automated integration tests should be run by our CI/CD service (Azure devops etc) on all code being merged into develop 

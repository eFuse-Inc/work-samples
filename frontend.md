Title: eFuse Feed Work Sample
Date: 2021-12-03
Author: eFuse

## Project Background
This document describes the requirements for the eFuse front end work sample. Applicants will be implementing a single page that hosts a feed similar to the one on eFuse. The submitted sample will be used to evaluate an applicant’s ability to interpret project requirements and implement a production ready solution based on a requirements document similar to that used internally to eFuse. Engineers should use this sample as a showcase of their talent and implement a solution that is as ready for production as possible.

## Objective
The objective is to implement a functioning feed similar to that of the eFuse lounge. Users should be able to create text based posts, like and comment on posts, and it should be responsive when scaling to smaller mobile devices.

### Key Results
* Do the UI components for the feed exist and match the Figma designs?
* Can a user create a text post by clicking on “Post”?
* Can a user like and comment on a post?
* Does the solution use some form of state management?
  * Local, context, redux, etc..
* Is the webpage responsive for web and mobile views?
* Have tests been implemented?
* Is the webpage hosted somewhere that can be viewed publicly?
  * Any hosting provider is fine?
* Has the code been supplied for review?
  * Zip, Github, Gitlab, etc..
* Has Git been used in a meaningful way with commits for each phase to demonstrate the iterative development process?

## Business Goals
As an eFuse employee, I want to be able to get an idea of an applicant’s engineering capability based on this work sample to help determine if they would be a good fit for the eFuse engineering team.

## Proposed Phases
Each of the phases below are laid out in a similar manner to internal eFuse PRDs. While these are guidelines for the applicant to use when building their solution, they are simply the minimum viable product for success. Applicants can feel free to improve on items listed. Figma designs have been attached below and should be used when implementing the user interface.

**Figma Designs:**  https://www.figma.com/file/NgDSMM4qGcvNvufSi3wtmJ/eFuse-Work-Sample?node-id=0%3A1

### Phase 1 - Create Post
The goal of this phase is to implement the ability for a user to create a post.

**Business Objectives:**
As a user, I want to be able to create a text post by typing in an input box and then pressing the “Post” button.

**Engineering Recommendations:**
* Refer to the Figma designs linked above for design specifications
* Implement some sort of state management for post data storage

**Definition of Done**
* There exists an input field for the user to type
* There exists a “Post” button to create a post
* On “Post” click a new post is created below the input section.
* The UI matches the Figma designs

### Phase 2 - Comment on Post
The goal of this phase is to add functionality so that a user can comment on a previously created post.

**Business Objectives:**
As a user, I want to be able to comment on an existing post and see my comment on the post.

**Engineering Recommendations:**
* Refer to the Figma designs linked above for design specifications of comments
* Utilize some sort of state management to store comments

**Definition of Done**
* There exists an input field for the user to type comments
* Comments are created when the user pressed the “enter” key
* The UI matches the Figma designs
* Do not implement editing or deleting of comments for this work sample.

## Phase 3 - Like Posts and Comments
The goal of this phase is to add functionality so that a user can like a previously created post or comment.

**Business Objectives:**
* As a user, I want to be able to click a button to “like” a post and see that reflected in the UI.
* As a user, I want to be able to click a button to “like” a comment and see that reflected in the UI.

**Engineering Recommendations:**
* Refer to the Figma designs linked above for design specifications of likes
* Utilize some sort of state management to store likes

**Definition of Done**
* There exists a button on posts to “like”
* There exists a button on comments to “like”
* A user’s like is displayed in the UI
* The UI matches the Figma designs

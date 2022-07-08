# Background
Every user at ForTheGamers has a profile that allows them to show off their professional highlights throughout the gaming industry. Each profile contains information about the user, their gaming interest, and their professional experience. Data points consist of **first name, gaming interest, last name, email, employer, job title**, and the **start date** they were employed (See Figure 1 for more). 

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/23278343/178041946-455a6128-e7fd-4506-ba2e-1fad32053695.png" alt="Figure 1: User Profile" 
       style="width:450px;height:500px;" />
</p>

<p align="center">Figure 1: User Profile</p>

## Constraints
* Users can have more than one gaming interest
* Users can have more than one employer
* Email must be unique
* Interest must be unique
* Combined First Name and Last Name must be unique (i.e. Matthew Quinn cannot be duplicated)
* There cannot be Null values
* Required fields: **first name, last name, email, employer, job title, start date**
* Make all dates or timestamps consistent

**NOTE**: If you have any questions throughout this work sample, don’t hesitate to reach out!

## Problem 1: DB Design
Use any tool ([figma](https://www.figma.com/), [drawio](https://drawio-app.com/), [lucidchart](https://www.lucidchart.com)) you want to create an EERD or UML diagram to model the database with the above background information and constraints (make sure you don’t violate any database constraints: insert, update, delete). Don’t forget, this is a relational model!

## Problem 2: Query Optimization
Now that the database is designed, we’ll work with engineering on creating optimal queries for the backend API they’ve built (ORMs don’t do what we want so it’s vanilla SQL). Your task is this: write a query that pulls in all of the information for a single users profile (make sure the employer information is in descending order) with a user id of 17.

## Problem 3: Migration Plan
Oop! The engineering team realized that they don’t have a way to track a users employment **end date**. Based on the tables you designed, 1) create a plan to migrate the new table design to account for the **end date** and 2) talk to how you’d migrate old data to the new design. See Figure 2 for the updated visual.

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/23278343/178042175-bc7b8d39-ba73-4517-aa92-121a5a5e1102.png" alt="Figure 2: Updated User Profile" style="width:450px;height:500px;" />
</p>

<p align="center">Figure 2: Updated User Profile</p>

## When You're Finished!
- Email a zip file of your completed work with the convention:

    `lastname_efuse-work-sample-dba.zip` to your recruiter.
  - For Example: `quinn_efuse-work-sample-dba.zip`
<br>

The files to include in your zip:
- dba.md (contains your responses)
- [DIAGRAM NAME].png/.jpeg (your diagram from question 1)
- any other files you need to include

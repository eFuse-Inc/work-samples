# Overview

Hello and welcome to your DBA work sample. If you have any questions, need more time, or want to check in, don't hesitate to let us know. We want this experience to be great for you!

## Prompt

Every user at ForTheGamers has a profile that allows them to show off their professional highlights throughout the gaming industry. Each profile contains information about the user, their gaming interest, and their professional experience. Data points consist of **first name, last name, gaming interest, email, employer name, job title, start date**, and **end date** (See Figure 1 for more).

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/23278343/178042175-bc7b8d39-ba73-4517-aa92-121a5a5e1102.png" alt="Figure 2: Updated User Profile" style="width:450px;height:500px;" />
</p>

<p align="center">Figure 1: User Profile</p>

## Some Notes

- Users can have more than one employer
- Users can have more than one gaming interest
- Email must be unique
- Gaming interest must be unique
- The combned first name and last name must be unique (i.e. there is only one Matthew Quinn)
- Required fields: **first name, last name, email, employer, job title, start date**

## Problem 1: Schema Design - Embedded vs Referenced Documents

Using <ins>**ANY TOOL**</ins> (ex. [figma](https://www.figma.com/), [drawio](https://drawio-app.com/), [lucidchart](https://www.lucidchart.com)), create an EERD or UML diagram to model the database above for both an **embedded document model** and a **referenced document model**.

**NOTE** You should have two separate designs (embedded and referenced) for this problem.

**BONUS** Show one or two valid JSON documents for each of your collections (i.e. see below)

```
{
  "_id": "ObjectId()",
  "manufacturer": "Honda",
  "model": "civic",
  "yearMake": 2022
}
```

## Problem 2: Query/Index Optimization

Now that the database is designed, we’ll work with engineering on creating optimal indexes to boost query performance in our application.

**Your task**: Create the **query** and corresponding **index** that optimize the following scenarios

- Find every user with the employer name `eFuse`
- Update the gaming interest of the user with email `mquinn@efuse.io`
- Remove every user with the job title of `Data Analyst` that started on `01/28/2020`

## Problem 3: Ooops! Null Values

Oop! For some strange reason, the gaming interest field for users contains null values. This is slowing down queries. Provide a detailed explanation of how you'll handle null values and, if any, what query you'll write to handle this.

## When You're Finished!

- Email a zip file of your completed work with the convention:

      `lastname_efuse-work-sample-dba.zip` to your recruiter.

  - For Example: `quinn_efuse-work-sample-dba.zip`

The files to include in your zip:

- dba.md (contains your responses)

- `DIAGRAM NAME`.png/.jpeg (your diagram from question 1)
- any other files you need to include

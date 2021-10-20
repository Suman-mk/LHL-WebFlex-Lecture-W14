# Module 6: Week 13 & 14 Midterm Kick Off
Thanks for your questions, participation and patience, as always. Here are your notes. Have Fun!

### Content:
  - [ ] Slides
  - [ ] Break: 15 minutes
  - [ ] Demo: Project Setup
  - [ ] Demo: Login Routes (Advanced) * if time permits

---
### Stack:
* Front-End: Bootstrap, Sass, jQuery
* Back-End: Node, Express
* Database: Postgres

---
### List of Projects:
* pick a project you are interested in and want to learn.
* learning outcome is to reinforce last 12 weeks and teamwork.
* suggestion to code in vanilla `javascript` and use `.scss` to solidify learning.

---
### Roadmap:
* check roadmap slide to guide you.
* use roadmap slide as checkpoints.
* pre-planning should be 2 - 3 days max.

---
### MVP: Minimum Viable Product:
* what is the minimum feature-set that we think our user will find useful.
* each iteration is a working model at each stage.
* we are building **MVD - Minimum Viable Demo**
  * only build what you will demo.
  * no validations or edge cases.
  * no responsive design, this is stretch goal.

---
### User Stories:
* describes how a user will interact with our app and why?
* you get user stories from list of requirements.

```
As a user, I can _______, because _______

example: As a logged in user I want to see all the available maps because I want to quickly select a map that matches my interests.

example: As a user, I can favourite a blog post, because I want to review it later.
```

---
### Data:
* identify the nouns in our user stories (i.e. user, posts, pins ..etc.).
* pull out all these nouns and turn them into tables.
* Nouns are resources
* Tables: users, maps, pins, posts...etc.
* create `ERD` to connect relationshops.
  * **ERD: Entity Relationship Diagram**
  * average midterm project has between 4 - 6 tables.

---
### Routes:
* follow `REST` convention.
* create our routes from our resources.
* BREAD: browse, read, edit, add, delete
* CRUD: create, read, update, delete

```
B  GET     /maps
R  GET     /maps/:id
E  PATCH   /maps/:id
A  POST    /maps
D  DELETE  /maps/:id

B  GET     /pins
R  GET     /pins/:id
E  PATCH   /pins/:id
A  POST    /pins
D  DELETE  /pins/:id

B  GET     /users
R  GET     /users/:id
E  PATCH   /users/:id
A  POST    /users
D  DELETE  /users/:id

B  GET     /widgets
R  GET     /widgets/:id
E  PATCH   /widgets/:id
A  POST    /widgets
D  DELETE  /widgets/:id
```

---
### Wireframes:
* a visual plan and general layout of website.
* not high-res, can be pen & paper.
* can use templates or bootstrap to save time.

---
### MPA vs SPA
* multi-page or single page application.
* you can also do a combination.
* do I want a page reload? or the data to load dynamically?

---
### Dividing Tasks
* Option 1: breakdown projects to domains (i.e. UI, API, DB...etc).
* Option 2: breakdown into features (i.e. As a user,...etc.).
* Option 3: breakdown projects to pages (etc. Nav, Home, Maps..etc.).

---
### Communication
* Please make room for one another and be inclusive.
* Communication is the key to success!
* Write **scrum update** in slack channel.

---
### Suggestions:
* leave room for teammates to participate.
* give feedback kindly.
* this is a learning opportunity (serious but fun).
* it's only a midterm project!!!
* communicate at least once per day with team.

---
### Resources
* https://trello.com/b/nvoX2IEi/midterms-demo
* https://www.draw.io
* https://db-engines.com/en/ranking
* https://sql-joins.leopard.in.ua
* https://sqlbolt.com/lesson/select_queries_order_of_execution

---

* [Notes](https://github.com/clopez11/LHL-WebFlex-Lecture-W11/blob/main/README.md)

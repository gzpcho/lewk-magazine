# Lewk Magazine

Repository link: https://github.com/gzpcho/lewk-magazine/

Proposal link: https://docs.google.com/document/d/1um7Rd_2TMjUW7sKk7O05o2Y-wvjsLuL26LcdOiKL0eA/edit?usp=sharing

Deployment link: https://lewk-magazine-txst.fly.dev

Created by:
Ian (@gzpcho) and Noah (@n0z0a)

Example PRs:

- @gzpcho
  - https://github.com/gzpcho/lewk-magazine/pull/3
  - https://github.com/gzpcho/lewk-magazine/pull/4

- @n0z0a
  - https://github.com/gzpcho/lewk-magazine/pull/2
  - https://github.com/gzpcho/lewk-magazine/pull/6

Technical requirements met:
- React client
- Flask server
- REST API
- User authentication
- Postgres database

Stretch features:

Is0ZBiBSWhCUogI
Token authentication using FlaskJWT
Token has lifetime and login-req operations can be completed during token’s lifetime, then once it expires user has to log in again

DI0KbVnD8ITUuF9
Storing images and resources on AWS S3
Using these to send images over custom REST API

## Usage

1. Clone the repository
2. Create and activate a virtual environment
3. Install dependencies

```bash
# For API
pip install -r requirements.txt

# For client
cd client
npm install
```

3. Set environment variables
4. Create a build - `npm run build`
5. Serve the app - `flask run`

## API

- GET `api/articles`
  - Returns a list of all Article
- GET `api/article/<article_id>`
  - Returns a single article, queried by id
- POST `api/article/<article_id>`
  - Creates and returns a new article, based on JSON request
- DELETE `api/article/<article_id>`
  - Deletes an article given an article id
- GET `api/photoshoots`
  - Returns a list of all Photoshoot
- GET `api/photoshoot/<photoshoot_id>`
  - Returns a single photoshoot, queried by id
- POST `api/photoshoot/<photoshoot_id>`
  - Creates and returns a new photoshoot, based on JSON request
- DELETE `api/photoshoot/<photoshoot_id>`
  - Deletes a photoshoot given a photoshoot id

## Takeaways

- @gzpcho
  - Likes
    - Liked marrying different services/concepts together (S3, JWT Auth, Databases)
    - Liked creating a real product that will hopefully be used by many people
  - Dislikes
    - Disliked reading the AWS S3 documentation
    - Wanted to set up tests for our API and components
- @n0z0a
  - Likes
  - Dislikes

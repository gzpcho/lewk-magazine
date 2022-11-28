# Lewk Magazine

Repository link: https://github.com/gzpcho/lewk-magazine/

Proposal link: https://docs.google.com/document/d/1um7Rd_2TMjUW7sKk7O05o2Y-wvjsLuL26LcdOiKL0eA/edit?usp=sharing

Deployment link:

Created by:
Ian (@gzpcho) and Noah (@n0z0a)

Example PRs:

- @gzpcho

- @n0z0a

Technical requirements met:
- React client
- Flask server
- REST API
- User authentication
- Beautification
- Postgres database

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
  - Dislikes
- @n0z0a
  - Likes
  - Dislikes

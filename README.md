# Lewk Magazine

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

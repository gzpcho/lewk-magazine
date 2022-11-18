const Article = ({ title, tagline, image, author, issue, copy }) => {
  let issueTag = null;
  if (issue && issue.number) {
    issueTag = issue.url ? (
      <a
        href={issue.url}
        target="_blank"
        rel="noreferrer"
        style={{ display: 'block' }}
      >
        Issue No.{issue.number}
      </a>
    ) : (
      <p>Issue No.{issue.number}</p>
    );
  }

  return (
    <div>
      {title && <h1>{title}</h1>}
      {tagline && <p>{tagline}</p>}
      {author && <p>by {author}</p>}
      {issueTag}
      {image && image.url && (
        <img
          src={image.url}
          alt=""
          height="300"
          style={{ aspectRatio: 3 / 2 }}
        />
      )}
      {copy &&
        copy.split(/\r?\n/).map((content, idx) => <p key={idx}>{content}</p>)}
    </div>
  );
};

export default Article;

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
      {title ? <h1>{title}</h1> : null}
      {tagline ? <p>{tagline}</p> : null}
      {author ? <p>by {author}</p> : null}
      {issueTag}
      {image?.url ? (
        <img
          src={image.url}
          alt=""
          height="300"
          style={{ aspectRatio: 3 / 2 }}
        />
      ) : null}
      {copy
        ? copy.split(/\r?\n/).map((content, idx) => <p key={idx}>{content}</p>)
        : null}
    </div>
  );
};

export default Article;

const Article = ({ ...props }) => {
  const { title, tagline, metadata, imageUrl, copy } = props;

  return (
    <div>
      {title && <h1>{title}</h1>}
      {tagline && <p>{tagline}</p>}
      {metadata?.author && <p>by {metadata.author}</p>}
      {metadata?.issueNo && metadata?.issueUrl && (
        <a
          href={metadata.issueUrl}
          target="_blank"
          rel="noreferrer"
          style={{ display: 'block' }}
        >
          Issue No.{metadata.issueNo}
        </a>
      )}
      {imageUrl && (
        <img
          src={imageUrl}
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

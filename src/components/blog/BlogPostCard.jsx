import Link from "next/link";

function formatPrettyDate(isoDate) {
  // Expects "YYYY-MM-DD"
  const d = new Date(`${isoDate}T00:00:00`);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPostCard({
  post,
  colClassName = "col-xl-6",
  aos = { animation: "fade-up", delay: 600 },
}) {
  const { title, slug, excerpt, date, category, thumbnail } = post;

  const href = `app/blog/${slug}`;
  const prettyDate = date ? formatPrettyDate(date) : "";

  return (
    <div className={colClassName}>
      <div
        className="single-post-item"
        data-aos={aos.animation}
        data-aos-delay={aos.delay}
      >
        <div className="post-thumbnail">
          <img src={thumbnail?.src} alt={thumbnail?.alt || title} />
        </div>

        <div className="post-content">
          <div className="post-meta">
            <div className="post-category">
              {/* <Link href={`/blog/category/${category?.slug || ""}`}>
                {category?.label || "Uncategorized"}
              </Link> */}
              {/* <a href="#" onClick={(e) => e.preventDefault()}>
                {category?.label}
              </a> */}
            </div>

            <div className="post-date">{prettyDate}</div>
          </div>

          <Link href={`/blog/${post.slug}`}>
            <h3 className="entry-title">{title}</h3>
          </Link>

          <p>{excerpt}</p>
        </div>
      </div>
    </div>
  );
}

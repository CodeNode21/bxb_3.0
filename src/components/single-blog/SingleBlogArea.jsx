import Link from "next/link";

function formatPrettyDate(isoDate) {
  if (!isoDate) return "";
  const d = new Date(`${isoDate}T00:00:00`);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function uniqueBy(arr, keyFn) {
  const seen = new Set();
  return arr.filter((item) => {
    const k = keyFn(item);
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

function buildSidebarData(allPosts) {
  const categories = uniqueBy(
    allPosts.map((p) => p.category).filter(Boolean),
    (c) => c.slug || c.label,
  );

  const tags = uniqueBy(
    allPosts
      .flatMap((p) => p.tags || [])
      .filter(Boolean)
      .map((t) => ({
        label: t,
        slug: String(t).toLowerCase().replace(/\s+/g, "-"),
      })),
    (t) => t.slug,
  );

  const recentPosts = [...allPosts]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 3);

  return { categories, tags, recentPosts };
}

function PostBody({ content }) {
  const blocks = content?.blocks || [];
  if (!blocks.length) return null;

  return (
    <div className="entry-content">
      {blocks.map((block, idx) => {
        if (block.type === "h2") return <h2 key={idx}>{block.text}</h2>;
        if (block.type === "h3") return <span key={idx}>{block.text}</span>;
        if (block.type === "p") return <p key={idx}>{block.text}</p>;

        if (block.type === "image") {
          return (
            <div key={idx} className="post-thumbnail post-thumbnail-details">
              <img src={block.src} alt={block.alt || ""} />
            </div>
          );
        }

        if (block.type === "ul") {
          return (
            <ul key={idx} className="bxb-blog-details-list">
              {(block.items || []).map((li, i) => (
                <li key={i}>{li}</li>
              ))}
            </ul>
          );
        }

        return null;
      })}
    </div>
  );
}

export default function SingleBlogArea({ post, allPosts }) {
  const { categories, tags, recentPosts } = buildSidebarData(allPosts || []);
  return (
    <div className="section bxb-section-padding6">
      <div className="container">
        <div className="row">
          {/* Main */}
          <div className="col-lg-8" data-aos="fade-up" data-aos-delay="900">
            <div className="post-thumbnail post-thumbnail-details">
              <img
                src={post.thumbnail?.src}
                alt={post.thumbnail?.alt || post.title}
              />
            </div>

            <div className="single-post-content-wrap">
              <div className="post-meta">
                <div className="post-category">
                  {/* Swap this later to a real filter/page if you want */}
                  {/* <a href="#" onClick={(e) => e.preventDefault()}>
                    {post.category?.label || "Uncategorized"}
                  </a> */}
                </div>
                <div className="post-date">{formatPrettyDate(post.date)}</div>
              </div>

              <h3>{post.title}</h3>
              {post.excerpt ? <p>{post.excerpt}</p> : null}

              <PostBody content={post.content} />

              {/* Tags + Stats */}
              <div className="post-tag-wrap">
                <div className="post-tag">
                  <h3>Tags:</h3>
                  {/* <div className="wp-block-tag-cloud">
                    {(post.tags || []).map((t) => (
                      <a key={t} href="#" onClick={(e) => e.preventDefault()}>
                        {t}
                      </a>
                    ))}
                  </div> */}
                </div>

                {/* <div className="post-like-comment">
                  <ul>
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        <img src="/assets/images/blog/like.png" alt="" />
                        {post.stats?.likes ?? 0}
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        <img src="/assets/images/blog/comment.png" alt="" />
                        {post.stats?.comments ?? 0}
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>

              {/* Keep your comment UI as-is for now (static form) */}
              {/* <div className="comment-box">
                <h3>Leave a comments:</h3>
                <div className="bxb-contact-box">
                  <form action="#">
                    <div className="bxb-contact-column">
                      <div className="bxb-contact-field">
                        <label>Enter your name</label>
                        <input type="text" placeholder="Adam Smith" />
                      </div>
                      <div className="bxb-contact-field">
                        <label>Email address</label>
                        <input type="email" placeholder="example@gmail.com" />
                      </div>
                    </div>
                    <div className="bxb-contact-field">
                      <label>Message</label>
                      <textarea
                        name="message"
                        placeholder="Write your message here..."
                      ></textarea>
                    </div>
                    <button id="bxb-main-submit-btn" type="button">
                      Send your message
                    </button>
                  </form>
                </div>
              </div> */}
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div
              className="right-sidebar"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="widget">
                <div className="wp-block-search__inside-wrapper">
                  <input
                    type="search"
                    placeholder="Type keyword here"
                    className="wp-block-search__input"
                  />
                  <button id="wp-block-search__button" type="submit">
                    <img src="/assets/images/blog/search.png" alt="" />
                  </button>
                </div>
              </div>

              <div className="widget">
                <h3 className="wp-block-heading">Categories:</h3>
                <ul>
                  {categories.map((c) => (
                    <li key={c.slug || c.label}>
                      {/* <a href="#" onClick={(e) => e.preventDefault()}> */}
                        {c.label}
                      {/* </a> */}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="widget bxb_recent_posts_Widget">
                <h3 className="wp-block-heading">Recent Posts:</h3>
                {recentPosts.map((p) => (
                  <Link
                    key={p.id}
                    className="post-item"
                    href={`/blog/${p.slug}`}
                  >
                    <div className="post-thumb">
                      <img
                        src={p.thumbnail?.src}
                        alt={p.thumbnail?.alt || p.title}
                      />
                    </div>
                    <div className="post-text">
                      <div className="post-date">
                        {formatPrettyDate(p.date)}
                      </div>
                      <p>{p.title}</p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="widget">
                <h3 className="wp-block-heading">Tags:</h3>
                <div className="wp-block-tag-cloud">
                  {/* {tags.map((t) => (
                    <a
                      key={t.slug}
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      {t.label}
                    </a>
                  ))} */}
                </div>
              </div>

              <div className="widget">
                <h3 className="wp-block-heading">Subscribe</h3>
                <p>
                  Subscribe to our newsletter and get the latest news updates
                  lifetime
                </p>
                <form action="#">
                  <div className="bxb-blog-subscriber">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                    />
                    <button id="bxb-blog-subscribe" type="button">
                      Subscribe Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

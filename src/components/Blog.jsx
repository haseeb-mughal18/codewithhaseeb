import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { posts } from "../data/blog";

export default function Blog() {
  return (
    <section id="blog" className="section">
      <div className="wrap">
        <SectionTitle watermark="JOURNAL">
          MY <span>BLOGS</span>
        </SectionTitle>

        <div className="blog-grid">
          {posts.map((post, i) => (
            <Reveal
              as={post.url ? "a" : "article"}
              key={post.id}
              index={i}
              className="blog-card"
              {...(post.url
                ? { href: post.url, target: "_blank", rel: "noreferrer" }
                : {})}
            >
              <div
                className="blog-thumb"
                style={{ background: post.gradient }}
              />
              <div className="blog-body">
                <div className="blog-meta">{post.meta}</div>
                <div className="blog-title">{post.title}</div>
                <p className="blog-excerpt">{post.excerpt}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

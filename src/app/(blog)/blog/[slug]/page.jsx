import blogData from "@/data/blog-posts.json";
import SingleBlog from "@/components/single-blog";

export function generateStaticParams() {
  return blogData.posts.filter((p) => p.slug).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
const { slug } = await params; 
  const post = blogData.posts.find((p) => p.slug === slug);

  if (!post) return { title: "Post not found" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params; 
  const post = blogData.posts.find((p) => p.slug === slug);

  if (!post) notFound();
  return <SingleBlog post={post} allPosts={blogData.posts} />;
}

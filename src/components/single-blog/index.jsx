import Breacrumb from "@/common/Breacrumb";
import SingleBlogArea from "./SingleBlogArea";

export default function SingleBlog({ post, allPosts }) {
  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breacrumb title="Brixbiz Blog" page="Brixbiz Blog" />
          {/* <BlogDetailisArea />            */}
          <SingleBlogArea post={post} allPosts={allPosts} />
        </div>
      </div>
    </>
  );
}

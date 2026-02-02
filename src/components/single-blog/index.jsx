import Breacrumb from "@/common/Breacrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import SingleBlogArea from "./SingleBlogArea";

export default function SingleBlog({ post, allPosts }) {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breacrumb title="Brixbiz Blog" page="Brixbiz Blog" />
          {/* <BlogDetailisArea />            */}
          <SingleBlogArea post={post} allPosts={allPosts} />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}

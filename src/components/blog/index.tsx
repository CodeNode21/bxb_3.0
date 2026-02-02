import Breacrumb from "@/common/Breacrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import BlogArea from "./BlogsArea";

 

export default function Blog() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breacrumb title="Latest" page="Blog" />
          <BlogArea />          
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}

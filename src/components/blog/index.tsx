import Breacrumb from "@/common/Breacrumb";
import BlogArea from "./BlogsArea";

 

export default function Blog() {
  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breacrumb title="Latest" page="Blog" />
          <BlogArea />          
        </div>
      </div>
    </>
  )
}

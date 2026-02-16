import Breacrumb from "@/common/Breacrumb";
import BlogArea from "./BlogsArea";

export default function Blog() {
  return (
    <>
      <Breacrumb title="Latest" page="Blog" />
      <BlogArea />
    </>
  );
}

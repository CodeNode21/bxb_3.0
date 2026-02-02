 

import { ReactNode } from "react"; 
import AnimationProvider from "@/common/AnimationProvider";
import ScrollToTop from "@/common/ScrollToTop";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  
 

  return (
    <>
      <AnimationProvider />
      <ScrollToTop />
      {children} 
    </>
  );
};

export default Wrapper;
 
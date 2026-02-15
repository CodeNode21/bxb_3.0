import Breacrumb from "@/common/Breacrumb";
import PortfolioDetailsArea from "./PortfolioDetailsArea";

 

export default function SinglePortfolio() {
  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breacrumb title="Portfolio Details" page="Portfolio Details" />
          <PortfolioDetailsArea />      
        </div>
      </div>
    </>
  )
}

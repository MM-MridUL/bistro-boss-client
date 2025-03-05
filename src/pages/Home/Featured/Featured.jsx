import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white my-20 relative">
      
      <div  className="bg-black bg-opacity-40  pt-8">
        <div className="z-10">
          <SectionTitle
            subheading="Check it out"
            heading="Featured Item"
          ></SectionTitle>
          <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
            <div className="shadow-xl">
              <img src={featuredImage} alt="" />
            </div>
            <div className="md:ml-10">
              <p>Aug 20, 2029</p>
              <p className="uppercase">Where can I get some</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis beatae recusandae delectus, provident laudantium omnis
                velit minima aspernatur amet dolore ipsa enim ratione error
                veritatis! Harum maiores quisquam pariatur non excepturi aliquam
                vero magnam minus quas! Ea hic quod quasi temporibus esse
                dolores tenetur repellendus, natus ut adipisci. Voluptate, odio.
              </p>
              <button className="btn btn-outline border-0 border-b-4 mt-4">
                ORDER NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

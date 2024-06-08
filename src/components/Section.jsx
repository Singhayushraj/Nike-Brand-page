import "./Section.css";

const Section = () => {
  return (
    <>
      <div className="section">
        <div className="first">
          <h2 className="title">YOUR FEET DESERVE THE BEST</h2>
          <p className="para">
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH
            OUR SHOES.
          </p>
          <div>
            <button className="firstbtn">Shop Now</button>
            <button className="secondbtn">Category</button>
          </div>
          <h4 >Also available on</h4>
          <img className="flipkartlogo" src="./flipkartlogo.jpeg" alt="Flipkartlogo" height="50px"/>
          <img className="amazonlogo" src="./Amazonlogo.jpeg" alt="Amazonlogo" height="60px" />
        </div>
        <div className="second">
          <img src="./NikeShoes.jpg" alt="shoes" />
        </div>
      </div>

     
    </>
  );
};
export default Section;

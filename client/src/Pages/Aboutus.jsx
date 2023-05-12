import React from "react";
import NavAndSidebar from "../Components/NavAndSidebar";
import styled from "styled-components";
import Individualcard from "../Components/Individualcard";
import Arahanta_image from "../assets/Arahanta.jpg";
import Sudeep_image from "../assets/Sudeep.jpg";
import Bikrant_image from "../assets/Bikrant.jpg";
import Sameer_image from "../assets/Sameer.jpg";

const StyledParagraph = styled.p`
  display: flex;
  align-items: center;
  text-decoration: none;
  width: 50%;
  margin: 0 auto;
  margin-top: 2rem;
  background-image: "../assets/background.png";
`;
const Styleddiv = styled.div`
  margin-left: 5rem;
  margin-top: 2rem;
`;
const team = [
  {
    name: "Arahanta Pokhrel",
    qualification: "Computer Engineer",
    otherInfo:
     " he is currently in his 6th semester and has a keen interest in programming. He possesses a strong understanding of coding languages and enjoys exploring new technologies",
    imgSrc: Arahanta_image,
    flink:"https://www.facebook.com/arahanta.pokharel.5",
    glink:"https://github.com/arahanta",
    llink:"https://www.linkedin.com/in/pokhrel-arahanta-686503259/"
  },
  {
    name: "Bikrant Bidari",
    qualification: "Computer Engineer",
    otherInfo:
      "He is currently pursuing his studies and is in his 6th semester. he spends much of his time working with coding language. he enjoys undertaking personal coding projects",
    imgSrc: Bikrant_image,
    glink:'https://github.com/bikrantbdr',
    flink:'https://www.facebook.com/bikrant.bidari',
    llink:'https://www.linkedin.com/in/bikrant-bidari-2276391b4/'
  },
  {
    name: "Sameer Shrestha",
    qualification: "Computer Engineer",
    otherInfo:
      "Currently in his 6th semester, he has developed a profound interest in programming and boasts a comprehensive understanding of various coding languages and enjoys exploring new technologies",
    imgSrc: Sameer_image,
    glink:"https://github.com/SAMEER-SHRESTHA911",
    flink:"https://www.facebook.com/samir.shrestha.404",
    llink:'https://www.linkedin.com/in/sameer-shrestha-6530b2227/'
  },
  {
    name: "Sudep Kaucha",
    qualification: "Computer Engineer",
    otherInfo:
      "He is currently pursuing his studies and is in his 6th semester. he spends much of his time working with coding language. he enjoys undertaking personal coding projects",
    imgSrc: Sudeep_image,
    glink:"https://github.com/Sudeep-K",
    flink:'https://www.facebook.com/sudip.kaucha',
    llink:"https://www.linkedin.com/in/sudeep-kaucha-9a58951a4/"
  },
];

export default function Aboutus() {
  return (
    <>
      <NavAndSidebar />
      <StyledParagraph>
      Welcome to our hostel searching website! We are a dedicated team of three individuals who have developed this platform with the goal of making your hostel search as seamless as possible. Our user-friendly website offers efficient search tools and advanced filtering options to help you find the perfect hostel that matches your preferences. We understand that finding the right accommodation is crucial for a comfortable and enjoyable stay, so we've put in extensive effort to ensure that our website provides all the necessary information you need to make an informed decision.
With our carefully curated database of hostels, you can explore various options and easily compare amenities, prices, and reviews. Our search filters let you customize your search based on location, price range, facilities, and more, ensuring that you find hostels that truly align with your requirements.
Our team's commitment extends beyond just providing a functional website. We are dedicated to assisting you throughout your hostel search journey. If you have any questions, concerns, or need personalized recommendations, our support team is readily available to provide you with prompt and helpful assistance.
Thank you for choosing our hostel searching website. We look forward to helping you discover the ideal hostel for your making your stay a memorable one.
      </StyledParagraph>
      <Styleddiv>
        {team.map((person, index) => (
          <Individualcard key={index} {...person} />
        ))}
      </Styleddiv>
    </>
  );
}

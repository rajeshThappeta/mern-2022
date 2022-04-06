import React from "react";
import homeImg from "../images/home.svg";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <Container className="text-center">
      <div className="display-1 text-center text-primary fw-bold">Shoppers Hub</div>
      <img src={homeImg} alt="" className="w-50 shadow-lg rounded" />
      <p className="py-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non tenetur
        accusamus impedit architecto excepturi temporibus eos ducimus magnam
        quod dolores laborum magni, mollitia enim commodi beatae eius,
        accusantium suscipit illum perferendis. Perspiciatis nam explicabo
        exercitationem sunt architecto porro vel laborum! Cumque, temporibus.
        Sit placeat itaque quo similique tenetur? Aspernatur ab optio aliquam
        aperiam, voluptas in! Illo error veniam voluptate dolor nobis qui,
        aperiam cupiditate inventore aliquam facilis natus quibusdam adipisci
        amet soluta, porro magnam maiores voluptatibus ab accusantium?
        Laboriosam obcaecati in, sapiente impedit ipsum excepturi quisquam velit
        ad sequi ex nulla vitae alias est provident voluptatem, repudiandae,
        explicabo repellendus! Quos.
      </p>
    </Container>
  );
}

export default Home;

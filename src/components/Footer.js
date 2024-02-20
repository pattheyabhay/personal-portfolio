import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandGithubFilled } from "react-icons/tb";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/abhay-patthey-a329a674"><img src={navIcon1} alt="" /></a>
                <a href="https://twitter.com/patthey404"><RiTwitterXLine size={16} color="white" /></a>
                <a href="https://github.com/pattheyabhay"><TbBrandGithubFilled size={16} color="white" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from "react-router-hash-link";
import VideoPlayer from "./video";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);  //State variable controlling the typing speed.
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "QA" ];
  const period = 2000;

  const videoUrl = 'https://www.youtube.com/watch?v=hYv6BM2fWd8&list=PLVkeI8oUlQDHUkGiIm6uCGESVn2BxwTJE&index=24&t=777s';

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta/2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>   {/*These are all react-Bootstrap components */}
        <Row className="aligh-items-center">
          {/* Left Column */}
          <Col xs={12} md={6} xl={7}>        {/* The xs, md, and xl props are used to specify the column width at different screen sizes: */}
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}> {/*React-bootstrap animation classes*/}
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Abhay `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "QA" ]'><span className="wrap">{text}</span></span></h1>
                  <p>As a Senior Associate at Amazon with a proven track record of excellence in a non-IT role, I am determined to transition into the core IT sector. I bring with me a commitment to delivering not just 100%, but a full 200% effort to every task and project. My strong work ethic, adaptability, and problem-solving skills have been my pillars of success at Amazon, and I am eager to apply these qualities to make a significant impact in the IT field. With a determination to learn and grow, I am ready to embrace new challenges and become a valuable resource in the world of information technology.</p>
                  {/* <HashLink to='#connect'> */}
                  <button className="vvd"><span>Let’s Connect</span><ArrowRightCircle size={25} /></button>
                  {/* </HashLink> */}
              </div>}
            </TrackVisibility>
          </Col>
          {/* Right column */}
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
            <VideoPlayer url={videoUrl} />
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}


// This code was inside TrackVisibility
// {({ isVisible }) =>
//                 <div className={isVisible ? "animate__animated animate__zoomIn" : ""}> {/*React-bootstrap animation classes*/}
//                   <img src={"https://tenor.com/view/astronaut-space-gif-22069116"} alt="Header Img"/>
//                 </div>}
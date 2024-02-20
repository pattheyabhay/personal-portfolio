
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "../App.css";



export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Proficient in HTML5, CSS3, and JavaScript for web development. Experienced in React for frontend, Node.js and Express.js for backend, along with MongoDB, SQL, and PostgreSQL for database management. Skilled in Java for versatile application development.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                {/* <img src={meter1} alt="Image" /> */}
                                <div className='progress-bar-div'>
                                <CircularProgressbar 
                                value={90} 
                                text="90%"
                                heigth='50px'
                                strokeWidth={9}
                                styles={buildStyles({
                                rotation: 0.25, // Rotate the gradient to start from the top
                                strokeLinecap: 'butt', // Make the progress bar straight
                                pathTransitionDuration: 0.5, // Smooth animation
                                // pathColor: `url('#gradient')`
                                })}
                                />
                                <h5>HTML5</h5> </div>
                            </div>
                            
                            <div className="item">
                                {/* <img src={meter1} alt="Image" /> */}
                                <div className='progress-bar-div'>
                                <CircularProgressbar 
                                value={90} 
                                text="90%"
                                heigth='50px'
                                strokeWidth={9}
                                styles={buildStyles({
                                rotation: 0.25, // Rotate the gradient to start from the top
                                strokeLinecap: 'butt', // Make the progress bar straight
                                pathTransitionDuration: 0.5, // Smooth animation
                                // pathColor: `url('#gradient')`
                                })}
                                />
                                <h5>CSS3</h5> </div>
                            </div>

                            <div className="item">
                                {/* <img src={meter1} alt="Image" /> */}
                                <div className='progress-bar-div'>
                                <CircularProgressbar 
                                value={80} 
                                text="80%"
                                heigth='50px'
                                strokeWidth={9}
                                styles={buildStyles({
                                rotation: 0.25, // Rotate the gradient to start from the top
                                strokeLinecap: 'butt', // Make the progress bar straight
                                pathTransitionDuration: 0.5, // Smooth animation
                                // pathColor: `url('#gradient')`
                                })}
                                />
                                <h5>JavaScript</h5> </div>
                            </div>

                            <div className="item">
                                {/* <img src={meter1} alt="Image" /> */}
                                <div className='progress-bar-div'>
                                <CircularProgressbar 
                                value={85} 
                                text="85%"
                                heigth='50px'
                                strokeWidth={9}
                                styles={buildStyles({
                                rotation: 0.25, // Rotate the gradient to start from the top
                                strokeLinecap: 'butt', // Make the progress bar straight
                                pathTransitionDuration: 0.5, // Smooth animation
                                // pathColor: `url('#gradient')`
                                })}
                                />
                                <h5>Express</h5> </div>
                            </div>

                            <div className="item">
                                {/* <img src={meter1} alt="Image" /> */}
                                <div className='progress-bar-div'>
                                <CircularProgressbar 
                                value={80} 
                                text="80%"
                                heigth='50px'
                                strokeWidth={9}
                                styles={buildStyles({
                                rotation: 0.25, // Rotate the gradient to start from the top
                                strokeLinecap: 'butt', // Make the progress bar straight
                                pathTransitionDuration: 0.5, // Smooth animation
                                // pathColor: `url('#gradient')`
                                })}
                                />
                                <h5>Node.JS</h5> </div>
                            </div>

                            <div className="item">
                                {/* <img src={meter1} alt="Image" /> */}
                                <div className='progress-bar-div'>
                                <CircularProgressbar 
                                value={90} 
                                text="90%"
                                heigth='50px'
                                strokeWidth={9}
                                styles={buildStyles({
                                rotation: 0.25, // Rotate the gradient to start from the top
                                strokeLinecap: 'butt', // Make the progress bar straight
                                pathTransitionDuration: 0.5, // Smooth animation
                                // pathColor: `url('#gradient')`
                                })}
                                />
                                <h5>SQL</h5> </div>
                            </div>

                            <div className="item">
                                {/* <img src={meter1} alt="Image" /> */}
                                <div className='progress-bar-div'>
                                <CircularProgressbar 
                                value={75} 
                                text="75%"
                                heigth='50px'
                                strokeWidth={9}
                                styles={buildStyles({
                                rotation: 0.25, // Rotate the gradient to start from the top
                                strokeLinecap: 'butt', // Make the progress bar straight
                                pathTransitionDuration: 0.5, // Smooth animation
                                // pathColor: `url('#gradient')`
                                })}
                                />
                                <h5>Java</h5> </div>
                            </div>
                            
                        </Carousel>



                    </div>
                </div>
            </div>
        </div>


        
        {/* <svg style={{ display: 'none' }}>
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#AA367C" />
            <stop offset="100%" stopColor="#4A2FBD" /> 
          </linearGradient>
        </defs>
      </svg> */}
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

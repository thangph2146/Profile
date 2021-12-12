import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://www.andreabrigatti.it/uploads/50db3163-d813-47ab-bcbb-c64f3f67e2f2/developer.png"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        I am a student at Hoa Sen University. I study in this university in Science & Engineering, currently my main major is software engineering and am going towards Frontend (ReactJS)
        </p>
        <p className="a-desc">
        During my study at Hoa Sen University, I was taught object-oriented programming, data architecture and algorithms, programming languages such as C#, Java, ... . 
        After being taught the above knowledge by the lecturers, now I am self-studying other programming languages such as Javascript, HTML, CSS after self-studying these 3 languages. 
        Like this project, this is the result I achieved after self-studying and doing many exercises.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Hoa Sen University 2017 - 2022</h4>
            <p className="a-award-desc">
                A few projects I worked on during my time at university
            </p>
            <p className="a-award-desc">
                <h5><ins>HUMAN RESOURCE</ins></h5>
                <p>- Building an employee
                management website</p>
                <p>- Web built in languages:
                AngualarJS, JavaScript, Cloud
                Firestore</p>


                <h5><ins>WEB RENTAL RESORT</ins></h5>
                <p>- Building Websites for customers
                and owners</p>
                <p>- Resort registers and book rooms
                on the Website can manage
                customers who have booked
                rooms</p>
                <p>- Web built in language: ASP.NET
                MVC Frameworks, SQL Server</p>


                <h5><ins>WEB SELL ONLINE</ins></h5>
                <p>- Build a sales website for a store
                sell home furniture
                </p>
                <p>- Web built in language: ASP.NET
                MVC
                Frameworks, SQL Server
                </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
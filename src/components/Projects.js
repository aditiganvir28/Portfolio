import meeting_scheduler from '../assets/img/meeting_scheduler.png';
import {ArrowRightCircle} from "react-bootstrap-icons";
import Article_Search_Engine from "../assets/img/Article Search Engine.png"

export const Projects=()=>{
    return(
        <>
        <div className="project-container">
            <h2>Projects</h2>
        </div>
        <div className="card-container">
            <div className="cards">
                <div className="image">
                    <img src={meeting_scheduler} alt="meeting_scheduler"/>
                </div>
                <div className="title">
                    <h3>Meeting Scheduler</h3>
                </div>
                <div className="description">
                    <p>Dynamic Website based on HTML CSS MongoDb NodeJS</p>
                </div>
                <div className="github-link">
                <button onClick={()=> console.log('connect')}>Github<ArrowRightCircle size={25}></ArrowRightCircle></button>
                </div>
            </div>
            <div className="cards">
                <div className="image">
                    <img src={Article_Search_Engine} alt="meeting_scheduler"/>
                </div>
                <div className="title">
                    <h3>Article Search Engine Database Management System</h3>
                </div>
                <div className="description">
                    <p>Static Website based on ReactJS MySQL</p>
                </div>
                <div className="github-link">
                <button onClick={()=> console.log('connect')}>Github<ArrowRightCircle size={25}></ArrowRightCircle></button>
                </div>
            </div>
            
        </div>
        </>
    )
}
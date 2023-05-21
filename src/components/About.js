import profile_photo from '../assets/img/profile_photo.jpg'
export const About = () =>{
    return(
        <div className="About_page">
            <div className="About_heading">
                <h2>About Me</h2>
            </div>
            <div className="about_information">
                <div className="about_image">
                    <img src={profile_photo}></img>
                </div>
            <div className="about_content">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget lectus ac libero feugiat auctor eget ac lacus. Curabitur euismod dolor non purus condimentum euismod. Nam hendrerit consequat vestibulum. Suspendisse sollicitudin arcu nec dolor ornare, id congue quam maximus. Donec dictum leo nunc, vitae dictum augue facilisis in. Proin fringilla ullamcorper nibh non tempus. Phasellus iaculis, leo et ornare egestas, felis lectus tempus mi, eu bibendum nunc eros vitae justo.
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget lectus ac libero feugiat auctor eget ac lacus. Curabitur euismod dolor non purus condimentum euismod. Nam hendrerit consequat vestibulum. Suspendisse sollicitudin arcu nec dolor ornare, id congue quam maximus. Donec dictum leo nunc, vitae dictum augue facilisis in. Proin fringilla ullamcorper nibh non tempus. Phasellus iaculis, leo et ornare egestas, felis lectus tempus mi, eu bibendum nunc eros vitae justo.
                </p>
            </div>
            </div>
        </div>
    )
}
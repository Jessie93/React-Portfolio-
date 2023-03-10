import "./Contact.css";
import profileImage from "../assets/Jessica.png";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="left">
        <div className="card">
{/* Need to review the image. This was the only way i could get it to work but i think there is an easier way */}
          <img src={profileImage} alt=""  className="img"/>
        </div>
      </div>
      <div className="right">
        <h1>Contact Me</h1>
        <p className="sub"> Hi, and welcome to my portfolio </p>
        <p className="body"> My name is Jessica, and I'm from Yorkshire. I am currently London-based UX Designer with a BA(Hons) in Graphic Design who is looking to get into the field of Front-End Web Development.</p>
        <p className="body"> A bit about me, i like doing a bit of everything. i take pride in continual learning, creative exploration and taking risks. Gets excited about implementing new ideas and experimenting with multiple</p>
        <p className="body"> Please contact me jessica.stephenson.developer@gmail.com</p>
      </div>
    </div>
  );
};

export default Contact;
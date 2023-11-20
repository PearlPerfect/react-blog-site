import "./contact.css"

export default function Contact() {
    return (
        <div className="register">
      <span className="registerTitle">Contact Us</span>
      <form className="registerForm">
        <label>Name</label>
        <input className="registerInput" type="text" placeholder="Enter your name..." />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..." />
        <label>Message</label>
        <textarea name="" id="" cols="30" rows="10">Write your Message</textarea>
        <button className="registerButton">Submit</button>
      </form>

    </div>
    )
}

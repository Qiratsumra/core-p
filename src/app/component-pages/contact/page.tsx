
export default function ContactForm() {
  return (
    <>
      <div className="spacer"></div>
      <div className="container">
        <div className="intro">
          <h1>
            Let's chat.
            <br />
            Tell me about your
            <br />
            project
          </h1>
        </div>
        <div className="form-container">
          <form>
            <h1>Send me a message</h1>
            <input type="text" placeholder="Enter your name" className="input" />
            <input type="email" placeholder="Enter your email" className="input" />
            <input type="tel" placeholder="Enter your number" className="input" />
            <textarea
              name="question"
              id="question"
              placeholder="Any Questions?"
              className="textarea"
            ></textarea>
            <button type="submit" className="button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

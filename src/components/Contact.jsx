const Contact = () => {
  return (
    <div id="Contact" className="bg-yellow-50 py-10">
      <div className="container mx-auto mt-8 text-center">
        <h1 className="text-4xl font-semibold">
          Contact <span className="text-yellow-500">Me</span>
        </h1>
        <div className="px-5">
          <form
            method="POST"
            action="https://getform.io/f/penLpEb7"
            className="max-w-md mx-auto border bg-white rounded-md shadow-md p-5 my-5 "
          >
            <div className="my-2">
              <input
                className="w-full px-4 py-2 rounded-md outline-none focus:border-yellow-500 border"
                id="name"
                name="name"
                type="text"
                placeholder="Name *"
                required
              />
            </div>
            <div className="my-2">
              <input
                className="w-full px-4 py-2 rounded-md outline-none focus:border-yellow-500 border"
                id="email"
                name="email"
                type="email"
                placeholder="Email *"
                required
              />
            </div>
            <div className="my-2">
              <input
                className="w-full px-4 py-2 rounded-md outline-none focus:border-yellow-500 border"
                id="subject"
                name="subject"
                type="subject"
                placeholder="Subject *"
                required
              />
            </div>
            <div className="my-2">
              <textarea
                className="w-full px-4 py-2 rounded-md outline-none focus:border-yellow-500 border"
                name="message"
                id="message"
                cols="30"
                rows="5"
                required
                placeholder="Enter Your Message *"
              ></textarea>
            </div>
            <button className="my-2 bg-yellow-500 hover:opacity-80 px-4 py-2 rounded-md w-full text-white font-semibold">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

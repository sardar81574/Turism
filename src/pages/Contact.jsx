function Contact() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat 
                    px-4 sm:px-8 md:px-16 py-6">

      {/* IMAGE SECTION */}
      <div
        className="w-full 
                   h-[200px] sm:h-[300px] md:h-[400px]
                   my-4 rounded-xl
                   bg-cover bg-center"
        style={{ backgroundImage: "url('about.jpg')" }}
      ></div>

      {/* HEADING */}
      <div className="flex justify-center">
        <h1 className="font-extrabold 
                       text-2xl sm:text-3xl md:text-4xl 
                       my-4 text-black">
          Contact
        </h1>
      </div>

      {/* PARAGRAPH */}
      <p className="text-sm sm:text-lg md:text-xl 
                    text-justify leading-relaxed
                    max-w-4xl mx-auto my-6 text-gray-700">
        Feel free to reach out to us with any questions, comments,
        or inquiries you may have.
      </p>

      {/* FORM */}
      <form className="max-w-3xl mx-auto space-y-6">

        {/* Name */}
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <label className="font-medium w-32">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="border rounded-md px-4 py-2 w-full
                       focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <label className="font-medium w-32">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="border rounded-md px-4 py-2 w-full
                       focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
          <label className="font-medium w-32 pt-1">Message</label>
          <textarea
            rows="4"
            placeholder="Write your message..."
            className="border rounded-md px-4 py-2 w-full resize-none
                       focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Button */}
        <div className="text-center pt-4">
          <button
            type="submit"
            className="bg-blue-600 text-white 
                       px-6 py-2 rounded-md
                       hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </div>

      </form>
    </div>
  );
}

export default Contact;

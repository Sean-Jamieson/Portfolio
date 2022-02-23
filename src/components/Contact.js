import React from "react";

export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    function encode(data) {
        return Object.keys(data)
            .map(
                (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message }),
        })
            .then(() => alert("message sent!"))
            .catch((error) => alert(error));
    }
    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-6 mt-5 mx-auto justify-center flex sm:flex-nowrap flex-wrap">
                <form
                    netlify
                    name="contact"
                    onSubmit={handleSubmit}
                    className="lg:w-1/2 md:w-3/4 flex flex-col w-full md:py-8 mt-8 md:mt-0">
                    <h2 className=" sm:text-4xl text-3xl mb-1 font-medium title-font flex justify-center">
                        Hire Me
                    </h2>
                    <p className="leading-relaxed mb-5 text-darkEuc mx-auto">
                        Im looking forward to working together! whether you are looking to hire or just
                        want a consult on a project im excited to see what we can build together!

                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-400">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="ml-auto mr-auto w-1/3 text-greyText bg-euc border-0 py-2 px-6 justify-center focus:outline-none hover:bg-darkEuc rounded text-lg">
                        Submit
                    </button>
                </form>
            </div>
            <div class="flex flex-row justify-center mb-4">
                <a class="w-10 mx-2 mt-1" href="https://github.com/seanJamieson">
                    <img src="./github.png" alt="github"></img>
                </a>
                <a class="w-10 mx-2" href="https://www.linkedin.com/in/sean-jamieson-320619214/">
                    <img src="./linkedin.png" alt="github"></img>
                </a>
            </div>
        </section>
    );
}
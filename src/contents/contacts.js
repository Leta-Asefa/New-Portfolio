const Contacts = () => {
    const contacts = [
        {
            image: "gmail-svgrepo-com.svg",
            link: "letaassefa7@gmail.com"
        }, {
            image: "github-142-svgrepo-com.svg",
            link: "https://github.com/Leta-Asefa"
        }, {
            image: "linkedin-svgrepo-com.svg",
            link: "https://www.linkedin.com/in/leta-asefa/"
        }, {
            image: "telegram-svgrepo-com.svg",
            link: "https://t.me/letaasefa"
        }, {
            image: "tiktok.svg",
            link: "https://t.me/letaasefa"
        }
        
        
        
    ]
    return (
        <div id="contact">
            <div className="grid grid-cols-2">

                <div className="">
                    <div className="bg-white text-black pl-20 py-8">
                        <div className="container mx-auto px-4">
                            <h2 className="text-2xl font-bold mb-3">Contact Me</h2>
                            <p>I welcome your ideas and discussions. Feel free to connect with me. I'm eager to engage in meaningful conversations with you!</p>
                            <div className="flex flex-col space-y-2">

                                <div>
                                
                                    <h3 className="text-xl font-semibold flex gap-2 mt-3"><img src="address.svg" className="w-6 h-6"/><p>Address</p></h3>
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ethiopia | Addis Ababa</p>
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bole - Gurdshola</p>
                                </div>

                                <div className="flex gap-3 items-center"><img src="mobile-svgrepo-com.svg" className="w-6 h-6"/> +251-991175590</div>

                                {contacts.map((contact) => {
                                    return <a href={contact.link} className="flex gap-3 items-center">
                                        <img src={contact.image}  className="w-6 h-6"/>
                                        <p className="hover:text-green-500">{contact.link}</p>
                                    </a>
                                })}

                            </div>
                        </div>
                    </div>
                </div>



                <div className="contact-form ">
                    <div className="container mx-auto px-4">
                        <form action="https://formsubmit.co/letaassefa7@gmail.com" method="POST" className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-black">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="input-field mt-1 block w-full"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="input-field mt-1 block w-full"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-black">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="textarea-field mt-1 block w-full"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="submit-button w-full"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
            <p className="text-center mt-4 px-20 py-7 bg-primary font-bold flex gap-5 items-center justify-center">
                <img src="logo.svg" className="w-10 h-10 inline"></img>
                <p> &copy; 2024 Leta Asefa (SiliconTech). All rights reserved.</p>
            </p>
        </div>
    );
}

export default Contacts;
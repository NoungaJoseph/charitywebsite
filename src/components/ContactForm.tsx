const ContactForm = () => {
    return (
        <section className="bg-transparent dark:bg-background-dark py-12 px-6 md:px-12 mb-40">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-6 md:gap-8">
                    <div className="flex items-center justify-center md:w-96 md:h-96">
                        <div className="w-full h-full rounded-xl overflow-hidden">
                            <img src="/assets/charity/contact us/ccc.png" alt="ccc" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    <div className="md:w-96 md:h-96 w-full">
                        <form className="space-y-6 p-6 md:p-8 bg-white dark:bg-slate-800 rounded-none h-full flex flex-col justify-between">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-navy dark:text-white uppercase tracking-wider pl-1 font-display">Your Name</label>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full px-6 py-4 rounded-xl bg-white dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary text-navy dark:text-white transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-navy dark:text-white uppercase tracking-wider pl-1 font-display">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="hello@company.com"
                                    className="w-full px-6 py-4 rounded-xl bg-white dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary text-navy dark:text-white transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-navy dark:text-white uppercase tracking-wider pl-1 font-display">Message</label>
                                <textarea
                                    rows={6}
                                    placeholder="How can we help?"
                                    className="w-full px-6 py-4 rounded-xl bg-white dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary text-navy dark:text-white transition-all resize-none"
                                ></textarea>
                            </div>
                            <button className="w-full py-5 bg-primary text-white font-black rounded-xl text-lg hover:brightness-110 active:scale-95 transition-all">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;

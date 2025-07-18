import Image from "next/image";

export default function InstalledPage() {
    return (
        <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">

                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
                    You just installed BricoBot successfully!
                </h1>

                <Image src="success.gif"
                       alt="success install"
                       width={300}
                       height={200}
                       className="mx-auto" />

                <p className="text-xl text-slate-300 mt-6 mb-8 text-center">
                    Now you can start using BricoBot by typing <code>!help</code> in your Discord server.
                </p>

                <Image src="help.png"
                       alt="BricoBot help command"
                       width={800}
                       height={400}
                       className="mx-auto" />

                <p className="text-m mt-8 text-slate-300 mb-8 text-center">
                    Soon we will have a dedicated page for the bot's commands.
                </p>
            </div>
        </section>
    )

}

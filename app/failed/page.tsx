import Image from "next/image";

export default function FailedPage() {
    return (
        <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
                <Image src="fail.gif"
                       alt="failed install"
                       width={800}
                       height={400}
                       className="mx-auto" />

                <p className="text-xl text-slate-300 mb-8 text-center">
                    BricoBot failed to install. Please try again later.
                </p>

                <p className="text-m mt-8 text-slate-300 text-center">
                    If the problem persists, please contact the developer.
                </p>
                <p className="text-m text-slate-300 mb-8 text-center">
                    Check our discord server for support. <a href="https://discord.gg/sWdBut2P" target="_blank">BricoBot DEV</a>
                </p>
            </div>
        </section>
    )

}

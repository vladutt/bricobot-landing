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



                <h2 className="text-3xl md:text-4xl font-bold text-white mt-5 mb-8 text-center">
                    Pick Your Poison ☠️
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
                    <div className="flex-1 bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">💬</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Start Immediately</h3>
                            <p className="text-slate-300 mb-4">
                                Jump right into using BricoBot by typing <code className="bg-slate-900/50 px-2 py-1 rounded text-purple-200">!help</code> in your Discord server.
                            </p>
                            <p className="text-sm text-slate-400">Quick and easy - no setup required!</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="bg-purple-900/30 border border-purple-500/30 rounded-full w-12 h-12 flex items-center justify-center">
                            <span className="text-white font-bold">OR</span>
                        </div>
                    </div>

                    <div className="flex-1 bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">📚</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Learn First</h3>
                            <p className="text-slate-300 mb-4">
                                Visit our <a className="text-purple-400 hover:text-purple-300 underline transition-colors" href="https://bricobot.site/docs">documentation</a> page to explore all features and commands.
                            </p>
                            <p className="text-sm text-slate-400">Perfect for understanding everything first!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

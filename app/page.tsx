import {
  Bot,
  Users,
  Package,
  Truck,
  Settings,
  Search,
  ArrowRight,
  MessageCircle,
  BookOpenText
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Page() {
  return (
      <div>
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">For BitCraft Players</Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Your Ultimate
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {" "}
                Crafting
            </span>
              <br />
              Assistant
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              BricoBot helps BitCraft players coordinate professions, manage material requirements, and track deliveries
              with simple, team-friendly commands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://discord.com/oauth2/authorize?client_id=1389626915111043193&permissions=397553183744&response_type=code&redirect_uri=https%3A%2F%2Fapi.bricobot.site%2Finstall&integration_type=0&scope=identify+email+bot+guilds.members.read" rel="noopener noreferrer" target="_blank">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                  <Bot className="h-5 w-5 mr-2" />
                  Invite BricoBot
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </a>
              <a href="/docs">
                <Button
                    size="lg"
                    variant="outline"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent"
                >
                  <BookOpenText className="h-5 w-5 mr-2" />
                  View Documentation
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Keep Your Team Organized</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Whether you're building, gathering, or crafting, BricoBot keeps your group efficient and coordinated.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <Users className="h-10 w-10 text-purple-400 mb-2" />
                <CardTitle className="text-white">Cross-Server Professions</CardTitle>
                <CardDescription className="text-slate-400">
                  Organize your team's roles and specializations for maximum efficiency. In the same time, your profile will be synced across all your servers.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <Package className="h-10 w-10 text-purple-400 mb-2" />
                <CardTitle className="text-white">Manage Objectives</CardTitle>
                <CardDescription className="text-slate-400">
                  Track your objectives as a team and keep them organized. Help your team stay on track by setting up daily, weekly, and monthly objectives.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <Truck className="h-10 w-10 text-purple-400 mb-2" />
                <CardTitle className="text-white">Check Professions</CardTitle>
                <CardDescription className="text-slate-400">
                  You can search for professions and see top 10 members of your team that with the selected profession.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Upcoming Features */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-pink-500/20 text-pink-300 border-pink-500/30">Coming Soon</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Exciting Features in Development</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-slate-800/30 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Settings className="h-6 w-6 text-pink-400" />
                    <CardTitle className="text-white">IGN Priority System</CardTitle>
                  </div>
                  <CardDescription className="text-slate-400">
                    Set your in-game name and the bot will prioritize it over your Discord username
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-slate-800/30 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-6 w-6 text-pink-400" />
                    <CardTitle className="text-white">Enhanced Request System</CardTitle>
                  </div>
                  <CardDescription className="text-slate-400">
                    A better, more intuitive way to request items and services from your team
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-slate-800/30 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Search className="h-6 w-6 text-pink-400" />
                    <CardTitle className="text-white">Cross-Server Trading</CardTitle>
                  </div>
                  <CardDescription className="text-slate-400">
                    Set trade requests that can be discovered by users across different Discord servers
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-slate-800/30 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Bot className="h-6 w-6 text-pink-400" />
                    <CardTitle className="text-white">Web Dashboard</CardTitle>
                  </div>
                  <CardDescription className="text-slate-400">
                    Access all bot functions through a comprehensive web interface
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Developer Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Want to Contribute?</h2>
            <p className="text-slate-400 mb-8 text-lg">
              BricoBot is actively being developed and we welcome contributors! The Git repository will be made public
              soon.
            </p>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <MessageCircle className="h-6 w-6 text-purple-400" />
                  <span className="text-white font-semibold">Connect with the Developer</span>
                </div>
                <p className="text-slate-400 mb-4">Have ideas, questions, or want to help develop BricoBot?</p>
                <a href="https://discord.gg/sWdBut2P" target="_blank">
                  <Button
                      variant="outline"
                      className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent">
                    Join our Discord
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
  )
}

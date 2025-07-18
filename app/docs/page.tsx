import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {Code, Search, TrendingUp, Wrench, Plus, Minus, Package, List, Bell} from "lucide-react";

export default function DocsPage() {
    const commands = [
        {
            icon: <Search className="w-5 h-5" />,
            command: "!who [profession]",
            description: "Lists all members with the specified profession.",
            example: "!who foraging",
            category: "Query"
        },
        {
            icon: <TrendingUp className="w-5 h-5" />,
            command: "!lvl [profession] [level]",
            description: "Sets your level in a specific profession.",
            example: "!lvl foraging 20",
            category: "Profile"
        },
        {
            icon: <Bell className="w-5 h-5" />,
            command: "/remember-reset",
            description: "Bot will sent to you an message to remind you when the NPC tasks are rested.",
            example: "/remember-reset",
            category: "Profile"
        },
        {
            icon: <Wrench className="w-5 h-5" />,
            command: "!task [name] [materials]",
            description: "Creates a new task that everyone can see.",
            example: '!task "Sturdy Chest" "Sturdy Rope - 1, Sturdy Plank - 5"',
            note: "This creates a task named Sturdy Chest requiring 1 Sturdy Rope and 5 Sturdy Planks.",
            category: "Task Management"
        },
        {
            icon: <Plus className="w-5 h-5" />,
            command: "!task-add [name] [materials]",
            description: "Adds materials to an existing task.",
            example: '!task-add "Sturdy Chest" "Rough Plank - 1"',
            note: "This adds 1 Rough Plank to the Sturdy Chest task.",
            category: "Task Management"
        },
        {
            icon: <Minus className="w-5 h-5" />,
            command: "!task-remove [name] [materials]",
            description: "Removes materials (or reduces quantity) from a task.",
            example: '!task-remove "Sturdy Chest" "Rough Plank - 1"',
            note: "If the quantity matches exactly, the material is removed. Otherwise, the quantity is reduced.",
            category: "Task Management"
        },
        {
            icon: <Package className="w-5 h-5" />,
            command: "!task-deliver [name] [materials]",
            description: "Marks materials as delivered for a task.",
            example: '!task-deliver "Sturdy Chest" "Sturdy Rope - 1, Sturdy Plank - 2"',
            note: "This marks 1 Sturdy Rope and 2 Sturdy Planks as delivered.",
            category: "Task Management"
        },
        {
            icon: <List className="w-5 h-5" />,
            command: "!tasks",
            description: "Displays a list of all active (unfinished) tasks.",
            example: "!tasks",
            category: "Query"
        }
    ];

    const groupedCommands = commands.reduce((acc, cmd) => {
        if (!acc[cmd.category]) {
            acc[cmd.category] = [];
        }
        acc[cmd.category].push(cmd);
        return acc;
    }, {} as Record<string, typeof commands>);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">

                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Code className="w-8 h-8 text-purple-400" />
                            <h1 className="text-4xl font-bold text-white">BricoBot Commands</h1>
                        </div>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Complete guide to all available BricoBot commands for managing your crafting community
                        </p>
                    </div>

                    {Object.entries(groupedCommands).map(([category, commands]) => (
                        <div key={category} className="mb-8">
                            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                                {category}
                                <Badge variant="outline" className="border-purple-400 text-purple-300">{commands.length} commands</Badge>
                            </h2>

                            <div className="grid gap-6">
                                {commands.map((cmd, index) => (
                                    <Card key={index} className="hover:shadow-lg transition-shadow bg-slate-800/50 border-slate-700">
                                        <CardHeader className="pb-3">
                                            <div className="flex items-start gap-3">
                                                <div className="p-2 bg-purple-900/50 rounded-lg text-white">
                                                    {cmd.icon}
                                                </div>
                                                <div className="flex-1">
                                                    <CardTitle className="text-lg font-mono text-purple-300 mb-1">
                                                        {cmd.command}
                                                    </CardTitle>
                                                    <CardDescription className="text-base text-slate-300">
                                                        {cmd.description}
                                                    </CardDescription>
                                                </div>
                                            </div>
                                        </CardHeader>

                                        <CardContent className="pt-0">
                                            <div className="space-y-3">
                                                <div>
                                                    <p className="text-sm font-medium text-slate-300 mb-1">Example:</p>
                                                    <code className="block bg-slate-900/50 px-3 py-2 rounded-md text-sm font-mono text-purple-200 border border-slate-700">
                                                        {cmd.example}
                                                    </code>
                                                </div>

                                                {cmd.note && (
                                                    <div className="bg-purple-900/20 border border-purple-500/30 rounded-md p-3">
                                                        <p className="text-sm text-purple-200">
                                                            <strong>Note:</strong> {cmd.note}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            {Object.keys(groupedCommands).indexOf(category) < Object.keys(groupedCommands).length - 1 && (
                                <Separator className="mt-8 bg-slate-700" />
                            )}
                        </div>
                    ))}

                    <Card className="mt-12 bg-slate-800/50 border-slate-700">
                        <CardHeader>
                            <CardTitle className="text-xl text-purple-300">Usage Tips</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-slate-300">
                                <li>• All commands are case-sensitive and must start with <code className="bg-slate-900/50 px-1 rounded text-purple-200">!</code></li>
                                <li>• Use quotes around task names and materials that contain spaces</li>
                                <li>• Material format: <code className="bg-slate-900/50 px-1 rounded text-purple-200">"Material Name - Quantity"</code></li>
                                <li>• Multiple materials can be separated by commas</li>
                                <li>• Task names must be unique within your server</li>
                                <li>• All profile commands are available cross-server</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, GitCommit, Plus, Minus, Wrench, Zap } from "lucide-react";
import Image from "next/image";

export default function ChangelogPage() {
    const releases = [
        {
            version: "1.2.0",
            date: "2025-07-20",
            type: "medium",
            title: "Refactor !task command and redesign database",
            description: "Introduction a new /task slash command and redesign of the database to improve performance and stability.",
            changes: [
                {
                    type: "features",
                    items: [
                        "/task will now open a modal with inputs where you can create a new task",
                    ],
                },
                {
                    type: "removed",
                    items: [
                        "!task [name] [materials] - Create a new task",
                    ]
                }
            ]
        },
        {
            version: "1.1.0",
            date: "2025-07-18",
            type: "medium",
            title: "Bugs after relese",
            description: "New feature and a lot of bugs :). Thanks everyone for your feedback and support!",
            changes: [
                {
                    type: "features",
                    items: [
                        "/remember-reset slash command for notifications when tasks are refreshed",
                    ]
                },
                {
                    type: "fixed",
                    items: [
                        "Duplicating tasks",
                        "Not showing tasks",
                        "!who command not working if a member was registered in more than 2 servers",
                        "!task-delete not working at all",
                        "Database connection stability"
                    ]
                }

            ]
        },
        {
            version: "1.0.0",
            date: "2025-07-17",
            type: "major",
            title: "Initial Release",
            description: "BricoBot is now live with core settlement management features!",
            changes: [
                {
                    type: "added",
                    items: [
                        "Cross-server profile synchronization",
                        "Complete command documentation",
                    ]
                },
                {
                    type: "features",
                    items: [
                        "!who command to find members by profession",
                        "!lvl command to update profession levels",
                        "!task commands for complete task lifecycle",
                        "!tasks command to view all active tasks"
                    ]
                }
            ]
        },
        {
            version: "0.9.0",
            date: "2025-07-13",
            type: "minor",
            title: "Beta Release",
            description: "Private beta testing with selected communities",
            changes: [
                {
                    type: "added",
                    items: [
                        "Basic task creation and management",
                        "Profession tracking prototype",
                        "Discord integration framework"
                    ]
                },
                {
                    type: "fixed",
                    items: [
                        "Memory leaks in task storage",
                        "Command parsing edge cases",
                        "Database connection stability"
                    ]
                }
            ]
        },
    ];

    const getTypeIcon = (type: string) => {
        switch (type) {
            case "added":
                return <Plus className="w-4 h-4 text-green-400" />;
            case "fixed":
                return <Wrench className="w-4 h-4 text-blue-400" />;
            case "features":
                return <Zap className="w-4 h-4 text-yellow-400" />;
            case "removed":
                return <Minus className="w-4 h-4 text-red-400" />;
            default:
                return <GitCommit className="w-4 h-4 text-purple-400" />;
        }
    };

    const getTypeBadge = (type: string) => {
        const colors = {
            major: "bg-red-900/50 border-red-500/30 text-red-300",
            minor: "bg-blue-900/50 border-blue-500/30 text-blue-300",
            patch: "bg-green-900/50 border-green-500/30 text-green-300"
        };
        return colors[type as keyof typeof colors] || colors.minor;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">

                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <GitCommit className="w-8 h-8 text-purple-400" />
                            <h1 className="text-4xl font-bold text-white">Changelog</h1>
                        </div>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Track all updates, improvements, and new features added to BricoBot
                        </p>
                    </div>

                    <div className="space-y-8">
                        {releases.map((release, index) => (
                            <Card key={release.version} className="bg-slate-800/50 border-slate-700">
                                <CardHeader>
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <CardTitle className="text-2xl text-white">
                                                    v{release.version}
                                                </CardTitle>
                                                <Badge className={getTypeBadge(release.type)}>
                                                    {release.type}
                                                </Badge>
                                            </div>
                                            <CardDescription className="text-lg text-purple-300 mb-2">
                                                {release.title}
                                            </CardDescription>
                                            <div className="flex items-center gap-2 text-sm text-slate-400">
                                                <Calendar className="w-4 h-4" />
                                                {release.date}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-slate-300 mt-3">
                                        {release.description}
                                    </p>
                                </CardHeader>

                                <CardContent>
                                    <div className="space-y-6">
                                        {release.changes.map((changeGroup, changeIndex) => (
                                            <div key={changeIndex}>
                                                <div className="flex items-center gap-2 mb-3">
                                                    {getTypeIcon(changeGroup.type)}
                                                    <h4 className="font-semibold text-white capitalize">
                                                        {changeGroup.type}
                                                    </h4>
                                                </div>
                                                <ul className="space-y-2 ml-6">
                                                    {changeGroup.items.map((item, itemIndex) => (
                                                        <li key={itemIndex} className="text-slate-300 text-sm">
                                                            • {item}
                                                        </li>
                                                    ))}
                                                </ul>

                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <Card className="mt-12 bg-slate-800/50 border-slate-700">
                        <CardHeader>
                            <CardTitle className="text-xl text-purple-300">Coming Next</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Plus className="w-4 h-4 text-green-400" />
                                    <span className="text-slate-300">Trade System - Material exchange between members</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Plus className="w-4 h-4 text-green-400" />
                                    <span className="text-slate-300">Advanced Statistics - Detailed analytics and reporting</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Plus className="w-4 h-4 text-green-400" />
                                    <span className="text-slate-300">Web Dashboard - Manage everything from your browser</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
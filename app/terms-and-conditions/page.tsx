import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {FileText} from "lucide-react"

export default function Page() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <FileText className="h-12 w-12 text-purple-400" />
                    <h1 className="text-4xl font-bold text-white">Terms and Conditions</h1>
                </div>
                <p className="text-muted-foreground">
                    Last updated: 17-07-2025
                </p>
            </div>

            <div className="space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">1. Agreement to Terms</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p>
                            By accessing and using BricoBot, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">2. Service Description</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p>
                            BricoBot is a Discord bot that provides various features and functionalities to enhance your Discord server experience. Our bot offers:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Interactive commands and responses</li>
                            <li>Server management and moderation tools</li>
                            <li>Entertainment and utility features</li>
                            <li>24/7 availability and reliable performance</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">3. User Responsibilities</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p>By using BricoBot, you agree to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Use the bot in accordance with Discord's Terms of Service</li>
                            <li>Not abuse or spam the bot's commands</li>
                            <li>Respect other users and maintain a positive environment</li>
                            <li>Not attempt to exploit or hack the bot</li>
                            <li>Use the bot for lawful purposes only</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">4. Privacy Policy</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p>
                            Your privacy is important to us. BricoBot may collect and store certain data necessary for its functionality, including server IDs, user IDs, and command usage. We do not share this information with third parties and use it solely to improve the bot's performance and features.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">5. Intellectual Property</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p>
                            BricoBot and its original content, features, and functionality are and will remain the exclusive property of the bot developer. The service is protected by copyright, trademark, and other laws.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">6. Limitation of Liability</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p>
                            In no event shall BricoBot or its developer be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of data, server disruption, or other intangible losses, resulting from your use of the bot.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">7. Service Availability</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p>
                            We strive to maintain BricoBot's availability, but we do not guarantee that the bot will be online 100% of the time. We reserve the right to take the bot offline for maintenance, updates, or other operational reasons without prior notice.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">8. Discord Integration</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p>
                            BricoBot operates within Discord and is subject to Discord's Terms of Service and Community Guidelines. Users must comply with Discord's rules while using the bot. We are not responsible for Discord's actions or policies.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">9. Modifications to Terms</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p>
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide notice through the bot or our website prior to any new terms taking effect.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">10. Termination</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p>
                            We may terminate or suspend your access to BricoBot immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms or violate Discord's Terms of Service.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">11. Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p>
                            If you have any questions about these Terms and Conditions, please contact us at:
                        </p>
                        <div className="bg-muted p-4 rounded-lg">
                            <p><strong>Email:</strong> contact@vladutteodor.ro</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Separator className="my-8" />

            <div className="text-center text-sm text-muted-foreground">
                <p>
                    © {new Date().getFullYear()} BricoBot. All rights reserved.
                </p>
            </div>
        </div>
    );
}
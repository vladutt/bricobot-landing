
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Database, Users, Lock, Eye, Mail } from "lucide-react";

export default function PrivacyPolicyPage() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <Shield className="h-12 w-12 text-purple-400" />
                    <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
                </div>
                <p className="text-muted-foreground">
                    Last updated: 17-07-2025
                </p>
            </div>

            <div className="space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl flex items-center gap-2">
                            <Eye className="h-6 w-6 text-purple-400" />
                            1. Information We Collect
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p>
                            BricoBot collects minimal data necessary for its functionality. We collect:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Discord User IDs:</strong> To identify users and provide personalized responses</li>
                            <li><strong>Discord Server IDs:</strong> To provide server-specific functionality</li>
                            <li><strong>Command Usage Data:</strong> To track which commands are used and improve the bot</li>
                            <li><strong>Message Content:</strong> Only when directly interacting with the bot through commands</li>
                            <li><strong>Server Settings:</strong> Preferences and configurations set by server administrators</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl flex items-center gap-2">
                            <Database className="h-6 w-6 text-purple-400" />
                            2. How We Use Your Information
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p>We use the collected information to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Provide and maintain BricoBot's functionality</li>
                            <li>Respond to your commands and interactions</li>
                            <li>Improve the bot's performance and features</li>
                            <li>Ensure the bot operates correctly within Discord servers</li>
                            <li>Provide customer support when needed</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl flex items-center gap-2">
                            <Lock className="h-6 w-6 text-purple-400" />
                            3. Data Storage and Security
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p>
                            We implement appropriate security measures to protect your data:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Data is stored securely on protected servers</li>
                            <li>Access to data is limited to authorized personnel only</li>
                            <li>We use encryption for data transmission</li>
                            <li>Regular security audits and updates are performed</li>
                            <li>Data backups are encrypted and stored securely</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl flex items-center gap-2">
                            <Users className="h-6 w-6 text-purple-400" />
                            4. Data Sharing and Third Parties
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p>
                            We do not sell, trade, or transfer your personal information to third parties. However, we may share data in the following limited circumstances:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Discord:</strong> As required for the bot to function within Discord's platform</li>
                            <li><strong>Legal Requirements:</strong> If required by law or to protect our rights</li>
                            <li><strong>Service Providers:</strong> With trusted partners who assist in operating the bot (under strict confidentiality agreements)</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">5. Data Retention</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p>
                            We retain your data only as long as necessary to provide our services:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Command usage data is retained for up to 12 months for analytics purposes</li>
                            <li>Server settings are retained while the bot is active in your server</li>
                            <li>User data is deleted when you block or remove the bot</li>
                            <li>We may retain some data longer if required by law</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">6. Discord's Privacy Policy</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p>
                            BricoBot operates within Discord and is subject to Discord's Privacy Policy. Please review Discord's privacy practices as they also apply to your use of BricoBot:
                        </p>
                        <div className="bg-muted p-4 rounded-lg">
                            <p><strong>Discord Privacy Policy:</strong> <a href="https://discord.com/privacy" target="_blank" className="text-purple-400 hover:underline">https://discord.com/privacy</a></p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">7. Your Rights</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p>You have the right to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Access:</strong> Request information about what data we have about you</li>
                            <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                            <li><strong>Deletion:</strong> Request deletion of your data (subject to legal requirements)</li>
                            <li><strong>Portability:</strong> Request a copy of your data in a readable format</li>
                            <li><strong>Withdrawal:</strong> Stop using the bot at any time</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">8. Children's Privacy</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p>
                            BricoBot is not intended for use by children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">9. Changes to This Privacy Policy</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p>
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl flex items-center gap-2">
                            <Mail className="h-6 w-6 text-purple-400" />
                            10. Contact Us
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p>
                            If you have any questions about this Privacy Policy or our data practices, please contact us:
                        </p>
                        <div className="bg-muted p-4 rounded-lg">
                            <p><strong>Email:</strong> contact@vladutteodor.ro</p>
                            <p><strong>Subject:</strong> Privacy Policy Inquiry - BricoBot</p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">11. International Users</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p>
                            BricoBot is operated from Romania. If you are accessing the bot from outside Romania, please be aware that your information may be transferred to, stored, and processed in Romania where our servers are located.
                        </p>
                    </CardContent>
                </Card>
            </div>

            <Separator className="my-8" />

            <div className="text-center text-sm text-muted-foreground">
                <p>
                    © {new Date().getFullYear()} BricoBot. All rights reserved.
                </p>
                <p className="mt-2">
                    This Privacy Policy is compliant with GDPR and other applicable privacy laws.
                </p>
            </div>
        </div>
    );
}
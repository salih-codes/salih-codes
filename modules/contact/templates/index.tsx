"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Send, Mail, Github, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import type React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function ContactScreen() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Contact
        </h1>
        <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">
          Let's connect! Feel free to reach out for collaborations,
          opportunities, or just to say hi.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription>
              Fill out the form below and I'll get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  required
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  required
                  className="min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <Button type="submit" className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Other Ways to Connect</CardTitle>
              <CardDescription>
                You can also reach out through these platforms
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <a
                href="mailto:hello@salih.codes"
                className="flex items-center space-x-3 rounded-lg border p-4 transition-colors hover:bg-muted"
              >
                <Mail className="h-5 w-5" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">
                    hello@salih.codes
                  </p>
                </div>
              </a>
              <a
                href="https://github.com/salihoztekin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 rounded-lg border p-4 transition-colors hover:bg-muted"
              >
                <Github className="h-5 w-5" />
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-sm text-muted-foreground">@salihoztekin</p>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/salihoztekin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 rounded-lg border p-4 transition-colors hover:bg-muted"
              >
                <Linkedin className="h-5 w-5" />
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">@salihoztekin</p>
                </div>
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Response Time</CardTitle>
              <CardDescription>
                I typically respond within 24-48 hours during business days. For
                urgent matters, please mention it in your message.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}

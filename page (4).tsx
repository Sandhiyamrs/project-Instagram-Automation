"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, BarChart3, MessageSquare, Clock } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            InstaFlow
          </div>
          <Link href="/dashboard">
            <Button className="bg-primary hover:bg-primary/90">
              Dashboard
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              AI-Powered Instagram Automation
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">
            Automate Smarter.
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Grow Faster.
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            InstaFlow — Where automation meets creativity. Schedule posts, track analytics, and engage with your
            audience automatically.
          </p>

          <div className="flex gap-4 justify-center mb-16">
            <Link href="/dashboard">
              <Button size="lg" className="bg-primary hover:bg-primary/90 glow-hover">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-border hover:bg-card bg-transparent">
              View Demo
            </Button>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            <div className="p-6 rounded-xl bg-card border border-border glow-hover group">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Post Scheduler</h3>
              <p className="text-sm text-muted-foreground">
                Schedule posts in advance and maintain consistent presence
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border glow-hover group">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
                <BarChart3 className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Advanced Analytics</h3>
              <p className="text-sm text-muted-foreground">
                Track engagement, growth, and hashtag performance in real-time
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border glow-hover group">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                <MessageSquare className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Auto-Engage</h3>
              <p className="text-sm text-muted-foreground">Automate comments and engagement with your community</p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border glow-hover group">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Smart Features</h3>
              <p className="text-sm text-muted-foreground">
                AI-powered insights and recommendations for better content
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-primary/10 to-background border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to automate your Instagram?</h2>
          <p className="text-muted-foreground mb-8">
            Join influencers and marketers using InstaFlow to save time and grow faster
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="bg-primary hover:bg-primary/90 glow-hover">
              Start Your Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

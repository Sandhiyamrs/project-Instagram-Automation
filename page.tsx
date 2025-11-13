"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Toggle } from "@/components/ui/toggle"
import { useState } from "react"
import { MessageSquare, Heart, User } from "lucide-react"

export default function AutoEngage() {
  const [autoLike, setAutoLike] = useState(true)
  const [autoComment, setAutoComment] = useState(false)
  const [autoFollow, setAutoFollow] = useState(false)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Auto-Engage</h1>
        <p className="text-muted-foreground mt-2">Automate your engagement with relevant content and accounts</p>
      </div>

      {/* Engagement Settings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 border-border bg-card glow-hover">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
              <Heart className="w-6 h-6 text-secondary" />
            </div>
            <Toggle pressed={autoLike} onPressedChange={setAutoLike} className="bg-primary/20" />
          </div>
          <h3 className="font-semibold mb-2">Auto-Like</h3>
          <p className="text-sm text-muted-foreground">
            Automatically like posts from accounts you follow based on hashtags and content type
          </p>
        </Card>

        <Card className="p-6 border-border bg-card glow-hover">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-accent" />
            </div>
            <Toggle pressed={autoComment} onPressedChange={setAutoComment} className="bg-primary/20" />
          </div>
          <h3 className="font-semibold mb-2">Auto-Comment</h3>
          <p className="text-sm text-muted-foreground">
            Leave thoughtful comments on relevant posts with AI-powered responses
          </p>
        </Card>

        <Card className="p-6 border-border bg-card glow-hover">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
              <User className="w-6 h-6 text-primary" />
            </div>
            <Toggle pressed={autoFollow} onPressedChange={setAutoFollow} className="bg-primary/20" />
          </div>
          <h3 className="font-semibold mb-2">Smart Follow</h3>
          <p className="text-sm text-muted-foreground">Follow accounts matching your target audience automatically</p>
        </Card>
      </div>

      {/* Engagement Rules */}
      <Card className="p-6 border-border bg-card">
        <h2 className="text-lg font-semibold mb-4">Engagement Rules</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Target Hashtags</label>
            <input
              type="text"
              className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="#photography #instagram #creative"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Daily Engagement Limit</label>
            <input
              type="number"
              className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              defaultValue={50}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Comment Response Template</label>
            <textarea
              className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              rows={3}
              placeholder="Add comment templates for auto-responses..."
            />
          </div>

          <Button className="w-full bg-primary hover:bg-primary/90 glow-hover">Save Rules</Button>
        </div>
      </Card>

      {/* Activity Log */}
      <Card className="p-6 border-border bg-card">
        <h2 className="text-lg font-semibold mb-4">Activity Log</h2>
        <div className="space-y-3">
          {[
            { action: "Liked post by @influencer_1", time: "2 hours ago", icon: Heart },
            { action: "Commented on @brand_account post", time: "4 hours ago", icon: MessageSquare },
            { action: "Followed @creative_studio", time: "6 hours ago", icon: User },
            { action: "Liked post by @photographer_pro", time: "1 day ago", icon: Heart },
          ].map((log, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-card-foreground/5 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <log.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm">{log.action}</p>
                  <p className="text-xs text-muted-foreground">{log.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

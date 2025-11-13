"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Plus, Upload } from "lucide-react"

export default function Scheduler() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Summer Vibes", scheduled: "2024-12-20 10:00 AM", status: "Scheduled" },
    { id: 2, title: "Product Launch", scheduled: "2024-12-21 2:00 PM", status: "Scheduled" },
    { id: 3, title: "Behind the Scenes", scheduled: "2024-12-22 6:00 PM", status: "Scheduled" },
  ])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Post Scheduler</h1>
          <p className="text-muted-foreground mt-2">Schedule and manage your Instagram posts</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 glow-hover">
          <Plus className="w-4 h-4 mr-2" />
          New Post
        </Button>
      </div>

      {/* Schedule Form */}
      <Card className="p-6 border-border bg-card">
        <h2 className="text-lg font-semibold mb-4">Create New Post</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Upload Media</label>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
              <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-muted-foreground">Drag and drop or click to upload</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Caption</label>
            <textarea
              className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              rows={4}
              placeholder="Write your caption here..."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Schedule Date</label>
              <input
                type="date"
                className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Schedule Time</label>
              <input
                type="time"
                className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Hashtags</label>
            <input
              type="text"
              className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="#photography #instagram #creative"
            />
          </div>

          <Button className="w-full bg-primary hover:bg-primary/90 glow-hover">Schedule Post</Button>
        </div>
      </Card>

      {/* Scheduled Posts */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Scheduled Posts</h2>
        <div className="space-y-3">
          {posts.map((post) => (
            <Card key={post.id} className="p-4 border-border bg-card glow-hover">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{post.title}</h3>
                  <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.scheduled.split(" ")[0]}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.scheduled.split(" ").slice(1).join(" ")}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs bg-primary/20 text-primary">{post.status}</span>
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

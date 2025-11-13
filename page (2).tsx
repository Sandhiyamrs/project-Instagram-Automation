"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

export default function Settings() {
  const [showApiKey, setShowApiKey] = useState(false)

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground mt-2">Manage your account and API keys</p>
      </div>

      {/* Instagram Account */}
      <Card className="p-6 border-border bg-card">
        <h2 className="text-lg font-semibold mb-4">Instagram Account</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Connected Account</label>
            <div className="flex items-center justify-between p-3 rounded-lg bg-background border border-border">
              <span>@your_instagram_handle</span>
              <Button variant="ghost" size="sm" className="text-secondary">
                Disconnect
              </Button>
            </div>
          </div>

          <Button className="w-full bg-primary hover:bg-primary/90">Re-authorize Account</Button>
        </div>
      </Card>

      {/* API Keys */}
      <Card className="p-6 border-border bg-card">
        <h2 className="text-lg font-semibold mb-4">API Keys</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">API Key</label>
            <div className="flex items-center gap-2">
              <input
                type={showApiKey ? "text" : "password"}
                value="sk_live_abc123def456ghi789jkl"
                readOnly
                className="flex-1 px-3 py-2 rounded-lg bg-background border border-border text-foreground focus:outline-none"
              />
              <button
                onClick={() => setShowApiKey(!showApiKey)}
                className="p-2 hover:bg-card-foreground/10 rounded-lg transition-colors"
              >
                {showApiKey ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <Button variant="outline" className="w-full border-border bg-transparent">
            Copy API Key
          </Button>
          <Button variant="outline" className="w-full border-border bg-transparent">
            Regenerate Key
          </Button>
        </div>
      </Card>

      {/* Notifications */}
      <Card className="p-6 border-border bg-card">
        <h2 className="text-lg font-semibold mb-4">Notifications</h2>
        <div className="space-y-3">
          {[
            { label: "Post Published", checked: true },
            { label: "High Engagement Alert", checked: true },
            { label: "Weekly Summary", checked: false },
          ].map((setting, i) => (
            <div key={i} className="flex items-center gap-3">
              <input type="checkbox" defaultChecked={setting.checked} className="w-4 h-4 rounded border-border" />
              <label className="text-sm">{setting.label}</label>
            </div>
          ))}
        </div>
      </Card>

      {/* Danger Zone */}
      <Card className="p-6 border-border bg-card border-destructive/20">
        <h2 className="text-lg font-semibold mb-4 text-destructive">Danger Zone</h2>
        <Button variant="destructive" className="w-full">
          Delete Account
        </Button>
      </Card>
    </div>
  )
}

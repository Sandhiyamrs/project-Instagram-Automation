"use client"

import { Card } from "@/components/ui/card"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { TrendingUp, Users, Heart, MessageCircle } from "lucide-react"

const engagementData = [
  { date: "Mon", engagement: 4000, followers: 2400 },
  { date: "Tue", engagement: 3000, followers: 1398 },
  { date: "Wed", engagement: 2000, followers: 9800 },
  { date: "Thu", engagement: 2780, followers: 3908 },
  { date: "Fri", engagement: 1890, followers: 4800 },
  { date: "Sat", engagement: 2390, followers: 3800 },
  { date: "Sun", engagement: 3490, followers: 4300 },
]

const contentData = [
  { name: "Reels", value: 45 },
  { name: "Posts", value: 30 },
  { name: "Stories", value: 25 },
]

const COLORS = ["#a78bfa", "#ff7f50", "#6366f1"]

const hashtagData = [
  { hashtag: "#photography", uses: 1234, reach: 45000 },
  { hashtag: "#instagram", uses: 982, reach: 32000 },
  { hashtag: "#creative", uses: 876, reach: 28000 },
  { hashtag: "#instaart", uses: 654, reach: 22000 },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-6 border-border bg-card glow-hover">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-muted-foreground text-sm">Followers</p>
              <p className="text-3xl font-bold mt-2">24.5K</p>
              <p className="text-primary text-sm mt-2 flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                +12% this week
              </p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
          </div>
        </Card>

        <Card className="p-6 border-border bg-card glow-hover">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-muted-foreground text-sm">Engagement Rate</p>
              <p className="text-3xl font-bold mt-2">8.2%</p>
              <p className="text-secondary text-sm mt-2 flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                +2.1% this week
              </p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
              <Heart className="w-6 h-6 text-secondary" />
            </div>
          </div>
        </Card>

        <Card className="p-6 border-border bg-card glow-hover">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-muted-foreground text-sm">Total Likes</p>
              <p className="text-3xl font-bold mt-2">12.3K</p>
              <p className="text-accent text-sm mt-2 flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                +8% this week
              </p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
              <Heart className="w-6 h-6 text-accent" />
            </div>
          </div>
        </Card>

        <Card className="p-6 border-border bg-card glow-hover">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-muted-foreground text-sm">Comments</p>
              <p className="text-3xl font-bold mt-2">2.4K</p>
              <p className="text-primary text-sm mt-2 flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                +5% this week
              </p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-1 lg:col-span-2 p-6 border-border bg-card">
          <h2 className="text-lg font-semibold mb-4">Engagement Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={engagementData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="date" stroke="#999" />
              <YAxis stroke="#999" />
              <Tooltip
                contentStyle={{ backgroundColor: "#1a1a2e", border: "none", borderRadius: "8px", color: "#fff" }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="engagement"
                stroke="#a78bfa"
                strokeWidth={2}
                dot={{ fill: "#a78bfa", r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="followers"
                stroke="#ff7f50"
                strokeWidth={2}
                dot={{ fill: "#ff7f50", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6 border-border bg-card">
          <h2 className="text-lg font-semibold mb-4">Content Type</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={contentData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {contentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: "#1a1a2e", border: "none", borderRadius: "8px", color: "#fff" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Top Hashtags */}
      <Card className="p-6 border-border bg-card">
        <h2 className="text-lg font-semibold mb-4">Top Performing Hashtags</h2>
        <div className="space-y-3">
          {hashtagData.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-card-foreground/5 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm font-semibold">
                  {index + 1}
                </div>
                <div>
                  <p className="font-semibold">{item.hashtag}</p>
                  <p className="text-muted-foreground text-sm">{item.uses} uses</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">{(item.reach / 1000).toFixed(0)}K</p>
                <p className="text-muted-foreground text-sm">reach</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

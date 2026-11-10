import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
function App() {
  
const [activeQR, setActiveQR] = useState(null);
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="flex flex-col items-center justify-between gap-5 px-5 py-5 md:flex-row md:px-10">
        <h1 className="text-3xl font-bold text-purple-600">
          TINY.SITE
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-5">
          <a href="#" className="text-purple-600">Home</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Terms</a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="font-medium">Login</button>
          <button className="rounded-full bg-purple-600 px-6 py-3 text-white">
            Get Started Free
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-purple-50 px-4 py-16 text-center md:px-6 md:py-24">
        <h2 className="text-3xl font-bold md:text-5xl">
          Shorten Your URL in <span className="text-purple-600">seconds</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl px-2 text-sm text-gray-600 md:text-base">
          Create short, memorable links in seconds. Track clicks, analyze
          performance, and manage all your links in one place.
        </p>

        <div className="mx-auto mt-10 w-full max-w-xl rounded-2xl bg-white p-5 shadow-lg sm:p-8">
          <h3 className="text-2xl font-semibold">Get Started Today</h3>
          <p className="mt-2 text-gray-500">
            Create your free account and start shortening links.
          </p>

          <button className="mt-6 w-full rounded-full bg-purple-600 py-3 text-white">
            Get Started Free
          </button>

          <p className="mt-4 text-sm text-gray-500">
            Already have an account? <span className="text-purple-600">Login</span>
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="grid grid-cols-2 gap-6 bg-purple-600 px-4 py-8 text-center text-white md:grid-cols-4 md:px-10 md:py-10">
        <div>
          <h3 className="text-3xl font-bold">100K+</h3>
          <p>Links Created</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">1M+</h3>
          <p>Total Clicks</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">180+</h3>
          <p>Countries</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">99.9%</h3>
          <p>Uptime</p>
        </div>
      </section>

      {/* Popular Links */}
      <section className="px-4 py-14 md:px-10 md:py-20">
        <h2 className="text-center text-3xl font-bold">Most Popular Links</h2>
        <p className="mt-3 text-center text-gray-500">
          Check out the most clicked links on our platform.
        </p>

        <div className="mx-auto mt-10 max-w-4xl space-y-4">
          {["youtube.com", "facebook.com", "instagram.com", "google.com", "github.com"].map((link, index) => (
            <div key={link} className="flex flex-col gap-3 rounded-xl border p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
              <div>
                <p className="font-semibold">{link}</p>
                <p className="text-sm text-gray-500">tiny.site/{["yt", "fb", "ig", "gg", "gh"][index]}</p>
              </div>
              
              <div className="flex items-center gap-3">
  <p className="text-purple-600">
    {(index + 1) * 1250} clicks
  </p>
  <button
  onClick={() =>
    navigator.clipboard.writeText(
      `https://tiny.site/${["yt", "fb", "ig", "gg", "gh"][index]}`
    )
  }
  className="rounded-lg bg-purple-100 px-3 py-2 text-sm text-purple-700"
>
  Copy
</button>
<button
  onClick={() => setActiveQR(activeQR === index ? null : index)}
  className="rounded-lg bg-gray-100 px-3 py-2 text-sm"
>
  QR Code
</button>
</div>
{activeQR === index && (
  <div className="mt-3">
    <QRCodeSVG
      value={`https://tiny.site/${["yt", "fb", "ig", "gg", "gh"][index]}`}
      size={120}
    />
  </div>
)}
            </div>
          ))}
        </div>
      </section>

      {/* Premium Features */}
      
      <section className="bg-purple-50 px-4 py-14 text-center md:px-10 md:py-20">
        <h2 className="text-3xl font-bold">Premium Features</h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Everything you need to manage and grow your links.
        </p>
<div className="mx-auto mt-10 max-w-4xl rounded-2xl bg-white p-6 text-left shadow-lg">
  <h3 className="text-xl font-bold">Analytics Dashboard</h3>
  <p className="mt-1 text-sm text-gray-500">
    Your link performance at a glance
  </p>

  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
    {[
      { title: "Total Clicks", value: "24,580" },
      { title: "Total Links", value: "1,250" },
      { title: "Countries", value: "180+" },
    ].map((item) => (
      <div key={item.title} className="rounded-xl bg-purple-50 p-4">
        <p className="text-sm text-gray-500">{item.title}</p>
        <p className="mt-2 text-2xl font-bold">{item.value}</p>
      </div>
    ))}
  </div>

  <div className="mt-6 rounded-xl border p-4">
    <h4 className="font-semibold">Weekly Clicks</h4>
    <div className="mt-5 flex h-40 items-end justify-around gap-3">
      {[45, 70, 55, 90, 65, 100, 75].map((height, index) => (
        <div key={index} className="flex h-full flex-1 items-end">
          <div
            className="w-full rounded-t-md bg-purple-500"
            style={{ height: `${height}%` }}
          />
        </div>
      ))}
    </div>
    <div className="mt-2 flex justify-around text-xs text-gray-500">
      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
        <span key={day}>{day}</span>
      ))}
    </div>
  </div>
</div>
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["Advanced Analytics", "Custom Short Links", "QR Code Generation", "Link Management", "Click Tracking", "Detailed Reports"].map((feature) => (
            <div key={feature} className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="font-semibold">{feature}</h3>
              <p className="mt-2 text-sm text-gray-500">
                Manage your links easily with our powerful tools.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="px-4 py-14 text-center md:px-10 md:py-20">
        <h2 className="text-3xl font-bold">Simple & Transparent Pricing</h2>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { name: "Free", price: "$0", description: "For personal use" },
            { name: "Pro", price: "$9", description: "For professionals" },
            { name: "Business", price: "$29", description: "For growing teams" },
          ].map((plan) => (
            <div key={plan.name} className={`rounded-2xl border p-8 ${plan.name === "Pro" ? "border-purple-600 shadow-xl" : ""}`}>
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="mt-4 text-4xl font-bold text-purple-600">{plan.price}<span className="text-sm text-gray-500">/month</span></p>
              <p className="mt-3 text-gray-500">{plan.description}</p>
              <button className="mt-8 w-full rounded-full bg-purple-600 py-3 text-white">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>
      {/* Testimonials */}
      <section className="bg-white px-4 py-14 text-center md:px-10 md:py-20">
        <h2 className="text-3xl font-bold">What Our Users Say</h2>
        <p className="mx-auto mt-3 max-w-2xl text-gray-500">
          Hear from people who use TINY.SITE every day.
        </p>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              name: "Sarah Johnson",
              role: "Digital Marketer",
              review: "TINY.SITE makes sharing and managing my links incredibly easy.",
            },
            {
              name: "Michael Brown",
              role: "Content Creator",
              review: "The analytics features help me understand my audience better.",
            },
            {
              name: "Emily Davis",
              role: "Business Owner",
              review: "A simple, fast and reliable tool for all my business links.",
            },
          ].map((user) => (
            <div key={user.name} className="rounded-2xl border p-7 text-left shadow-sm">
              <p className="text-yellow-500">★★★★★</p>
              <p className="mt-4 text-gray-600">"{user.review}"</p>
              <h3 className="mt-5 font-bold">{user.name}</h3>
              <p className="text-sm text-gray-500">{user.role}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="bg-purple-50 px-4 py-14 text-center md:px-10 md:py-20">
        <h2 className="text-3xl font-bold">Why Choose Us</h2>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["Lightning Fast", "Detailed Analytics", "Global CDN", "QR Codes", "Secure Links", "Expiration Control"].map((item) => (
            <div key={item} className="rounded-xl bg-white p-8">
              <h3 className="font-semibold">{item}</h3>
              <p className="mt-2 text-sm text-gray-500">
                Simple and powerful tools for your links.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 px-5 py-10 text-white md:px-10 md:py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold text-purple-400">TINY.SITE</h2>
            <p className="mt-4 text-gray-400">
              Make your links shorter, smarter and more powerful.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Product</h3>
            <p className="mt-4 text-gray-400">Features</p>
            <p className="mt-2 text-gray-400">Pricing</p>
          </div>

          <div>
            <h3 className="font-semibold">Company</h3>
            <p className="mt-4 text-gray-400">About Us</p>
            <p className="mt-2 text-gray-400">Contact</p>
          </div>
        </div>

        <p className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © 2026 TINY.SITE. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
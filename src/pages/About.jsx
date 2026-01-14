import React from "react";
import { Link } from "react-router-dom";
import { 
  FaChartLine, 
  FaBell, 
  FaFileAlt, 
  FaSearch, 
  FaCalendarAlt,
  FaMobileAlt,
  FaShieldAlt 
} from "react-icons/fa";
import { MdDashboard, MdTrendingUp } from "react-icons/md";

export default function About() {
  const features = [
    {
      icon: <MdDashboard className="text-3xl" />,
      title: "Centralized Dashboard",
      description: "View all your applications in one place with status tracking and analytics."
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Progress Analytics",
      description: "Track application success rates, response times, and interview conversions."
    },
    {
      icon: <FaBell className="text-3xl" />,
      title: "Smart Reminders",
      description: "Get notifications for follow-ups, interview dates, and application deadlines."
    },
    {
      icon: <FaFileAlt className="text-3xl" />,
      title: "Resume & Cover Letter Tracking",
      description: "Store and version-control your resumes and cover letters for different roles."
    },
    {
      icon: <FaSearch className="text-3xl" />,
      title: "Job Search Integration",
      description: "Import jobs directly from LinkedIn, Indeed, and other job boards."
    },
    {
      icon: <FaCalendarAlt className="text-3xl" />,
      title: "Interview Calendar",
      description: "Sync interviews with Google Calendar and set preparation reminders."
    },
    {
      icon: <FaMobileAlt className="text-3xl" />,
      title: "Mobile Friendly",
      description: "Access your job hunt progress on any device, anywhere."
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Data Privacy",
      description: "Your job search data stays private and secure on your own device."
    }
  ];

  const stats = [
    { value: "85%", label: "More organized job seekers" },
    { value: "40%", label: "Faster interview response" },
    { value: "2.3x", label: "Higher success rate" },
    { value: "15+", label: "Hours saved monthly" }
  ];

  const testimonials = [
    {
      quote: "Career Tracker helped me land my dream job in 3 months! The analytics showed me where to improve.",
      author: "Sarah Chen",
      role: "Software Engineer @ Google"
    },
    {
      quote: "The interview tracking feature saved me from missing important follow-ups. Game changer!",
      author: "Marcus Johnson",
      role: "Product Manager @ Microsoft"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-[#1A2A44] mb-6">
          Take Control of Your <span className="text-[#00B4D8]">Career Journey</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          Career Tracker is your intelligent companion for navigating the job search process.
          Stay organized, track progress, and land your dream job faster with data-driven insights.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/applications/new"
            className="bg-[#00B4D8] hover:bg-[#0096C7] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Start Tracking Now
          </Link>
          <Link
            to="/"
            className="border-2 border-[#1A2A44] text-[#1A2A44] hover:bg-[#1A2A44] hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
          >
            See Dashboard
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="bg-gradient-to-br from-[#00B4D8] to-[#0096C7] text-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300"
          >
            <div className="text-4xl font-bold mb-2">{stat.value}</div>
            <div className="text-sm opacity-90">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Features Grid */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-[#1A2A44] mb-12">
          Everything You Need for Your Job Search
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-[#00B4D8] mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#1A2A44] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-16 bg-gradient-to-r from-[#1A2A44] to-[#005F84] text-white p-10 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-10">
          How Career Tracker Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-[#00B4D8] w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold mb-3">Add Applications</h3>
            <p>Quickly add job applications with company details, job title, and status.</p>
          </div>
          <div className="text-center">
            <div className="bg-[#00B4D8] w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold mb-3">Track Progress</h3>
            <p>Monitor application stages, set reminders, and update status as you progress.</p>
          </div>
          <div className="text-center">
            <div className="bg-[#00B4D8] w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold mb-3">Analyze & Improve</h3>
            <p>Use insights to optimize your job search strategy and increase success rates.</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-[#1A2A44] mb-12">
          What Users Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#00B4D8]"
            >
              <p className="text-gray-700 italic text-lg mb-6">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="font-semibold text-[#1A2A44]">
                  {testimonial.author}
                </div>
                <div className="text-gray-500 text-sm">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visual Roadmap */}
      <div className="bg-gray-50 p-8 rounded-2xl mb-16">
        <h2 className="text-3xl font-bold text-center text-[#1A2A44] mb-10">
          Your Career Journey Roadmap
        </h2>
        <div className="relative">
          {/* Roadmap Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#00B4D8] to-[#0096C7] hidden md:block"></div>
          
          {/* Roadmap Items */}
          <div className="space-y-12">
            {[
              { step: "Discovery", desc: "Research companies and roles" },
              { step: "Application", desc: "Submit tailored applications" },
              { step: "Screening", desc: "Phone screens and HR interviews" },
              { step: "Technical", desc: "Technical assessments & interviews" },
              { step: "Final Round", desc: "On-site interviews & meetings" },
              { step: "Offer", desc: "Negotiation and acceptance" }
            ].map((item, index) => (
              <div 
                key={index}
                className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="md:w-1/2"></div>
                <div className="bg-white md:w-1/2 p-6 rounded-xl shadow-md border border-gray-200 relative">
                  <div className="absolute top-1/2 transform -translate-y-1/2 -left-3 md:left-auto md:right-3 w-6 h-6 bg-[#00B4D8] rounded-full border-4 border-white"></div>
                  <h3 className="text-xl font-bold text-[#1A2A44] mb-2">
                    Step {index + 1}: {item.step}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-[#00B4D8] to-[#0096C7] text-white p-12 rounded-2xl">
        <MdTrendingUp className="text-6xl mx-auto mb-6 opacity-80" />
        <h2 className="text-4xl font-bold mb-6">
          Ready to Accelerate Your Job Search?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of successful job seekers who found their dream roles with Career Tracker.
        </p>
        <Link
          to="/signup"
          className="inline-block bg-white text-[#1A2A44] hover:bg-gray-100 font-bold px-10 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Get Started Free
        </Link>
        <p className="mt-4 text-sm opacity-90">
          No credit card required • 14-day free trial
        </p>
      </div>
    </div>
  );
}
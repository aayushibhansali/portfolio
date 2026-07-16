import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Code2,
  FolderGit2,
  FolderOpen,
  Cpu,
  GraduationCap,
  Award,
  ChevronRight,
  Binary,
  Copy,
  Check,
  CornerDownRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function App() {
  const [copied, setCopied] = useState(false);
  const [activeFile, setActiveFile] = useState("summary.md");
  const [terminalLogs, setTerminalLogs] = useState([
    "system_init: Core Environment Booted.",
    "ready: Aayushi Bhansali Portfolio OS Online.",
  ]);

  const triggerLog = (fileName) => {
    setActiveFile(fileName);
    setTerminalLogs((prev) =>
      [...prev, `cat /root/${fileName} - load success`].slice(-4),
    );
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("aayushibhansali1412@gmail.com");
    setCopied(true);
    setTerminalLogs((prev) => [
      ...prev,
      "event: contact email copied to clipboard.",
    ]);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#090b10] text-[#a9b2c3] font-mono text-xs p-4 md:p-8 relative selection:bg-[#233549] selection:text-[#38bdf8]">
      {/* BACKGROUND VECTOR GLOWS */}
      <div className="absolute top-0 right-1/3 w-[600px] h-[300px] bg-[#38bdf8]/3 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-[#4ade80]/2 rounded-full blur-[120px] pointer-events-none" />

      {/* GLOBAL CORE INTERFACE FRAME */}
      <div className="max-w-6xl mx-auto border border-[#1b2333] bg-[#0c0f16] rounded-2xl overflow-hidden shadow-2xl flex flex-col min-h-[750px]">
        {/* WINDOW SYSTEM HEADER */}
        <header className="bg-[#10141f] border-b border-[#1b2333] px-5 py-3.5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-6">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-[#ef4444]/30 border border-[#ef4444]/50" />
              <div className="h-3 w-3 rounded-full bg-[#eab308]/30 border border-[#eab308]/50" />
              <div className="h-3 w-3 rounded-full bg-[#22c55e]/30 border border-[#22c55e]/50" />
            </div>
            <span className="text-[#566275] text-[11px] tracking-wider font-semibold">
              WORKSPACE // aayushi-bhansali-portfolio
            </span>
          </div>
          <div className="flex items-center gap-1.5 bg-[#090b10] border border-[#1b2333] px-2.5 py-1 rounded-md text-[#38bdf8] text-[10px]">
            <Binary size={12} />
            <span>STABLE_BUILD</span>
          </div>
        </header>

        {/* ASYMMETRIC SYSTEM SPLIT */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
          {/* ========================================================= */}
          {/* LEFT COMMAND CONSOLE PANEL (5 COLUMNS)                     */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-[#1b2333] p-5 flex flex-col justify-between bg-[#0e121a]">
            <div className="space-y-6">
              {/* BRAND NODE & DIRECT CONTACT DATA */}
              <div>
                <h2 className="text-xl font-bold text-white tracking-tight">
                  Aayushi Bhansali
                </h2>
                <p className="text-[#38bdf8] text-[11px] mt-0.5 font-bold">
                  Frontend Engineer
                </p>
                <div className="text-[10px] text-[#566275] mt-1">
                  React.js · Next.js · Flutter · TypeScript
                </div>

                <div className="mt-4 grid grid-cols-1 gap-2 text-[#63738a] text-[11px] bg-[#090b10] border border-[#1b2333] p-3 rounded-xl">
                  <div className="flex items-center gap-2">
                    <Mail size={12} className="text-[#4ade80]" />{" "}
                    aayushibhansali1412@gmail.com
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={12} className="text-[#4ade80]" /> 9604310110
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={12} className="text-[#4ade80]" /> Bengaluru
                  </div>
                  <div className="flex items-center gap-4 pt-1 mt-1 border-t border-[#1b2333] text-[10px]">
                    <a
                      href="https://linkedin.com/in/aayushi-bhansali"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white flex items-center gap-1 text-[#38bdf8]"
                    >
                      <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/aayushibhansali"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white flex items-center gap-1 text-[#38bdf8]"
                    >
                      <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* LIVE CONSOLE LOG LOGGER */}
              <div className="bg-[#090b10] border border-[#1b2333] p-3 rounded-xl space-y-1 text-[11px] text-[#566275]">
                {terminalLogs.map((log, index) => (
                  <div key={index} className="flex items-start gap-1 truncate">
                    <span className="text-[#4ade80] shrink-0">&gt;</span>
                    <span>{log}</span>
                  </div>
                ))}
              </div>

              {/* DYNAMIC NAVIGATION TREE */}
              <div className="space-y-2">
                <p className="text-[10px] font-bold text-[#eab308] tracking-wider uppercase flex items-center gap-1">
                  <FolderGit2 size={12} /> SYSTEM DIRECTORIES
                </p>
                <div className="space-y-1 pl-1">
                  {[
                    { id: "summary.md", label: "summary.md" },
                    { id: "work_experience.md", label: "work_experience.md" },
                    { id: "skills.json", label: "skills.json" },
                    { id: "projects.md", label: "projects.md" },
                    { id: "education.txt", label: "education.txt" },
                    {
                      id: "certifications_leadership.txt",
                      label: "certifications_leadership.txt",
                    },
                  ].map((file) => {
                    const isSelected = activeFile === file.id;
                    return (
                      <button
                        key={file.id}
                        onClick={() => triggerLog(file.id)}
                        className={`w-full flex items-center gap-2 text-left px-3 py-2 rounded-lg transition-all ${
                          isSelected
                            ? "bg-[#1b2436] border border-[#2b3b57] text-white font-bold shadow-sm"
                            : "text-[#63738a] hover:text-[#a9b2c3] bg-transparent border border-transparent"
                        }`}
                      >
                        <ChevronRight
                          size={12}
                          className={`transition-transform ${isSelected ? "text-[#38bdf8] rotate-90" : "text-[#445163]"}`}
                        />
                        <span className={isSelected ? "text-[#38bdf8]" : ""}>
                          {file.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* HANDSHAKE EXECUTION CONTROL */}
            <div className="pt-4 border-t border-[#1b2333]">
              <button
                onClick={copyEmail}
                className="w-full bg-[#1b2436] hover:bg-[#233047] text-white border border-[#2c3d59] py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 active:scale-[0.98] font-bold text-[11px]"
              >
                {copied ? (
                  <Check size={12} className="text-[#4ade80]" />
                ) : (
                  <Copy size={12} className="text-[#38bdf8]" />
                )}
                {copied ? "Contact Info Copied" : "Copy Contact Email"}
              </button>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT CANVAS FILE INSPECTOR (7 COLUMNS)               */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between overflow-y-auto bg-[#0c0f16]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFile}
                initial={{ opacity: 0, x: 6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -6 }}
                transition={{ duration: 0.12 }}
                className="space-y-6"
              >
                {/* SUMMARY BLOCK */}
                {activeFile === "summary.md" && (
                  <div className="space-y-4">
                    <div className="border-b border-[#1b2333] pb-4">
                      <div className="text-[#566275] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                        <FolderOpen size={11} className="text-[#eab308]" />{" "}
                        professional_summary
                      </div>
                      <h3 className="text-lg font-bold text-white tracking-tight mt-1">
                        Overview
                      </h3>
                    </div>
                    <p className="text-sm text-[#cbd5e1] leading-relaxed bg-[#0e121a] border border-[#1b2333] p-4 rounded-xl">
                      Frontend / Product Engineer with 2 years of experience
                      building enterprise-scale platforms at{" "}
                      <strong className="text-white">L&T Finance</strong> —
                      architected a no-code analytics dashboard adopted by 30+
                      teams and C-suite, built a full-stack Flutter app deployed
                      across 150+ branches, and engineered internal tools
                      spanning frontend, backend, and real-time API
                      integrations. Skilled in JavaScript, React.js, Next.js,
                      Flutter, Node.js, and TypeScript.
                    </p>
                  </div>
                )}

                {/* EXPERIENCE BLOCK */}
                {activeFile === "work_experience.md" && (
                  <div className="space-y-6">
                    <div className="border-b border-[#1b2333] pb-4">
                      <div className="text-[#566275] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                        <FolderOpen size={11} className="text-[#eab308]" />{" "}
                        work_experience
                      </div>
                      <h3 className="text-lg font-bold text-white tracking-tight mt-1">
                        L&amp;T Finance
                      </h3>
                      <div className="flex justify-between items-center text-xs text-[#38bdf8] mt-0.5">
                        <span className="font-bold">
                          Product Engineer (Bengaluru)
                        </span>
                        <span className="bg-[#161c26] px-2 py-0.5 rounded border border-[#232b3c] text-white text-[10px]">
                          July 2024 – Present
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4 text-xs md:text-sm text-[#cbd5e1] leading-relaxed">
                      <div className="bg-[#0e121a] border border-[#1b2333] p-4 rounded-xl space-y-2">
                        <div className="text-[11px] font-bold text-[#4ade80]">
                          // GCP Billing &amp; Inventory Analytics Dashboard
                        </div>
                        <ul className="list-none space-y-1.5 pl-2 text-xs text-[#cbd5e1]">
                          <li className="flex items-start gap-1.5">
                            <span className="text-[#c0392b] shrink-0">►</span>
                            <span>
                              Built a{" "}
                              <strong>no-code analytics platform</strong> in
                              JavaScript, Chart.js, HTML/CSS, Bootstrap and
                              jQuery — users filter and query GCP billing data
                              via{" "}
                              <strong>dropdown-based SQL query builder</strong>{" "}
                              with no developer dependency.
                            </span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <span className="text-[#c0392b] shrink-0">►</span>
                            <span>
                              Integrated <strong>Movable.js</strong> for
                              resizable and repositionable chart panels; added{" "}
                              <strong>
                                one-click chart type switching, Excel export and
                                chart download
                              </strong>{" "}
                              — adopted by{" "}
                              <strong>30+ dev teams and C-suite</strong> for
                              daily cost tracking, replacing external BI tools.
                            </span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <span className="text-[#c0392b] shrink-0">►</span>
                            <span>
                              Co-engineered the{" "}
                              <strong>
                                Node.js backend and MariaDB database
                              </strong>{" "}
                              architecture to securely handle automated GCP
                              billing data ingestion.
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-[#0e121a] border border-[#1b2333] p-4 rounded-xl space-y-2">
                        <div className="text-[11px] font-bold text-[#38bdf8]">
                          // Flutter Field Data Collection App
                        </div>
                        <ul className="list-none space-y-1.5 pl-2 text-xs text-[#cbd5e1]">
                          <li className="flex items-start gap-1.5">
                            <span className="text-[#c0392b] shrink-0">►</span>
                            <span>
                              Built end-to-end —{" "}
                              <strong>
                                Flutter frontend, Node.js backend, MariaDB
                              </strong>{" "}
                              and external loan system API integration —
                              deployed across <strong>150+ branches</strong>;
                              reads live loan records, displays as cards,
                              enables photo and metadata upload per record.
                            </span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <span className="text-[#c0392b] shrink-0">►</span>
                            <span>
                              Directly enabled the AI team's training dataset —
                              combining loan data with collected images{" "}
                              <strong>
                                accelerated dataset preparation by 60%
                              </strong>{" "}
                              and improved field operational efficiency by{" "}
                              <strong>30%</strong>.
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-[#0e121a] border border-[#1b2333] p-4 rounded-xl space-y-2">
                        <div className="text-[11px] font-bold text-[#fbbf24]">
                          // Jewellery Metadata Collection App
                        </div>
                        <ul className="list-none space-y-1.5 pl-2 text-xs text-[#cbd5e1]">
                          <li className="flex items-start gap-1.5">
                            <span className="text-[#c0392b] shrink-0">►</span>
                            <span>
                              Flutter app for on-ground data collection at gold
                              jewellery shops — field agents capture metadata
                              and photos on the spot, enabling structured
                              collection of <strong>1,000+ records</strong> for
                              AI model training.
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-[#0e121a] border border-[#1b2333] p-4 rounded-xl space-y-2">
                        <div className="text-[11px] font-bold text-[#a78bfa]">
                          // Gold Valuation Platform (POC)
                        </div>
                        <ul className="list-none space-y-1.5 pl-2 text-xs text-[#cbd5e1]">
                          <li className="flex items-start gap-1.5">
                            <span className="text-[#c0392b] shrink-0">►</span>
                            <span>
                              Architected a highly responsive frontend
                              integrating automated AI pricing services via
                              secure REST APIs to deliver live, low-latency gold
                              valuations.
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-[#0e121a] border border-[#1b2333] p-4 rounded-xl space-y-2">
                        <div className="text-[11px] font-bold text-[#f472b6]">
                          // Guest &amp; Visitor Management Portal
                        </div>
                        <ul className="list-none space-y-1.5 pl-2 text-xs text-[#cbd5e1]">
                          <li className="flex items-start gap-1.5">
                            <span className="text-[#c0392b] shrink-0">►</span>
                            <span>
                              Built the <strong>Flutter mobile app</strong> for
                              visitor check-in and the{" "}
                              <strong>admin web portal</strong> in HTML, CSS and
                              JavaScript — owned full frontend and REST API
                              integration.
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-[#0e121a] border border-[#1b2333] p-4 rounded-xl space-y-2">
                        <div className="text-[11px] font-bold text-[#22c55e]">
                          // Rack PDU Private Cloud Dashboard
                        </div>
                        <ul className="list-none space-y-1.5 pl-2 text-xs text-[#cbd5e1]">
                          <li className="flex items-start gap-1.5">
                            <span className="text-[#c0392b] shrink-0">►</span>
                            <span>
                              Real-time dashboard in{" "}
                              <strong>React.js and Node.js</strong> using SNMP
                              protocol — monitors all private cloud PDUs with
                              power consumption, PF tracking and outlet on/off
                              control from a single interface.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* SKILLS BLOCK */}
                {activeFile === "skills.json" && (
                  <div className="space-y-6">
                    <div className="border-b border-[#1b2333] pb-4">
                      <div className="text-[#566275] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                        <Cpu size={11} className="text-[#38bdf8]" /> skills
                      </div>
                      <h3 className="text-lg font-bold text-white tracking-tight mt-1">
                        Technical Stack
                      </h3>
                    </div>

                    <div className="bg-[#0e121a] border border-[#1b2333] p-5 rounded-xl font-mono text-xs space-y-4 text-[#cbd5e1]">
                      <div>
                        <span className="text-[#38bdf8] font-bold block mb-1.5">
                          &#123; "Frontend":
                        </span>
                        <p className="pl-4 text-white">
                          ["JavaScript (ES6+)", "React.js", "Next.js",
                          "TypeScript", "HTML5", "CSS3", "Bootstrap", "Tailwind
                          CSS", "Chart.js", "jQuery", "Movable.js"]
                        </p>
                      </div>
                      <div>
                        <span className="text-[#4ade80] font-bold block mb-1.5">
                          &#123; "Mobile":
                        </span>
                        <p className="pl-4 text-white">["Flutter", "Dart"]</p>
                      </div>
                      <div>
                        <span className="text-[#fbbf24] font-bold block mb-1.5">
                          &#123; "Backend_and_Data":
                        </span>
                        <p className="pl-4 text-white">
                          ["Node.js", "Express.js", "REST APIs", "MariaDB",
                          "MongoDB", "MySQL", "SNMP Protocol"]
                        </p>
                      </div>
                      <div>
                        <span className="text-[#a78bfa] font-bold block mb-1.5">
                          &#123; "Tools":
                        </span>
                        <p className="pl-4 text-white">
                          ["Git", "GitHub", "Figma", "Postman", "Chrome
                          DevTools", "VS Code", "Linux", "Vercel", "Nginx"]
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* PROJECTS BLOCK */}
                {activeFile === "projects.md" && (
                  <div className="space-y-6">
                    <div className="border-b border-[#1b2333] pb-4">
                      <div className="text-[#566275] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                        <Code2 size={11} className="text-[#fbbf24]" /> projects
                      </div>
                      <h3 className="text-lg font-bold text-white tracking-tight mt-1">
                        Independent Formations
                      </h3>
                    </div>

                    <div className="space-y-4 text-xs md:text-sm text-[#cbd5e1] leading-relaxed">
                      <div className="bg-[#0e121a] border border-[#1b2333] p-4 rounded-xl space-y-2">
                        <div className="flex justify-between items-center flex-wrap gap-2">
                          <div className="text-white font-bold text-sm">
                            AI Resume Reviewer
                          </div>
                        </div>
                        <p className="text-[11px] text-[#38bdf8]">
                          React.js, Gemini API, Tailwind CSS
                        </p>
                        <ul className="list-none pl-1 text-xs text-[#cbd5e1] mt-1">
                          <li className="flex items-start gap-1.5">
                            <span className="text-[#c0392b] shrink-0">►</span>
                            <span>
                              Paste a JD and resume --- get instant AI feedback
                              via Gemini API. Built to sharpen React async
                              patterns and API integration.
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-[#0e121a] border border-[#1b2333] p-4 rounded-xl space-y-2">
                        <div className="flex justify-between items-center flex-wrap gap-2">
                          <div className="text-white font-bold text-sm">
                            Dev Portfolio Grader
                          </div>
                        </div>
                        <p className="text-[11px] text-[#38bdf8]">
                          React.js, Gemini API, Tailwind CSS
                        </p>
                        <ul className="list-none pl-1 text-xs text-[#cbd5e1] mt-1">
                          <li className="flex items-start gap-1.5">
                            <span className="text-[#c0392b] shrink-0">►</span>
                            <span>
                              Paste any portfolio URL and get an AI-generated
                              score with actionable improvement tips --- useful
                              for developers and relevant to recruiters.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* EDUCATION BLOCK */}
                {activeFile === "education.txt" && (
                  <div className="space-y-6">
                    <div className="border-b border-[#1b2333] pb-4">
                      <div className="text-[#566275] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                        <GraduationCap size={11} className="text-[#a78bfa]" />{" "}
                        education
                      </div>
                      <h3 className="text-lg font-bold text-white tracking-tight mt-1">
                        Credentials
                      </h3>
                    </div>

                    <div className="bg-[#0e121a] border border-[#1b2333] p-5 rounded-xl space-y-2">
                      <div className="flex justify-between flex-wrap gap-1 text-white font-bold">
                        <span>B.Tech — Computer Science &amp; Engineering</span>
                        <span className="text-[#cbd5e1] text-[11px] font-normal">
                          2020–2024
                        </span>
                      </div>
                      <p className="text-[#38bdf8] text-xs">Jain University</p>
                      <p className="text-[#4ade80] text-xs font-bold mt-1">
                        CGPA: 8.7 / 10
                      </p>
                    </div>
                  </div>
                )}

                {/* CERTIFICATIONS & LEADERSHIP BLOCK */}
                {activeFile === "certifications_leadership.txt" && (
                  <div className="space-y-6">
                    <div className="border-b border-[#1b2333] pb-4">
                      <div className="text-[#566275] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                        <Award size={11} className="text-[#f472b6]" />{" "}
                        certifications_and_leadership
                      </div>
                      <h3 className="text-lg font-bold text-white tracking-tight mt-1">
                        Activities &amp; Honors
                      </h3>
                    </div>

                    <div className="bg-[#0e121a] border border-[#1b2333] p-5 rounded-xl space-y-4 text-xs text-[#cbd5e1] leading-relaxed">
                      <div className="flex items-start gap-2">
                        <span className="text-[#c0392b] shrink-0 mt-0.5">
                          ►
                        </span>
                        <p>
                          <strong className="text-white">
                            Introduction to Frontend Development
                          </strong>{" "}
                          — Meta &nbsp;·&nbsp;{" "}
                          <strong className="text-white">
                            AJAX for Web Developers
                          </strong>{" "}
                          — Coursera
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#c0392b] shrink-0 mt-0.5">
                          ►
                        </span>
                        <p>
                          <strong className="text-white">
                            President, AppinTech Club
                          </strong>{" "}
                          — Organised workshops and hackathons for 100+ students
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#c0392b] shrink-0 mt-0.5">
                          ►
                        </span>
                        <p>
                          <strong className="text-white">
                            Student Placement Coordinator
                          </strong>{" "}
                          — Guided peers in career preparation and interview
                          readiness
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#c0392b] shrink-0 mt-0.5">
                          ►
                        </span>
                        <p>
                          <strong className="text-white">
                            National President's Intern, JCI India
                          </strong>{" "}
                          — Awarded Most Outstanding Intern at national level
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* LOWER STATUS FOOTER STRIP */}
            <div className="mt-12 pt-4 border-t border-[#1b2333] flex justify-between items-center text-[10px] text-[#445163] tracking-wider uppercase font-mono">
              <span>mode: interactive_view</span>
              <span>
                lines: {activeFile === "work_experience.md" ? "42" : "16"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER METADATA */}
      <div className="max-w-6xl mx-auto mt-4 px-2 flex justify-between items-center text-[10px] text-[#445163] tracking-widest uppercase font-mono">
        <p>Aayushi Bhansali &bull; Deployment Specification Complete</p>
        <p>2026 Core</p>
      </div>
    </div>
  );
}

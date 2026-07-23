import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
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

  const files = [
    { id: "summary.md", label: "summary.md" },
    { id: "work_experience.md", label: "work_experience.md" },
    { id: "skills.json", label: "skills.json" },
    { id: "projects.md", label: "projects.md" },
    { id: "education.txt", label: "education.txt" },
    {
      id: "certifications_leadership.txt",
      label: "certifications_leadership.txt",
    },
  ];

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
    <div className="min-h-screen bg-[#090b10] text-[#a9b2c3] font-mono text-xs p-2 sm:p-4 md:p-8 relative selection:bg-[#233549] selection:text-[#38bdf8]">
      {/* BACKGROUND VECTOR GLOWS (DESKTOP ONLY FOR SPEED) */}
      <div className="hidden md:block absolute top-0 right-1/3 w-[600px] h-[300px] bg-[#38bdf8]/3 rounded-full blur-[140px] pointer-events-none" />
      <div className="hidden md:block absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-[#4ade80]/2 rounded-full blur-[120px] pointer-events-none" />

      {/* GLOBAL CORE INTERFACE FRAME */}
      <div className="max-w-6xl mx-auto border border-[#1b2333] bg-[#0c0f16] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl flex flex-col">
        {/* WINDOW SYSTEM HEADER */}
        <header className="bg-[#10141f] border-b border-[#1b2333] px-3 md:px-5 py-3 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3 md:gap-6">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-[#ef4444]/40 border border-[#ef4444]/60" />
              <div className="h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-[#eab308]/40 border border-[#eab308]/60" />
              <div className="h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-[#22c55e]/40 border border-[#22c55e]/60" />
            </div>
            <span className="text-[#566275] text-[10px] md:text-[11px] tracking-wider font-semibold truncate">
              WORKSPACE // aayushi-portfolio
            </span>
          </div>
          <div className="flex items-center gap-1 bg-[#090b10] border border-[#1b2333] px-2 py-0.5 md:py-1 rounded text-[#38bdf8] text-[9px] md:text-[10px]">
            <Binary size={10} />
            <span>STABLE_BUILD</span>
          </div>
        </header>

        {/* MOBILE SWIPABLE TAB BAR */}
        <div className="lg:hidden bg-[#0a0d14] border-b border-[#1b2333] px-2 py-2 overflow-x-auto flex gap-1.5 scrollbar-none">
          {files.map((file) => {
            const isSelected = activeFile === file.id;
            return (
              <button
                key={file.id}
                onClick={() => triggerLog(file.id)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-md text-[11px] border transition-all ${
                  isSelected
                    ? "bg-[#1b2436] border-[#38bdf8] text-white font-bold"
                    : "bg-[#0e121a] border-[#1b2333] text-[#63738a]"
                }`}
              >
                {file.label}
              </button>
            );
          })}
        </div>

        {/* ASYMMETRIC SYSTEM SPLIT */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
          {/* ========================================================= */}
          {/* LEFT COMMAND CONSOLE PANEL (DESKTOP ONLY 5 COLS)           */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-[#1b2333] p-4 md:p-5 flex flex-col justify-between bg-[#0e121a]">
            <div className="space-y-4 md:space-y-6">
              {/* BRAND NODE & DIRECT CONTACT DATA */}
              <div>
                <h2 className="text-lg md:text-xl font-bold text-white tracking-tight">
                  Aayushi Bhansali
                </h2>
                <p className="text-[#38bdf8] text-[11px] mt-0.5 font-bold">
                  Frontend Engineer
                </p>
                <div className="text-[10px] text-[#566275] mt-1">
                  React.js · Next.js · Flutter · TypeScript
                </div>

                <div className="mt-3 md:mt-4 grid grid-cols-1 gap-1.5 text-[#63738a] text-[10px] md:text-[11px] bg-[#090b10] border border-[#1b2333] p-2.5 md:p-3 rounded-xl">
                  <div className="flex items-center gap-2 truncate">
                    <Mail size={12} className="text-[#4ade80] shrink-0" />{" "}
                    aayushibhansali1412@gmail.com
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={12} className="text-[#4ade80] shrink-0" />{" "}
                    9604310110
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={12} className="text-[#4ade80] shrink-0" />{" "}
                    Bengaluru
                  </div>
                  <div className="flex items-center gap-4 pt-1 mt-1 border-t border-[#1b2333] text-[10px]">
                    <a
                      href="https://linkedin.com/in/aayushi-bhansali"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white flex items-center gap-1 text-[#38bdf8]"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/aayushibhansali"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white flex items-center gap-1 text-[#38bdf8]"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* LIVE CONSOLE LOG LOGGER (DESKTOP/TABLET) */}
              <div className="hidden sm:block bg-[#090b10] border border-[#1b2333] p-3 rounded-xl space-y-1 text-[10px] md:text-[11px] text-[#566275]">
                {terminalLogs.map((log, index) => (
                  <div key={index} className="flex items-start gap-1 truncate">
                    <span className="text-[#4ade80] shrink-0">&gt;</span>
                    <span>{log}</span>
                  </div>
                ))}
              </div>

              {/* DESKTOP NAVIGATION TREE */}
              <div className="hidden lg:block space-y-2">
                <p className="text-[10px] font-bold text-[#eab308] tracking-wider uppercase flex items-center gap-1">
                  <FolderGit2 size={12} /> SYSTEM DIRECTORIES
                </p>
                <div className="space-y-1 pl-1">
                  {files.map((file) => {
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
            <div className="pt-3 md:pt-4 mt-3 border-t border-[#1b2333]">
              <button
                onClick={copyEmail}
                className="w-full bg-[#1b2436] hover:bg-[#233047] text-white border border-[#2c3d59] py-2 md:py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 active:scale-[0.98] font-bold text-[11px]"
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
          {/* RIGHT CANVAS FILE INSPECTOR (7 COLUMNS)                    */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 p-4 sm:p-6 md:p-8 flex flex-col justify-between bg-[#0c0f16]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFile}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="space-y-5"
              >
                {/* SUMMARY BLOCK */}
                {activeFile === "summary.md" && (
                  <div className="space-y-4">
                    <div className="border-b border-[#1b2333] pb-3">
                      <div className="text-[#566275] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                        <FolderOpen size={11} className="text-[#eab308]" />{" "}
                        professional_summary
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-white tracking-tight mt-1">
                        Overview
                      </h3>
                    </div>
                    <p className="text-xs md:text-sm text-[#cbd5e1] leading-relaxed bg-[#0e121a] border border-[#1b2333] p-3.5 md:p-4 rounded-xl">
                      Hi, I'm Aayushi — a frontend engineer based in Bangalore
                      who got into this field because I loved the instant
                      feedback. Write code, see something beautiful appear. Two
                      years later I'm still chasing that feeling. I work
                      primarily in React.js, Next.js and Flutter, and I care
                      deeply about the details most people skip — the hover
                      state, the loading skeleton, the empty state message that
                      makes a user feel understood instead of abandoned. I
                      believe great UI is never an accident. It's craft. In the
                      last 2 years I've shipped interfaces that real teams
                      depend on — a no-code analytics dashboard used daily by
                      30+ teams and C-suite, a full-stack Flutter app deployed
                      across 150+ branches, real-time monitoring systems, and
                      internal tools that replaced manual processes entirely.
                      I've worked across the stack when needed, but frontend is
                      where I do my best work. I turn complex things into
                      simple, beautiful interfaces. I sweat the details that
                      make the difference between a product people tolerate and
                      one they actually enjoy using.
                    </p>
                  </div>
                )}

                {/* WORK EXPERIENCE BLOCK */}
                {activeFile === "work_experience.md" && (
                  <div className="space-y-4 md:space-y-6">
                    <div className="border-b border-[#1b2333] pb-3">
                      <div className="text-[#566275] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                        <FolderOpen size={11} className="text-[#eab308]" />{" "}
                        work_experience
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-white tracking-tight mt-1">
                        L&amp;T Finance
                      </h3>
                      <div className="flex justify-between items-center text-xs text-[#38bdf8] mt-0.5">
                        <span className="font-bold">Product Engineer</span>
                        <span className="bg-[#161c26] px-2 py-0.5 rounded border border-[#232b3c] text-white text-[9px] md:text-[10px]">
                          July 2024 – Present
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3 text-xs text-[#cbd5e1] leading-relaxed">
                      <div className="bg-[#0e121a] border border-[#1b2333] p-3.5 rounded-xl space-y-1.5">
                        <div className="text-[11px] font-bold text-[#4ade80]">
                          // GCP Billing &amp; Analytics Dashboard
                        </div>
                        <p className="text-[11px] text-[#a9b2c3]">
                          Built a <strong>no-code analytics platform</strong> in
                          JavaScript, Chart.js, and Bootstrap. Users query GCP
                          billing data via a dropdown SQL builder. Adopted by{" "}
                          <strong>30+ dev teams &amp; C-suite</strong>.
                        </p>
                      </div>

                      <div className="bg-[#0e121a] border border-[#1b2333] p-3.5 rounded-xl space-y-1.5">
                        <div className="text-[11px] font-bold text-[#38bdf8]">
                          // Flutter Field Data Collection App
                        </div>
                        <p className="text-[11px] text-[#a9b2c3]">
                          Full-stack Flutter/Node.js app deployed across{" "}
                          <strong>150+ branches</strong>. Accelerated AI model
                          dataset prep by <strong>60%</strong>.
                        </p>
                      </div>

                      <div className="bg-[#0e121a] border border-[#1b2333] p-3.5 rounded-xl space-y-1.5">
                        <div className="text-[11px] font-bold text-[#22c55e]">
                          // Rack PDU Cloud Dashboard
                        </div>
                        <p className="text-[11px] text-[#a9b2c3]">
                          Real-time React/Node.js dashboard using SNMP protocol
                          to monitor power consumption and manage cloud outlets.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* SKILLS BLOCK */}
                {activeFile === "skills.json" && (
                  <div className="space-y-4">
                    <div className="border-b border-[#1b2333] pb-3">
                      <div className="text-[#566275] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                        <Cpu size={11} className="text-[#38bdf8]" /> skills
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-white tracking-tight mt-1">
                        Technical Stack
                      </h3>
                    </div>

                    <div className="bg-[#0e121a] border border-[#1b2333] p-4 rounded-xl font-mono text-[11px] space-y-3 text-[#cbd5e1]">
                      <div>
                        <span className="text-[#38bdf8] font-bold block mb-1">
                          &#123; "Frontend":
                        </span>
                        <p className="pl-3 text-white">
                          ["JavaScript", "React.js", "Next.js", "TypeScript",
                          "Tailwind CSS"]
                        </p>
                      </div>
                      <div>
                        <span className="text-[#4ade80] font-bold block mb-1">
                          &#123; "Mobile":
                        </span>
                        <p className="pl-3 text-white">["Flutter", "Dart"]</p>
                      </div>
                      <div>
                        <span className="text-[#fbbf24] font-bold block mb-1">
                          &#123; "Backend":
                        </span>
                        <p className="pl-3 text-white">
                          ["Node.js", "REST APIs", "MariaDB", "MongoDB"]
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* PROJECTS BLOCK */}
                {activeFile === "projects.md" && (
                  <div className="space-y-4">
                    <div className="border-b border-[#1b2333] pb-3">
                      <div className="text-[#566275] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                        <Code2 size={11} className="text-[#fbbf24]" /> projects
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-white tracking-tight mt-1">
                        Formations
                      </h3>
                    </div>

                    <div className="space-y-3 text-xs text-[#cbd5e1]">
                      <div className="bg-[#0e121a] border border-[#1b2333] p-3.5 rounded-xl space-y-1">
                        <div className="text-white font-bold text-xs">
                          AI Resume Reviewer
                        </div>
                        <p className="text-[10px] text-[#38bdf8]">
                          React.js, Gemini API, Tailwind
                        </p>
                        <p className="text-[11px] text-[#a9b2c3] mt-1">
                          Paste JD and resume to get automated feedback via
                          Gemini API.
                        </p>
                      </div>

                      <div className="bg-[#0e121a] border border-[#1b2333] p-3.5 rounded-xl space-y-1">
                        <div className="text-white font-bold text-xs">
                          Dev Portfolio Grader
                        </div>
                        <p className="text-[10px] text-[#38bdf8]">
                          React.js, Gemini API, Tailwind
                        </p>
                        <p className="text-[11px] text-[#a9b2c3] mt-1">
                          Paste any dev URL to get AI-generated score &amp;
                          recommendations.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* EDUCATION BLOCK */}
                {activeFile === "education.txt" && (
                  <div className="space-y-4">
                    <div className="border-b border-[#1b2333] pb-3">
                      <div className="text-[#566275] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                        <GraduationCap size={11} className="text-[#a78bfa]" />{" "}
                        education
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-white tracking-tight mt-1">
                        Credentials
                      </h3>
                    </div>

                    <div className="bg-[#0e121a] border border-[#1b2333] p-4 rounded-xl space-y-1.5">
                      <div className="flex justify-between items-center text-white font-bold text-xs">
                        <span>B.Tech — CSE</span>
                        <span className="text-[#cbd5e1] text-[10px] font-normal">
                          2020–2024
                        </span>
                      </div>
                      <p className="text-[#38bdf8] text-xs">Jain University</p>
                      <p className="text-[#4ade80] text-xs font-bold">
                        CGPA: 8.7 / 10
                      </p>
                    </div>
                  </div>
                )}

                {/* CERTIFICATIONS BLOCK */}
                {activeFile === "certifications_leadership.txt" && (
                  <div className="space-y-4">
                    <div className="border-b border-[#1b2333] pb-3">
                      <div className="text-[#566275] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                        <Award size={11} className="text-[#f472b6]" /> honors
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-white tracking-tight mt-1">
                        Leadership &amp; Certs
                      </h3>
                    </div>

                    <div className="bg-[#0e121a] border border-[#1b2333] p-4 rounded-xl space-y-2 text-xs text-[#cbd5e1]">
                      <p>
                        •{" "}
                        <strong className="text-white">
                          President, AppinTech Club
                        </strong>{" "}
                        (100+ students)
                      </p>
                      <p>
                        •{" "}
                        <strong className="text-white">
                          Meta Frontend Dev Certificate
                        </strong>
                      </p>
                      <p>
                        •{" "}
                        <strong className="text-white">
                          National President's Intern
                        </strong>{" "}
                        (JCI India)
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* LOWER STATUS FOOTER STRIP */}
            <div className="mt-8 pt-3 border-t border-[#1b2333] flex justify-between items-center text-[9px] md:text-[10px] text-[#445163] tracking-wider uppercase font-mono">
              <span>mode: responsive_view</span>
              <span>file: {activeFile}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

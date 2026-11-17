import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Brain,
  CheckCircle2,
  ChevronRight,
  Code2,
  Cpu,
  Database,
  Layers,
  Play,
  RotateCcw,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import { agenticAiFeatures } from "../data/portfolioData";

const agentWorkflows = [
  {
    id: "tool-calling",
    title: "Autonomous Tool Calling",
    userPrompt: "Process order #ORD-9821 with discount and notify customer via production API.",
    steps: [
      {
        stage: "Perception & Intent Analysis",
        detail: "Agent analyzes input parameters: orderId='ORD-9821', action='applyDiscount', channel='notificationChannel'.",
        status: "complete",
      },
      {
        stage: "Function Tool Execution",
        detail: "Agent dynamically selects and calls function tool: `orderFulfillmentService.processOrder(payload)`.",
        status: "complete",
      },
      {
        stage: "Database & Security Verification",
        detail: "Executed transactional validation with authenticated security token verification.",
        status: "complete",
      },
      {
        stage: "Agent Response Synthesis",
        detail: "Order ORD-9821 processed successfully. Discount of 15% applied. Customer notification dispatched.",
        status: "success",
      },
    ],
  },
  {
    id: "rag-knowledge",
    title: "Enterprise RAG Pipeline",
    userPrompt: "Query clinical patient dosage guidelines from platform docs (Intellpharma platform).",
    steps: [
      {
        stage: "Vector Similarity Search",
        detail: "Generated query embeddings and searched top-k 4 chunks in semantic vector store.",
        status: "complete",
      },
      {
        stage: "Context Filtering & Grounding",
        detail: "Retrieved verified clinical dosage monographs with similarity score > 0.92.",
        status: "complete",
      },
      {
        stage: "LLM Response Generation",
        detail: "Injected grounded context into foundation model prompt with strict clinical guardrails.",
        status: "complete",
      },
      {
        stage: "Grounded Output Delivery",
        detail: "Delivered medically validated dosage schedule with exact citations and zero hallucination.",
        status: "success",
      },
    ],
  },
  {
    id: "multi-agent",
    title: "Multi-Agent System",
    userPrompt: "Analyze telemetry log spikes, isolate root cause, and draft bug fix ticket.",
    steps: [
      {
        stage: "Telemetry Monitor Agent",
        detail: "Detected 400ms latency spike in database connection pool at 11:42 UTC.",
        status: "complete",
      },
      {
        stage: "Diagnosis Agent",
        detail: "Correlated spike to unindexed query in transaction history repository.",
        status: "complete",
      },
      {
        stage: "Remediation Agent",
        detail: "Generated migration script for composite index on (user_id, created_at).",
        status: "complete",
      },
      {
        stage: "Automated Ticket Created",
        detail: "Drafted issue ticket with repro steps, query explain plan, and SQL migration patch.",
        status: "success",
      },
    ],
  },
];

const AgenticAiSection = () => {
  const [selectedWorkflow, setSelectedWorkflow] = useState(agentWorkflows[0]);
  const [activeStepIndex, setActiveStepIndex] = useState(3);
  const [isSimulating, setIsSimulating] = useState(false);

  const runSimulation = () => {
    setIsSimulating(true);
    setActiveStepIndex(0);

    const stepInterval = setInterval(() => {
      setActiveStepIndex((prev) => {
        if (prev < selectedWorkflow.steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(stepInterval);
          setIsSimulating(false);
          return prev;
        }
      });
    }, 800);
  };

  return (
    <section id="agentic-ai" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Bot className="w-3.5 h-3.5" />
            <span>Autonomous Intelligence &amp; Multi-Agent Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Agentic AI &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">Autonomous Intelligence</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Pioneering autonomous multi-agent reasoning, dynamic function tool calling, and enterprise Retrieval-Augmented Generation (RAG).
          </p>
        </div>

        {/* 3 Core Architecture Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {agenticAiFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs hover:border-purple-500/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/40">
                    {feature.badge}
                  </span>
                  <Sparkles className="w-4 h-4 text-purple-500" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Code snippet preview */}
              <div className="mt-4 p-3 rounded-xl bg-slate-950 font-mono text-[11px] text-cyan-300 overflow-x-auto border border-slate-800">
                <pre>{feature.codeSnippet}</pre>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Autonomous Agent Live Simulation Console */}
        <div className="rounded-2xl border border-slate-200 dark:border-purple-500/30 bg-white/95 dark:bg-slate-900/90 shadow-xl overflow-hidden backdrop-blur-md">
          {/* Console Header */}
          <div className="px-5 py-3.5 bg-slate-900 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-white">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="font-mono text-xs font-semibold text-slate-200 ml-2 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>Agentic AI Execution Console</span>
              </span>
            </div>

            {/* Workflow Selector Buttons */}
            <div className="flex flex-wrap gap-1.5">
              {agentWorkflows.map((wf) => (
                <button
                  key={wf.id}
                  onClick={() => {
                    setSelectedWorkflow(wf);
                    setActiveStepIndex(wf.steps.length - 1);
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                    selectedWorkflow.id === wf.id
                      ? "bg-purple-600 text-white font-semibold shadow-xs"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  {wf.title}
                </button>
              ))}
            </div>
          </div>

          {/* Console Body */}
          <div className="p-6 space-y-6">
            {/* User prompt box */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-purple-50/70 dark:bg-purple-950/20 border border-purple-200/80 dark:border-purple-800/40">
              <div className="p-2 rounded-lg bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300 shrink-0">
                <Bot className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-800 dark:text-purple-300 block">
                  Simulated User Goal / Request
                </span>
                <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                  "{selectedWorkflow.userPrompt}"
                </p>
              </div>
            </div>

            {/* Step-by-step Execution Progress */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                <span className="font-semibold uppercase tracking-wider">
                  Autonomous Reasoning &amp; Execution Steps
                </span>
                <button
                  onClick={runSimulation}
                  disabled={isSimulating}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-500/15 dark:text-purple-300 dark:hover:bg-purple-500/25 text-xs font-semibold transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSimulating ? (
                    <>
                      <RotateCcw className="w-3.5 h-3.5 animate-spin" />
                      <span>Simulating Steps...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5" />
                      <span>Run Agent Step Simulation</span>
                    </>
                  )}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedWorkflow.steps.map((step, sIdx) => {
                  const isReached = sIdx <= activeStepIndex;
                  const isCurrent = sIdx === activeStepIndex;

                  return (
                    <motion.div
                      key={sIdx}
                      initial={false}
                      animate={{
                        opacity: isReached ? 1 : 0.45,
                        scale: isCurrent && isSimulating ? 1.02 : 1,
                      }}
                      className={`p-4 rounded-xl border transition-all ${
                        isCurrent
                          ? "border-purple-500 bg-purple-50/60 dark:bg-purple-950/20 shadow-xs"
                          : isReached
                          ? "border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/60"
                          : "border-slate-100 dark:border-slate-800/40 bg-slate-50/40 dark:bg-slate-950/40"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        {step.status === "success" && isReached ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        ) : isReached ? (
                          <div className="w-4 h-4 rounded-full bg-cyan-600 dark:bg-cyan-500 text-white text-[10px] flex items-center justify-center font-bold">
                            {sIdx + 1}
                          </div>
                        ) : (
                          <div className="w-4 h-4 rounded-full border border-slate-300 dark:border-slate-700 text-[10px] flex items-center justify-center text-slate-400">
                            {sIdx + 1}
                          </div>
                        )}
                        <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                          {step.stage}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-6">
                        {step.detail}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgenticAiSection;

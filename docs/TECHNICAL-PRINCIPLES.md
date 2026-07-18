# Technical Principles

## Purpose

Prototype.NEXT must be technically credible enough to build consequential AI systems in production.

These principles apply to internal projects, demos intended to represent company capability, and client delivery.

## 1. Business outcome first

Every system should have explicit success criteria.

Examples:
- reduce handling time;
- increase throughput;
- improve accuracy;
- reduce support volume;
- improve conversion;
- reduce engineering effort.

## 2. Prefer the simplest reliable architecture

Do not use:
- multi-agent systems;
- vector databases;
- elaborate orchestration;
- streaming;
- fine-tuning

unless the problem requires them.

Complexity must earn its cost.

## 3. Model abstraction

Where commercially reasonable, avoid hard-coding the entire product around a single provider.

Abstract:
- model calls;
- configuration;
- prompts/system instructions;
- evaluation;
- tracing.

This should not become abstraction for abstraction's sake.

## 4. Evaluation is mandatory

Production AI must be testable.

Use:
- representative datasets;
- expected outcomes;
- regression suites;
- human review;
- automated metrics;
- task-specific evaluation.

Track quality over time and across model changes.

## 5. Observability

Capture:
- traces;
- model calls;
- tool calls;
- latency;
- errors;
- token usage;
- cost;
- fallback behavior;
- user feedback where appropriate.

## 6. Human-in-the-loop

Human approval should be used when:
- mistakes create meaningful financial risk;
- actions are destructive or difficult to reverse;
- compliance requires oversight;
- model confidence is insufficient;
- customer trust requires review.

## 7. Security and privacy

Consider:
- authentication;
- authorization;
- least privilege;
- tenant isolation;
- PII handling;
- data retention;
- provider policies;
- prompt injection;
- tool permissions;
- auditability.

## 8. Retrieval quality

RAG systems must evaluate:
- chunking;
- indexing;
- retrieval precision;
- retrieval recall;
- permissions;
- grounding;
- freshness;
- citations.

Do not treat “we added a vector database” as evidence that RAG works.

## 9. Cost engineering

Measure:
- cost per task;
- cost per customer;
- model cost;
- retrieval cost;
- infrastructure cost.

Optimize only after quality requirements are understood.

## 10. Reliability

Design for:
- timeouts;
- retries;
- provider failure;
- tool failure;
- malformed output;
- partial completion;
- duplicate actions;
- idempotency;
- fallback behavior.

## 11. Software engineering standards

Preferred defaults:
- TypeScript for web/application systems;
- Python where it has clear AI/data advantages;
- strict typing;
- linting;
- formatting;
- automated tests;
- clear module boundaries;
- documented environment configuration;
- reproducible builds;
- CI;
- code review.

## 12. Web stack direction

Current preferred direction for the Prototype.NEXT site:
- Next.js;
- React;
- TypeScript;
- Tailwind CSS;
- Yarn;
- Vercel;
- MDX or suitable CMS for case studies;
- analytics appropriate to business needs.

Exact versions should be selected based on the repository at implementation time.

## 13. Documentation

Important architectural and business decisions belong in the repository.

Use:
- `AGENTS.md` for agent operating instructions;
- `/docs` for business/product/technical source of truth;
- ADRs for major architecture decisions when needed.

Documentation should make onboarding both engineers and AI coding agents easier.

## 14. AI-assisted engineering

Codex, Claude Code, and other coding agents are tools, not decision owners.

Agents should:
- read repository instructions;
- explain material assumptions;
- keep changes scoped;
- run tests;
- avoid silent strategic changes;
- preserve maintainability.

Human engineering judgment remains responsible for production decisions.

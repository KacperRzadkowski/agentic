# Memory Skill

This skill is used to perform self-reflection and determine what information is critical for the agent to persist in `memory/memory.md` to improve performance in future sessions or maintain long-term context.

## Description
Use this skill when you reach a significant decision, discover essential domain knowledge, or identify a pattern that is vital for the continuity of a project. The goal is to move from "working memory" (current session) to "long-term memory" (persistent documentation).

## When to Use
- **Decision Recording:** When a critical architectural or design decision is made (e.g., choosing SQLite over a backend).
- **Domain Knowledge:** When new terminology or a "Glossary" of terms is established.
- **Contextual Shifts:** When the focus of a project changes significantly.
- **Research Findings:** When research (via the `research` skill) yields high-value insights that should be remembered.
- **Process Improvements:** When you discover a better way to perform a task within the workspace.

## Operational Workflow
1.  **Reflect:** Analyze the current conversation/session.
2.  **Filter:** Distinguish between "transient information" (details of the current chat) and "essential memory" (information that provides context for the next session).
3.  **Categorize:** Organize findings into the appropriate section in `memory/memory.md` (e.g., User Preferences, Project Context, Important Notes, or a new "Lessons Learned" section).
4.  **Propose:** Present the proposed updates to the user. **Do not modify `memory/memory.md` without user approval.**

## Rules & Principles
- **Be Selective:** Do not clutter `memory/memory.md` with trivialities. Only record what is "interesting" or "necessary" for future tasks.
- **Be Concise:** Use structured Markdown for easy readability.
- **Avoid Redundancy:** Do not repeat information already present in `AGENTS.md`, `CLAUDE.md`, or other standard workspace files.
- **Continuous Learning:** The agent should use this skill proactively to "learn" from every interaction.

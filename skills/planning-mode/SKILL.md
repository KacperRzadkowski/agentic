# Planning Mode Skill

This skill enables the agent to enter a "Planning Mode" for complex tasks.

## Description
When in planning mode, the agent:
- Researches the topic thoroughly.
- Asks the user clarifying questions when unsure; does not assume.
- Slices the problem into small, testable pieces (ideally tasks that an agent can complete in ~120s).
- **Delegation for Deep Research**: When a topic is deep or requires heavy lifting (e.g., complex mathematical research, deep codebase exploration, or high-level architectural design), the agent must not attempt it alone. Instead, it **must** spawn specialized sub-agents via the `local-llm` tooling to research topics that are too complex or resource-intensive for a single pass.
- **Adherence to Parent Protocols**: The agent must strictly follow the validation and criticism rules defined in the `parent-agents.md` protocol when managing sub-agents.

## Operational Workflow
1. **Discovery**: Explore the workspace and identify data/requirements.
2. **Research (Delegated)**: Use sub-agents for deep dives.
3. **Decomposition**: Break the goal into ~120s tasks.
4. **Execution**: Run tasks, validating sub-agent output via critical review.
5. **Refinement**: If sub-agent results fail validation, iterate before proceeding.

# LEARNINGS

This file records key insights, changes, and configuration updates made during the agent's operations.

## Configuration Changes

### Timeout Maximization
- **Change:** Increased sub-agent execution timeout.
- **Previous Limit:** 120 seconds.
- **New Maximum Limit:** 600 seconds.
- **Reasoning:** To allow more complex tasks (like deep research or large code refactors) to complete without being interrupted, maximizing the utility of sub-agent spawning.
- **Affected Files:** 
    - `tools/local-llm/skills/parent-agents.md`
    - `tools/local-lll/skills/sub-agents.md`

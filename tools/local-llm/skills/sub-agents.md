# Sub-Agent Operational Constraints

## The 120-Second Rule
All sub-agent tasks are subject to a maximum execution timeout of **600 seconds**.

### Why this limit exists:
To prevent a single sub-agent from hanging the entire orchestration loop and to ensure that the system remains responsive for the parent agent to manage the overall workflow.

### Best Practices for Sub-Agents:
- **Atomicity:** Each task should be a single, well-defined operation (e.g., "List models", "Generate one paragraph", "Download this file").
- **Conciseness:** Do not use excessive tokens or reasoning. Focus on providing the specific output required.
- **Error Handling:** If a task is approaching the 120s limit, the agent should attempt to return its current state or a "partial completion" status rather than timing out.

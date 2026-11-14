# Parent Agent Protocols

## Core Responsibility
The parent agent is responsible for orchestrating complex workflows by delegating sub-tasks to specialized sub-agents via the `local-llm` tooling.

## Validation & Iterative Improvement
When a parent agent spawns sub-agents, the parent must not simply accept the first response as final. It must act as a **Validator**.

- **Critical Review**: After a sub-agent returns a result, the parent must evaluate it for:
    - **Accuracy**: Is the information correct and verified?
    - **Completeness**: Has the sub-agent addressed all parts of the query?
    - **Relevance**: Is the output directly useful to the parent's current objective?
- **Constructive Criticism**: If the output is insufficient, the parent must provide specific, actionable feedback to the sub-agent and request a revised iteration.
- **Quality Control**: The parent is the final arbiter of quality. A task is only "complete" when the parent is satisfied with the sub-agent's output or has exhausted reasonable iterative improvements.

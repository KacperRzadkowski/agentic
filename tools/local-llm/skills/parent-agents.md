# Parent Agent Orchestration Guidelines

## Managing Sub-Agent Timeouts
Sub-agents are subject to a maximum **600-second limit** per task. Failure to complete within this window will result in an execution interrupt.

### Task Slicing (Decomposition)
To maximize success rates, parent agents must not assign large, multi-step goals to a single sub-agent call. Instead, they must **slice** the work into a sequence of smaller, atomic sub-tasks.

**Example of Task Slicing:**
- **Bad (Too Large):** "Research the history of the Eiffel Tower and write a 500-word essay about it."
- **Good (Sliced):**
    1. **Task 1 (Research):** "Find and list 5 key dates in the history of the Eiffel Tower."
    2. **Task 2 (Outline):** "Create an outline for an essay based on these 5 dates."
    3. **Task 3 (Write):** "Write the first paragraph of the essay based on this outline: [Outline]."
    4. **Task 4 (Complete):** "Continue writing the essay based on the existing text: [Text]."

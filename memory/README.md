# LM Studio Multi-Machine Sub-Agents

## 📘 Overview

The LM Studio Multi-Machine Sub-Agents project provides a robust, distributed framework for orchestrating Large Language Model (LLM) inference across multiple computing nodes. It enables the deployment of complex, multi-stage AI workflows by segmenting tasks into specialized sub-agent processes running on dedicated machines. This architecture maximizes throughput, scales efficiently, and manages computational load by leveraging multi-machine resources.

## ✨ Features
*   **Distributed Inference:** Executes model inference across physically separate machines, overcoming single-node resource constraints.
*   **Sub-Agent Architecture:** Divides large tasks into smaller, manageable units (Slices), each handled by a dedicated sub-agent process.
*   **Orchestration (MCP):** Supports centralized control plane management for dynamic task routing, load balancing, and state synchronization.
*   **Scalability:** Designed for linear scalability by adding more computing nodes as task complexity increases.
*   **Resource Optimization:** Fine-grained control over resource allocation (CPU, GPU memory) per agent slice.

## 🛠️ Prerequisites
To successfully deploy and test the system, ensure you have the following:

*   **LM Studio Instance:** Fully functional LM Studio installation on each target machine.
*   **Network Connectivity:** Stable, high-throughput network connection between all participating machines (required for multi-machine operation).
*   **Required Dependencies:** Python environment, necessary libraries (`requests`, `asyncio`), and network middleware installed on all nodes.

## 🚀 Installation
Follow these steps to set up the environment:

1.  **Clone Repository:** Clone the latest repository version.
2.  **Setup Environment:** Activate a virtual environment and install dependencies (`pip install -r requirements.txt`).
3.  **Configure Nodes:** On each machine, initialize the LM Studio backend service and configure network endpoints.
4.  **Service Start:** Run the main controller application, pointing it to all configured agent addresses.

## ▶️ Quick Start Guide
For a minimal viable deployment:

1.  Launch LM Studio on Node A (Master) and Node B (Worker).
2.  Set up the communication links using the default ports defined in `config/ports.yaml`.
3.  Execute the sample orchestrator script: `python run_orchestrator.py --nodes all`.

The system will automatically distribute a sample task across the connected resources.

## 🧠 Usage with MCP (Multi-Control Plane)
For production workloads, utilize the Multi-Control Plane (MCP) for sophisticated task management:

*   **Task Submission:** Submit high-level tasks to the MCP endpoint.
*   **Dynamic Routing:** The MCP handles the breakdown of the task into sequential and parallel Slices, routing them to the optimal available sub-agent node.
*   **State Tracking:** Monitors the completion status and error states of individual agent Slices, providing a unified feedback loop.

## ⚙️ Configuration
All behavioral parameters are defined in `config/`. Key configuration files include:

*   `agent_addresses.yaml`: Maps logical agent names to physical network addresses and ports.
*   `model_profiles.yaml`: Defines model parameters (temperature, max tokens, context window) applied to each slice.
*   `slice_protocol.py`: Defines the serialization and protocol used for inter-process communication (IPC) between agents.

## 🧩 Slices Overview
A 'Slice' represents the smallest unit of computational work. When a complex task arrives, the MCP breaks it down into discrete Slices.

*   **Task Decomposition:** Large tasks are logically divided into sequential or parallel Slices.
*   **Execution:** Each Slice is executed independently by a specific sub-agent on an assigned machine.
*   **Aggregation:** Results from multiple Slices are passed back to the MCP for final synthesis and task completion.

## ⚠️ Troubleshooting
| Issue | Potential Cause | Solution |
| :--- | :--- | :--- |
| **High Latency** | Network bottleneck or inefficient task slicing. | Optimize network pathways and ensure Slices are appropriately granular. |
| **Deadlock/Stuck Task** | Improper synchronization between sequential Slices. | Review the `slice_protocol.py` for proper handshaking and timeouts. |
| **Resource Exhaustion** | Memory leaks or excessive queueing on a single node. | Scale horizontally by adding dedicated workers, or vertically by increasing memory limits. |

## 📜 License
This project is licensed under the MIT License. See `LICENSE` for details.

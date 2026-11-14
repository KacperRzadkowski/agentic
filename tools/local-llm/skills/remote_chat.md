# Remote Chat
This skill provides access to the `remote_chat` handler in `llm_tools.py`.

## Description
Sends a chat request to a remote LM Studio server via its OpenAI-compatible API endpoint.

## Usage
Call the `remote_chat(base_url, prompt, model_id, system_prompt=None)` method of the `LLMTools` class.

## Parameters
- `base_url`: The base URL of the remote server (e.g., `http://192.168.1.50:1234`).
- `prompt`: The user prompt.
- `model_id`: The model identifier to use on the remote server.
- `system_prompt`: (Optional) A custom system prompt.

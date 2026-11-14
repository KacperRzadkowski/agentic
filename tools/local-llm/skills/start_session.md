# Start Session
This skill provides access to the `start_session` handler in `llm_tools.py`.

## Description
Starts a new session: ensures server is running, loads a model identified in the prompt (using `model: <model_id>` syntax), and performs the chat.

## Usage
Call the `start_session(prompt)` method of the `LLMTools` class.

## Prompt Syntax
Use `model: <model_id>` anywhere in your prompt to specify which model to load for this session.

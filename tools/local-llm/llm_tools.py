import subprocess
import json
import re

class LLMTools:
    """
    A comprehensive collection of atomic operations for interacting with the LM Studio CLI (lms).
    Each method corresponds to a skill defined in the 'skills/' directory.
    """

    def list_models(self) -> str:
        """
        Lists the models available on disk.
        
        See [skills/list_models.md](skills/list_models.md) for usage details.
        """
        try:
            result = subprocess.run(['lms', 'ls'], capture_output=True, text=True, check=True)
            return result.stdout
        except subprocess.CalledProcessError as e:
            return f"Error listing models: {e.stderr}"
        except Exception as e:
            return f"An unexpected error occurred: {str(e)}"

    def list_loaded_models(self) -> str:
        """
        Lists the models currently loaded in memory.
        
        See [skills/list_loaded_models.md](skills/list_loaded_models.md) for usage details.
        """
        try:
            result = subprocess.run(['lms', 'ps'], capture_output=True, text=True, check=True)
            return result.stdout
        except subprocess.CalledProcessError as e:
            return f"Error listing loaded models: {e.stderr}"
        except Exception as e:
            return f"An unexpected error occurred: {str(e)}"

    def load_model(self, model_id: str) -> str:
        """
        Loads a specified model into memory.
        
        See [skills/load_model.md](skills/load_model.md) for usage details.
        
        Args:
            model_id (str): The identifier of the model to load.
        """
        try:
            result = subprocess.run(['lms', 'load', model_id], capture_output=True, text=True, check=True)
            return f"Successfully loaded {model_id}: {result.stdout}"
        except subprocess.CalledProcessError as e:
            return f"Error loading model {model_id}: {e.stderr}"
        except Exception as e:
            return f"An unexpected error occurred: {str(e)}"

    def unload_model(self, model_id: str) -> str:
        """
        Unloads a specified model from memory.
        
        See [skills/unload_model.md](skills/unload_model.md) for usage details.
        
        Args:
            model_id (str): The identifier of the model to unload.
        """
        try:
            result = subprocess.run(['lms', 'unload', model_id], capture_output=True, text=True, check=True)
            return f"Successfully unloaded {model_id}: {result.stdout}"
        except subprocess.CalledProcessError as e:
            return f"Error unloading model {model_id}: {e.stderr}"
        except Exception as e:
            return f"An unexpected error occurred: {str(e)}"

    def chat(self, prompt: str, model_id: str = None, system_prompt: str = None) -> str:
        """
        Sends a single prompt to a model and returns the response.
        
        See [skills/chat.md](skills/chat.md) for usage details.
        
        Args:
            prompt (str): The prompt to send.
            model_id (str, optional): The model to use. If None, uses the default loaded model.
            system_prompt (str, optional): A custom system prompt.
        """
        cmd = ['lms', 'chat', '--prompt', prompt]
        if model_id:
            cmd.append(model_id)
        if system_prompt:
            cmd.extend(['--system-prompt', system_prompt])
        
        try:
            result = subprocess.run(cmd, capture_output=True, text=True, check=True)
            return result.stdout
        except subprocess.CalledProcessError as e:
            return f"Error during chat: {e.stderr}"
        except Exception as e:
            return f"An unexpected error occurred: {str(e)}"

    def download_model(self, model_id: str) -> str:
        """
        Downloads a model from the Hub.
        
        See [skills/download_model.md](skills/download_model.md) for usage details.
        
        Args:
            model_id (str): The model identifier to download.
        """
        try:
            result = subprocess.run(['lms', 'get', model_id], capture_output=True, text=True, check=True)
            return f"Successfully downloaded {model_id}: {result.stdout}"
        except subprocess.CalledProcessError as e:
            return f"Error downloading model {model_id}: {e.stderr}"
        except Exception as e:
            return f"An unexpected error occurred: {str(e)}"

    def server_start(self) -> str:
        """
        Starts the LM Studio local server.
        
        See [skills/server_start.md](skills/server_start.md) for usage details.
        """
        try:
            result = subprocess.run(['lms', 'server', 'start'], capture_output=True, text=True, check=True)
            return f"Server status: {result.stdout}"
        except subprocess.CalledProcessError as e:
            return f"Error starting server: {e.stderr}"
        except Exception as e:
            return f"An unexpected error occurred: {str(e)}"

    def server_stop(self) -> str:
        """
        Stops the LM Studio local server.
        
        See [skills/server_stop.md](skills/server_stop.md) for usage details.
        """
        try:
            result = subprocess.run(['lms', 'server', 'stop'], capture_output=True, text=True, check=True)
            return f"Server status: {result.stdout}"
        except subprocess.CalledProcessError as e:
            return f"Error stopping server: {e.stderr}"
        except Exception as e:
            return f"An unexpected error occurred: {str(e)}"

    def server_status(self) -> str:
        """
        Checks the status of the LM Studio local server.
        
        See [skills/server_status.md](skills/server_status.md) for usage details.
        """
        try:
            result = subprocess.run(['lms', 'server', 'status'], capture_output=True, text=True, check=True)
            return result.stdout
        except subprocess.CalledProcessError as e:
            return f"Error getting server status: {e.stderr}"
        except Exception as e:
            return f"An unexpected error occurred: {str(e)}"

    # --- High-Level Automated Operations ---

    def start_session(self, prompt: str) -> str:
        """
        Starts a new session: ensures server is running, loads a model identified in the prompt, and performs the chat.
        
        See [skills/start_session.md](skills/start_session.md) for usage details.
        
        Args:
            prompt (str): The prompt. Can contain 'model: <model_id>' to specify the model.
        """
        # 1. Ensure server is running
        self.server_start()
        
        # 2. Parse model from prompt (regex looking for "model: <id>")
        model_match = re.search(r"model:\s*([a-zA-Z0-9_\-\.\/]+)", prompt, re.IGNORECASE)
        model_id = model_match.group(1) if model_match else None
        
        results = []
        if model_id:
            results.append(f"Attempting to load model: {model_id}")
            results.append(self.load_model(model_id))
        else:
            results.append("No model specified in prompt. Using default/already loaded model.")

        # 3. Perform chat
        results.append("Sending prompt...")
        chat_result = self.chat(prompt, model_id=model_id)
        results.append(f"Chat Result:\n{chat_result}")
        
        return "\n".join(results)

    def kill_all(self) -> str:
        """
        Unloads all models and stops the local server.
        
        See [skills/kill_all.md](skills/kill_all.md) for usage details.
        """
        results = ["Initiating kill-all operation..."]
        
        # 1. Unload all loaded models
        loaded_models_text = self.list_loaded_models()
        
        # Simplistic parsing: we'll assume we can find model names in the output.
        # In 'lms ps' output, model names are usually in the first column.
        lines = loaded_models_text.splitlines()
        for line in lines:
            if line.strip() and not line.startswith('MODEL') and not line.startswith('---'):
                parts = line.split()
                if parts:
                    m_id = parts[0]
                    results.append(f"Unloading {m_id}...")
                    results.append(self.unload_model(m_id))

        # 2. Stop server
        results.append("Stopping server...")
        results.append(self.server_stop())
        
        return "\n".join(results)

    def change_model(self, new_model_id: str) -> str:
        """
        Changes the currently loaded model by unloading existing ones and loading the new one.
        
        See [skills/change_model.md](skills/change_model.md) for usage details.
        
        Args:
            new_model_id (str): The identifier of the new model.
        """
        results = [f"Changing model to: {new_model_id}"]
        
        # 1. Unload all models currently loaded
        results.append("Unloading models...")
        ps_output = self.list_loaded_models()
        lines = ps_output.splitlines()
        for line in lines:
            if line.strip() and not line.startswith('MODEL') and not line.startswith('---'):
                parts = line.split()
                if parts:
                    m_id = parts[0]
                    results.append(f"Unloading {m_id}...")
                    results.append(self.unload_model(m_id))

        # 2. Load new model
        results.append(f"Loading {new_model_id}...")
        results.append(self.load_model(new_model_id))
        
        return "\n".join(results)

    def remote_chat(self, base_url: str, prompt: str, model_id: str, system_prompt: str = None) -> str:
        """
        Sends a chat request to a remote LM Studio server.
        
        See [skills/remote_chat.md](skills/remote_chat.md) for usage details.
        
        Args:
            base_url (str): The base URL of the remote server (e.g., http://192.168.1.50:1234).
            prompt (str): The user prompt.
            model_id (str): The model to use.
            system_prompt (str, optional): A custom system prompt.
        """
        import requests
        
        url = f"{base_url.rstrip('/')}/v1/chat/completions"
        payload = {
            "model": model_id,
            "messages": [
                {"role": "system", "content": system_prompt} if system_prompt else None,
                {"role": "user", "content": prompt}
            ],
            "stream": False
        }
        payload["messages"] = [msg for msg in payload["messages"] if msg is not None]
        
        try:
            response = requests.post(url, json=payload, timeout=60)
            response.raise_for_status()
            return response.json()['choices'][0]['message']['content']
        except Exception as e:
            return f"Error communicating with remote server: {str(e)}"

    def poll_remote_result(self, url: str) -> str:
        """
        Polls a URL to check for a completed task or a specific result.
        
        See [skills/poll_remote_result.md](skills/poll_remote_result.md) for usage details.
        
        Args:
            url (str): The URL to poll.
        """
        import requests
        try:
            response = requests.get(url, timeout=10)
            response.raise_for_status()
            return response.text
        except Exception as e:
            return f"Polling failed: {str(e)}"

    def reset_environment(self) -> str:
        """
        Resets the environment: stops server, unloads models, and restarts server.
        
        See [skills/reset_environment.md](skills/reset_environment.md) for usage details.
        """
        results = ["Resetting environment..."]
        results.append(self.kill_all())
        results.append(self.server_start())
        results.append("Environment reset complete.")
        return "\n".join(results)

if __name__ == "__main__":
    # Example usage
    tools = LLMTools()
    print("--- Starting Session ---")
    print(tools.start_session("model: test-model\nHello, how are you?"))

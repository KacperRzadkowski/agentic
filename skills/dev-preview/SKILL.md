# Dev Preview Skill

This skill automates the "Run and Review" cycle for web applications.

## Description
Use this skill when you have just finished a feature or a code change and you want me to:
1. Start the development server (e.g., `npm run dev`).
2. Open the application in the in-app browser for visual verification.
3. Monitor the logs/console for any runtime errors.

## Workflow
1. **Command Execution**: I will run the appropriate start command (e.g., `npm run dev`) in a background shell process.
2. **Browser Opening**: I will use `open_url_in_app_browser` to render the local URL (e.g., `http://localhost:5173`).
3. **Verification**: I will attempt to detect the server is running and then check for any errors in the output or browser console.

## Requirements
- The project must have a valid `package.json` with a `dev` or `start` script.
- The user must be willing to allow the agent to open a side tab in the browser.
- The development server must be running on a standard local port.

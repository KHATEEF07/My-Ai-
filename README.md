# Khateef AI — real chat starter

This version adds a Vercel serverless endpoint for real AI chat. It is still a starter: Code Studio, Image Lab, Video Studio, integrations, and automations remain UI prototypes.

## Deploy on Vercel (required for AI chat)

1. Push these project files to your GitHub repository. Keep `index.html`, `app.js`, `styles.css`, `manifest.webmanifest`, `icon.svg`, `README.md`, and the `api/chat.js` file in the repository root / `api` folder as shown.
2. In Vercel, import the GitHub repository as a new project and deploy it. Vercel serves the static website and runs `api/chat.js` as a serverless function.
3. In the Vercel project, open **Settings → Environment Variables**. Add `OPENAI_API_KEY` with your API key. Optionally add `OPENAI_MODEL` if your API account uses a different model available to it.
4. Redeploy after adding the environment variable.
5. Open the Vercel deployment URL (not the GitHub Pages URL) and test the chat.

## Security and cost

- Never put the API key in `app.js`, `index.html`, GitHub, or any browser-side code.
- This starter endpoint has basic request validation but does not include user login or a persistent rate limiter. Before sharing publicly, add authentication/rate limiting and set spending/usage limits in your API provider account. A public endpoint can otherwise be abused and generate costs.
- API usage may be billed separately from ChatGPT subscriptions.

## Current feature status

- Real AI chat: available after deploying on Vercel and configuring `OPENAI_API_KEY`.
- Code Studio: interface only for now.
- Image Lab and Video Studio: interface only for now.
- Integrations and automations: placeholders.

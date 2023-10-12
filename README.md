# Welcome to the Fastify Enterprise! 🚀

Your one-stop solution for building high-performance, maintainable, and fun apps! 🌟

We've got you covered, so let's conquer the world together! 🌍💪

## 📚 Features

With this template, you get all the awesomeness you need:

- 🏎️ **[Fastify](https://fastify.dev/)** - Fast by default, with config optimized for performance
- ✨ **[ESlint](https://eslint.org/)** and **[Prettier](https://prettier.io/)** - For clean, consistent, and error-free code
- 🛠️ **[Extremely strict TypeScript](https://www.typescriptlang.org/)** - With [`ts-reset`](https://github.com/total-typescript/ts-reset) library for ultimate type safety
- 📝 **[Conventional commits git hook](https://www.conventionalcommits.org/)** - Keep your commit history neat and tidy
- 🎯 **[Absolute imports](https://nextjs.org/docs/advanced-features/module-path-aliases)** - No more spaghetti imports
- ⚕️ **[Health checks](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/)** - Kubernetes-compatible for robust deployments
- 🩹 **[Patch-package](https://pnpm.io/cli/patch)** - Patch your pnpm packages without loosing your mind
- 🚀 **[GitHub Actions](https://github.com/features/actions)** - Pre-configured actions for smooth workflows, including Bundle Size and performance stats
- 🤖🧠 **[Automated ChatGPT Code Reviews](https://openai.com/chatgpt)** - **Stay on the cutting edge with AI-powered code reviews!**

## Table of Contents

- [Fastify Enterprise Boilerplate](#fastify-enterprise)
  - [📚 Features](#-features)
  - [Table of Contents](#table-of-contents)
  - [🎯 Getting Started](#-getting-started)
  - [📃 Scripts Overview](#-scripts-overview)
  - [🤖 ChatGPT Code Review](#-chatgpt-code-review)
  - [📜 License](#-license)
  - [Contributors](#contributors)

## 🎯 Getting Started

To get started with this boilerplate, follow these steps:

1. Fork & clone repository:

```bash
## Don't forget to ⭐ star and fork it first :)
git clone https://github.com/<your_username)/fastify-enterprise.git
```

2. Install the dependencies:

```bash
pnpm install --frozen-lockfile
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

5. This project uses a git hook to enforce [conventional commits](https://github.com/qoomon/git-conventional-commits). To install the git hook, run the following command in the root directory of the project:

```sh
brew install pre-commit
pre-commit install -t commit-msg
```

## 📃 Scripts Overview

The following scripts are available in the `package.json`:

- `dev`: Starts the development server with colorized output
- `build`: Builds the app for production
- `start`: Starts the production server
- `lint`: Lints the code using ESLint
- `lint:fix`: Automatically fixes linting errors
- `prettier`: Checks the code for proper formatting
- `prettier:fix`: Automatically fixes formatting issues
- `format`: Formats the code with Prettier
- `postinstall`: Applies patches to external dependencies
- `preinstall`: Ensures the project is installed with pnpm

## 🤖 ChatGPT Code Review

We've integrated the innovative [ChatGPT Code Review](https://github.com/anc95/ChatGPT-CodeReview) for AI-powered, automated code reviews. This feature provides real-time feedback on your code, helping improve code quality and catch potential issues.

To use ChatGPT Code Review, add an `OPENAI_API_KEY` environment variable with an appropriate key from the OpenAI platform. For setup details, refer to the [Using GitHub Actions](https://github.com/anc95/ChatGPT-CodeReview#using-github-actions) section in the documentation.

![image](https://raw.githubusercontent.com/TeroBaje/fastify-enterprise/main/docs/code-review.png)

## 🤝 Contribution

Contributions are always welcome! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch with a descriptive name.
3. Make your changes, and commit them using the [Conventional Commits](https://www.conventionalcommits.org/) format.
4. Push your changes to the forked repository.
5. Create a pull request, and we'll review your changes.

## 📜 License

This project is licensed under the MIT License. For more information, see the [LICENSE](./LICENSE) file.

## Contributors

<table>
  <tbody>
    <tr>
      <td align="left" valign="top" width="14.28%"><a href="https://github.com/TeroBaje/"><img src="https://avatars.githubusercontent.com/u/144209102?s=48&v=4" width="100px;" alt="TeroBaje"/><br /><sub><b>TeroBaje</b></sub></a><br /><a href="#infra-jjablonski-it" title="Node project devlopment and web technologies">🚇</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

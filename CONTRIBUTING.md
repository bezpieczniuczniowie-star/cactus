# Contributing to CACTUS Mailer

Thank you for your interest in contributing to CACTUS Mailer! This document provides guidelines and instructions for contributing.

## 📋 Code of Conduct

This project adheres to the Contributor Covenant [code of conduct](./CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- Redis 6+
- Docker & Docker Compose (recommended)
- Git

### Development Setup

```bash
# Clone repository
git clone https://github.com/bezpieczniuczniowie-star/cactus.git
cd cactus

# Install dependencies
npm install-all

# Setup environment
cp .env.example .env

# Start services
npm run start:dev

# Access dashboard at http://localhost:3001
# API at http://localhost:3000
```

## 📝 Development Guidelines

### Code Style
- Follow [TypeScript best practices](https://www.typescriptlang.org/docs/handbook/)
- Use ESLint and Prettier for code formatting
- 2-space indentation
- Meaningful variable and function names
- Add comments for complex logic
- Write self-documenting code

### Commits
- Use conventional commits format: `type(scope): message`
- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `perf`, `ci`
- Keep commits atomic and logical
- Examples:
  - `feat(api): add webhook retry mechanism`
  - `fix(tracking): open tracking pixel bug`
  - `docs(readme): update installation instructions`
  - `refactor(queue): optimize job processor`

### Pull Requests
- Create feature branch: `git checkout -b feature/your-feature`
- Make your changes and add tests
- Update documentation if needed
- Run `npm run lint:fix` and `npm run format`
- Ensure all tests pass: `npm run test`
- Submit PR with clear description of changes
- Ensure all CI checks pass before merging

### Testing
- Write unit tests for all new features
- Maintain >80% code coverage
- Run tests before submitting PR: `npm test`
- Use Jest for testing framework
- Mock external services

### Documentation
- Update README.md if adding features
- Add JSDoc comments to functions
- Update API documentation in docs/
- Add examples for new features
- Update CHANGELOG.md

## 🏗️ Project Structure

See [README.md](./README.md) for detailed project structure.

## 🐛 Reporting Issues

### Bug Reports
- Use GitHub Issues with bug template
- Include steps to reproduce
- Provide expected vs actual behavior
- Include environment details (OS, Node version, etc.)
- Attach logs if relevant
- Include screenshots for UI bugs

### Feature Requests
- Use GitHub Discussions or Issues with feature template
- Describe use case and problem it solves
- Explain expected behavior
- Include examples if relevant
- Discuss implementation approach

## 📚 Resources

- [API Documentation](./docs/API.md)
- [Architecture Guide](./docs/ARCHITECTURE.md)
- [Installation Guide](./docs/INSTALLATION.md)
- [Configuration Guide](./docs/CONFIGURATION.md)
- [Examples](./docs/examples/)

## 🔐 Security

- Never commit sensitive information (API keys, passwords, etc.)
- Report security vulnerabilities privately to security@cactusmailer.com
- Follow OWASP guidelines for web application security
- Use parameterized queries to prevent SQL injection
- Validate all user input

## 📦 Release Process

```bash
# Create new version
npm run release

# Push to GitHub
git push origin main --tags
```

## 💡 Tips for Contributors

- Start with issues labeled `good first issue`
- Ask questions in GitHub Discussions
- Join our Discord community for help
- Review existing code before making changes
- Test your changes thoroughly
- Keep PRs focused and reasonably sized

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## ✨ Recognition

All contributors will be recognized in:
- CONTRIBUTORS.md file
- Release notes
- GitHub contributors page

---

For questions or support, reach out to:
- Discord: [dsc.gg/cactusmailer](https://dsc.gg/cactusmailer)
- Twitter: [@innerquil](https://x.com/innerquil)
- Email: support@cactusmailer.com

Thank you for contributing to CACTUS Mailer! 🌵

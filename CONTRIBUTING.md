# Contributing to Denali

We welcome contributions to the Denali project. This document provides guidelines for contributors to follow.

## Getting Started

- Fork the repository.
- Clone your fork.

## Making Changes

- Create a new branch for your changes. See the branch naming conventions below.
- Make your changes.
- Ensure your code adheres to the project's coding standards.

## Branch Naming Conventions

To keep our repository organized and to facilitate easy navigation, we follow specific naming conventions for branches. This helps in understanding the purpose and scope of branches at a glance. Below are the conventions we use:

- **Feature Branches:** For new features and enhancements.

  - Format: `feature/short-feature-description`
  - Example: `feature/add-dropdown-menu`

- **Bugfix Branches:** For fixing bugs and issues.

  - Format: `bugfix/issue-identifier-or-description`
  - Example: `bugfix/fix-dropdown-alignment`

- **Release Branches:** For preparing release versions.

  - Format: `release/version-number`
  - Example: `release/v1.0.0`

- **Hotfix Branches:** For urgent fixes that need immediate deployment.

  - Format: `hotfix/issue-identifier-or-description`
  - Example: `hotfix/critical-security-patch`

- **Development Branches:** For ongoing development and integration of features.

  - Format: `dev/description`
  - Example: `dev/refactor-dropdown-component`

- **Documentation Branches:** Specifically for documentation updates.

  - Format: `docs/description-or-docs-section`
  - Example: `docs/update-installation-guide`

- **Refactoring Branches:** For code refactoring and optimization.

  - Format: `refactor/description-of-refactoring`
  - Example: `refactor/optimize-dropdown-logic`

- **Experiment Branches:** For experiments or testing new ideas.
  - Format: `experiment/description-of-experiment`
  - Example: `experiment/test-new-animation-library`

When creating a new branch, make sure the name is concise yet descriptive enough to reflect the purpose of the branch. If applicable, include the issue or task ID from our project management tool for easy reference.

### Tips for Branch Naming:

- Keep it short and meaningful.
- Use hyphens to separate words.
- Avoid overly broad or vague terms.
- Stick to lowercase for consistency.

By following these conventions, we can maintain an organized, efficient, and collaborative workflow.

## Coding Standards

- Project code is formatted on save using Prettier and Prettier for Tailwind. Please congfigure these on your IDE of choice and ensure your code is formatted before contributing.

## Committing Your Changes

### Commit Naming Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for our commit messages. This leads to more readable messages and allows us to generate changelogs automatically.

Here’s a basic format of a conventional commit message:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

- **Type:** This describes the kind of change you're making. Common types include `feat` (a new feature), `fix` (a bug fix), `docs` (changes to documentation), `style` (formatting, missing semicolons, etc.; no code change), `refactor` (refactoring production code), `test` (adding missing tests or correcting existing tests), and `chore` (updating grunt tasks etc.; no production code change).
- **Scope (optional):** A scope may be provided to a commit’s type, to provide additional contextual information and is contained within parentheses, e.g., `feat(component):`.
- **Description:** A brief, imperative mood description of the change.
- **Body (optional):** A longer explanation of the change if needed.
- **Footer (optional):** You can also include a footer with information about breaking changes or issue references, e.g., `BREAKING CHANGE:`.

#### Examples:

feat(component): add disabled state to button
fix(component): handle case when input value is inalid
docs: update readme installation section

#### Scope Types:

- **a11y:** Use for any work done regarding accessibility, ex. `fix(a11y): fix color contrast issue on button type`
- **component:** Use for any work done on a single component, ex. `feat(component): add dropdown component`
- **demo:** Use for any work done on the example app included with Denali, ex. `feat(demo): add dropdown component to demo`
- **dependency:** Use for any work done on dependencies, ex. `feat(dependency): update NPM dependencies to latest`
- **repo:** Use for any work done on the repo, ex. `docs(repo): update contribution guidelines`
- **storybook:** Use for any work done on the Storybook site, ex. `docs(storybook): update intro section copy`
- **styles:** Use for any work done on the CSS, ex. `fix(styles): fix incorrect color being used on borders`
- **test:** Use for tests, ex. `feat(test): add unit test for tabs component`
- **util:** Use for work on helper functions, ex. `refactor(utils): optimize performance of debounce function`

## Submitting a Pull Request

- Open a pull request to the main repository.
- Clearly describe the problem you're solving and the proposed solution.

If you're pushing code that solves a particular issue, include a comment in the pull request message noting the issue being addressed. Ex. `Fixes issue #2`.

## Reporting Bugs

- Use the issue tracker to report bugs.
- Include detailed instructions to reproduce the bug.

## Requesting Features

- Use the issue tracker to suggest new features.
- Explain why the feature would be useful.

## Questions and Support

- For questions and support, reach out to [contact information or community platform].

## License

By contributing to Denali, you agree that your contributions will be licensed under its MIT License.

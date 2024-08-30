# Portfolio

*<div style="color:gray;margin-top:-10px;">By Siddharth Rao</div>*

---
![Svelte](https://img.shields.io/badge/Svelte-%23FF3E00.svg?style=flat&logo=svelte&logoColor=white) ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-%2306B6D4.svg?style=flat&logo=tailwindcss&logoColor=white) ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=flat&logo=amazon-web-services&logoColor=white)

---

![Deploy](https://github.com/silverlightning926/portfolio/actions/workflows/deploy.yml/badge.svg) ![Formatting](https://github.com/silverlightning926/portfolio/actions/workflows/formatting.yml/badge.svg)

---

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Portfolio](#portfolio)
  - [Link](#link)
  - [About](#about)
  - [Getting Started](#getting-started)
    - [Local Development](#local-development)
    - [Docker](#docker)
  - [Formatting With Prettier](#formatting-with-prettier)
  - [License](#license)

<!-- /code_chunk_output -->

---

## Link

[siddharthrao.info](https://siddharthrao.info)

## About

This is my personal portfolio website. It is built using Svelte and Tailwind CSS. The website is hosted on AWS S3 and CloudFront.

The website is automatically deployed using GitHub Actions. The website is automatically formatted using Prettier.

## Getting Started

To get a local copy up and running follow these simple steps.

### Local Development

1. Clone the repository:

    ```bash
    git clone <repo-url>
    ```

2. Install the dependencies:

    ```bash
    npm install --include=dev
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

4. Open the website in a browser:

    ```bash
    http://localhost:5173
    ```

### Docker

1. Build the Docker image:

    ```bash
    docker build -t portfolio .
    ```

2. Run the Docker container:

    ```bash
    docker run -p 5173:80 portfolio
    ```

3. Open the website in a browser:

    ```bash
    http://localhost:5173
    ```

## Formatting With Prettier

The website is automatically formatted using Prettier. The configuration for Prettier is stored in the `.prettierrc` file.

To format the website manually, run the following command:

```bash
npm run format
```

To check if the website is formatted correctly, run the following command:

```bash
npm run format:check
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

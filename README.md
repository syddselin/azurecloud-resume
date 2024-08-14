# Cloud Resume Project

The Cloud Resume project is a static website hosted on Azure Storage, featuring a visitor counter built on Azure Functions. The website is developed using HTML, CSS, and JavaScript, while the visitor counter is powered by .NET and Azure Functions.

## Project Structure

- `frontend/`: This folder contains the website's frontend files.
    - `index.html`: The main HTML file for the website.
    - `styles.css`: The CSS file for styling the website.
    - `main.js`: Contains the JavaScript code, including the visitor counter logic.
- `api/`: This folder contains the .NET API deployed on Azure Functions.
    - `Counter.cs`: The C# file containing the visitor counter code.
- `.github/workflows/`: This folder contains CI/CD workflow configurations.
    - `deploy.yml`: Configuration file for automating deployments.
- `.devcontainer/`: This folder contains the configuration for the development container used in VS Code.

## Architecture Overview

![architecture](architecture.png)

The architecture consists of an Azure Storage account hosting the static website and an Azure Function that handles the visitor counter. The visitor count is updated each time the website is accessed, ensuring real-time tracking of visits.

## Live Demo

You can view the live demo of the project by visiting the following URL:

[Cloud Resume Project](https://scfunction.z16.web.core.windows.net/)

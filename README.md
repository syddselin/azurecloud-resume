# Project Description
The Cloud Resume project is a static website hosted on Azure Storage, with a visitor counter built on Azure Functions. The website is built with HTML, CSS, and JavaScript. The visitor counter is built with .NET and Azure Functions.


# Project Structure

- `frontend/`: Folder contains the website.
    - `main.js`: Folder contains visitor counter code.
- `api/`: Folder contains the dotnet API deployed on Azure Functions.
    - `Counter.cs`: Contains the visitor counter code.
- `.github/workflows/`: Folder contains CI/CD workflow configurations.
- `.devcontainer`: Folder contains the my container configuration for VS Code.

![architecture](architecture.png)


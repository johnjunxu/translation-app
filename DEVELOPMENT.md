# Development Guide for SnapTranslate

This guide provides instructions for setting up your development environment,
understanding the project structure, and contributing to SnapTranslate.

## Project Structure

```
.
├── .gitignore          # Specifies intentionally untracked files to ignore
├── CHANGELOG.md        # Documents notable changes for each version
├── DEVELOPMENT.md      # This development guide
├── DEVELOPMENT.zh-CN.md# This development guide (Chinese)
├── Dockerfile          # Defines how to build the Docker image
├── index.html          # Main HTML file for the frontend
├── package.json        # Node.js project metadata and dependencies
├── package-lock.json   # Records the exact dependency tree
├── README.md           # Project overview and usage instructions
├── README.zh-CN.md     # Project overview and usage instructions (Chinese)
├── script.js           # Frontend JavaScript logic
├── server.js           # Backend Node.js/Express server
└── style.css           # Frontend CSS styles
```

## Local Development Setup

### Prerequisites

-   Node.js (LTS version recommended)
-   npm (Node Package Manager)

### Steps

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/johnjunxu/translation-app.git
    cd translation-app
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the local server:**
    ```bash
    node server.js
    ```
    The server will start on `http://localhost:3000`.

4.  **Open in browser:**
    Navigate to `http://localhost:3000` in your web browser.

## Deployment to Google Cloud Run

This project can be deployed to Google Cloud Run for a serverless, scalable application.

### Prerequisites

-   Google Cloud SDK configured with your project.
-   Docker installed (if building locally, though Cloud Build handles this).

### Steps

1.  **Ensure `gcloud` is authenticated and configured for your project.**
    ```bash
    gcloud auth login
    gcloud config set project [YOUR_PROJECT_ID]
    ```

2.  **Build and push the Docker image to Google Container Registry (GCR):**
    ```bash
    gcloud builds submit --tag gcr.io/[YOUR_PROJECT_ID]/translation-app
    ```

3.  **Deploy the image to Google Cloud Run:**
    ```bash
    gcloud run deploy translation-app --image gcr.io/[YOUR_PROJECT_ID]/translation-app \
        --platform managed \
        --region us-central1 \
        --allow-unauthenticated
    ```
    (Replace `us-central1` with your desired region if needed.)

## Contributing

We welcome contributions! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'feat: Add your feature'`).
5.  Push to your fork (`git push origin feature/your-feature-name`).
6.  Open a Pull Request to the `main` branch of the original repository.

## Contact

For support or questions, please contact: john.junx@gmail.com

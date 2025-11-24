# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-11-18

### Added

-   Initial release of SnapTranslate.
-   Auto language detection (Chinese to English, English to Chinese).
-   Text-to-Speech functionality.
-   Copy translated text to clipboard button.
-   Responsive design for mobile devices (iPhone 15 Pro).
-   IOS-style glassmorphism UI.
-   Custom favicon.
-   README.md, .gitignore.

### Changed

-   Switched translation API from Google Gemini AI (via Make.com) to free MyMemory API.
-   Updated website title and footer information.

### Removed

-   Voice recording module and related UI elements.
-   Google Vertex AI dependencies (multer, dotenv, @google-cloud/vertexai).

# POGPT Suite Landing Page Deployment Guide

This repository contains the source code for a modern, responsive webpage designed to showcase the integration and application of various technologies within DoD networks. The webpage is built with HTML, CSS, and minimal JavaScript, ensuring broad compatibility and fast load times.

Visit the [POGPT Suite repo](https://github.com/Chair4ce/POGPTSuite) for more information on the actual project.

## Technology Stack

- **HTML**: Markup language for structuring the webpage content.
- **CSS**: Styling sheet language used for designing the webpage appearance.
- **JavaScript**: Used sparingly to enhance interactivity and usability.
- **Docker**: Utilized for containerizing the Apache server to ensure consistent deployment across any environment.

## Prerequisites

- **Git**: For cloning the repository.
- **Docker**: For creating and running the webpage in a containerized environment.

### Installing Git

If Git is not already installed on your system, download and install it from [git-scm.com](https://git-scm.com/).

### Installing Docker

Ensure Docker is installed on your machine. If you haven't installed Docker yet, follow the instructions on the [official Docker website](https://docs.docker.com/get-docker/) to set it up for your operating system.

## Setup Instructions

Follow these steps to get the webpage running on your local machine using Docker.

### Step 1: Clone the Repository

Clone this GitHub repository to obtain the webpage source files:

```bash
git clone https://github.com/R4C3C4R/MaiTaiMafia.git
cd MaiTaiMafia
```

### Step 2: Prepare the Docker Image

1. **Create a Dockerfile**: If not already present, create a `Dockerfile` in the root of your repository with the following content to set up Apache to serve your webpage:

```Dockerfile
# Use the official Apache HTTP Server image
FROM httpd:latest

# Copy webpage files to the default Apache serve directory
COPY ./ /usr/local/apache2/htdocs/
```

2. **Build the Docker Image**: Build your Docker image using the following command:

```bash
docker build -t pogpt-landing-page .
```

This command creates a Docker image named `pogpt-landing-page` based on the `Dockerfile`.

### Step 3: Run Your Webpage in a Docker Container

Run the Docker container, mapping the container's port 80 to port 80 on your host, to serve your webpage:

```bash
docker run -d -p 80:80 pogpt-landing-page
```

After executing this command, your webpage will be accessible at `http://localhost`.

## Conclusion

For more information on Docker and Apache, please refer to their official documentation:

- [Docker Documentation](https://docs.docker.com/)
- [Apache HTTP Server Documentation](https://httpd.apache.org/docs/)
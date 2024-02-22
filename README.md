# POGPT Suite Landing Page Deployment Guide

A modern, responsive webpage designed to showcase the integration and application of various technologies within DoD networks. 

Visit the [POGPT Suite repo](https://github.com/Chair4ce/POGPTSuite) for more information on the actual project this page promotes.

### Step 1: Clone the Repository

Clone this GitHub repository to obtain the webpage source files:

```bash
git clone https://github.com/ambercaravalho/pogpt-landing-page.git
cd pogpt-landing-page
```

### Step 2: Build the Docker Image: 

Build the Docker image using the following command:

```bash
docker build -t pogpt-landing-page .
```

### Step 3: Run the Site in Docker

Run the Docker container, mapping the container's port 80 to port 80 on your host:

```bash
docker run -d --restart unless-stopped -p 80:80 pogpt-landing-page
```

After executing this command, your webpage will be accessible at `http://localhost`.

## Conclusion

For more information on Docker and Apache, please refer to their official documentation:

- [Docker Documentation](https://docs.docker.com/)
- [Apache HTTP Server Documentation](https://httpd.apache.org/docs/)
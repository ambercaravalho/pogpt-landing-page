# POGPT Suite Landing Page

A modern, responsive webpage designed to showcase the integration and application of various LLM technologies within DoD networks. 

Visit the [Open WebUI repo](https://github.com/open-webui/open-webui)) for more information on the project this concept relies on (and this site promotes).

### Step 1: Clone the Repository

Clone this repo to obtain the source files:

```bash
git clone https://github.com/ambercaravalho/pogpt-landing-page.git
```

```bash
cd pogpt-landing-page
```

### Step 2: Build the Docker Image: 

Build the Docker image:

```bash
docker build -t pogpt-landing-page .
```

### Step 3: Run the Site in Docker

Run the Docker container, choosing what port to map your container to:

```bash
docker run -d --restart unless-stopped -p <SELECTED PORT>:80 pogpt-landing-page
```

After executing this command, the webpage will be accessible at `http://localhost:<SELECTED PORT>`.

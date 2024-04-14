# Etamax (Cultural and Technical) Event - [FCRIT College](https://fcrit.ac.in/)
## Theme - Phoenix
## Overview
This repository contains the code for the Etamax Event website, which is dedicated to showcasing both cultural and technical events at FCRIT college for almost 1600 students. The project was designed in Figma, and its implementation is divided into frontend and backend components.

## Design
The design of the website was meticulously crafted using Figma to ensure an attractive and user-friendly interface that reflects the vibrant spirit of our college's cultural and sports events. Link to [Figma](https://www.figma.com/file/5MdKRb0CWvn4rl3jQPPPEd/ETAMAX-24-(Copy)?type=design&node-id=125%3A77&mode=design&t=RoOBiNdkCFBiKQqF-1)

## Frontend
The frontend of the website was developed using React.js, a popular JavaScript library for building user interfaces. To enhance its functionality, various npm packages were integrated to provide a seamless user experience.

## Backend
The backend of the Faces Event website was implemented using Django, a high-level Python web framework known for its robustness and versatility. The backend code is hosted in a separate repository, which can be found [here](https://github.com/Supermathew/ETAMAX2024BACK).


## Deployment
Both the frontend and backend of the website were deployed on Azure. The deployment setup includes:

- **Frontend Server**: It was served on root path using npm run build with the help of nginx

- **Backend Server**: It is connected via Nginx and Gunicorn for efficient handling of incoming requests. You can learn more about Nginx and Gunicorn in this [DigitalOcean tutorial](https://www.digitalocean.com/community/tutorials/how-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu-22-04).

## Domain and SSL Certificate
The website was accessible via the domain [etamax.fcrit.ac.in](https://etamax.fcrit.ac.in), which was configured by the college faculty. An SSL certificate was obtained to ensure secure and encrypted communication. The certificate was set up using the following commands:

```shell
sudo apt-get install python3-certbot-nginx
sudo apt-get install certbot
sudo certbot --nginx
```
Also for development Remote SSH extension was used : https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh

## Team
This project was brought to life by the collaborative efforts of the following team members:
- Savio
- Tahir
- Mathew
- Jayesh
- Aniket
- Vedant
- Kousthubh
- Along with Ideaplots team.

## Video Demo
You can watch a video demo of the website below



https://github.com/ghOst-vedant/ETAMAX_24/assets/91362589/b143ea2a-77b2-4579-a524-014620416ce5




Thank you for visiting the Etamax Event repository. We hope you enjoy exploring our work!

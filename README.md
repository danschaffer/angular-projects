examples from Angular Up and Running
====================================

setup
-----

- to install in a simple docker ubuntu container

    docker run --name angular -v ~/projects/angular/angular-up-and-running:/src -p 4200:4200 -it ubuntu
    apt-get update
    apt-get install sudo curl git vim
    git config --global user.email "you@example.com"
    git config --global user.name "Your Name" 
    curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
    sudo apt-get install -y nodejs
    npm install -g typescript
    npm install -g @angular/cli
    ng --version

creating first app
------------------

- create in a git repo

    git init stock-market
    ng new stock-market
    cd stock-market
    ng serve --host 0.0.0.0

- browse to: http://localhost:4200

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

### Clone the repo

```bash
$ git clone https://github.com/gabrielcjr/blockhub-api.git
$ cd blockhub-api
```

## Give permission to the initialization script

```bash
chmod +x .docker/entrypoint.sh
```

## Run docker-compose

```bash
$ docker-compose up
```

Now, wait for both containers to be up and running

\*If you don't have Docker and Docker Compose in your machine, please, follow these instructions:

<https://docs.docker.com/engine/install/ubuntu/>

<https://docs.docker.com/compose/install/>

## The expected result when the application is successfully running

![Image](https://github.com/gabrielcjr/blockhub-api/blob/master/Running_app.png)

Once migration is done, use the api.http file, associated with REST Client Extension for VS Code to test the routes.

Also, you can open Swagger to see all available endpoints at

```bash
http://localhost:3000/api/
```

For evaluation purposes, only /test-auth is protected with Token requirement to send requests.

All other endpoins are open, but with @UseGuards(JwtGuard) notation commented.

To activate token requirement, just remove the comment from this notation from \*.controller.ts of projects, associates, and executions.

## For Further implementations

This project is using PostgreSQL instead of MongoDB as suggested.

[SOLVED on 19/11/2021] I couldn't implement the logic behind the limitation of one associate assigned for one project at a time, but I want to learn more to add value to future projects.

## Enjoy!

## License

Nest is [MIT licensed](LICENSE).

# HypeLab API

This Ruby on Rails application contains the skeleton of an ads server. We want this to act as a simple JSON API whereby the HypeLab SDK can hit an endpoint to retrieve an ad. Our advertisers have given us a set of data, which we've stored as instances of the `Campaign` model.

Your objective is to build out the following two API endpoints:

| URL Path | Method | Description                                                                                           |
| -------- | ------ | ----------------------------------------------------------------------------------------------------- |
| /load    | POST   | This endpoint is supposed to return a `Campaign` JSON, which will be used by the SDK to create an ad. |
| /event   | POST   | This endpoint is supposed to capture various reporting stats (e.g., clicks).                          |

## Dependencies

This application depends on Docker. Before starting, install [Docker Compose](https://docs.docker.com/compose/install/).

## Build the Docker image

After pulling down this repo, in order to build the Docker image, you can run `docker compose build`

## Database creation

Once the image is created, you can run the following commands to create the database:

- To create the Postgres DB, run `docker compose run web rake db:create`
- To apply migrations, run `docker compose run web rake db:migrate`
- To seed the database, run `docker compose run web rake db:seed`

## Boot the app

Finally, to start the Rails server, run `docker compose up`

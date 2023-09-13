# Interview Project

## Overview

This project is designed for interviews and includes both a react application and a GraphQL API. You can access a live demo of the project at [http://157.245.203.195/](http://157.245.203.195/). Follow the steps below to set it up and get started.

## Prerequisites

Before you begin, ensure that you have the following prerequisite installed:

- Docker

## Getting Started

1. **Clone the Repository**

    ```shell
    git clone https://github.com/mrboomba/test-swift-cloud.git    
    ```

2. **Rename Environment File**

    Change the name of the `.env.example` file to `.env`. Then, open the `.env` file and fill in the necessary values as required for your project.

3. **Start the Application**

    Use Docker Compose to start the project:

    ```shell
    docker-compose up
    ```

    This command will build and start the necessary containers.

4. **Access the Application Locally**

    - **Awesome Frontend**: Open your web browser and go to [http://localhost](http://localhost) to access the Awesome Frontend.

    - **GraphQL Playground**: To interact with the GraphQL API, visit [http://localhost:4000/playground](http://localhost:4000/playground).

## API Documentation

### `getSongs` Query

#### Description

Retrieves a list of songs based on specified filtering and sorting criteria.

#### Arguments

- `orderBy` (type: `SongOrderByInput`): Specifies the sorting order for the results. You can choose to sort by fields like `Year`, `PlaysJune`, `PlaysJuly`, or `PlaysAugust` in ascending (`ASC`) or descending (`DESC`) order.

- `skip` (type: `Int`): Allows you to skip a specified number of songs in the result set. Useful for pagination.

- `take` (type: `Int`): Limits the number of songs returned in the result set. Use this for pagination or limiting query size.

- `where` (type: `SongWhereInput`): Provides criteria for filtering the songs. You can filter by fields such as `Song`, `Album`, or `Year`. The filter conditions are combined using the `AND` logical operator.

#### Example Usage

```graphql
query {
  getSongs(
    orderBy: { Year: ASC, PlaysJune: DESC }
    skip: 0
    take: 10
    where: { Year: 2000, Album: "Greatest Hits" }
  ) {
    Song
    Artist
    Year
  }
}
```

This query retrieves the top 10 songs from the year 2000 with the "Greatest Hits" album, sorted in ascending order by year and descending order by June play counts.

### Response

The response will be a list of songs, with each song containing the following fields:

-   `Song` (String): The name of the song.
-   `Artist` (String): The artist or performer of the song.
-   `Year` (Int): The year the song was released.

## Additional Notes

-   The GraphQL Playground is accessible at [http://localhost:4000/playground](http://localhost:4000/playground) for interactive exploration and testing of GraphQL queries.
    
-   Remember to handle errors gracefully when using this API, as indicated by the `try-catch` block in the resolver for error handling.
    

Feel free to adapt and expand this API documentation to provide more details as needed for your project.

## Feedback and Questions

If you have any feedback, questions, or encounter any issues with this interview project, please don't hesitate to contact us. We appreciate your input and are here to help.

Happy interviewing! 🚀
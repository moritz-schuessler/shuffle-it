# Shuffle-It
> A alternative Spotify-UI that adds functionality to shuffle through Saved Albums

After switching from Apple Music to Spotify I really missed a functionality to shuffle through all my saved Albums. This project solves this problem!

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file
### Spotify

This project requires a id and secret from Spotify. `SPOTIFY_ID`, `SPOTIFY_SECRET`

These can be optained here: [Spotify Dashboard](https://developer.spotify.com/dashboard)

### Auth.js

To encrypt the JWT Token Auth.js requires a Environment Variable. `NEXTAUTH_SECRET`

A token can be generated using:

```bash 
  openssl rand -base64 32
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/moritz-schuessler/shuffle-it.git
```

Go to the project directory

```bash
  cd shuffle-it
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

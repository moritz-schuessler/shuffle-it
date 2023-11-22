# Shuffle-Me
> A alternative Spotify-UI that adds functionality to shuffle through Saved Albums

After switching from Apple Music to Spotify I really missed a functionality to shuffle through all my saved Albums. This project solves this problem!

## Getting Started
This project is hosted at [shuffle-it.moritzschuessler.de](https://shuffle-it.moritzschuessler.de/)

### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

#### Spotify

This project requires a id and secret from Spotify. These can be optained here: [Spotify Dashboard](https://developer.spotify.com/dashboard)

`SPOTIFY_ID`
`SPOTIFY_SECRET`

#### Auth.js

To encrypt the JWT Token Auth.js requires a Environment Variable. A token can be generated using `openssl rand -base64 32`.

`NEXTAUTH_SECRET`

### Run Locally

First, run the development server:

```bash
npm install
npm run start
```

## Tech Stack

- HTML
- CSS/Tailwindcss
- JavaScript
- React/Next.js
- Auth.js
- React Query

## Roadmap

- Add a Landing Page
- Shuffle Titles/Artists
- Navigate to Albums( and Titles/Artists)
- Smoother Loading when Scrolling





// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var SpotifyWebApi = require("spotify-web-api-node");
var config = require("../../config")
export default function handler(req, res) {
    var spotifyApi = new SpotifyWebApi(config.config);
    var scopes = ['user-read-private', 'playlist-read-private','user-read-recently-played'],
    authorizeURL = spotifyApi.createAuthorizeURL(scopes);
    
    res.redirect(authorizeURL);

//   res.status(200).json({ name: "John Doe" });
}

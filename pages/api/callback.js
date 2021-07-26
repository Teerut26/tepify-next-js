// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var SpotifyWebApi = require("spotify-web-api-node");
var config = require("../../config");
export default function handler(req, res) {
  var spotifyApi = new SpotifyWebApi(config.config);
  spotifyApi.authorizationCodeGrant(req.query.code).then((data)=>{
      res.redirect(`/?token=${data.body.access_token}`)
  })
}

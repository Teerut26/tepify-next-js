// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var SpotifyWebApi = require('spotify-web-api-node');
export default function handler(req, res) {

  var spotifyApi = new SpotifyWebApi({
    clientId: '798c6243131e4e8dabc6fbe8f63e8549',
    clientSecret: '39ec6a2c20c44dfc9a5db6bf4d898db8',
    redirectUri: 'http://www.example.com/callback'
  });
  // .getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
  //   function(data) {
  console.log("🚀 ~ file: spotify.js ~ line 14 ~ handler ~ spotifyApi.getAccessToken()", spotifyApi.l)
  //     console.log('Artist albums', data.body);
  //   },
  //   function(err) {
  //     console.error(err);
  //   }
  // );

  res.status(200).json({ name: 'John Doe' })
}

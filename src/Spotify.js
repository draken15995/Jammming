const client_id = 'fa54a9b293e84d29945887727fee5522'; 
const client_secret = '9d4f851f0b0b49d4959a298e920a4ebf';

export async function getToken() {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: new URLSearchParams({
      'grant_type': 'client_credentials',
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')),
    },
  });

  const jsonResponse = await response.json()
  // console.log(jsonResponse)
  const accessToken = jsonResponse.access_token;
  // console.log(accessToken);
  return accessToken;
}

const accessToken = await getToken();
// console.log(accessToken);


export async function searchTracks(token) {
  const url = 'https://api.spotify.com/v1/search?q='
  const query = 'alone'
  const params = '&type=track'
  const endpoint = `${url}${query}${params}`
  // console.log(endpoint);
  // console.log(token);
  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: { 'Authorization' : 'Bearer ' + token}
    });

    // console.log(response);
    const data = await response.json();
    data.tracks.items.forEach(item => {
      const trackName = item.name;
      const trackArtists = item.artists[0].name;
      const trackAlbum = item.album.name;
      console.log(`${trackName} by ${trackArtists} on ${trackAlbum}`);
    });
  } catch(error) {
    console.log(error.message);
  }

}

searchTracks(accessToken)

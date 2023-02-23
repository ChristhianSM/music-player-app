export const getDataArtists = async (idArtist) => {
  try {
    const response = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/artist/${idArtist}`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '5cb7706abcmsh52ed7934a99a06ep15d9a2jsnffa41311ac30',
        'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    });
    return await response.json();
  } catch (error) {
    console.log(error)
  }
}
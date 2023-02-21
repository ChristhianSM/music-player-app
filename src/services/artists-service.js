const BASE_URL = "https://deezerdevs-deezer.p.rapidapi.com/artist";

export const getArtistaService = async (idArtista) => {
  const url = `${BASE_URL}/${encodeURI(idArtista)}`;
  let resp = await fetch(url, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '5cb7706abcmsh52ed7934a99a06ep15d9a2jsnffa41311ac30',
      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  })
  const data = await resp.json();
  console.log(data)
  return {
    id: data.id,
    link_bi: data.link,
    name: data.name,
    fans: data.nb_fan,
    img_medium: data.picture_medium,
    img_xl: data.picture_xl
  }
}
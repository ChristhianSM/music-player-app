const BASE_URL = "https://deezerdevs-deezer.p.rapidapi.com";

export const getArtistaService = async (idArtista) => {
  const url = `${BASE_URL}/artist/${idArtista}`;
  let resp = await fetch(url, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '8414519b7bmsh22a20f5c2b35f4dp19cfa0jsnb82c774d0a9f',
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
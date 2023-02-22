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

export const getSongsServices = async (valueSearch = 'lo ultimo') => {
  const url = `${BASE_URL}/search?q=${encodeURI(valueSearch)}`;

  let resp = await fetch(url, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '5cb7706abcmsh52ed7934a99a06ep15d9a2jsnffa41311ac30',
      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  })

  const { data } = await resp.json();

  const arrayObject = data.map((el) => {
    return {
      id: el.id,
      id_artista: el.artist.id,
      title: el.title_short,
      artist: el.artist.name,
      img: el.album.cover_medium,
      img_xs: el.album.cover_small,
      mp3: el.preview,
      album: el.album.title
    }
  })

  return arrayObject
}
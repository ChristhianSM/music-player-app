import React, { useContext, useEffect, useState } from 'react'
import { SongContext } from '../../context/SongContext';
import { getDataArtists } from '../../helpers/getDataLibrary';
import { Loader } from '../Loader';
import { NoContent } from '../NoContent';

export const Artists = () => {
  const { idsArtistsRecent } = useContext(SongContext);
  const [dataArtists, setDataArtists] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getArtists = async () => {
      setLoading(true);
      const promises = []
      for (let i = 0; i < idsArtistsRecent.length; i++) {
        promises.push(await getDataArtists(idsArtistsRecent[i]));
      }

      const data = await Promise.all(promises);
      setDataArtists(data);
      setLoading(false);
    }

    getArtists();
  }, [idsArtistsRecent]);

  if (loading) return <Loader description={"Cargando informacion de artistas ...."}/>

  if (dataArtists.length === 0) return <NoContent  description={"No hay artistas para mostrar"}/>
  
  return (
    <div className='container-card-songs'>
      {
        dataArtists.map(artist => (
          <div className="card-song" key={artist.id}>
            <div className="card-song-content-img">
              <img src={artist.picture_medium} alt={artist.name}  className = "img-song"/>
            </div>
            <div className='card-song-info'>
              <h3 className="card-song-title">
                {artist.name}
              </h3>
              <h3 className="card-song-artist">Seguidores : {artist.nb_fan}</h3>
            </div>
          </div>
        ))
      }
    </div>
  )
}

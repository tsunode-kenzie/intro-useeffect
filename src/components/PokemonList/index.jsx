import { useEffect, useState } from 'react';
import api from '../../services/api';
import Container from '../Container';
import Header from '../Header';
import PokemonCard from '../PokemonCard';

import { List } from './styles';

// fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
//   .then(response => response.json())
//   .then(json => setPokemons(json.results));

const PokemonList = ({ props }) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    api.get('pokemon', {
      params: {
        limit: 151,
        offset: 0
      },
      headers: {
        authorization: 'Bearer dfskldfdfd.sdffsdsfds.dsf'
      }
    })
      .then(response => setPokemons(response.data.results))
      .catch(error => console.log(error))
      .finally(() => {
        setLoading(false)
      });
  }, []);

  return (
    <>
      <Header />
      <Container>
        {
          loading
            ? <span>Carregando...</span>
            :
            <List>
              {
                pokemons
                  .map(({ name }) => <PokemonCard key={name} name={name} />)
              }
            </List>
        }

      </Container>
    </>
  );
};

export default PokemonList;

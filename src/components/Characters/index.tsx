import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../../store/features/characterSlice";
import { RootState } from "../../utils/store";

import "../../styles/characters.sass";

const CharacterList: React.FC = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.characters
  );
  console.log(data)

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if (loading === "pending") {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="main-container">
      <div className="box">
        {data.map((character) => (
          <div
            className="image-background"
            style={{ backgroundImage: `url(${character.image})` }}
          >
            <div className="content">
              <div className="personal-info">
                <div>
                  <h1 key={character.id}>{character.name}</h1>

                  <div className="specie">
                    {character.species.valueOf() === "Human" ? (
                      <span className="human" />
                    ) : (
                      <span className="alien" />
                    )}
                    <h5 className="specie" key={character.id}>
                      {character.species}
                    </h5>
                  </div>
                </div>
                <p key={character.id}>{character.gender}</p>
              </div>

              <div className="first-five-appearences">
                <h5>First 5 appearences:</h5>
                <ul>
                  {character.episode.slice(0, 5).map((episode, index) => (
                    <li key={`${character.id}-${index}`}>{episode}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;

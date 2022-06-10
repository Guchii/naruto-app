import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { useEffect } from "react";

import { LOAD_CHARACTERS } from "../GraphQL/Queries";

const GetCharacters = () => {
  const { error, loading, data } = useQuery(LOAD_CHARACTERS);
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    if (data) {
      setCharacters(data.characters.results);
    }
  }, [data]);
  if (loading)
    return (
      <div className="font-bold text-3xl mt-4 text-white">
        Loading characters from the API
      </div>
    );
  return (
    <>
      <div className="grid sm:grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] xl:grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-4">
        {characters.map((char) => {
          return (
            <div
              className={`relative group bg-purple-900 hover:shadow-xl text-white flex-col flex gap-3 rounded-md p-5 hover:translate-x-2 duration-300 cursor-pointer`}
              key={char._id}
            >
              <div className="font-bold text-xl group-hover:text-pink-200 duration-300">
                {char.name}
              </div>
              <div className="font-black text-orange">{char.rank}</div>
              <div className="absolute top-5 right-5">{char.age}</div>
              <div className="text-sm">{char.nameMeaning}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GetCharacters;

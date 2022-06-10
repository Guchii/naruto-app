import { gql } from "@apollo/client";

export const LOAD_CHARACTERS = gql`
  query {
    characters {
      results {
        name
        nameMeaning
        age
        avatarSrc
        _id
        rank
      }
    }
  }
`;

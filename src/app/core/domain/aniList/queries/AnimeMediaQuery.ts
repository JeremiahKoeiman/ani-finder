export default `
  query ($id: Int) {
    Media(id: $id, type: ANIME) {
      id
      description
      coverImage {
        large
        extraLarge
      }
      title {
        english
        native
        romaji
      }
    }
  }
`;

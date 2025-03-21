export default `
  query ($id: Int) {
    Media(id: $id, type: MANGA) {
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

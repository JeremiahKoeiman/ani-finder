export default `
  query ($id: Int) {
    Media(id: $id, type: ANIME) {
      id
      description
      coverImage {
        extraLarge
      }
      title {
        english
        native
        romaji
      }
      siteUrl
    }
  }
`;

export default `
  query ($id: Int) {
    Media(id: $id, type: MANGA) {
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

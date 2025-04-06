export default `
  query ($id: Int) {
    Media(id: $id, type: ANIME) {
      id
      description
      coverImage {
        extraLarge
      }
      bannerImage
      title {
        english
        native
        romaji
      }
      siteUrl
    }
  }
`;

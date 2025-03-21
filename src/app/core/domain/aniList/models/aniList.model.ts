export interface AniList {
  id: number;
  description: string;
  title: AniListTitle;
  coverImage: AniListCoverImage;
}

export interface AniListTitle {
  english: string;
  native: string;
  romaji: string;
}

export interface AniListCoverImage {
  large: string;
  extraLarge: string;
}

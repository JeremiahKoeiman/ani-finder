export interface AniList {
  id: number;
  description: string;
  title: AniListTitle;
  coverImage: string;
  bannerImage: string;
  url: string;
}

export interface AniListTitle {
  english: string;
  native: string;
  romaji: string;
}

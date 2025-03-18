export interface TraceMoe {
  id: number;
  title: AniListTitle;
}

export interface AniListTitle {
  native: string;
  romaji: string;
  english: string | null;
}

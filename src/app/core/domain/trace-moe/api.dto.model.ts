export interface ApiResultDto {
  frameCount: number;
  error: string;
  result: TraceMoeResultDto[];
}

export interface TraceMoeResultDto {
  anilist: AnilistResultDto;
  filename: string;
  episode: number | null;
  from: number;
  to: number;
  similarity: number;
  video: string;
  image: string;
}

export interface AnilistResultDto {
  id: number;
  idMal: number;
  title: AniListTitleDto;
  synonyms: string[];
  isAdult: boolean;
}

export interface AniListTitleDto {
  native: string;
  romaji: string;
  english: string | null;
}

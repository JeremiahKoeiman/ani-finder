export interface ApiResultDto {
  frameCount: number;
  error: string;
  result: TraceMoeResultDto[];
}

export interface TraceMoeResultDto {
  anilist: TraceMoeAnilistResultDto;
  filename: string;
  episode: number | null;
  from: number;
  to: number;
  similarity: number;
  video: string;
  image: string;
}

export interface TraceMoeAnilistResultDto {
  id: number;
  idMal: number;
  title: TraceMoeAniListTitleDto;
  synonyms: string[];
  isAdult: boolean;
}

export interface TraceMoeAniListTitleDto {
  native: string;
  romaji: string;
  english: string | null;
}

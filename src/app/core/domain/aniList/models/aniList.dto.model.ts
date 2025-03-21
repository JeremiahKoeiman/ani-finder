export interface AniListDto {
  data: MediaDto;
  errors?: ErrorDto[];
}

export interface MediaDto {
  Media: {
    id: number;
    description: string;
    title: AniListTitleDto;
    coverImage: AniListCoverImageDto;
  };
}

export interface AniListTitleDto {
  english: string;
  native: string;
  romaji: string;
}

export interface AniListCoverImageDto {
  large: string;
  extraLarge: string;
}

export interface ErrorDto {
  message: string;
  status: number;
  locations?: ErrorLocationDto[];
}

export interface ErrorLocationDto {
  line: number;
  column: number;
}

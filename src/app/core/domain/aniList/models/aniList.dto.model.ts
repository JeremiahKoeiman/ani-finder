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
    bannerImage: string;
    siteUrl: string;
  };
}

export interface AniListTitleDto {
  english: string;
  native: string;
  romaji: string;
}

export interface AniListCoverImageDto {
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

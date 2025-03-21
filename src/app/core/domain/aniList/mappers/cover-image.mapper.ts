import { AniListCoverImageDto } from '../models/aniList.dto.model';
import { AniListCoverImage } from '../models/aniList.model';

export const mapAniListCoverImageDtoToAniListCoverImage = (coverImage: AniListCoverImageDto): AniListCoverImage => {
  return {
    ...coverImage
  } satisfies AniListCoverImage;
};

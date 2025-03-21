import { AniListDto } from '../models/aniList.dto.model';
import { AniList } from '../models/aniList.model';

import { mapAniListCoverImageDtoToAniListCoverImage } from './cover-image.mapper';
import { mapAniListTitleDtoToAniListTitle } from './title.mapper';

export const mapAniListDtoToAniList = (data: AniListDto['data']): AniList => {
  return {
    id: data.Media.id,
    description: data.Media.description,
    title: mapAniListTitleDtoToAniListTitle(data.Media.title),
    coverImage: mapAniListCoverImageDtoToAniListCoverImage(data.Media.coverImage)
  } satisfies AniList;
};

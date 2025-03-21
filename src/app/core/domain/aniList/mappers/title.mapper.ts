import { AniListTitleDto } from '../models/aniList.dto.model';
import { AniListTitle } from '../models/aniList.model';

export const mapAniListTitleDtoToAniListTitle = (title: AniListTitleDto): AniListTitle => {
  return {
    ...title
  } satisfies AniListTitle;
};

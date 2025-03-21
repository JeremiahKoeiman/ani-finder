import { ApiResultDto } from '#domain/trace-moe/models/trace-moe.dto.model';

import { TraceMoe } from '../models/trace-moe.model';

/**
 * The first item from the result will be picked and mapped.
 *
 * This is because the first item has the highest similarity, which means it's the most accurate result.
 *
 * See here:
 * https://soruly.github.io/trace.moe-api/#/docs?id=response-format
 *
 * TODO: Allow the user to choose which option is the most accurate
 *
 * */
export const mapTraceMoeApiResultToTraceMoe = (apiResult: ApiResultDto['result']): TraceMoe => {
  if (!apiResult.length) {
    throw new Error('No anime results found.');
  }

  const highestSimilarityItem = apiResult.reduce((prev, curr) => (curr.similarity > prev.similarity ? curr : prev));

  return {
    id: highestSimilarityItem.anilist.id,
    title: highestSimilarityItem.anilist.title
  } satisfies TraceMoe;
};

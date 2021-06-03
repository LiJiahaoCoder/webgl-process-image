import OriginVS from '@/shaders/vertex.glsl';
import OriginFS from '@/shaders/fragment.glsl';
import BGRAVS from '@/shaders/bgra-vertex.glsl';
import BGRAFS from '@/shaders/bgra-fragment.glsl';
import { ImageType } from '@/types/image';

export const ShadersMap: Record<ImageType, string[]> = {
  [ImageType.Origin]: [OriginVS, OriginFS],
  [ImageType.RevertBlueAndRed]: [BGRAVS, BGRAFS],
};

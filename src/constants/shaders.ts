import VS from '@/shaders/vertex.glsl';
import OriginFS from '@/shaders/fragment.glsl';
import BGRAFS from '@/shaders/bgra-fragment.glsl';
import GrayFS from '@/shaders/gray-fragment.glsl';
import BlurFS from '@/shaders/blur-fragment.glsl';
import { ImageType } from '@/types/image';

export const ShadersMap: Record<ImageType, string[]> = {
  [ImageType.Origin]: [VS, OriginFS],
  [ImageType.Gray]: [VS, GrayFS],
  [ImageType.RevertBlueAndRed]: [VS, BGRAFS],
  [ImageType.Blur]: [VS, BlurFS],
};

export const ERROR_REG = /error:\s*\d+:(\d+)/gi;

export const DEFAULT_SHADER_TYPE: (keyof Pick<
  WebGLRenderingContext,
  'VERTEX_SHADER' | 'FRAGMENT_SHADER'
  >)[] = [
  'VERTEX_SHADER',
  'FRAGMENT_SHADER',
];

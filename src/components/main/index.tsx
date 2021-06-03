import { useState, useEffect, useRef, useCallback } from 'react';
import classnames from 'classnames';
import { createProgramFromSources } from '@/utils/webgl';
import { ShadersMap } from '@/constants/shaders';
import Image from '@/assets/img.jpeg';
import { ImageType } from '@/types/image';
import { render } from './utils';

import styles from './index.less';

interface Props {
  type: ImageType;
}

const Main = ({ type }: Props) => {
  const canvas = useRef<HTMLCanvasElement>({} as HTMLCanvasElement);
  const [gl, setGL] = useState<WebGL2RenderingContext | null>(null);
  const [program, setProgram] = useState<WebGLProgram | null>(null);

  useEffect(() => {
    canvas.current.width = Math.floor(window.innerWidth * 0.6);
    canvas.current.height = Math.floor(window.innerHeight * 0.7);
    const ctx = canvas.current.getContext('webgl2');

    if (!ctx) {
      throw new Error('Failed to get WebGL2 context');
    }

    setGL(ctx);
    const p = createProgramFromSources(ctx, ShadersMap[type], [], []);
    setProgram(p);
  }, [type]);

  const animation = useCallback(() => {
    if (gl && program) {
      void render(gl, program, Image);
    }
  }, [gl, program]);

  requestAnimationFrame(() => {
    animation();
  });

  return (
    <main
      className={classnames(
        'container-fluid',
        'bg-light d-flex flex-column justify-content-center align-items-center',
        styles.height
      )}
    >
      <h1 className="mb-4 text-warning">WebGL 处理图片 - 我妻善逸⚡️</h1>
      <canvas ref={canvas} id="canvas" />
    </main>
  );
};

export default Main;

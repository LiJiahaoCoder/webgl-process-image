import { useState, useEffect, useRef } from 'react';
import { createProgramFromSources } from '@/utils/webgl';
import VertexShaderSource from '@/shaders/vertex.glsl';
import FragmentShaderSource from '@/shaders/fragment.glsl';
import Image from '@/assets/img.jpeg';
import { render } from './utils';

const Main = () => {
  const canvas = useRef<HTMLCanvasElement>({} as HTMLCanvasElement);
  const [, setGL] = useState<WebGL2RenderingContext>({} as WebGL2RenderingContext);
  const [, setProgram] = useState<WebGLProgram>({} as WebGLProgram);

  useEffect(() => {
    canvas.current.width = Math.floor(window.innerWidth * 0.75);
    canvas.current.height = Math.floor(window.innerHeight * 0.8);
    const ctx = canvas.current.getContext('webgl2');

    if (!ctx) {
      throw new Error('Failed to get WebGL2 context');
    }

    setGL(ctx);
    const p = createProgramFromSources(
      ctx,
      [VertexShaderSource, FragmentShaderSource],
      [],
      [],
    );
    setProgram(p);

    void render(ctx, p, Image);
  }, []);

  return (
    <main className="container-fluid bg-light d-flex justify-content-center align-items-center py-5">
      <canvas ref={canvas} id="canvas" />
    </main>
  );
};

export default Main;

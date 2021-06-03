export async function render(
  gl: WebGL2RenderingContext,
  program: WebGLProgram,
  image: string
) {
  createVAO(gl);
  const { positionBuffer } = initializePosition(gl, program);
  await initializeTexture(gl, program, image);
  initializeCanvas(gl);
  initializeProgram(gl, program, positionBuffer);
}

function createVAO(gl: WebGL2RenderingContext) {
  const vao = gl.createVertexArray();
  gl.bindVertexArray(vao);
}

function initializePosition(gl: WebGL2RenderingContext, program: WebGLProgram) {
  const positionAttributeLocation = gl.getAttribLocation(program, 'a_Position');

  const positionBuffer = gl.createBuffer();
  gl.enableVertexAttribArray(positionAttributeLocation);
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

  return { positionBuffer };
}

async function initializeTexture(
  gl: WebGL2RenderingContext,
  program: WebGLProgram,
  path: string
) {
  const texCoordAttributeLocation = gl.getAttribLocation(program, 'a_TexCoord');

  const texCoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]),
    gl.STATIC_DRAW
  );
  gl.enableVertexAttribArray(texCoordAttributeLocation);
  gl.vertexAttribPointer(texCoordAttributeLocation, 2, gl.FLOAT, false, 0, 0);

  const texture = gl.createTexture();
  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  const image = await loadImage(path);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
}

function initializeCanvas(gl: WebGL2RenderingContext) {
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}

function initializeProgram(
  gl: WebGL2RenderingContext,
  program: WebGLProgram,
  buffer: WebGLBuffer | null
) {
  const resolutionLocation = gl.getUniformLocation(program, 'u_Resolution');
  const imageLocation = gl.getUniformLocation(program, 'u_Image');

  gl.useProgram(program);
  gl.uniform2f(resolutionLocation, gl.canvas.width, gl.canvas.height);
  gl.uniform1i(imageLocation, 0);
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

  setRectangle(gl);

  gl.drawArrays(gl.TRIANGLES, 0, 6);
}

function setRectangle(gl: WebGL2RenderingContext) {
  const x1 = 0;
  const x2 = gl.canvas.width;
  const y1 = 0;
  const y2 = gl.canvas.height;

  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([x1, y1, x2, y1, x1, y2, x1, y2, x2, y1, x2, y2]),
    gl.STATIC_DRAW
  );
}

function loadImage(path: string): Promise<HTMLImageElement> {
  const image = new Image();
  image.src = path;

  return new Promise((resolve) => {
    image.addEventListener('load', function () {
      resolve(image);
    });
  });
}

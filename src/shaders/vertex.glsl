#version 300 es

in vec2 a_Position;
in vec2 a_TexCoord;
uniform vec2 u_Resolution;
out vec2 v_TexCoord;

void main() {
  vec2 zeroToOne = a_Position / u_Resolution;
  vec2 zeroToTwo = zeroToOne * 2.0;
  vec2 clipSpace = zeroToTwo - 1.0;

  gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
  v_TexCoord = a_TexCoord;
}

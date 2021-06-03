#version 300 es

precision highp float;

uniform sampler2D u_Image;
in vec2 v_TexCoord;
out vec4 outColor;

void main() {
  vec4 color = texture(u_Image, v_TexCoord);
  float average = (color.r + color.g + color.b) / 3.0;
  outColor = vec4(average, average, average, color.a);
}

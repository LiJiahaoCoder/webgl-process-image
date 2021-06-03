#version 300 es

precision highp float;

uniform sampler2D u_Image;
in vec2 v_TexCoord;
out vec4 outColor;

void main() {
  outColor = texture(u_Image, v_TexCoord);
}

#version 300 es

precision highp float;

uniform sampler2D u_Image;
uniform vec2 u_Resolution;
in vec2 v_TexCoord;
out vec4 outColor;

float weight[9] = float[] (0.0947416, 0.118318, 0.0947416, 0.118318, 0.147761, 0.118318, 0.0947416, 0.118318, 0.0947416);

void main() {
  vec4 color;

  for(int i = 0; i < 9; i++) {
    vec2 coord;
    coord.x = v_TexCoord.x + float(i % 3 - 1) / u_Resolution.x;
    coord.y = v_TexCoord.y + float(int(i / 3) - 1) / u_Resolution.y;
    color = color + texture(u_Image, coord) * weight[i];
  }

  outColor = color;
}

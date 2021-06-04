#version 300 es

precision highp float;

uniform sampler2D u_Image;
uniform vec2 u_Resolution;
in vec2 v_TexCoord;
out vec4 outColor;

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
  vec2 st = v_TexCoord.xy / u_Resolution.xy * 20000.0;
  vec2 ipos = floor(st);
  vec3 color = vec3(random(ipos));

  outColor = vec4(color, 1.0);
}

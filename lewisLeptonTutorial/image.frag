#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

uniform sampler2D aaaa;

void main(){
  vec2 coord = gl_FragCoord.xy / u_resolution;
  vec3 color = vec3(0.0);

  // coord.y = sin(u_time / 40.0);
  gl_FragColor = texture2D(aaaa, coord);
}
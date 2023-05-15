#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

void main(){
    vec2 coord = (gl_FragCoord.xy  / u_resolution.y);
    vec3 color = vec3(0.8, 0.2, 0.0);
    vec2 translate = vec2(-0.5, -0.5);
    coord += translate;

    for(int i = 0; i < 60; i++){
        float radius = 0.3;
        float rad = radians(360.0 / 60.0) * float(i); 
        color += 0.0007 / length(coord + vec2(radius * cos(rad), radius * sin(rad)));
    }

    gl_FragColor = vec4(color, 1.0);
}
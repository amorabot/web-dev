#ifdef GL_ES
precision mediump float;
#endif


uniform sampler2D simulationSample;
uniform vec2 iResolution;

const int BIT_COUNT = 8;

vec3 substituteVoid(vec3 col, float threshold, vec3 newColor){
  float g = (col.x + col.y + col.z) /3.0; //(0-1), if black -> aprox. 0
  float isBlack = floor((1.0 + threshold) - g); // 1.1 -> 1 | 0.7 -> 0 | 0.3 -> 0

  return mix(col, newColor, isBlack); 
}

int modi(int x, int y) {
    return x - y * (x / y);
}

int bitwiseAND(int a, int b) {
    int result = 0;
    int n = 1;

    for(int i = 0; i < BIT_COUNT; i++) {
        if ((modi(a, 2) == 1) && (modi(b, 2) == 1)) {
            result += n;
        }

        a = a / 2;
        b = b / 2;
        n = n * 2;

        if(!(a > 0 && b > 0)) {
            break;
        }
    }
    return result;
}

int shiftRight(int a, int b){
  float n = float(a);
  float exp = (pow(2.0,float(b)));
  mediump int result = int(n/exp);
  
  return result;
}

float character(int n, vec2 p)
{
	p = floor(p*vec2(-4.0, 4.0) + 2.5);
    if (clamp(p.x, 0.0, 4.0) == p.x)
	{
        if (clamp(p.y, 0.0, 4.0) == p.y)	
		{
        	int a = int(ceil(p.x) + 5.0 * ceil(p.y));
            if (bitwiseAND(shiftRight(n,a),1) == 1) return 1.0;
		}	
    }
	return 0.0;
}

void main()
{   
  vec2 pix = gl_FragCoord.xy;
  
  //Reverting the original image
  vec2 uvSpace = floor(pix.xy/8.0)*8.0/iResolution.xy;
  uvSpace.y = (1.0) - uvSpace.y;
  
  vec3 col = texture2D(simulationSample, uvSpace).xyz;	

  float gray = 0.3 * col.r + 0.59 * col.g + 0.11 * col.b;

  int n =  4096;

  // limited character set
  if (gray > 0.2) n = 65600;    // :
  if (gray > 0.3) n = 163153;   // *
  if (gray > 0.4) n = 15255086; // o 
  if (gray > 0.5) n = 13121101; // &
  if (gray > 0.6) n = 15252014; // 8
  if (gray > 0.7) n = 13195790; // @
  if (gray > 0.8) n = 11512810; // #

  //Inverter charset
  // if (gray > 0.2) n = 11512810;    // :
  // if (gray > 0.3) n = 13195790;   // *
  // if (gray > 0.4) n = 15252014; // o 
  // if (gray > 0.5) n = 13121101; // &
  // if (gray > 0.6) n = 15255086; // 8
  // if (gray > 0.7) n = 163153; // @
  // if (gray > 0.8) n = 65600; // #

  vec2 p = mod(pix/4.0, 2.0) - vec2(1.0);

  col = col*character(n, p);

  // col = substituteVoid(col, 0.05, vec3(0.1, 0.4, 0.1));

  gl_FragColor = vec4(col, 1.0);
}
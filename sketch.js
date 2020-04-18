var resultado;
var ax,ay;
var x,y;
var cWidth,cHeight

function setup() 
{
  createCanvas (windowWidth, windowHeight);
  cWidth=windowWidth/2
  cHeight=windowHeight/2
}

function draw() 
{
	DDA(0,0,windowWidth,windowHeight)
	DDA(cWidth,0,cWidth,windowHeight)
	DDA(windowWidth,0,0,windowHeight)
	DDA(0,cHeight,windowWidth,cHeight)
  noLoop()
}

function DDA(x1, y1, x2, y2) 
{
  let dx=x2-x1
  let dy=y2-y1
  let x=x1
  let y= y1
  let i = 0
  let limite

  if(Math.abs(dx)>Math.abs(dy))
    limite=Math.abs(dx)
  else
    limite=Math.abs(dy)

  let xi=dx/limite
  let yi=dy/limite
 
  while(i < limite){
		point(x,y)
		x += xi
		y += yi 
		i++
	}
}
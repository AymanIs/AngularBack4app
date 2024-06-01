/*const colorRed = 0;
const colorGreen = 5;
const colorblue = 3;

enum Color{Red = 0 , Green = 5 , Blue = 3} ;
let backgoundColor = Color.Blue;
console.log(backgoundColor); */
/*function test(){
    var message ;
    message= 'hellow'

var a;
if((message as string ).endsWith('w')){
    a = true;
}else{
    a = false
}
console.log(a) ;
}*/

class Test{

constructor(private x?:number , private y?:number){
   

   }
   draw(){
    console.log('this is x : '+ this.x + 'this is y : ' + this.y)
   }
   getX(){
    return this.x;
   }
   setX(value:number){
    if(value < 0 )
        throw new Error('the number is lower than X')
    this.x=value;
   }
}

let test = new Test(3,5);
test.setX(1);
test.draw()


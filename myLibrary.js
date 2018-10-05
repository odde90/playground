/** 
 * this is a calculator for rectrangel, triagel, circle 
 * @param width {number}
 * @param height {number}
 * @returns the area of the rectangel
 **/
function calculateRictangleArea (width, height) {
    return width * height;
}

/** 
 * this is a calculator for rectrangel, triagel, circle 
 * @param width {number}
 * @param height {number}
 * @returns the area of the rectangel
 **/

function calculateTriangelArea (base, height){
    return base * height / 2;
}

function calculateCircleArea (diameter, radie){
    return Math * radius * radius;
}

 console.log(calculateRictangleArea (5.5, 3,3));
 console.log(calculateTriangelArea(5.5, 3,3));
 console.log(calculateCircleArea(2));

var products = [
{
    img: "https://target.scene7.com/is/image/Target/12110209?wid=1560&hei=1560&fmt=pjpeg",

    price: "$29.99",

    description: "Honeywell QuietSet 8-Speed Tower Fan Oscillating"

},
{
    img: "https://target.scene7.com/is/image/Target/13829143?wid=3000&qlt=70&fmt=pjpeg",

    price: "$50.99",

    description: "Vornado - 3-Speed Whole Room Tower Circulator"

},
{
    img: "https://target.scene7.com/is/image/Target/17142218?wid=3000&qlt=70&fmt=pjpeg",

    price: "$109.99",

    description: "Dyson AM09 Hot & Cool Fan"

},

{
    img: "https://target.scene7.com/is/image/Target/12283403?wid=3000&qlt=70&fmt=pjpeg",

    price: "$99.99",

    description: "Holmes 18 Stand Fan with Remote Control Oscillating - Black"

},
{
    img: "https://target.scene7.com/is/image/Target/11189536?wid=3000&qlt=70&fmt=pjpeg",

    price: "$20.00",

    description: " Elegance and Performance Pedestal Fan with Remote - White Oscillating"

},
{
    img: "https://target.scene7.com/is/image/Target/51007270?wid=3000&qlt=70&fmt=pjpeg",

    price: "$80.00",

    description: " 5-Speed Tower Air Circulator with Versa-Flow and Remote Control"

},
]

for(var i = 0; i < products.length; i++){
    
    var phot = products[i].img;

    var price = products[i].price;

    var desc = products[i].description;

    console.log([i])


    var pic = document.getElementById("img" + [i]);

    var costs = document.getElementById("cost" + [i]);

    var titles = document.getElementById("title" + [i]);

    pic.src = phot;

    pic.style.height ="350px";

    costs.textContent = price;

    titles.textContent = desc;

    
}
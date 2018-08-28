
var pizzaOven = new PizzaOven("California");
pizzaOven.setToppings(["Barbecue", "Mustard", "Ricotta", "Red Pepper"]);
console.log(pizzaOven.create());

function reset(): void {
    $("#txtPizza").val("");
    $("#txtIngredients").val("");
    $("#ingredientList").html("");
}

let strDelete = ''; //`<button type="button" class="close text-right" aria-label="Close"><span aria-hidden="true">&times;</span></button>`;

function addIngredient(): void {
    let ingredient = $("#txtIngredients").val();
    $("#ingredientList").append("<li class='list-group-item'>"+ingredient+ strDelete+"</li>");
    $("#txtIngredients").val("");
}

function submitClicked(): void {
    let ingredients:string[]=[];
    let ul = $("#ingredientList").find("li");
    $.each( ul, function( key, value ) {
        ingredients.push($(value).html());
    });

    let pizzaName:string = $("#txtPizza").val()+"";
    let pizzaOven = new PizzaOven(pizzaName);
    pizzaOven.setToppings(ingredients);
    createMenu(pizzaOven.create());
    reset();
}

function createMenu(pizza:PizzaInterface):void{
    let strHTML = "<li class='list-group-item'>";
    strHTML += "<div class='row'>";
    strHTML += "<div class='col-lg-12'>"+pizza.name+"</div>";
    strHTML += "<div class='col-lg-12'>"+pizza.toppings+"</div>"
    strHTML += "</div></li>";
    $("#menuList").append(strHTML);
}

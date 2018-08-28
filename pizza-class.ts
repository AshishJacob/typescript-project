console.log("Pizza INTERFACE");
interface PizzaInterface{
	name:string;
	toppings?:string[];
	done?:boolean;
}

console.log("--------------------------------------------");

console.log("Pizza Class SETTERS GETTERS");

class PizzaOven {
	private name:string;
	private toppings?:string[];
	private done?:boolean;

	constructor(name:string){
		this.name=name;
	}

	setToppings(toppings:string[]){
			this.toppings=toppings;
	}

	private setDone(){
		this.done=true;
	}

	create():PizzaInterface {
		this.setDone();
		let cookPizza:PizzaInterface = {
			name:this.name,
			toppings:this.toppings,
			done:this.done
		}
		return cookPizza;
	}
}

/* TESTE */

class Greeter {
    constructor(public greeting: string) { }
    greet() {
        return "<h3>" + this.greeting + "</h3>";
    }
};

var greeter = new Greeter("Hello, world!");    
document.body.innerHTML = greeter.greet();

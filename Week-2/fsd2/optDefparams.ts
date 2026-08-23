function greet(name: string = "Guest", age?: number) {
    console.log(name);

    if(age){
        console.log(age);
    }
}

greet("Manisha",20);
greet();
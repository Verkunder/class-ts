interface IProps {
    name: string,
    age: number,
    isAdmin: boolean
}

const user: IProps = {
    name: 'Stepan',
    age: 23,
    isAdmin: true
}

class MyClass {
    static a = 10 // эквивалентно public a = 10
    private name: string = 'Step'; // к этой переменной нельзя обратиться вне класса
    protected age: number = 23; // доступна только в классах наследниках
    static b() {
        console.log(this.a)
    }

    constructor(name, age) {
        this.name = name;
        this.age = age
    }
}

class ExampleClass extends MyClass {
    static log() {
        console.log('123')
    }
}

console.log(MyClass.a)
MyClass.b()

const z: MyClass = new MyClass('Stepan', 23)

ExampleClass.b()

//type полезны для объединяемых типов (например, type MyType = TypeA | TypeB); тогда как интерфейсы лучше использовать для объявления форм, а затем для их реализации или расширения
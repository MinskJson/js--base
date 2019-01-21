function Calculator() {
    let x = 0;
    let methods;

    function set(a) {
        x = a;
        return methods;
    }

    function get() {
        return x;
    }

    function add(b) {
        x += b;
        return methods;
    }

    function divide(b) {
        x /= b;
        return methods;
    }

    methods = {
        add,
        divide,
        set,
        get
    }

    return methods;
};

const calc = new Calculator();

// calc
//     .set(5)
//     .add(3)
//     .divide(2);

(()=> {
    // actions
    const setAction = document.querySelector('#set');
    const addAction = document.querySelector('#add');
    const divideAction = document.querySelector('#divide');

    // input
    const input = document.querySelector('#input');

    // result
    const result = document.querySelector('#calc');

    function render() {
        result.innerHTML = calc.get();
    }

    setAction.addEventListener('click', ()=> {
        calc.set(parseFloat(input.value));
        render();
    });

    addAction.addEventListener('click', ()=> {
        calc.add(parseFloat(input.value));
        render();
    });

    divideAction.addEventListener('click', ()=> {
        calc.divide(parseFloat(input.value));
        render();
    });
})()

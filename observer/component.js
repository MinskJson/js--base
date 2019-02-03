// const Observer = (obj, name, func) => {
//     let value = null;
//     Object.defineProperty(obj, name, {
//         get: function() { return value; },
//         set: function(newValue) {
//             value = newValue;

//             func && func();

//             return value;
//         },
//       });
// }

class Component {
    __renderChildren(el, children) {
        if (el.children) {
            Array.from(this.el.children).forEach(e => e.remove());
        }

        children.forEach(e => {
            el.appendChild(e.render());
        });

        return el;
    }
}

class Framework {
    static attachElement(selector, component) {
        const el = document.querySelector(selector);
        el.appendChild(component.render());
    }
}

Framework.Component = Component;

class Text extends Framework.Component {
    constructor(text) {
        super();
        this.fragment = document.createElement("fragmet");
        this.text = text;
    }

    render() {
        this.fragment.innerText = this.text;
        return this.fragment;
    }
}

class Element extends Framework.Component {
    constructor(name, description) {
        super();

        this.el = document.createElement("div");
        // this.render = () => {
        //     const children = [
        //         new Text(this.name),
        //         this.description && new Text(this.description[0].description)
        //     ].filter(e => e);

        //     return this.__renderChildren(this.el, children);
        // }

        // Observer(this, 'name', this.render);
        this.state = {
            name: name,
            description: description,
        }
    }

    setState(obj) {
        Object.assign(this.state, obj);
        this.render();
    }

    render() {
        const {name, description} = this.state;
        const children = [
            new Text(name),
            description && new Text(description[0].description)
        ].filter(e => e);

        return this.__renderChildren(this.el, children);
    }
}

let arr = [{description: 'X'}];
const app = new Element("joe", arr);
Framework.attachElement("#app", app);

let num = 1;

setInterval(() => {
    arr[0].description += 1;
    app.setState({
        // name: 'Joe' + num,
        description: arr
    })

    num++;
}, 500);


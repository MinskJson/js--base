const todoItemComponent = {
    view: function(name) {
        const fragment = document.createElement('fragmet');
        fragment.innerHTML =
            `
            <label class="todo-item">
                <input class="todo-item__check" type="checkbox" />

                <span class="todo-item__name">
                    ${name}
                </span>
                <button class="todo-item__remove">
                    x
                </button>
            </label>
        `;

        // способ 1 на удаление
        // fragment
        //     .querySelector('.todo-item__remove')
        //     .addEventListener('click', (e) => {
        //         fragment.remove();
        //     });

        return fragment;
    },

    add(str) {
        const list = document.querySelector('.todo-list');
        list.appendChild(todoItem(str));

        render();
    },

    remove(element) {
        element.remove();

        render();
    }
}

const todoComponent = {
    render: function () {
        const count = document.querySelector('.todo-footer__count');
        const list = document.querySelector('.todo-list');

        count.innerText = list.children.length;

        const filter = document.querySelector('[type="radio"]:checked');

        let items = Array.from(document.querySelectorAll('.todo-item'));

        // не выполняем код ниже
        if (items.length === 0) return;

        items.forEach(el => {
            el.classList.remove('todo-item--hidden');
        });

        switch (filter.value) {
            case 'complite': {
                let items = Array.from(document.querySelectorAll('.todo-item__check:not(:checked)'));
                items.forEach(el => {
                    el.closest('.todo-item').classList.add('todo-item--hidden');
                });
                break;
            }
            case 'active': {
                let items = Array.from(document.querySelectorAll('.todo-item__check:checked'));
                items.forEach(el => {
                    el.closest('.todo-item').classList.add('todo-item--hidden');
                });
                break;
            }
        }
    },
    create() {
        const list = document.querySelector('.todo-list');
        list.addEventListener('click', (e) => {
            if (e.target.matches('.todo-item__remove')) {
                remove(e.target.closest('fragmet'));
            }

            render();
        });

        const filterActions = document.querySelector('.todo-footer__actions');
        filterActions.addEventListener('click', (e) => {
            render();
        });

        const form = document.querySelector('.todo-form');
        form.addEventListener('submit', (e) => {
            const tagForm = e.target;
            const tagInput = tagForm.checkName;

            add(tagInput.value);
            tagInput.value = '';

            e.preventDefault();
        });

        render();
    }
}

todoComponent.create();

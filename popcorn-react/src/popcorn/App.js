import React, { Component } from 'react';
import axios from 'axios';
import memo from 'memoize-one';
import './App.css';

class ListItem extends Component {
    onPug = () => {
        const {item, onPug} = this.props;
        onPug && onPug(item);
    }

    render() {
        const {item} = this.props;
        const {img, title, subTitle, rate} = item;

        return <div className="list-item" onClick={this.onPug}>
            <div className="list-item__block list-item__img-wr">
                <img alt="" src={img} />
            </div>

            <div className="list-item__block">
                <div className="list-item__title">{title}</div>
                <div className="list-item__sub-title">{subTitle}</div>
                <div className="list-item__rate">
                    <span>Rate</span>
                    <b>{rate}</b>
                </div>
            </div>
        </div>
    }
}

class Item extends Component {
    onClick = () => {
        const {item, onClick} = this.props;
        onClick && onClick(item);
    }

    render() {
        const {item} = this.props;
        const {img, title, subTitle, rate} = item;

        return <div className="list-item" onClick={this.onClick}>
            <div className="list-item__block list-item__img-wr">
                <img alt="" src={img} />
            </div>

            <div className="list-item__block">
                <div className="list-item__title">{title}</div>
                <div className="list-item__sub-title">{subTitle}</div>
                <div className="list-item__rate">
                    <span>Rate</span>
                    <b>{rate}</b>
                </div>
            </div>
        </div>
    }
}

class LoadData extends Component {
    state = {
        isLoading: true,
        data: [],
    }

    componentDidMount() {
        const url = 'https://catalog.api.onliner.by/search/products?query=%D0%BF%D0%B5%D1%87%D0%B8';

        axios.get(url)
          .then((response) => {
             const data = response.data;
            if (data) {
                this.setState({
                    isLoading: false,
                    data: data.products.map(e => {
                    return {
                        key: e.key,
                        img: e.images.header,
                        title: e.full_name,
                        subTitle: e.description,
                        rate: e.reviews.rating
                    }
                })});
            }
          })
    }


    render() {
        const { children } = this.props;
        return children(this.state);
    }
}

class App extends Component {
    state = {
        query: '',
        item: null,
    };

    onInput = (e) => {
        this.setState({
            qeury: e.target.value
        });
    }

    onRef = (ref) => {
        console.log(ref);
        this.input = ref;
    }

    filterItems = memo((qeury, arr) => {
        return qeury ? arr.filter(e=> e.title && e.title.includes(qeury)) : arr;
    });

    setCurrentItem = (item) => {
        console.log(item);

        this.setState({
            item
        })
    }

    removeItem = () => {
        this.setState({
            item: null
        })
    }

    render() {
        const { qeury, item } = this.state;

        if (item) {
            return <Item item={item} onClick={this.removeItem} />
        }

        // if (data.length === 0) {
        //     return <div>Loading...</div>;
        // }



        return <div>
            <div className="button">Hello</div>
            <input type="text" ref={this.onRef} onInput={this.onInput}/>

            <LoadData>
                {({isLoading, data})=> {
                    if (isLoading) {
                        return <div>Is Loading...</div>
                    }
                    const filterdData = this.filterItems(qeury, data);
                    return filterdData.map(item => <ListItem key={item.key} item={item} onPug={this.setCurrentItem} />)
                }}
            </LoadData>
        </div>
    }
}

export default App;

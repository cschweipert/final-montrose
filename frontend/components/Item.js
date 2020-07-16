import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import formatMoney from '../lib/formatMoney';

export default class Item extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
    };

    render() {
        const { item } = this.props;
        return (
            <div>
                {item.image && <img src={item.image} alt={item.title} />}

                <h3>
                    <Link
                        href={{
                            pathname: '/item',
                            query: { id: item.id },
                        }}
                    >
                        <a>{item.title}</a>
                    </Link>
                </h3>
                <h3>{formatMoney(item.price)}</h3>
                <p>{item.description}</p>

                <div className="buttonList">
                    <Link
                        href={{
                            pathname: 'update',
                            query: { id: item.id },
                        }}
                    >
                        <a>Edit ✏️</a>
                    </Link>
                    <button>Add To Cart</button>
                    <button>Delete </button>
                </div>
            </div>
        );
    }
}
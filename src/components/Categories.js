import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: "all",
                    name: "Всё"

                },
                {
                    key: "Nike",
                    name: "Nike"

                },
                {
                    key: "Vans",
                    name: "Vans"

                },
                {
                    key: "Converse",
                    name: "Converse"

                },
                {
                    key: "Puma",
                    name: "Puma"

                },
                {
                    key: "Adidas",
                    name: "Adidas"

                },
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories
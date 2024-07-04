import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"
import Categories from "./components/Categories"
import ShowFullItem from "./components/ShowFullItem"


class App extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id:1,
          title:"Мужские кроссовки Nike Air Force 1 '07",
          img:"air force.jpg",
          desc: "Кроссовки Nike Air Force 1 ’07 притягивают взгляды. Эта обновленная версия баскетбольной модели OG с прочными прошитыми накладками, эффектными цветами и идеальным сиянием сделает твой образ блестящим. ",
          category: "Nike",
          price: "20.999",
        },
        {
          id:2,
          title:"Мужские кроссовки Nike Blazer Low '77 Vintage",
          img:"blazer.jpg",
          desc: "Модель Nike Blazer Low '77 Vintage, завоевавшая популярность на улицах благодаря своей классической простоте и комфорту, возвращается в оригинальном баскетбольном силуэте в низкопрофильном исполнении. ",
          category: "Nike",
          price: "16.999",
        },
        {
          id:3,
          title:"Кеды мужские Vans Knu Skool",
          img:"vans.jpg",
          desc: "Уличный стиль в лучшем его проявлении. Это все про кеды Vans Knu Skool. Пара выполнена из натуральной замши и сетчатого тектсиля. ",
          category: "Vans",
          price: "10.499",
        },
        {
          id:4,
          title:"Кеды Converse Chuck Taylor 70 Hi",
          img:"converse.jpg",
          desc: "Кеды Converse Chuck Taylor 70 Hi — это классика с современными деталями. Они отличаются более высоким резиновым покрытием на подошве, мягкой стелькой, обеспечивающей длительный комфорт, и более прочным резиновым мыском. ",
          category: "Converse",
          price: "9.899",
        },
        {
          id:5,
          title:"Мужские кроссовки adidas Supernova Cushion 7",
          img:"supernova.jpg",
          desc: "Кроссовки adidas Supernova Cushion 7 — возрождение архивных беговых моделей 2000-х годов. Пара сочетает в себе ретро-визуал и технологичность, которая позволяет с комфортом носить кроссовки каждый день. Верх из сетчатого текстиля хорошо пропускает воздух, а синтетические накладки повышают износостойкость модели. ",
          category: "Adidas",
          price: "13.599",
        },
        {
          id:6,
          title:"Кроссовки PUMA Velophasis Sprint",
          img:"velophasis.jpg",
          desc: "Модель PUMA Velophasis Always On вдохновлена культовыми силуэтами 2000-х годов и традиционными беговыми парами бренда. Верх кроссовок выполнен из сетчатого текстиля, дополнен синтетическими накладками и формованной деталью из ТПУ для поддержки стопы. ",
          category: "Puma",
          price: "11.899",
        },
        {
          id:7,
          title:"Мужские кеды Vans Skate 8 Low Csue",
          img:"vans low.jpg",
          desc: "Любимая обувь скейтбордистов и серферов заслуживает отдельного стеллажа в гардеробе поклонников уличной культуры. Модель Vans Skate 8 Low Csue вдохновлена высоким силуэтом Sk8-Hi, имеет прочный верх из парусины и натуральной замши. ",
          category: "Vans",
          price: "7.999",
        },
        {
          id:8,
          title:"Мужские кроссовки adidas Gazelle",
          img:"gazelle.jpg",
          desc: "Adidas Gazelle — классические низкие кроссовки для мужчин, разработанные в 1968 году. Изначально предназначенные для игры в футбол, сегодня adidas Gazelle являются одной из самых популярных моделей бренда, неизменно выпускающейся в каждой коллекции adidas Originals. ",
          category: "Adidas",
          price: "11.499",
        },
        {
          id:9,
          title:"Кроссовки PUMA Suede ",
          img:"suede.jpg",
          desc: "Классическая модель 1968 года возвращается в современном исполнении. PUMA Suede Neon в сочном розовом цвете изготовлены из натуральной замши. Архивный брендинг PUMA на язычках, печатный логотип сбоку и на задниках, а также культовая полоса Formstrip по бокам. ",
          category: "Puma",
          price: "8.999",
        },
        
        
      ],
      ShowFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items 
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)

  }
  render() {
  return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder} />
      <Categories chooseCategory={this.chooseCategory}/>
      <Items onShowItem={this.onShowItem} items = {this.state.currentItems} onAdd={this.addToOrder} />

      {this.state.ShowFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
      <Footer />
    </div>
  )
}

onShowItem(item){
  this.setState({fullItem: item})
  this.setState({ShowFullItem: !this.state.ShowFullItem})
}

chooseCategory(category) {
  if(category === 'all') {
    this.setState({currentItems: this.state.items})
    return
  }

  this.setState({
    currentItems:this.state.items.filter(el => el.category === category)
  })
}

deleteOrder(id) { 
  this.setState({orders: this.state.orders.filter(el => el.id !== id)})
}

addToOrder(item) {
  let isInArray = false
  this.state.orders.forEach(el => {
    if(el.id === item.id)
      isInArray = true
  })
  if (!isInArray) 
    this.setState({orders: [...this.state.orders, item] })
}

}
export default App;
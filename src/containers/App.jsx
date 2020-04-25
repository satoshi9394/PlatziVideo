import React from 'react'
//componentes
import Header from '../components/Header'
import Search from '../components/Search'

import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'

import Footer from '../components/Footer'

//styles
import '../assets/styles/App.scss'

//customeHoks
import useInitialState from '../hooks/useInitialState' 

const API = 'http://localhost:3000/initalState'

const App = () =>{ 
  const initialState = useInitialState(API);

  return(
    <div className="App">
      <Header/>
      <Search/>
      {
        initialState.mylist.length > 0 &&
        <Categories title="Mi lista">
          <Carousel>
          {console.log(mylist)}
            {initialState.mylist.map( item => 
              <CarouselItem key={item.id} {...item}/>
            )}
          </Carousel>
        </Categories>
      }
      
      <Categories title="Tendencias">
        <Carousel>
          {initialState.trends.map( item => 
            <CarouselItem key={item.id} {...item}/>
          )}
        </Carousel>
      </Categories>

      <Categories title="Originales de Platzi Video">
        <Carousel>
          {initialState.originals.map( item =>
            <CarouselItem key={item.id} {...item}/>
          )}
        </Carousel>
      </Categories>

      <Footer/>
    </div>
  );
}

export default App
import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Listing from './tenants/listing'
import Searched from './tenants/searched'
import MoreInfo from './tenants/MoreInfo'
import Login from './sign/sign'
import Layout from './sign/layout'
import HomeTenants from './tenants/home'
import HomeOwner from './propertyOwner/home'
import Favourites from './tenants/favourites'
import AddOwner from './propertyOwner/add'
import Service from './propertyOwner/service'
import MyProperty from './propertyOwner/myProperty'
import { FavoritesProvider } from './FavouriteContext'
import ApartmentRent from './tenants/rent/apartmentRent'
import OfficeRent from './tenants/rent/officerent'
import HouseRent from './tenants/rent/houserent'
import BedsitterRent from './tenants/rent/bedsitter'
import HouseSale from './tenants/sale/houseSale'
import OfficeSale from './tenants/sale/officeSale'
import Wifi from './propertyOwner/service/wifi'
import Security from './propertyOwner/service/security'
import Janitor from './propertyOwner/service/janitor'
import Electric from './propertyOwner/service/electric'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Layout>
      <FavoritesProvider>
    <Routes>
<Route path='/' element={<HomeTenants/>}></Route>
<Route path='/propertyOwner' element={<HomeOwner/>}></Route>
<Route path='/addOwner' element={<AddOwner/>}></Route>
<Route path='/tenants' element={<Listing/>}></Route>
<Route path='/service' element={<Service/>}></Route>
<Route path='/myProperty' element={<MyProperty/>}></Route>
<Route path="/favourites" element={<Favourites />}></Route>
<Route path='/search-results' element={<Searched/>}></Route>
<Route path='/moreInfo/:id' element={<MoreInfo/>}></Route>
<Route path='/signIn' element={<Login/>}></Route>
<Route path='/apartmentRent' element={<ApartmentRent/>}></Route>
<Route path='/bedsitterRent' element={<BedsitterRent/>}></Route>
<Route path="/houseRent" element={<HouseRent/>}></Route>
<Route path='/officeRent' element={<OfficeRent/>}></Route>
<Route path='/houseSale' element={<HouseSale/>}></Route>
<Route path='/officeSale' element={<OfficeSale/>} ></Route>
<Route path='/wifi' element={<Wifi/>}></Route>
<Route path='/security'  element={<Security/>}></Route>
<Route path='/janitor' element={<Janitor/>}></Route>
<Route path='/electric' element={<Electric/>}></Route>
    </Routes>
    </FavoritesProvider>
    </Layout>
    </BrowserRouter>
     
    </>
  )
}

export default App

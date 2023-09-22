import React from 'react';
<<<<<<< HEAD
//import { Content, Footer, Header } from './func-components';
//import Calendar from './class-components';
//import Banner from './banner';
//import {Calculator} from './calculator';
//import { EventData2 } from './event-data';
//import RefsFunc from './refs-func';
//import RefsArray from './refs-array';
//import MessageBox from './state-func';
import Router2 from './router2';
import Router3 from './router3';
=======
// import { Content, Footer, Header } from './func-components';
// import Calendar from './class-components';
// import Banner from './banner';
// import {Calculator} from './calculator';
// import { EventData2 } from './event-data';
// import RefsFunc from './refs-func';
// import RefsArray from './refs-array';
// import MessageBox from './state-func';
   import { userContext } from './context';
// import Header from './context-header';
// import Content from './context-content';
   import Header2 from './context-header2';
   import Content2 from './context-content2';
>>>>>>> 4175848ae7649b8bf09b2fb4d672deee5cb786d5



export default function App() {
  let [user,setUser] = React.useState('')
  return (
<<<<<<< HEAD
    <Router3/>
    
=======
   <userContext.Provider value = {[user,setUser]}>
    <Header2/>
    <Content2/>
    </userContext.Provider>
>>>>>>> 4175848ae7649b8bf09b2fb4d672deee5cb786d5
  )
}

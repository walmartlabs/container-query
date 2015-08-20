import React from "react/addons";

import {ContainerQuery} from "../../src/index";

import Book from "./book";

export default class StyleBasedLayout extends React.Component {
  render() {
    return (
      <ContainerQuery
        breakpoints={{small: 0, medium: 200, large: 400}}>
        <Book
          style-small={{width:'100%'}}
          style-medium={{width:'50%'}}
          style-large={{width:'25%'}}
          src={require('../images/Dune.jpg')}
          title="Dune" />
        <Book
          style-small={{width:'100%'}}
          style-medium={{width:'50%'}}
          style-large={{width:'25%'}}
          src={require('../images/ChildrenOfDune.jpg')}
          title="Children of Dune" />
        <Book
          style-small={{width:'100%'}}
          style-medium={{width:'50%'}}
          style-large={{width:'25%'}}
          src={require('../images/ChapterhouseDune.jpg')}
          title="Chapterhouse Dune" />
        <Book
          style-small={{width:'100%'}}
          style-medium={{width:'50%'}}
          style-large={{width:'25%'}}
          src={require('../images/DuneMessiah.jpg')}
          title="Dune Messiah" />
        <Book
          style-small={{width:'100%'}}
          style-medium={{width:'50%'}}
          style-large={{width:'25%'}}
          src={require('../images/HereticsOfDune.jpg')}
          title="Heretics Of Dune" />
        <Book
          style-small={{width:'100%'}}
          style-medium={{width:'50%'}}
          style-large={{width:'25%'}}
          src={require('../images/GodEmperorOfDune.jpg')}
          title="God Emporer of Dune" />
      </ContainerQuery>
    );
  }
}

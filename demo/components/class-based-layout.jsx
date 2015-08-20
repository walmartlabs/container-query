import React from "react/addons";

import {ContainerQuery} from "../../src/index";

import Book from "./book";

export default class ClassBasedLayout extends React.Component {
  render() {
    return (
      <ContainerQuery breakpoints={{small: 0, medium: 200, large: 400}}>
        <Book
          className-small="book col-12"
          className-medium="book col-6"
          className-large="book col-3"
          src={require('../images/Dune.jpg')}
          title="Dune" />
        <Book
          className-small="book col-12"
          className-medium="book col-6"
          className-large="book col-3"
          src={require('../images/ChildrenOfDune.jpg')}
          title="Children of Dune" />
        <Book
          className-small="book col-12"
          className-medium="book col-6"
          className-large="book col-3"
          src={require('../images/ChapterhouseDune.jpg')}
          title="Chapterhouse Dune" />
        <Book
          className-small="book col-12"
          className-medium="book col-6"
          className-large="book col-3"
          src={require('../images/DuneMessiah.jpg')}
          title="Dune Messiah" />
        <Book
          className-small="book col-12"
          className-medium="book col-6"
          className-large="book col-3"
          src={require('../images/HereticsOfDune.jpg')}
          title="Heretics Of Dune" />
        <Book
          className-small="book col-12"
          className-medium="book col-6"
          className-large="book col-3"
          src={require('../images/GodEmperorOfDune.jpg')}
          title="God Emporer of Dune" />
      </ContainerQuery>
    );
  }
}

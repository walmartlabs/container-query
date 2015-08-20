import React from "react/addons";

import {ContainerQuery} from "../../src/index";

import Book from "./book";

export default class ColumnBasedLayout extends React.Component {
  render() {
    return (
      <ContainerQuery.Columns
        breakpoints={{small: 0, medium: 250, large: 425}}
        at-small={1} at-medium={2} at-large={4}>
        <Book
          src={require('../images/Dune.jpg')}
          title="Dune" />
        <Book
          src={require('../images/ChildrenOfDune.jpg')}
          title="Children of Dune" />
        <Book
          src={require('../images/ChapterhouseDune.jpg')}
          title="Chapterhouse Dune" />
        <Book
          src={require('../images/DuneMessiah.jpg')}
          title="Dune Messiah" />
        <Book
          src={require('../images/HereticsOfDune.jpg')}
          title="Heretics Of Dune" />
        <Book
          src={require('../images/GodEmperorOfDune.jpg')}
          title="God Emporer of Dune" />
      </ContainerQuery.Columns>
    );
  }
}

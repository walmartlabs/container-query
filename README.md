ContainerQuery
==============

A common problem in responsive design is the layout being depedent on the width
of the media (i.e. a media query) as opposed to the width of the host container
(i.e. a container query).

For example, let's say you have a book list, and you want it to be one column in
a small width, then two, then four columns as the width of the content area grows.
Great, if you control the entire screen. But what if the list is put into the sidebar.
Now, even though the screen maybe large, the width for the book list is small.

So we need a tool to be able to define breakpoints relative to the container
and not to the screen.

Introducing, `ContainerQuery`, where you can define breakpoint names on a container
and then apply `style`, `props` or `className` depending on the current width of the
container. For example:

```
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
  ...
</ContainerQuery>
```

Will check to see how much space it's given, turn that into a breakpoint name (e.g. `small`,
`medium` or `large`) and then set the `className` of the children of the component
based on that value.

You can also set styles:

```
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
</ContainerQuery>
```

In this case we are setting the `width` as a `style` based on the current breakpoint
as defined by the `breakpoints` object.

You can also set properties:

```
<ContainerQuery
  breakpoints={{small: 0, medium: 200, large: 400}}>
  <Book
    props-small={{size:'small'}}
    props-medium={{size:'medium'}}
    props-large={{size:'large'}}
    src={require('../images/Dune.jpg')}
    title="Dune" />
</ContainerQuery>
```

If your component, in this case, knows how to interpret `size` in some meaningful way.

And, of course, you can use any combination of these.

You are also free to name the breakpoints however you choose.

For something even easier you can use a columns-based helper class like so:

```
<ContainerQuery.Columns
  breakpoints={{small: 0, medium: 250, large: 425}}
  at-small={1} at-medium={2} at-large={4}>
  <Book
    src={require('../images/Dune.jpg')}
    title="Dune" />
  <Book
    src={require('../images/ChildrenOfDune.jpg')}
    title="Children of Dune" />
</ContainerQuery.Columns>
```

Which sets `width` in the `style` of all of the children using the number of columns
defined in the `at-{breakpoint}` props in the `ContainerQuery.Columns` component.

## Development

Please see [DEVELOPMENT](DEVELOPMENT.md)

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md)

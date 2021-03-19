***
# NOTICE:

## This repository has been archived and is not supported.

[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)
***
NOTICE: SUPPORT FOR THIS PROJECT HAS ENDED 

This projected was owned and maintained by Walmart. This project has reached its end of life and Walmart no longer supports this project.

We will no longer be monitoring the issues for this project or reviewing pull requests. You are free to continue using this project under the license terms or forks of this project at your own risk. This project is no longer subject to Walmart's bug bounty program or other security monitoring.


## Actions you can take

We recommend you take the following action:

  * Review any configuration files used for build automation and make appropriate updates to remove or replace this project
  * Notify other members of your team and/or organization of this change
  * Notify your security team to help you evaluate alternative options

## Forking and transition of ownership

For [security reasons](https://www.theregister.co.uk/2018/11/26/npm_repo_bitcoin_stealer/), Walmart does not transfer the ownership of our primary repos on Github or other platforms to other individuals/organizations. Further, we do not transfer ownership of packages for public package management systems.

If you would like to fork this package and continue development, you should choose a new name for the project and create your own packages, build automation, etc.

Please review the licensing terms of this project, which continue to be in effect even after decommission.

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

```jsx
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

```jsx
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

```jsx
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

```jsx
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

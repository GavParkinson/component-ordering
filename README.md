# Angular Component Ordering

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.

## Purpose

The idea of this project is to explore different ways of displaying ordered dynamic components in Angular.

The first way was to use flex ordering, passing in an object containing the order that components should be displayed in, then using that to set the flex order of the components.

The second way was to use ngComponentOutlet to display the components in an order set in an array.

These were both based on answers here: [Stack Overflow](https://stackoverflow.com/questions/45280243/ordering-components-in-angular)

## Dynamic Content

There is also functionality that dynamically loads content depending on a state defined in a service.

See here [Loading Components Dynamically In Angular](https://medium.com/angular-in-depth/loading-components-dynamically-in-angular-cd13b9fdb715) and repo here [Github Repo](https://github.com/ShilpaLalwani/dynamic-component)

Also functionality that dynamically populates components and allows data passing too, taken from this example [StackBlitz example](https://stackblitz.com/edit/angular-z6wssp) from this answer here [Stack Overflow](https://stackoverflow.com/questions/59228631/angular-dynamic-components-how-to-set-and-get-data)

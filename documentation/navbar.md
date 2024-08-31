# Navbar and Dropdown Component

## Navbar Component

The Navbar component provides a simple navigation bar that
displays links and a dropdown menu that works as a link as well.

This component is only the navbar itself, as the header is being defined in
the default layout.

The dropdown menu is implemented using the NavbarLinkDropdown component,
clicking the dropdown menu will route to the created page, as will clicking on
the child components inside the dropdown itself.

## Props

The Navbar component itself does not require any props directly
but passes them to the NavbarLinkDropdown component.

Below is an example of the data that is expected by the component:

```js
const aboutUsLink = {
  name: "About Us",
  items: [
    [
      {
        label: "About Us",
        subRoute: "about",
      },
      {
        label: "Our Mission",
        subRoute: "mission",
      },
      {
        label: "Our Values",
        subRoute: "values",
      },
      {
        label: "Contact Us",
        subRoute: "contact",
      },
    ],
  ],
};
```

- The `name` refers to what will be shown on the navbar itself.
- The `items` array is the data that the dropdown will be using inside the dropdown.
- The `label` is what is shown to the user to click on inside the dropdown,
  and the `subRoute` is what the component will use in order to scroll
  to the `id` tag on the page that the navbar is being linked to if it exists.

The data structure of the `items` is based on the Dropdown component of NuxtUI.
Each array inside the parent array is a "category" inside the dropdown itself.
For more information, refer to the [NuxtUI dropdown component documentation](https://ui.nuxt.com/components/dropdown)

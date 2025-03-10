This is a simple React application to simulate an e-commerce site



This is my attempt at deriving a use case specification and coming up with a class UML diagram. Did not create a sequence UML diagram.

Use case specification: 
- Home page
- Shop page contains shopping cart, displays products
- Nav bar to nav btwn pages, shows shopping cart item num on shop page.
- Nav bar has checkout button (do not implement logic) next to shopping cart on shop page 
- products are in cards, cards contain QTY input field, incr and decr btns for fine tuning
- product has title and add to cart btn
- fetch items from FakeStoreAPI
- shopping cart has submit order button, on submission of order, reset cart

classUML:

- ![class UML diagram](./classUML.drawio.svg)

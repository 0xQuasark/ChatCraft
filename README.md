# ChatCraft Companions
![UML](public/ChatCraft.png)

## User Stories
* As a user, I want to be able to make sure my account is authenticated when I attempt a login
* As a user, I want to be able to subscribe to a premium model of the application so that all features are available to me
* As a user, I want to be able to create an AI companion that I can interact with and have conversation with
* As a user, I want to be able to customize my AI companion how I see fit
* As a user, I want to have the option of being able to enable a text-to-speech option for any box of dialogue within my chat
## Tech stack
- Tailwind CSS
  - Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override. It's designed to be a utility-first CSS where classes are added in the HTML rather than in separate CSS selectors. This means that you can build a whole webpage without writing a single line of CSS.
- Shadcn
  - Shadcn is a lightweight, flexible, and efficient shadow DOM library for building web components. It provides a simple and intuitive API for creating and managing shadow DOM trees, making it easier to build encapsulated, reusable components.
- NextJS
  - Next.js is an open-source development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites.
- Clerk
  - Clerk is a complete user management and authentication service that helps you create secure and delightful experiences for your users. It provides features like sign up, sign in, two-factor authentication, password reset, and more. It's designed to be developer-friendly with a simple API, making it easy to integrate with your tech stack.
- PlanetScale
  - PlanetScale is a reliable and scalable relational database platform and clustering system for horizontal scaling of MySQL. It allows you to deploy, run, and manage databases with high availability, security, and performance needs. It also provides a SQL interface for data access, making it a great choice for applications that need the power and flexibility of a relational database.
## Explanations
- Companion Creation Form explanation
- Conditional rendering of role based message (chat-message.tsx, etc)
### Prisma DB
- every time the Prisma schema is updated (/prisma/schema.prisma), you must run these two commands:
- npx prisma generate
- npx prisma db push
- this regenerates the schema and then pushes it to PlanetScale
- it's always best to restart the server once this has happened
- to run the prisma viewer: npx prisma studio
## Stripe
- when working to test stripe payments, make sure that this is running:
  - stripe listen --forward-to localhost:4242/webhook# ChatCraft Companions
[UML](public\ChatCraft.png)
## User Stories
* As a user, I want to be able to make sure my account is authenticated when I attempt a login
* As a user, I want to be able to subscribe to a premium model of the application so that all features are available to me
* As a user, I want to be able to create an AI companion that I can interact with and have conversation with
* As a user, I want to be able to customize my AI companion how I see fit
* As a user, I want to have the option of being able to enable a text-to-speech option for any box of dialogue within my chat
## Tech stack
- Tailwind CSS
  - Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override. It's designed to be a utility-first CSS where classes are added in the HTML rather than in separate CSS selectors. This means that you can build a whole webpage without writing a single line of CSS.
- Shadcn
  - Shadcn is a lightweight, flexible, and efficient shadow DOM library for building web components. It provides a simple and intuitive API for creating and managing shadow DOM trees, making it easier to build encapsulated, reusable components.
- NextJS
  - Next.js is an open-source development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites.
- Clerk
  - Clerk is a complete user management and authentication service that helps you create secure and delightful experiences for your users. It provides features like sign up, sign in, two-factor authentication, password reset, and more. It's designed to be developer-friendly with a simple API, making it easy to integrate with your tech stack.
- PlanetScale
  - PlanetScale is a reliable and scalable relational database platform and clustering system for horizontal scaling of MySQL. It allows you to deploy, run, and manage databases with high availability, security, and performance needs. It also provides a SQL interface for data access, making it a great choice for applications that need the power and flexibility of a relational database.
## Explanations
- [Companion Creation Form explanation](https://youtu.be/PjYWpd7xkaM?si=hhEquGfIPFhf7BoN&t=8513)
- [Conditional rendering of role based message (chat-message.tsx, etc)](https://youtu.be/PjYWpd7xkaM?si=LC5ABfvTDBafNaHd&t=14949)
### Prisma DB
- every time the Prisma schema is updated (/prisma/schema.prisma), you must run these two commands:
- `npx prisma generate`
- `npx prisma db push`
- this regenerates the schema and then pushes it to PlanetScale
- it's always best to restart the server once this has happened
- to run the prisma viewer: `npx prisma studio`
## Stripe
- when working to test stripe payments, make sure that this is running:
  - `stripe listen --forward-to localhost:4242/webhook`

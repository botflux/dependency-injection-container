# Example: Express App

An express app using the service container.

## Goal

We have two services:
- `ILogger`: it logs message in the console ;
- `ProductProxy`: it retrieves products from an external api ;

We want to create an endpoint that expose the products
fetched by ProductProxy. This route must be able to log 
a message when something hit it.

The ProductProxy will also must also be able to log 
when something is asking for products.  

## Structure

```
|-- src/
    |-- models/
        |-- Product.ts # POJO representing a product (name and price)
    |-- routes/
        |-- createHomeRoutes.ts # Creates home router
    |-- services/
        |-- Logger.ts # Logs message in the console
        |-- ProductProxy.ts # Retrieves products
|-- server.ts # Starts the express server
|-- container.ts # Define the app's service container
|-- ... # rest is just configuration
```

## How it works ?

### Creating a new container and exposing it's decorators

This is done with the `container.ts` file. It expose a container
and it's decorators using the `createServiceContainerHelpers` function.

### Decorating the service

The service decorations are made in services files.
The `Service` decorator come from `container.ts`.
The injection is done using `InjectCons` that is also available through
`container.ts` helper.

```typescript
@Service('myService')
class MyService {}
```

### Creating the route

To create the route, we will create a `express.Router` factory.
This factory function will take a `IServiceContainer` as parameter and 
will returns `express.Router`.

### Creating the express app

We just need to instantiate a new app and add a router
returned by `createHomeRoutes` function.

```typescript
app.use('/products', createHomeRoutes(container))
```

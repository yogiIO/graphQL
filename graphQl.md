graphQL- Graph Query Language
Data represented in graph is pulled/updated using queries

e.g -> continents,  countries,language.

The  above data  can be pull in case of REST API by calling 3 different endpoints.

In case of graphQL query a custom query can be created and data can be pulled from the server.

for e.g:
query ExampleQuery {
 continents {
 name
 code
 }
 countries {
 name
 code
 }
 language {
 name
 code
 }
}

this will pull the data  in a single call.

GraphQL benefits:

Avoid Over-fetching. -> Countries can have many information, only specific information can be fetched for countries like name

query ExampleQuery {
 countries {
 name
 }
}
Avoid Under-fetching. -> Information  about countries, continents, languages can be fetched simultaneously, thus results in avoiding under fetching.

Better Mobile performance -> since quering all data in single call hence result in better performance.

Efficciency and precision
declarative data fetching

structured/hierarchical structure ->

query ExampleQuery {
 continents {
 name
  countries {
  name
  
   language {
   name
   
   }
  }
 
 }
}
Strongly Typed: Defined type

Introspection capability of graphql:
In case of REST API: documentation need to be created.
In case of GraphQL: It automatically gives what can be fetched with all details.

GraphQL Building Blocks:
1.Schema/Types:

SDL: GraphQL Schema definition language
type Country {
code: String
currency: String
phone: String
name: String
ID: ID {inbuilt type}
}

Types:
Scalar: ID{for unqiue dataType}, String, Int, Boolean
Custom: Country, Continent

2.Query/Mutation:
HTTP: POST{both query and mutate data by default}
Query: Get Data
Mutation: Update Data

Syntax:
type Query {
countries: [Country]
}
type Mutation {
language (id: ID): Language
}

3.Resolver: Used to implement the function definition. e.g how to get countries the function will be written in resolver below e.g

Query : {
 countries: (parent //e.g continent, args //any filters, context //if any common information is shared before sending the response e.g db or any other method call, info //any other information) => {
  return //;
 }
}

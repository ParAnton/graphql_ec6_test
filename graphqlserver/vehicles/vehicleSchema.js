import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

import {
  GraphQLType,
  GraphQLInt,
  GraphQLList
} from 'graphql/type';
import vehicles from './vehicles.json';

/*let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world';
        }
      }
    }
  })
});*/

// Define our user type, with two string fields; `id` and `name`
let driverType = new GraphQLObjectType({
  name: 'Driver',
  fields: {
    name: {type: GraphQLString},
    personInformationId: {type: GraphQLString},
    activity: {type: GraphQLString},
    dtjActivity: {type: GraphQLString}
  }
});

let vehicleType = new GraphQLObjectType({
  name: 'Vehicle',
  fields: {
    id: {type: GraphQLString },
    regNr: {type: GraphQLString },
    name: {type: GraphQLString },
    error: {type: GraphQLString },
    driver: {type: driverType}
  }
});

// Define our schema, with one top level field, named `user`, that
// takes an `id` argument and returns the User with that ID.


let VehicleSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      user: {
        type: vehicleType,
        description: "The user",
        args: {
          id: { type: GraphQLString }
        },
        resolve: function (_, args) {
          return vehicles[args.id];
        }
      },
      allVehicles: {
        type: new GraphQLList(vehicleType),
        args: {
          from: { type: GraphQLInt },
          to: { type: GraphQLInt }
        },
        resolve: function (_, args) {
          if (args) {
            return vehicles.slice(args.from, args.to);
          } else {
            return vehicles;
          }
        }
      }
    }
  })
});





//exports.schema = schema;
export default VehicleSchema;
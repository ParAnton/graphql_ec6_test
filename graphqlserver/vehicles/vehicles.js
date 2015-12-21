import graphqlHTTP from 'express-graphql';

import VehicleSchema from './vehicleSchema';

export default graphqlHTTP({ schema: VehicleSchema,
                                      pretty: true,
                                      graphiql: true  });
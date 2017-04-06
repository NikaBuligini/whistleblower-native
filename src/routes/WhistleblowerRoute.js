import Relay from 'react-relay';

export default class WhistleblowerRoute extends Relay.Route {
  static paramDefinitions = {
    status: { required: false },
  };
  static queries = {
    viewer: () => Relay.QL`query { viewer }`,
  };
  static routeName = 'WhistleblowerRoute';
}

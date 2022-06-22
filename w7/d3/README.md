# React State Sharing, and Forms

As our applications grow, components in different parts of the page may need access to the same stateful information.

Remember: stateful data are data that changes in our app, usually in response to a user action.

## State Sharing

If you have two parts of your application that need to share state, look for the common ancestor.

The common ancestor will need to own that state, and pass it down through props to the components that need it.

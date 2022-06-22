# React State Sharing, and Forms

As our applications grow, components in different parts of the page may need access to the same stateful information.

Remember: stateful data are data that changes in our app, usually in response to a user action.

## State Sharing

If you have two parts of your application that need to share state, look for the common ancestor.

The common ancestor will need to own that state, and pass it down through props to the components that need it.

## Forms

Step-by-step:

1. **Get the HTML right.** Have the correct inputs, labels, and test that you can add the right information.
2. **Let React take control.** Add state variables for all of the information in your form. Set the `value` attribute on the inputs, and make `onChange` to change the state when the user changes the input in their browser.

   ```jsx
   const input = (
     <div>
       <label htmlFor='name'>Name</label>
       <input
         type='text'
         name='name'
         id='name'
         placeholder='e.g. Daffodil'
         value={name}
         onChange={(event) => setName(event.target.value)}
       />
     </div>
   )
   ```

3. **Submission.** The form should have `onSubmit={handleSubmit}`. `handleSubmit` should have `event.preventDefault()`. Finally, use the state data to call any callback prop, e.g. `addNewItemToList`.

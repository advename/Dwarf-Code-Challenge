# About

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Points of interests:
- js & css linting with a11y (accessiblity), JSDOC, Typescript, React & React hooks and filenameing rules
- global configured axios client
- extending the boostrap framework in react
- typescript
- custom hooks
- custom components ++ instead of having Logo as an asset `.svg` file, it's better in this case to have it as a component
- linting checks in the pipeline (github actions) before beeing able to merge into master
- early integration of error handling for best user experience (Toast)

Things i would implement if more time was available:
- React hook form with yup for validation. Probably creating a new "Input" component building on top of rhf
- (arguable) internationalization with format.js
- (arguable) state manager such as redux. Alternative: context API preventing propdrilling
- (arguable) React testing library, to at least to test that the components render error free and add that alongside linting in the pipeline
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In this project the user will be able to Upload images of objects and we will give them the cheapest price that object is available for, on the internet

## installation

```bash
npm install
```

## Getting Started

### Collaborating

1. Clone this repo

```bash
git clone git@github.com:YashvardhanKumar/Good-Merchant.git
```

or if you're using HTTPS

```bash
git clone https://github.com/YashvardhanKumar/Good-Merchant.git
```

2. CD into the repo

```bash
cd Good-Merchant
```

3. Create a new branch to make new changes

```bash
git checkout -b <BRANCH NAME>
```

4. Add and commit changes locally

```bash
git add . && git commit -m "<COMMIT MESSAGE>"
```

5. Push to repo

```bash
git push -u origin <BRANCH NAME>
```

6. Go to [repo page](https://github.com/YashvardhanKumar/Good-Merchant) and click
   `Compare and Pull Request` on your branch to create a new pull request

7. Wait for reviewer to review and merge the pull requests to the master branch

8. Delete merged branches from your local repo

```bash
git checkout master
git remote prune origin
```

9. Pull the repo frequently to sync your local repo to remote repo.

```bash
git pull
git remote prune origin
git fetch -p && git branch -vv | awk '/: gone]/{print $1}' | xargs git branch -d
```

10. Go back to step 3 to start making changes again

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

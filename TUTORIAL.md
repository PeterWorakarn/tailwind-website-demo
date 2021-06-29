# TUTORIAL
### Installation
#### Initialize project
npx create-react-app . 
create-react-app project_name

#### Initialize Tailwind css
<!-- autoprefixer เป็นตัว compiler -->
npm -i tailwindcss postcss-cli autoprefixer@9.8.6 -D

<!-- Call tailwind library -->
npx tailwind init tailwind.js --full 

<!-- locate tailwind file in post css -->
touch postcss.config.js

<!-- INSIDE postcss.config.css -->
const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ]
}

<!-- create CSS file tailwind.css จะไปสร้างใน main.css -->
main.css
tailwind.css

<!-- INSIDE tailwind.css -->
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

<!-- INSIDE package.json -->
"scripts": {
    "start": "npm run watch:css && react-scripts start",
    "build": "npm run build:css && react-scripts build",
    "build:css":"postcss src/assets/tailwind.css -o src/assets/main.css",
    "watch:css":"postcss src/assets/tailwind.css -o src/assets/main.css"
}

SET UP DEV VaRIABLE
<!-- INSIDE .dev -->
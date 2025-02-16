## Portfolio Backend Mangement.

### 🌐 [Website Live Demo](https://portfolio-frontend-eight-zeta.vercel.app)  

## 📜 Project Overview : This backend build with NodeJs, ExpressJs, MongoDB, Mongoose,JWT with data handling.

## 🛠 Technology Used : 
**TypeScript**, **Mongoose**, **MongoDB**, **Cors**, **dotenv**, **jsonwebtoken**, **eslint**

<br/>

## How to Clone and Run the Project Locally : 

1. **Clone the repository:**
   - First, you need to clone and open your terminal and type:
     ```bash
     git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
     ```
2. **Open files in VS Code:**
   - After opening the **server-side** files in VS Code, install npm dependencies both file:
     ```bash
     npm install
     ```
5. **Access the server :**
  - - Check the `tsconfig.json` and check whice command add there.
    1. Live reloading for typescript code : 
    ```tarminal
        npm run start
    ```
    2. The compiled javascript entry point for production environment : 
    ```tarminal
        npm run start:prod
    ```
    3. Runs the TypeScript compiler to transpile TypeScript files into JavaScript files : 
    ```tarminal
        npm run build
    ```
    4. Lints defined coding standards and check error :
    ```tarminal
        npm run lint
    ```
    5. Automatically fix any linting errors :
    ```tarminal
        npm run lint:fix
    ```

  ## Authorization
  **You can also check route and see auth gurad some route add for user.SO this route access only user and some route for admin this route only admin can access.**
  **If you test this you add user and admin token in header section** : 
    ```tarminal
        Key : Authorization and add [user and admin token] value : <token>
    ```


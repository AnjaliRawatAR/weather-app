# Weather Dashboard

The Weather Dashboard is an app that lets you check the weather for any city. It has two parts: 
- A backend server that gets weather data from the OpenWeatherMap API.
- A frontend client that shows the weather details.

## How to Set It Up

### Step 1: Clone the Project

First, download the project to your computer:

```sh
git clone https://github.com/your-repo/weather_dashboard.git
cd weather_dashboard
```

### Step 2: Set Up the Server

1. Go to the `server` folder:

   ```sh
   cd server
   ```

2. Install the required packages:

   ```sh
   npm install
   ```

3. Create a `.env` file in the `server` folder and add your OpenWeatherMap API key:

   ```env
   WEATHER_API_KEY=your_openweathermap_api_key
   ```

4. Start the server:

   ```sh
   npm run dev
   ```

   The server will run at `http://localhost:3000`.

### Step 3: Set Up the Client

1. Go to the `client` folder:

   ```sh
   cd ../client
   ```

2. Install the required packages:

   ```sh
   npm install
   ```

3. Create a `.env` file in the `client` folder and add the server URL:

   ```env
   PORT=8080
   REACT_APP_BACKEND_URL=http://localhost:3000
   ```

4. Start the client:

   ```sh
   npm start
   ```

   The client will run at `http://localhost:8080`.

## How to Use It

1. Open your browser and go to `http://localhost:8080`.
2. Type a city name in the search bar and click "Search".
3. You’ll see the weather details for that city.
from flask import Flask,  jsonify
import python_weather
import asyncio

app = Flask(__name__)

async def get_weather():
    async with python_weather.Client() as client:
        weather = await client.get('New York')
        return weather.temperature

@app.route('/request_weather')
def request_weather():
    # Fetch weather data on each request
    weather_temp = asyncio.run(get_weather())
    return jsonify({'weather': weather_temp})

if __name__ == '__main__':
    app.run(debug=False, port=8085)

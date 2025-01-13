
from flask import Flask, request, jsonify
import openai

app = Flask(__name__)

# Replace with your OpenAI API key
openai.api_key = "YOUR_OPENAI_API_KEY"

@app.route("/chat", methods=["POST"])
def chatbot():
    question = request.json.get("question")
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a chatbot expert in CDPs."},
            {"role": "user", "content": question},
        ],
    )
    answer = response.choices[0].message["content"]
    return jsonify({"answer": answer})

if __name__ == "__main__":
    app.run(port=5000)

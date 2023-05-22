from flask import Flask, render_template

app = Flask(__name__, static_folder='css')

@app.route('/')
@app.route('/home.html')
def home():
    return render_template('home.html')

@app.route('/contact.html')
def contact():
    return render_template('contact.html')

@app.route('/login.html')
def login():
    return render_template('login.html')

@app.route('/home-club.html')
def home_club():
    return render_template('home-club.html')

if __name__ == '__main__':
    app.run(debug=True)
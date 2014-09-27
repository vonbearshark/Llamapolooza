import os
from flask import Flask, render_template, url_for

app = Flask(__name__, template_folder = 'app/views', static_folder = 'app/static')

@app.route('/')
def home():
	return render_template('index.html')

@app.route('/contact')
def contact():
	return render_template('_contact.html')

if __name__=='__main__':
	app.run(debug=True)
default: min
min:
	uglifyjs -cm < index.js > autocast.min.js
clean:
	rm -f autocast.min.js

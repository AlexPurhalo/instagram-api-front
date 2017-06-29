### Development
1. create `.env` file

2. pass to `.env` file following variables:
```
CLIENT_ID=your_client_id	
API_URL=your_api_url	
REDIRECT_URI=your_redirect_uri
```
	
3. `$ yarn run dev`

### Testing
	yarn run test

### Production
    $ heroku create 
    $ git push heroku master
	$ heroku config:set CLIENT_ID=your_client_id
	$ heroku config:set API_URL=your_api_url
	$ heroku config:set REDIRECT_URI=your_redirect_uri
	$ yarn run postinstall
	$ yarn run start
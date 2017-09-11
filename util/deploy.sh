cd ..

cp ../config/prod.config.json config.json &&

rm -rf dist &&
webpack --bail --progress --profile &&

git add . &&
git commit -m"." &&
git push heroku master

rm config.json
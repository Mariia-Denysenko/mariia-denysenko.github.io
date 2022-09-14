rm -r static
rm robots.txt
rm manifest.json
rm index.html
rm asset-manifest.json
(cd ./portfolio && npm run build)
git add . && git commit -am "$1" && git push

git clone https://github.com/snapkite/snapkite-engine.git

cd snapkite-engine

cp example.config.json config.json

cd filters
git clone https://github.com/snapkite/snapkite-filter-has-mobile-photo.git
git clone https://github.com/snapkite/snapkite-filter-has-text.git
git clone https://github.com/snapkite/snapkite-filter-is-possibly-sensitive.git
git clone https://github.com/snapkite/snapkite-filter-is-retweet.git

cp snapkite-filter-has-mobile-photo/example.config.json snapkite-filter-has-mobile-photo/config.json
cp snapkite-filter-has-text/example.config.json snapkite-filter-has-text/config.json
cp snapkite-filter-is-possibly-sensitive/example.config.json snapkite-filter-is-possibly-sensitive/config.json
cp snapkite-filter-is-retweet/example.config.json snapkite-filter-is-retweet/config.json

echo 'Do not forget to edit config.json to:'
echo '1) Add trackKeywords'
echo '2) Add Twitter API keys'
echo '3) Populate filters array with the four filters installed before'

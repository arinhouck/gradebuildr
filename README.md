## GradeBuildr

This application was made to help you track your grades in your college curriculum and properly weigh grades based on your criteria.

### Installation

#### Postgres (9.4)
  * Go to `http://postgresapp.com/`
  * Download & Install
  * Start postgres

#### Npm & Bower
  > XCode. Apple’s XCode development software is used to build Mac and iOS apps, but it also includes the tools you need to compile software for use on your Mac. XCode is free and you can find it in the Apple App Store.

  * Run `brew install node`
  * Run `npm install -g bower`


#### Ember CLI
  * Go to `cd frontend`
  * Run `npm install -g ember-cli`
  * Run `npm install`
  * Run `bower install`

#### Rails 4

  * Install ruby `rvm install ruby-2.0.0-p643`
  * Run `bundle install`
  * Run `rake db:setup`
  * Finally run `rails s`

### Common Errors

  > An error occurred while installing pg (0.18.2), and Bundler cannot continue.

  ```
  gem install pg -- --with-pg-config=/Applications/Postgres.app/Contents/Versions/9.4/bin/pg_config
  ```

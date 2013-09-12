set :application, "mlp"
set :repository,  "git@github.com:desmondrawls/MyLittePony.git"

set :user, 'uncledesi'
set :deploy_to, "/home/#{ user }/#{ application }"
set :use_sudo, false

set :scm, :git

default_run_options[:pty] = true

# set :scm, :git # You can set :scm explicitly or Capistrano will make an intelligent guess based on known version control directory names
# Or: `accurev`, `bzr`, `cvs`, `darcs`, `git`, `mercurial`, `perforce`, `subversion` or `none`

role :web, "198.211.98.18"                          # Your HTTP server, Apache/etc
role :app, "198.211.98.18"                          # This may be the same as your `Web` server
role :db,  "198.211.98.18", :primary => true # This is where Rails migrations will run
role :db,  "198.211.98.18"

# if you want to clean up old releases on each deploy uncomment this:
# after "deploy:restart", "deploy:cleanup"

# if you're still using the script/reaper helper you will need
# these http://github.com/rails/irs_process_scripts

# If you are using Passenger mod_rails uncomment this:
namespace :deploy do
  task :start do ; end
  task :stop do ; end
  task :restart, :roles => :app, :except => { :no_release => true } do
    run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
  end

  task :symlink_config, :roles => :app do 
    run "ln -nfs #{shared_path}/application.yml #{current_release}/config/application.yml"
    run "ln -nfs #{shared_path}/production.sqlite3 #{current_release}/db/production.sqlite3"
  end

  namespace :assets do
    task :precompile, :roles => :web, :except => { :no_release => true } do
      from = source.next_revision(current_revision)
      if releases.length <= 1 || capture("cd #{latest_release} && #{source.local.log(from)} vendor/assets/ app/assets/ | wc -l").to_i > 0
        run %Q{cd #{latest_release} && #{rake} RAILS_ENV=#{rails_env} #{asset_env} assets:precompile}
      else
        logger.info "Skipping asset pre-compilation because there were no asset changes"
      end
  end
end

# Load assets here and create symlinks.
after 'deploy:update_code','deploy:symlink_config','deploy:assets:precompile'
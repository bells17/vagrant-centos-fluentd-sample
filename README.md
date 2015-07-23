# vagrant-centos-fluentd-sample

### require

- Virtualbox
- Vagrant
- Ansible

### Setup

```
vagrant up --no-provision
vagrant provision
```


### ssh

```sh
# connect td-agent host
vagrant ssh td_agent_host

# connect td_agent_host client
vagrant ssh app
vagrant ssh nginx

```

### output log sample

```
# app
vagrant ssh app
sudo su
sh ~/app/log.sh

# nginx
vagrant ssh nginx
wget -O - 127.0.0.1/nginx_status

```

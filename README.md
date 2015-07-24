# vagrant-centos-fluentd-sample

### required

- Virtualbox
- Vagrant
- Ansible


### setup

```
vagrant up --no-provision
vagrant provision
```


### provisioning with ansible tag

```
# fluentd tag sample
ANSIBLE_FORCE_COLOR=true ANSIBLE_HOST_KEY_CHECKING=false ANSIBLE_SSH_ARGS='-o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o ControlMaster=auto -o ControlPersist=60s' ansible-playbook provisioning/servers.yml -i provisioning/local -vvvv --tags "fluentd"
```

### start machines

```
vagrant up
```


### ssh

```sh
# connect td-agent host
vagrant ssh td_agent_host

# connect td_agent client
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

### watch forward log
```
# td-agent host
vagrant ssh td_agent_host
tail -f /var/log/td-agent/nodejs/access.log
tail -f /var/log/td-agent/nodejs/error.log
tail -f /var/log/td-agent/nginx/access.log
tail -f /var/log/td-agent/nginx/error.log
```

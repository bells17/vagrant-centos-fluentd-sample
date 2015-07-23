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

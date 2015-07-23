# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "centos65-x86_64"
  config.vm.box_url = "https://github.com/2creatives/vagrant-centos/releases/download/v6.5.3/centos65-x86_64-20140116.box"
  config.vm.synced_folder "./", "/vagrant", create:true, :mount_options => ["dmode=777,fmode=777"]

  config.vm.define "app" do |app|
    app.vm.hostname = "app"
    app.vm.network :private_network, ip: "192.168.74.11"
  end

  config.vm.define "nginx" do |nginx|
    nginx.vm.hostname = "nginx"
    nginx.vm.network :private_network, ip: "192.168.74.12"
  end

  config.vm.define "td_agent_host" do |td_agent_host|
    td_agent_host.vm.hostname = "td-agent-host"
    td_agent_host.vm.network :private_network, ip: "192.168.73.11"

    td_agent_host.vm.provision "ansible" do |ansible|
      ansible.verbose = "vvvv"
      ansible.playbook = "provisioning/servers.yml"
      ansible.inventory_path = "provisioning/local"
      ansible.limit = "all"
      ansible.raw_ssh_args = "-o StrictHostKeyChecking=no"
    end

  end

end

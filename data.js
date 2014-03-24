function DataCtrl($scope) {
    getName = function (gitHubName){
        return gitHubName.split('/')[1];
    };

    $scope.getData = function () {
        $scope.data.forEach(function(elem) {
            elem.name = getName(elem.github)
        });
        return $scope.data;
    };

    $scope.data = [
      {
          github:   'basho/lager',
          license:  'Apache',
          tags:     ['logging'],
          desc:     'Logging framework'
      },
      {
          github:   'etnt/eldap',
          license:  'MIT',
          tags:     ['ldap', 'auth'],
          desc:     'LDAP authentication'
      },
      {
          github:   'evanmiller/erl_img',
          license:  '--',
          tags:     ['img'],
          desc:     'Basic image manipulation'
      },
      {
          github:   'evanmiller/jerome',
          license:  '--',
          tags:     ['rtf'],
          desc:     'Rich-text processor (Textile, HTML, RTF)'
      },
      {
          github:   'eproxus/meck',
          license:  'Apache',
          tags:     ['tests'],
          desc:     'A mocking library (compatible with EUnit)'
      },
      {
          github:   'etnt/xmlrpc',
          license:  'BSD',
          tags:     ['rpc'],
          desc:     'XML-RPC library'
      },
      {
          github:   'travelping/hello',
          license:  '--',
          tags:     ['rpc'],
          desc:     'RPC server framework'
      },
      {
          github:   'Vagabond/gen_smtp',
          tags:     ['smtp', 'email'],
          license:  'BSD',
          desc:     'SMTP server and client'
      },
      {
          github:   'uwiger/gproc',
          tags:     ['process'],
          license:  'EPL',
          desc:     'Extended process registry'
      },
      {
          github:   'mojombo/bert.erl',
          tags:     ['bert'],
          license:  'MIT',
          desc:     'BERT encoder/decoder'
      },
      {
          github:   'yrashk/socket.io-erlang',
          tags:     ['socket.io'],
          license:  '--',
          desc:     'Full-blown socket.io server reimplementation'
      },
      {
          github:   'mochi/mochiweb',
          tags:     ['http-server'],
          license:  'MIT',
          desc:     'Library for building lightweight HTTP servers'
      },
      {
          github:   'ostinelli/misultin',
          tags:     ['http-server', 'websockets'],
          license:  'BSD',
          desc:     'Library for building fast lightweight HTTP(S) servers (with websockets support)'
      },
      {
          github:   'extend/cowboy',
          tags:     ['http-server', 'websockets'],
          license:  'BSD',
          desc:     'Small, fast and modular HTTP server'
      },
      {
          github:   'extend/cowlib',
          tags:     ['http', 'websockets', 'spdy'],
          license:  'BSD',
          desc:     'Support library for manipulating Web protocols'
      },
      {
          github:   'extend/bullet',
          tags:     ['streaming'],
          license:  'BSD',
          desc:     'Cowboy handler and associated Javascript library for maintaining a persistent connection between a client and a server.'
      },
      {
          github:   'extend/ranch',
          tags:     ['tcp', 'socket'],
          license:  'BSD',
          desc:     'Socket acceptor pool for TCP protocols'
      },
      {
          github:   'extend/gun',
          tags:     ['http', 'spdy', 'websockets', 'client'],
          license:  'BSD',
          desc:     'Asynchronous SPDY, HTTP and Websocket client'
      },
      {
          github:   'cmullaparthi/ibrowse',
          tags:     ['http', 'client'],
          license:  'BSD',
          desc:     'HTTP client'
      },
      {
          github:   'daleharvey/dh_date',
          tags:     ['date'],
          license:  '--',
          desc:     'Date formatting / parsing library'
      },
      {
          github:   'mmzeeman/eiconv',
          tags:     ['iconv'],
          license:  'Apache',
          desc:     'iconv NIF wrapper'
      },
      {
          github:   'spawngrid/mimetypes',
          tags:     ['mime'],
          license:  'BSD',
          desc:     'MIME types library'
      },
      {
          github:   'zotonic/ua_classifier',
          tags:     ['user-agent'],
          license:  'Apache',
          desc:     'User-Agent Classifier'
      },
      {
          github:   'esl/jobs',
          tags:     ['scheduler'],
          license:  'Apache',
          desc:     'Job scheduler for load regulation'
      },
      {
          github:   'esl/edown',
          tags:     ['edoc', 'markdown'],
          license:  '--',
          desc:     'EDoc extension for generating Github-flavored Markdown'
      },
      {
          github:   'esl/lhttpc',
          tags:     ['http', 'client'],
          license:  'BSD',
          desc:     'Lightweight HTTP/1.1 client'
      },
      {
          github:   'paulgray/exml',
          tags:     ['xml'],
          license:  'Apache',
          desc:     'XML parsing library'
      },
      {
          github:   'davisp/jiffy',
          tags:     ['json'],
          license:  'MIT',
          desc:     'JSON encoder/decoder (NIFs)'
      },
      {
          github:   'erlydtl/erlydtl',
          tags:     ['templates'],
          license:  '--',
          desc:     'Django templates'
      },
      {
          github:   'devinus/poolboy',
          tags:     ['pool'],
          license:  'Apache',
          desc:     'A hunky Erlang worker pool factory'
      },
      {
          github:   'seancribbs/neotoma',
          tags:     ['peg'] ,
          license:  'MIT',
          desc:     'Packrat parser-generator for Parsing Expression Grammars (PEGs)'
      },
      {
          github:   'jtendo/confetti',
          tags:     ['configuration'] ,
          license:  'BSD',
          desc:     'Configuration provider (application:get_env/2 on steroids)'
      },
      {
          github:   'wg/epgsql',
          tags:     ['postgres', 'client'],
          license:  'BSD',
          desc:     'PostgreSQL client'
      },
      {
          github:   'Eonblast/Emysql',
          tags:     ['mysql', 'client'],
          license:  'MIT',
          desc:     'MySQL driver'
      },
      {
          github:   'basho/riak-erlang-client',
          tags:     ['riak', 'client'],
          license:  'Apache',
          desc:     'Clients for Riak'
      },
      {
          github:   'SergejJurecko/erlmongo',
          tags:     ['mongodb', 'client'],
          license:  'Apache',
          desc:     'Driver for mongodb'
      },
      {
          github:   'wooga/eredis',
          tags:     ['redis', 'client'],
          license:  'MIT',
          desc:     'Redis client'
      },
      {
          github:   'ChicagoBoss/boss_db',
          tags:     ['orm', 'mongodb', 'mysql', 'postgres', 'riak'],
          license:  'MIT',
          desc:     'Sharded, caching, pooling, evented ORM'
      },
      {
          github:   'VoltDB/voltdb-client-erlang',
          tags:     ['voltdb', 'client'],
          license:  'MIT',
          desc:     'VoltDB client'
      },
      {
          github:   'msantos/procket',
          tags:     ['socket'],
          license:  '--',
          desc:     'Erlang interface to low level socket operations'
      },
      {
          github:   'benoitc/barrel',
          tags:     ['tcp', 'pool'],
          license:  'MIT',
          desc:     'Generic TCP acceptor pool with low latency'
      },
      {
          github:   'benoitc/hackney',
          tags:     ['http', 'client'],
          license:  'Apache',
          desc:     'HTTP client'
      },
      {
          github:   'knutin/elli',
          tags:     ['http-server'],
          license:  'MIT',
          desc:     'Simple, robust and performant web server'
      },
      {
          github:   'iskra/jsonx',
          tags:     ['json'],
          license:  'MIT',
          desc:     'Library for efficient decode and encode JSON'
      },
      {
          github:   'bjnortier/mochijson2',
          tags:     ['json'],
          license:  '--',
          desc:     'The json encoding modules from mochiweb'
      },
      {
          github:   'talentdeficit/jsx',
          tags:     ['json'],
          license:  'MIT',
          desc:     'Library for consuming, producing and manipulating json'
      },
      {
          github:   'davebryson/beepbeep',
          tags:     ['framework'],
          license:  'MIT',
          desc:     'Simple web application framework for Mochiweb inspired by Rails and Merb'
      },
      {
          github:   'ChicagoBoss/ChicagoBoss',
          tags:     ['framework', 'comet'],
          license:  'MIT',
          desc:     'Web MVC framework'
      },
      {
          github:   '5HT/n2o',
          tags:     ['framework', 'websockets'],
          license:  'MIT',
          desc:     'Web Framework on WebSockets'
      },
      {
          github:   'tsujigiri/axiom',
          tags:     ['framework'],
          license:  'MIT',
          desc:     'Micro-framework for web applications'
      },
      {
          github:   'flashingpumpkin/spooky',
          tags:     ['framework'],
          license:  'MIT',
          desc:     'Minimum viable web framework'
      },
      {
          github:   'kivra/giallo',
          tags:     ['framework'],
          license:  'MIT',
          desc:     'Small and flexible web framework on top of Cowboy'
      },
      /*
      {
          name:     '',
          github:   '',
          tags:     [''],
          license:  '',
          desc:     ''
      },
      */
  ];
}

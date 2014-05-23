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
          tags:     ['socket.io', 'websockets'],
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
      {
          github:   'benoitc/econfig',
          tags:     ['configuration', 'ini'],
          license:  'Apache',
          desc:     'Simple config handler using INI files'
      },
      {
          github:   'basho/riak_core',
          tags:     ['distributed', 'riak'],
          license:  'Apache',
          desc:     'Toolkit for building distributed, scalable, fault-tolerant applications'
      },
      {
          github:   'rvirding/luerl',
          tags:     ['lua'],
          license:  'Apache',
          desc:     'An implementation of Lua in Erlang'
      },
      {
          github:   'tim/erlang-oauth',
          tags:     ['auth', 'oauth'],
          license:  'MIT',
          desc:     'OAuth 1.0 implementation'
      },
      {
          github:   'jlouis/etorrent',
          tags:     ['torrent', 'bittorrent', 'client'],
          license:  '',
          desc:     'Bittorrent client'
      },
      {
          github:   'rabbitmq/erlando',
          tags:     ['syntax'],
          license:  'MPL',
          desc:     'Syntax extensions'
      },
      {
          github:   'ferd/recon',
          tags:     ['debug'],
          license:  'BSD',
          desc:     'Collection of functions and scripts to debug Erlang in production'
      },
      {
          github:   'kevsmith/gen_nb_server',
          tags:     ['behavior', 'server', 'tcp'],
          license:  '--',
          desc:     'OTP behavior for writing non-blocking servers'
      },
      {
          github:   'jcomellas/getopt',
          tags:     ['configuration', 'getopt'],
          license:  'BSD',
          desc:     'Command-line parsing module that uses a syntax similar to GNU getopt'
      },
      {
          github:   'ngerakines/erlang_twitter',
          tags:     ['twitter', 'client'],
          license:  '--',
          desc:     'Client library to the Twitter API'
      },
      {
          github:   'jchris/hovercraft',
          tags:     ['couchdb', 'client'],
          license:  'Apache',
          desc:     'An easy direct Erlang CouchDB library'
      },
      {
          github:   'beamjs/erlv8',
          tags:     ['v8', 'client'],
          license:  '',
          desc:     'Interface for V8'
      },
      {
          github:   'erlang-unicode/ux',
          tags:     ['unicode'],
          license:  'Apache',
          desc:     'Unicode eXtension'
      },
      {
          github:   'msantos/procket',
          tags:     ['socket'],
          license:  '--',
          desc:     'Library for socket creation and manipulation'
      },
      {
          github:   'joewilliams/merle',
          tags:     ['memcached', 'client'],
          license:  'MIT',
          desc:     'Memcached client'
      },
      {
          github:   'Feuerlabs/exometer',
          tags:     ['measurement', 'collectd', 'graphite', 'snmp'],
          license:  'MPL',
          desc:     'Basic measurement objects and probe behavior'
      },
      {
          github:   'ngerakines/etap',
          tags:     ['tests', 'tap'],
          license:  '--',
          desc:     'Collection of modules that provide a TAP testing client library'
      },
      {
          github:   'engineyard/natter',
          tags:     ['xmpp', 'client'],
          license:  'LGPL',
          desc:     'XMPP Client'
      },
      {
          github:   'lambder/jsonerl',
          tags:     ['json'],
          license:  '--',
          desc:     'Yet another JSON (RFC 4627) library'
      },
      {
          github:   'okeuday/uuid',
          tags:     ['uuid'],
          license:  'BSD',
          desc:     'Native UUID Generation'
      },
      {
          github:   'willemdj/erlsom',
          tags:     ['xml'],
          license:  '--',
          desc:     'XML parser'
      },
      {
          github:   'RJ/erlang-spdy',
          tags:     ['spdy'],
          license:  'BSD',
          desc:     'Library implementing the SPDY protocol'
      },
      {
          github:   'ngerakines/erlang_couchdb',
          tags:     ['couchdb', 'client'],
          license:  '--',
          desc:     'Really simple CouchDB client'
      },
      {
          github:   'mazenharake/cecho',
          tags:     ['terminal', 'ncurses'],
          license:  'Apache',
          desc:     'An ncurses library which enabled to create terminal based GUIs'
      },
      {
          github:   'seth/ej',
          tags:     ['json'],
          license:  'Apache',
          desc:     'Helper library for accessing and validating JSON terms'
      },
      {
          github:   'seth/pooler',
          tags:     ['pool'],
          license:  'Apache',
          desc:     'Generic OTP process pool'
      },
      {
          github:   'ddosia/mekao',
          tags:     ['sql', 'orm'],
          license:  'MIT',
          desc:     'Erlang SQL constructor'
      },
      {
          github:   'synrc/avz',
          tags:     ['auth', 'OAuth'],
          license:  '--',
          desc:     'AVZ Login System for N2O'
      },
      {
          github:   'carlosmn/geef',
          tags:     ['nif', 'git'],
          license:  'MIT',
          desc:     'Erlang NIF that exposes some of the libgit2 library functions to Erlang'
      },
      {
          github:   'julianduque/erlang-color',
          tags:     ['color', 'terminal', 'ansi'],
          license:  'MIT',
          desc:     'ANSI colors for your Erlang'
      },
      {
          github:   'nox/mouture',
          tags:     ['semver', 'version', 'parser'],
          license:  'BSD',
          desc:     'A semver 2.0.0 parser for Erlang'
      },
      {
          github:   'gleber/sh',
          tags:     ['shell'],
          license:  'BSD',
          desc:     'Erlang Shell Command Utility'
      },
      {
          github:   'synrc/fs',
          tags:     ['fs', 'watch'],
          license:  'BSD',
          desc:     'FileSystem Listener'
      },
      {
          github:   'synrc/sh',
          tags:     ['fs', 'exec'],
          license:  'BSD',
          desc:     'Shell Executor'
      },
      {
          github:   'choptastic/qdate',
          tags:     ['date', 'timezone'],
          license:  'MIT',
          desc:     'Wrapper for Date and Timezone Management'
      },
      {
          github:   'SemanticSugar/dinerl',
          tags:     ['AWS', 'DynamoDB'],
          license:  'MIT',
          desc:     'AWS DynamoDB client'
      },
      {
          github:   's1n4/leptus',
          tags:     ['http', 'framework'],
          license:  'MIT',
          desc:     'REST framework'
      },
      {
          github:   'opscode/sqerl',
          tags:     ['sql'],
          license:  'Apache',
          desc:     'General purpose RDBMS abstraction layer'
      },
      {
          github:   'seriyps/gettexter',
          tags:     ['gettext', 'i18n'],
          license:  'Apache',
          desc:     'gettext for erlang'
      },
      {
          github:   'altenwald/ephp',
          tags:     ['php'],
          license:  'EPL',
          desc:     'PHP Interpreter in pure Erlang'
      },
      {
          github:   'skeltoac/php_app',
          tags:     ['php'],
          license:  '--',
          desc:     'A PHP eval server'
      },
      {
          github:   'julianduque/eric',
          tags:     ['irc', 'client'],
          license:  'MIT',
          desc:     'IRC Client'
      },
      /*
      {
          github:   '',
          tags:     [''],
          license:  '',
          desc:     ''
      },
      */
  ];
}

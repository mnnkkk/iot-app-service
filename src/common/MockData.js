export const MockSvcLists = [{ ServiceId: 'core-command', Host: 'edgex-core-command', Port: 59882 }, {
  ServiceId: 'core-data',
  Host: 'edgex-core-data',
  Port: 59880
}, {
  ServiceId: 'device-virtual',
  Host: 'edgex-device-virtual',
  Port: 59900
}, {
  ServiceId: 'support-notifications',
  Host: 'edgex-support-notifications',
  Port: 59860
}, {
  ServiceId: 'support-scheduler',
  Host: 'edgex-support-scheduler',
  Port: 59861
}, { ServiceId: 'sys-mgmt-agent', Host: 'edgex-sys-mgmt-agent', Port: 58890 }, {
  ServiceId: 'app-rules-engine',
  Host: 'edgex-app-rules-engine',
  Port: 59701
}, { ServiceId: 'app-sample', Host: 'edgex-app-sample', Port: 59700 }, {
  ServiceId: 'core-metadata',
  Host: 'edgex-core-metadata',
  Port: 59881
}, { ServiceId: 'device-rest', Host: 'edgex-device-rest', Port: 59986 }]

export const MockAppSvcConfig = {
  Clients: {
    'core-command': { Host: 'edgex-core-command', Port: '59882', Protocol: 'http' },
    'core-data': { Host: 'edgex-core-data', Port: '59880', Protocol: 'http' },
    'core-metadata': { Host: 'edgex-core-metadata', Port: '59881', Protocol: 'http' },
    'support-notifications': { Host: 'edgex-support-notifications', Port: '59860', Protocol: 'http' }
  },
  Database: { BatchSize: '0', Host: 'edgex-redis', MaxIdle: '0', Port: '6379', Timeout: '30s', Type: 'redisdb' },
  HttpServer: { HTTPSCertName: '', HTTPSKeyName: '', Protocol: '', SecretName: '' },
  Registry: { Host: 'edgex-core-consul', Port: '8500', Type: 'consul' },
  SecretStore: {
    Authentication: { AuthToken: '', AuthType: 'X-Vault-Token' },
    DisableScrubSecretsFile: 'false',
    Host: 'localhost',
    Namespace: '',
    Path: 'app-sample/',
    Port: '8200',
    Protocol: 'http',
    RootCaCertPath: '',
    SecretsFile: '',
    ServerName: '',
    TokenFile: '/tmp/edgex/secrets/app-sample/secrets-token.json',
    Type: 'vault'
  },
  Service: {
    CORSConfiguration: {
      CORSAllowCredentials: 'false',
      CORSAllowedHeaders: 'Authorization, Accept, Accept-Language, Content-Language, Content-Type, X-Correlation-ID',
      CORSAllowedMethods: 'GET, POST, PUT, PATCH, DELETE',
      CORSAllowedOrigin: 'https://localhost',
      CORSExposeHeaders: 'Cache-Control, Content-Language, Content-Length, Content-Type, Expires, Last-Modified, Pragma, X-Correlation-ID',
      CORSMaxAge: '3600',
      EnableCORS: 'false'
    },
    HealthCheckInterval: '10s',
    Host: 'edgex-app-sample',
    MaxRequestSize: '0',
    MaxResultCount: '0',
    Port: '59700',
    RequestTimeout: '5s',
    ServerBindAddr: '',
    StartupMsg: 'app-sample has Started'
  },
  Trigger: {
    EdgexMessageBus: {
      Optional: {
        AutoReconnect: 'true',
        ClientId: 'app-sample',
        ConnectTimeout: '5',
        KeepAlive: '10',
        Qos: '0',
        Retained: 'false',
        SkipCertVerify: 'false',
        authmode: 'usernamepassword',
        secretname: 'redisdb'
      },
      PublishHost: { Host: 'edgex-redis', Port: '6379', Protocol: 'redis', PublishTopic: 'example' },
      SubscribeHost: { Host: 'edgex-redis', Port: '6379', Protocol: 'redis', SubscribeTopics: 'edgex/events/#' },
      Type: 'redis'
    },
    ExternalMqtt: {
      AuthMode: '',
      AutoReconnect: 'false',
      ClientId: '',
      ConnectTimeout: '',
      KeepAlive: '0',
      PublishTopic: '',
      QoS: '0',
      Retain: 'false',
      SecretPath: '',
      SkipCertVerify: 'false',
      SubscribeTopics: '',
      Url: ''
    },
    Type: 'edgex-messagebus'
  },
  Writable: {
    InsecureSecrets: {
      AES: {
        Path: 'aes',
        Secrets: { key: '217A24432646294A404E635266556A586E3272357538782F413F442A472D4B6150645367566B59703373367639792442264529482B4D6251655468576D5A7134' }
      },
      DB: { Path: 'redisdb', Secrets: { password: '', username: '' } },
      http: { Path: 'http', Secrets: { headervalue: '\u003cput your value here\u003e' } },
      mqtt: { Path: 'mqtt', Secrets: { cacert: '', clientcert: '', clientkey: '', password: '', username: '' } }
    },
    LogLevel: 'INFO',
    Pipeline: {
      ExecutionOrder: 'FilterByProfileName,FilterByDeviceName,FilterByResourceName,TransformXml,SetResponseData',
      Functions: {
        AddTags: { Parameters: { Tags: '' } },
        Batch: { Parameters: { BatchThreshold: '30', Mode: 'bytimecount', TimeInterval: '60s' } },
        Compress: { Parameters: { Algorithm: 'gzip' } },
        Encrypt: { Parameters: { Algorithm: 'aes256', SecretName: 'key', SecretPath: 'aes' } },
        FilterByDeviceName: { Parameters: { DeviceNames: 'Random-Integer-Device', FilterOut: 'false' } },
        FilterByProfileName: { Parameters: { FilterOut: 'false', ProfileNames: 'Random-Integer-Device' } },
        FilterByResourceName: { Parameters: { FilterOut: 'false', ResourceNames: 'Int8, Int16, Int32, Int64' } },
        FilterBySourceName: { Parameters: { FilterOut: 'false', SourceNames: 'Int8, Int16 Int32, Int64' } },
        HTTPExport: {
          Parameters: {
            ContinueOnSendError: 'false',
            HeaderName: '',
            Method: 'post',
            MimeType: '',
            PersistOnError: 'false',
            ReturnInputData: 'false',
            SecretName: '',
            SecretPath: '',
            Url: 'https://f095cfcd-a3f6-4885-85ea-7157c6afd17e.mock.pstmn.io'
          }
        },
        HTTPExport2: {
          Parameters: {
            ContinueOnSendError: 'false',
            HeaderName: '',
            Method: 'post',
            MimeType: '',
            PersistOnError: 'false',
            ReturnInputData: 'false',
            SecretName: '',
            SecretPath: '',
            Url: 'https://3ff26601-1945-41e3-96b8-27cf446df696.mock.pstmn.io'
          }
        },
        JSONLogic: { Parameters: { Rule: '{ "and" : [{"\u003c" : [{ "var" : "temp" }, 110 ]}, {"==" : [{ "var" : "sensor.type" }, "temperature" ]} ] }' } },
        MQTTExport: {
          Parameters: {
            AuthMode: 'none',
            AutoReconnect: 'false',
            BrokerAddress: 'tcps://localhost:8883',
            ClientId: 'myclientid',
            ConnectionTimeout: '',
            KeepAlive: '',
            PersistOnError: 'false',
            QOS: '0',
            Retain: 'false',
            SecretPath: '/mqtt',
            SkipVerify: 'false',
            Topic: 'mytopic'
          }
        },
        PushToCore: {
          Parameters: {
            DeviceName: 'MyDevice',
            MediaType: '',
            ProfileName: 'MyProfile',
            ResourceName: 'SomeResource',
            ValueType: 'String'
          }
        },
        SetResponseData: { Parameters: { ResponseContentType: 'application/xml' } },
        TransformJson: { Parameters: { Type: 'json' } },
        TransformXml: { Parameters: { Type: 'xml' } }
      },
      PerTopicPipelines: {
        float: {
          ExecutionOrder: 'TransformJson, SetResponseData',
          Id: 'float-pipeline',
          Topics: 'edgex/events/device/#/Random-Float-Device/#'
        },
        'int8-16': {
          ExecutionOrder: 'TransformXml, Compress, SetResponseData',
          Id: 'int8-16-pipeline',
          Topics: 'edgex/events/device/#/#/Int8, edgex/events/device/#/#/Int16'
        }
      },
      UseTargetTypeOfByteArray: 'false'
    },
    StoreAndForward: { Enabled: 'false', MaxRetryCount: '10', RetryInterval: '5m' }
  }
}

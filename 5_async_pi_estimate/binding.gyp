{
    "targets" : [
        {
            "target_name" : "async",
            "sources" : [
                "src/main.cc", 
                "src/pi_est.cc", 
                "src/sync.cc", 
                "src/async.cc"
                ],
            "include_dirs" : ["<!@(node -p \"require('node-addon-api').include\")"],
            'cflags!': [ '-fno-exceptions' ],
            'cflags_cc!': [ '-fno-exceptions' ],
            "defines" : ['NAPI_DISABLE_CPP_EXCEPTIONS']
        }
    ]
}
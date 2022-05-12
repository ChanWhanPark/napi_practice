{
    "targets" : [
        {
            'target_name' : 'basic',
            'sources' : ['basic.cc'],
            'include_dirs' : [
                "<!@(node -p \"require('node-addon-api').include\")"
            ],
            "defines" : ["NAPI_DISABLE_CPP_EXCEPTIONS"],
            "cflags" : ["-fno-exceptions"],
            "cflags_cc" : ["-fno-exceptions"],
        }
    ]
}
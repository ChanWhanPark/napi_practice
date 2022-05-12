{
    "targets" : [
        {
            "target_name" : "func_ref",
            "sources" : [
                "src/binding.cc",
                "src/native-addon.cc"
            ],
            'cflags!': [ '-fno-exceptions' ],
            'cflags_cc!': [ '-fno-exceptions' ],
            'include_dirs': ["<!@(node -p \"require('node-addon-api').include\")"],
            'defines' : ['NAPI_DISABLE_CPP_EXCEPTIONS']
        }
    ]
}
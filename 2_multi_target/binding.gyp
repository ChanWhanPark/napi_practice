{
    "targets" : [
        {
            'target_name' : 'one',
            'sources' : ['src/one.cc'],
            'include_dirs' : [
                "<!@(node -p \"require('node-addon-api').include\")"
            ],
            "defines" : ["NAPI_DISABLE_CPP_EXCEPTIONS"],
            "cflags" : ["-fno-exceptions"],
            "cflags_cc" : ["-fno-exceptions"],
        },
        {
            "target_name" : "two",
            "sources" : ["src/two.cc"],
            'include_dirs' : [
                "<!@(node -p \"require('node-addon-api').include\")"
            ],
            "defines" : ["NAPI_DISABLE_CPP_EXCEPTIONS"],
            "cflags" : ["-fno-exceptions"],
            "cflags_cc" : ["-fno-exceptions"],
        }
    ]
}
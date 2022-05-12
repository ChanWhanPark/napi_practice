{
    "targets" : [
        {
            "target_name" : "callback",
            "sources" : ["callback.cc"],
            "include_dirs" : [
                "<!@(node -p \"require('node-addon-api').include\")"
            ],
            "cflags!" : ["-fno-exceptions"],
            "clags_cc!" : ["-fno-exceptions"],
            "defines" : ['NAPI_DISABLE_CPP_EXCEPTIONS']
        }
    ]
}
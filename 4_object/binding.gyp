{
    "targets" : [
        {
            "target_name" : "object",
            "sources" : ["src/object.cc", "src/myObject.cc"],
            "include_dirs" : [
                "<!@(node -p \"require('node-addon-api').include\")"
            ],
            "defines" : ["NAPI_DISABLE_CPP_EXCEPTIONS"],
            "cflags!" : ["-fno-exceptions"],
            "cflags_cc!" : ["-fno-exceptions"]
        }
    ]
}
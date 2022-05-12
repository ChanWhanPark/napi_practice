#include <napi.h>
#include "async.h"
#include "sync.h"

using namespace Napi;

Object Init(Env env, Object exports){
    exports.Set(String::New(env, "calculateSync"), Function::New(env, CalculateSync));
    exports.Set(String::New(env, "calculateAsync"), Function::New(env, CalculateAsync));

    return exports;
}

NODE_API_MODULE(main, Init);
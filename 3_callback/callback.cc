#include <napi.h>

using namespace Napi;

void RunCallback(const CallbackInfo& info){
    Env env = info.Env();
    Function cb = info[0].As<Function>();
    cb.Call(env.Global(), {String::New(env, "Hello World!")});
}

Object init(Env env, Object exports){
    return Function::New(env, RunCallback);
}

NODE_API_MODULE(callback, init);
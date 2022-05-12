#include <napi.h>

using namespace Napi;

Value Increment(const CallbackInfo& info){
    return Number::New(info.Env(), (info[0].As<Number>().Int32Value() + 1));
}

Value Decrement(const CallbackInfo& info){
    return Number::New(info.Env(), (info[0].As<Number>().Int32Value() - 1));
}

Object init(Env env, Object exports){
    exports.Set(String::New(env, "increment"), Function::New(env, Increment));
    exports.Set(String::New(env, "decrement"), Function::New(env, Decrement));

    return exports;
}

NODE_API_MODULE(one, init);
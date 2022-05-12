#include <napi.h>
#include "myObject.h"

Napi::Object InitAll(Napi::Env env, Napi::Object exports){
    return MyObject::Init(env, exports);
}

NODE_API_MODULE(object, InitAll);
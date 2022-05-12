#include <napi.h>

using namespace Napi;

class Two : public Addon<Two>{
    public:
    Two(Env env, Object exports){
        DefineAddon(exports, {
            InstanceMethod("increase", &Two::Increment),
            InstanceValue("subObject", DefineProperties(Object::New(env), {
                InstanceMethod("decrease", &Two::Decrement)
            }), napi_enumerable)
        });
    }

    Value Increment(const CallbackInfo& info){
        return Number::New(info.Env(), ++n);
    }
    Value Decrement(const CallbackInfo& info){
        return Number::New(info.Env(), --n);
    }

    private:
    uint32_t n = 40;
};

NODE_API_ADDON(Two);
#include <napi.h>

class ExampleAddon : public Napi::Addon<ExampleAddon>{
    public:
    ExampleAddon(Napi::Env env, Napi::Object exports){
        // addon이 가능하도록 하는 함수를 정의하는 생성자
        DefineAddon(exports, {
            InstanceMethod("increment", &ExampleAddon::Increment),

            InstanceValue("subObject", DefineProperties(Napi::Object::New(env), {
                InstanceMethod("decrement", &ExampleAddon::Decrement)
            }), napi_enumerable)
        });
    }
    private:
    Napi::Value Increment(const Napi::CallbackInfo& info){
        return Napi::Number::New(info.Env(), ++value);
    }
    Napi::Value Decrement(const Napi::CallbackInfo& info){
        return Napi::Number::New(info.Env(), --value);
    }

    uint32_t value = 42;
};

NODE_API_ADDON(ExampleAddon);
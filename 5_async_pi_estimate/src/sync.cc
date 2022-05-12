#include "sync.h"
#include <napi.h>
#include "pi_est.h"

Napi::Value CalculateSync(const Napi::CallbackInfo& info){
    int points = info[0].As<Napi::Number>().Uint32Value();
    double est = Estimate(points);

    return Napi::Number::New(info.Env(), est);
}
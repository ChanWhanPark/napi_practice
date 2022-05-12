#include <napi.h>
#include <iostream>
#include <string>

using namespace Napi;

String JSONStringify(const CallbackInfo& info) {
    Env env = info.Env();
    Object json_object = info[0].As<Object>();
    Object json = env.Global().Get("JSON").As<Object>();
    Function stringify = json.Get("stringify").As<Function>();
    return stringify.Call(json, { json_object }).As<String>();
}

Object JSONParse(const CallbackInfo& info){
    Env env = info.Env();
    String json_string = info[0].As<String>();
    Object json = env.Global().Get("JSON").As<Object>();
    Function parse = json.Get("parse").As<Function>();
    return parse.Call(json, {json_string}).As<Object>();
}

Boolean isPalindrome(const CallbackInfo& info){
    std::string str = info[0].ToString();
    int len = str.length();
    int half = len / 2;
    int start = 0;
    int end = len - 1;
    int space = 32;
    bool isPal = true;

    while (half > 0 && isPal){
        bool startSpace = str.at(start) == space;
        bool endSpace = str.at(end) == space;

        if (str.at(start) == str.at(end)){
            start++;
            end--;
        } else if (startSpace || endSpace) {
            startSpace && start++;
            endSpace && end--;
        } else {
            isPal = false;
        }

        half--;
    }

    Env env = info.Env();
    return Boolean::New(env, isPal);
}

Object Init(Env env, Object exports){
    exports.Set(String::New(env, "jsonStringify"), Function::New(env, JSONStringify));
    exports.Set(String::New(env, "jsonParse"), Function::New(env, JSONParse));
    exports.Set(String::New(env, "isPalindrome"), Function::New(env, isPalindrome));
    return exports;
}

NODE_API_MODULE(palindrome, Init);
package com.reactnativesmslistener;

import androidx.annotation.NonNull;
import android.database.Cursor;
import android.net.Uri;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = SmsListenerModule.NAME)
public class SmsListenerModule extends ReactContextBaseJavaModule {
    public static final String NAME = "SmsListener";

    public SmsListenerModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }
    @ReactMethod
    public void readSMS(Promise promise){
        try {
            Cursor cursor = getReactApplicationContext().getContentResolver().query(Uri.parse("content://sms"),null,null,null,null);
            cursor.moveToFirst();
            cursor.getString(12);
            promise.resolve(   cursor.getString(12));

        }catch (Exception e){
            promise.reject("Error sıçtık.");
        }
    }

}

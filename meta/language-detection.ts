/**
 * Copyright 2016 Peter Andreas Moelgaard. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


declare module apilayer.languagelayer {

    interface ILanguageLayerAPIOptions {
        access_key:string;
    }

    interface IDetectQuery {
        query:string;
        show_query?:number;
        callback?:string;
        format?:number;
    }

    interface IStandardDetectionResult {
        success:boolean;
        results:Array<IStandardDetectionResultItem>;
    }

    interface IStandardDetectionResultItem {
        language_code:string;
        language_name:string;
        probability:number;
        percentage:number;
        reliable_result:boolean;
    }

    interface IDetectResult {

    }

    interface IBatchQuery {
        query:Array<string>;
        show_query?:number;
        callback?:string;
        format?:number;
    }

    interface ILanguageQuery {
        callback?:string;
    }


    interface IPromise {
        then(handler?:IPromiseResolveHandlerFunction) : IPromise;
        catch(handler?:IPromiseRejectHandlerFunction) : IPromise;
        finally() : IPromise;
    }

    interface IPromiseResolveHandlerFunction extends Function {
        (result?:any) : void;
    }
    interface IPromiseRejectHandlerFunction extends Function {
        (err?:any) : void;
    }

    interface ICallbackFunction extends Function {
        (err?:Error, result?:IDetectResult) : void;
    }

    interface ILanguageLayerAPI {
        (options:ILanguageLayerAPIOptions);
        detect(query:IDetectQuery, callback?:ICallbackFunction) : IPromise;
        batch(query:IBatchQuery, callback?:ICallbackFunction) : IPromise;
        languages(query?:ILanguageQuery, callback?:ICallbackFunction) : IPromise;
    }

}
declare module apilayer.languagelayer {

    interface ILanguageLayerAPIOptions {
        access_key:string;
    }

    interface IDetectQuery {
        query:string;
        showQuery?:number;
        callback?:string;
        format?:number;
    }

    interface IBatchQuery {
        query:Array<string>;
        showQuery?:number;
        callback?:string;
        format?:number;
    }

    interface ILanguageQuery {
        callback?:string;
        format?:number;
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
        (err?:Error, result?:any) : void;
    }

    interface ILanguageLayerAPI {
        (options:ILanguageLayerAPIOptions);
        detect(query:IDetectQuery, callback?:ICallbackFunction) : IPromise;
        batch(query:IBatchQuery, callback?:ICallbackFunction) : IPromise;
        languages(query?:ILanguageQuery, callback?:ICallbackFunction) : IPromise;
    }

}
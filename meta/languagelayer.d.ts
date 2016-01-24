declare module apilayer.languagelayer {

    interface ILanguageLayerAPIOptions {
        access_key:string;
    }
    interface IDetectQuery {
        query:string;
        showQuery:number;
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
    }

}
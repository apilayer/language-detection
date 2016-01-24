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
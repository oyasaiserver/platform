// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function workersScriptAnnotationsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        workers_message: cdktf.stringToTerraform(struct.workersMessage),
        workers_tag: cdktf.stringToTerraform(struct.workersTag),
    };
}
export function workersScriptAnnotationsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        workers_message: {
            value: cdktf.stringToHclTerraform(struct.workersMessage),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        workers_tag: {
            value: cdktf.stringToHclTerraform(struct.workersTag),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class WorkersScriptAnnotationsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._workersMessage !== undefined) {
            hasAnyValues = true;
            internalValueResult.workersMessage = this._workersMessage;
        }
        if (this._workersTag !== undefined) {
            hasAnyValues = true;
            internalValueResult.workersTag = this._workersTag;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._workersMessage = undefined;
            this._workersTag = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._workersMessage = value.workersMessage;
            this._workersTag = value.workersTag;
        }
    }
    // workers_message - computed: true, optional: true, required: false
    _workersMessage;
    get workersMessage() {
        return this.getStringAttribute('workers_message');
    }
    set workersMessage(value) {
        this._workersMessage = value;
    }
    resetWorkersMessage() {
        this._workersMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get workersMessageInput() {
        return this._workersMessage;
    }
    // workers_tag - computed: true, optional: true, required: false
    _workersTag;
    get workersTag() {
        return this.getStringAttribute('workers_tag');
    }
    set workersTag(value) {
        this._workersTag = value;
    }
    resetWorkersTag() {
        this._workersTag = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get workersTagInput() {
        return this._workersTag;
    }
    // workers_triggered_by - computed: true, optional: false, required: false
    get workersTriggeredBy() {
        return this.getStringAttribute('workers_triggered_by');
    }
}
export function workersScriptAssetsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        headers: cdktf.stringToTerraform(struct.headers),
        html_handling: cdktf.stringToTerraform(struct.htmlHandling),
        not_found_handling: cdktf.stringToTerraform(struct.notFoundHandling),
        redirects: cdktf.stringToTerraform(struct.redirects),
        run_worker_first: cdktf.hashMapper(cdktf.anyToTerraform)(struct.runWorkerFirst),
        serve_directly: cdktf.booleanToTerraform(struct.serveDirectly),
    };
}
export function workersScriptAssetsConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        headers: {
            value: cdktf.stringToHclTerraform(struct.headers),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        html_handling: {
            value: cdktf.stringToHclTerraform(struct.htmlHandling),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        not_found_handling: {
            value: cdktf.stringToHclTerraform(struct.notFoundHandling),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        redirects: {
            value: cdktf.stringToHclTerraform(struct.redirects),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        run_worker_first: {
            value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(struct.runWorkerFirst),
            isBlock: false,
            type: "map",
            storageClassType: "anyMap",
        },
        serve_directly: {
            value: cdktf.booleanToHclTerraform(struct.serveDirectly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class WorkersScriptAssetsConfigOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._headers !== undefined) {
            hasAnyValues = true;
            internalValueResult.headers = this._headers;
        }
        if (this._htmlHandling !== undefined) {
            hasAnyValues = true;
            internalValueResult.htmlHandling = this._htmlHandling;
        }
        if (this._notFoundHandling !== undefined) {
            hasAnyValues = true;
            internalValueResult.notFoundHandling = this._notFoundHandling;
        }
        if (this._redirects !== undefined) {
            hasAnyValues = true;
            internalValueResult.redirects = this._redirects;
        }
        if (this._runWorkerFirst !== undefined) {
            hasAnyValues = true;
            internalValueResult.runWorkerFirst = this._runWorkerFirst;
        }
        if (this._serveDirectly !== undefined) {
            hasAnyValues = true;
            internalValueResult.serveDirectly = this._serveDirectly;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._headers = undefined;
            this._htmlHandling = undefined;
            this._notFoundHandling = undefined;
            this._redirects = undefined;
            this._runWorkerFirst = undefined;
            this._serveDirectly = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._headers = value.headers;
            this._htmlHandling = value.htmlHandling;
            this._notFoundHandling = value.notFoundHandling;
            this._redirects = value.redirects;
            this._runWorkerFirst = value.runWorkerFirst;
            this._serveDirectly = value.serveDirectly;
        }
    }
    // headers - computed: false, optional: true, required: false
    _headers;
    get headers() {
        return this.getStringAttribute('headers');
    }
    set headers(value) {
        this._headers = value;
    }
    resetHeaders() {
        this._headers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get headersInput() {
        return this._headers;
    }
    // html_handling - computed: false, optional: true, required: false
    _htmlHandling;
    get htmlHandling() {
        return this.getStringAttribute('html_handling');
    }
    set htmlHandling(value) {
        this._htmlHandling = value;
    }
    resetHtmlHandling() {
        this._htmlHandling = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get htmlHandlingInput() {
        return this._htmlHandling;
    }
    // not_found_handling - computed: false, optional: true, required: false
    _notFoundHandling;
    get notFoundHandling() {
        return this.getStringAttribute('not_found_handling');
    }
    set notFoundHandling(value) {
        this._notFoundHandling = value;
    }
    resetNotFoundHandling() {
        this._notFoundHandling = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get notFoundHandlingInput() {
        return this._notFoundHandling;
    }
    // redirects - computed: false, optional: true, required: false
    _redirects;
    get redirects() {
        return this.getStringAttribute('redirects');
    }
    set redirects(value) {
        this._redirects = value;
    }
    resetRedirects() {
        this._redirects = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get redirectsInput() {
        return this._redirects;
    }
    // run_worker_first - computed: false, optional: true, required: false
    _runWorkerFirst;
    get runWorkerFirst() {
        return this.getAnyMapAttribute('run_worker_first');
    }
    set runWorkerFirst(value) {
        this._runWorkerFirst = value;
    }
    resetRunWorkerFirst() {
        this._runWorkerFirst = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get runWorkerFirstInput() {
        return this._runWorkerFirst;
    }
    // serve_directly - computed: false, optional: true, required: false
    _serveDirectly;
    get serveDirectly() {
        return this.getBooleanAttribute('serve_directly');
    }
    set serveDirectly(value) {
        this._serveDirectly = value;
    }
    resetServeDirectly() {
        this._serveDirectly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serveDirectlyInput() {
        return this._serveDirectly;
    }
}
export function workersScriptAssetsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        config: workersScriptAssetsConfigToTerraform(struct.config),
        directory: cdktf.stringToTerraform(struct.directory),
        jwt: cdktf.stringToTerraform(struct.jwt),
    };
}
export function workersScriptAssetsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        config: {
            value: workersScriptAssetsConfigToHclTerraform(struct.config),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkersScriptAssetsConfig",
        },
        directory: {
            value: cdktf.stringToHclTerraform(struct.directory),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        jwt: {
            value: cdktf.stringToHclTerraform(struct.jwt),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class WorkersScriptAssetsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._config?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.config = this._config?.internalValue;
        }
        if (this._directory !== undefined) {
            hasAnyValues = true;
            internalValueResult.directory = this._directory;
        }
        if (this._jwt !== undefined) {
            hasAnyValues = true;
            internalValueResult.jwt = this._jwt;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._config.internalValue = undefined;
            this._directory = undefined;
            this._jwt = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._config.internalValue = value.config;
            this._directory = value.directory;
            this._jwt = value.jwt;
        }
    }
    // asset_manifest_sha256 - computed: true, optional: false, required: false
    get assetManifestSha256() {
        return this.getStringAttribute('asset_manifest_sha256');
    }
    // config - computed: false, optional: true, required: false
    _config = new WorkersScriptAssetsConfigOutputReference(this, "config");
    get config() {
        return this._config;
    }
    putConfig(value) {
        this._config.internalValue = value;
    }
    resetConfig() {
        this._config.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get configInput() {
        return this._config.internalValue;
    }
    // directory - computed: false, optional: true, required: false
    _directory;
    get directory() {
        return this.getStringAttribute('directory');
    }
    set directory(value) {
        this._directory = value;
    }
    resetDirectory() {
        this._directory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get directoryInput() {
        return this._directory;
    }
    // jwt - computed: false, optional: true, required: false
    _jwt;
    get jwt() {
        return this.getStringAttribute('jwt');
    }
    set jwt(value) {
        this._jwt = value;
    }
    resetJwt() {
        this._jwt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get jwtInput() {
        return this._jwt;
    }
}
export function workersScriptBindingsOutboundWorkerToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        environment: cdktf.stringToTerraform(struct.environment),
        service: cdktf.stringToTerraform(struct.service),
    };
}
export function workersScriptBindingsOutboundWorkerToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        environment: {
            value: cdktf.stringToHclTerraform(struct.environment),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service: {
            value: cdktf.stringToHclTerraform(struct.service),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class WorkersScriptBindingsOutboundWorkerOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._environment !== undefined) {
            hasAnyValues = true;
            internalValueResult.environment = this._environment;
        }
        if (this._service !== undefined) {
            hasAnyValues = true;
            internalValueResult.service = this._service;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._environment = undefined;
            this._service = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._environment = value.environment;
            this._service = value.service;
        }
    }
    // environment - computed: true, optional: true, required: false
    _environment;
    get environment() {
        return this.getStringAttribute('environment');
    }
    set environment(value) {
        this._environment = value;
    }
    resetEnvironment() {
        this._environment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get environmentInput() {
        return this._environment;
    }
    // service - computed: true, optional: true, required: false
    _service;
    get service() {
        return this.getStringAttribute('service');
    }
    set service(value) {
        this._service = value;
    }
    resetService() {
        this._service = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serviceInput() {
        return this._service;
    }
}
export function workersScriptBindingsOutboundToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        params: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.params),
        worker: workersScriptBindingsOutboundWorkerToTerraform(struct.worker),
    };
}
export function workersScriptBindingsOutboundToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        params: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.params),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        worker: {
            value: workersScriptBindingsOutboundWorkerToHclTerraform(struct.worker),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkersScriptBindingsOutboundWorker",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class WorkersScriptBindingsOutboundOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._params !== undefined) {
            hasAnyValues = true;
            internalValueResult.params = this._params;
        }
        if (this._worker?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.worker = this._worker?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._params = undefined;
            this._worker.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._params = value.params;
            this._worker.internalValue = value.worker;
        }
    }
    // params - computed: true, optional: true, required: false
    _params;
    get params() {
        return this.getListAttribute('params');
    }
    set params(value) {
        this._params = value;
    }
    resetParams() {
        this._params = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get paramsInput() {
        return this._params;
    }
    // worker - computed: true, optional: true, required: false
    _worker = new WorkersScriptBindingsOutboundWorkerOutputReference(this, "worker");
    get worker() {
        return this._worker;
    }
    putWorker(value) {
        this._worker.internalValue = value;
    }
    resetWorker() {
        this._worker.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get workerInput() {
        return this._worker.internalValue;
    }
}
export function workersScriptBindingsSimpleToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        limit: cdktf.numberToTerraform(struct.limit),
        period: cdktf.numberToTerraform(struct.period),
    };
}
export function workersScriptBindingsSimpleToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        limit: {
            value: cdktf.numberToHclTerraform(struct.limit),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        period: {
            value: cdktf.numberToHclTerraform(struct.period),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class WorkersScriptBindingsSimpleOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._limit !== undefined) {
            hasAnyValues = true;
            internalValueResult.limit = this._limit;
        }
        if (this._period !== undefined) {
            hasAnyValues = true;
            internalValueResult.period = this._period;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._limit = undefined;
            this._period = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._limit = value.limit;
            this._period = value.period;
        }
    }
    // limit - computed: true, optional: false, required: true
    _limit;
    get limit() {
        return this.getNumberAttribute('limit');
    }
    set limit(value) {
        this._limit = value;
    }
    // Temporarily expose input value. Use with caution.
    get limitInput() {
        return this._limit;
    }
    // period - computed: true, optional: false, required: true
    _period;
    get period() {
        return this.getNumberAttribute('period');
    }
    set period(value) {
        this._period = value;
    }
    // Temporarily expose input value. Use with caution.
    get periodInput() {
        return this._period;
    }
}
export function workersScriptBindingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        algorithm: cdktf.stringToTerraform(struct.algorithm),
        allowed_destination_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.allowedDestinationAddresses),
        allowed_sender_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.allowedSenderAddresses),
        app_id: cdktf.stringToTerraform(struct.appId),
        bucket_name: cdktf.stringToTerraform(struct.bucketName),
        certificate_id: cdktf.stringToTerraform(struct.certificateId),
        class_name: cdktf.stringToTerraform(struct.className),
        database_id: cdktf.stringToTerraform(struct.databaseId),
        dataset: cdktf.stringToTerraform(struct.dataset),
        destination_address: cdktf.stringToTerraform(struct.destinationAddress),
        dispatch_namespace: cdktf.stringToTerraform(struct.dispatchNamespace),
        entrypoint: cdktf.stringToTerraform(struct.entrypoint),
        environment: cdktf.stringToTerraform(struct.environment),
        format: cdktf.stringToTerraform(struct.format),
        id: cdktf.stringToTerraform(struct.id),
        index_name: cdktf.stringToTerraform(struct.indexName),
        instance_name: cdktf.stringToTerraform(struct.instanceName),
        json: cdktf.stringToTerraform(struct.json),
        jurisdiction: cdktf.stringToTerraform(struct.jurisdiction),
        key_base64: cdktf.stringToTerraform(struct.keyBase64),
        key_jwk: cdktf.stringToTerraform(struct.keyJwk),
        name: cdktf.stringToTerraform(struct.name),
        namespace: cdktf.stringToTerraform(struct.namespace),
        namespace_id: cdktf.stringToTerraform(struct.namespaceId),
        network_id: cdktf.stringToTerraform(struct.networkId),
        old_name: cdktf.stringToTerraform(struct.oldName),
        outbound: workersScriptBindingsOutboundToTerraform(struct.outbound),
        part: cdktf.stringToTerraform(struct.part),
        pipeline: cdktf.stringToTerraform(struct.pipeline),
        queue_name: cdktf.stringToTerraform(struct.queueName),
        script_name: cdktf.stringToTerraform(struct.scriptName),
        secret_name: cdktf.stringToTerraform(struct.secretName),
        service: cdktf.stringToTerraform(struct.service),
        service_id: cdktf.stringToTerraform(struct.serviceId),
        simple: workersScriptBindingsSimpleToTerraform(struct.simple),
        store_id: cdktf.stringToTerraform(struct.storeId),
        text: cdktf.stringToTerraform(struct.text),
        tunnel_id: cdktf.stringToTerraform(struct.tunnelId),
        type: cdktf.stringToTerraform(struct.type),
        usages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.usages),
        version_id: cdktf.stringToTerraform(struct.versionId),
        workflow_name: cdktf.stringToTerraform(struct.workflowName),
    };
}
export function workersScriptBindingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        algorithm: {
            value: cdktf.stringToHclTerraform(struct.algorithm),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        allowed_destination_addresses: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.allowedDestinationAddresses),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        allowed_sender_addresses: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.allowedSenderAddresses),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        app_id: {
            value: cdktf.stringToHclTerraform(struct.appId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bucket_name: {
            value: cdktf.stringToHclTerraform(struct.bucketName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        certificate_id: {
            value: cdktf.stringToHclTerraform(struct.certificateId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        class_name: {
            value: cdktf.stringToHclTerraform(struct.className),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database_id: {
            value: cdktf.stringToHclTerraform(struct.databaseId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dataset: {
            value: cdktf.stringToHclTerraform(struct.dataset),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        destination_address: {
            value: cdktf.stringToHclTerraform(struct.destinationAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dispatch_namespace: {
            value: cdktf.stringToHclTerraform(struct.dispatchNamespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        entrypoint: {
            value: cdktf.stringToHclTerraform(struct.entrypoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        environment: {
            value: cdktf.stringToHclTerraform(struct.environment),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        format: {
            value: cdktf.stringToHclTerraform(struct.format),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        index_name: {
            value: cdktf.stringToHclTerraform(struct.indexName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_name: {
            value: cdktf.stringToHclTerraform(struct.instanceName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        json: {
            value: cdktf.stringToHclTerraform(struct.json),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        jurisdiction: {
            value: cdktf.stringToHclTerraform(struct.jurisdiction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_base64: {
            value: cdktf.stringToHclTerraform(struct.keyBase64),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_jwk: {
            value: cdktf.stringToHclTerraform(struct.keyJwk),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        namespace: {
            value: cdktf.stringToHclTerraform(struct.namespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        namespace_id: {
            value: cdktf.stringToHclTerraform(struct.namespaceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        network_id: {
            value: cdktf.stringToHclTerraform(struct.networkId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        old_name: {
            value: cdktf.stringToHclTerraform(struct.oldName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        outbound: {
            value: workersScriptBindingsOutboundToHclTerraform(struct.outbound),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkersScriptBindingsOutbound",
        },
        part: {
            value: cdktf.stringToHclTerraform(struct.part),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pipeline: {
            value: cdktf.stringToHclTerraform(struct.pipeline),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        queue_name: {
            value: cdktf.stringToHclTerraform(struct.queueName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        script_name: {
            value: cdktf.stringToHclTerraform(struct.scriptName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_name: {
            value: cdktf.stringToHclTerraform(struct.secretName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service: {
            value: cdktf.stringToHclTerraform(struct.service),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service_id: {
            value: cdktf.stringToHclTerraform(struct.serviceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        simple: {
            value: workersScriptBindingsSimpleToHclTerraform(struct.simple),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkersScriptBindingsSimple",
        },
        store_id: {
            value: cdktf.stringToHclTerraform(struct.storeId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        text: {
            value: cdktf.stringToHclTerraform(struct.text),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tunnel_id: {
            value: cdktf.stringToHclTerraform(struct.tunnelId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        usages: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.usages),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        version_id: {
            value: cdktf.stringToHclTerraform(struct.versionId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        workflow_name: {
            value: cdktf.stringToHclTerraform(struct.workflowName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class WorkersScriptBindingsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._algorithm !== undefined) {
            hasAnyValues = true;
            internalValueResult.algorithm = this._algorithm;
        }
        if (this._allowedDestinationAddresses !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedDestinationAddresses = this._allowedDestinationAddresses;
        }
        if (this._allowedSenderAddresses !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedSenderAddresses = this._allowedSenderAddresses;
        }
        if (this._appId !== undefined) {
            hasAnyValues = true;
            internalValueResult.appId = this._appId;
        }
        if (this._bucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._certificateId !== undefined) {
            hasAnyValues = true;
            internalValueResult.certificateId = this._certificateId;
        }
        if (this._className !== undefined) {
            hasAnyValues = true;
            internalValueResult.className = this._className;
        }
        if (this._databaseId !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseId = this._databaseId;
        }
        if (this._dataset !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataset = this._dataset;
        }
        if (this._destinationAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationAddress = this._destinationAddress;
        }
        if (this._dispatchNamespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.dispatchNamespace = this._dispatchNamespace;
        }
        if (this._entrypoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.entrypoint = this._entrypoint;
        }
        if (this._environment !== undefined) {
            hasAnyValues = true;
            internalValueResult.environment = this._environment;
        }
        if (this._format !== undefined) {
            hasAnyValues = true;
            internalValueResult.format = this._format;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._indexName !== undefined) {
            hasAnyValues = true;
            internalValueResult.indexName = this._indexName;
        }
        if (this._instanceName !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceName = this._instanceName;
        }
        if (this._json !== undefined) {
            hasAnyValues = true;
            internalValueResult.json = this._json;
        }
        if (this._jurisdiction !== undefined) {
            hasAnyValues = true;
            internalValueResult.jurisdiction = this._jurisdiction;
        }
        if (this._keyBase64 !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyBase64 = this._keyBase64;
        }
        if (this._keyJwk !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyJwk = this._keyJwk;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._namespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespace = this._namespace;
        }
        if (this._namespaceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespaceId = this._namespaceId;
        }
        if (this._networkId !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkId = this._networkId;
        }
        if (this._oldName !== undefined) {
            hasAnyValues = true;
            internalValueResult.oldName = this._oldName;
        }
        if (this._outbound?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.outbound = this._outbound?.internalValue;
        }
        if (this._part !== undefined) {
            hasAnyValues = true;
            internalValueResult.part = this._part;
        }
        if (this._pipeline !== undefined) {
            hasAnyValues = true;
            internalValueResult.pipeline = this._pipeline;
        }
        if (this._queueName !== undefined) {
            hasAnyValues = true;
            internalValueResult.queueName = this._queueName;
        }
        if (this._scriptName !== undefined) {
            hasAnyValues = true;
            internalValueResult.scriptName = this._scriptName;
        }
        if (this._secretName !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretName = this._secretName;
        }
        if (this._service !== undefined) {
            hasAnyValues = true;
            internalValueResult.service = this._service;
        }
        if (this._serviceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceId = this._serviceId;
        }
        if (this._simple?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.simple = this._simple?.internalValue;
        }
        if (this._storeId !== undefined) {
            hasAnyValues = true;
            internalValueResult.storeId = this._storeId;
        }
        if (this._text !== undefined) {
            hasAnyValues = true;
            internalValueResult.text = this._text;
        }
        if (this._tunnelId !== undefined) {
            hasAnyValues = true;
            internalValueResult.tunnelId = this._tunnelId;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._usages !== undefined) {
            hasAnyValues = true;
            internalValueResult.usages = this._usages;
        }
        if (this._versionId !== undefined) {
            hasAnyValues = true;
            internalValueResult.versionId = this._versionId;
        }
        if (this._workflowName !== undefined) {
            hasAnyValues = true;
            internalValueResult.workflowName = this._workflowName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._algorithm = undefined;
            this._allowedDestinationAddresses = undefined;
            this._allowedSenderAddresses = undefined;
            this._appId = undefined;
            this._bucketName = undefined;
            this._certificateId = undefined;
            this._className = undefined;
            this._databaseId = undefined;
            this._dataset = undefined;
            this._destinationAddress = undefined;
            this._dispatchNamespace = undefined;
            this._entrypoint = undefined;
            this._environment = undefined;
            this._format = undefined;
            this._id = undefined;
            this._indexName = undefined;
            this._instanceName = undefined;
            this._json = undefined;
            this._jurisdiction = undefined;
            this._keyBase64 = undefined;
            this._keyJwk = undefined;
            this._name = undefined;
            this._namespace = undefined;
            this._namespaceId = undefined;
            this._networkId = undefined;
            this._oldName = undefined;
            this._outbound.internalValue = undefined;
            this._part = undefined;
            this._pipeline = undefined;
            this._queueName = undefined;
            this._scriptName = undefined;
            this._secretName = undefined;
            this._service = undefined;
            this._serviceId = undefined;
            this._simple.internalValue = undefined;
            this._storeId = undefined;
            this._text = undefined;
            this._tunnelId = undefined;
            this._type = undefined;
            this._usages = undefined;
            this._versionId = undefined;
            this._workflowName = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._algorithm = value.algorithm;
            this._allowedDestinationAddresses = value.allowedDestinationAddresses;
            this._allowedSenderAddresses = value.allowedSenderAddresses;
            this._appId = value.appId;
            this._bucketName = value.bucketName;
            this._certificateId = value.certificateId;
            this._className = value.className;
            this._databaseId = value.databaseId;
            this._dataset = value.dataset;
            this._destinationAddress = value.destinationAddress;
            this._dispatchNamespace = value.dispatchNamespace;
            this._entrypoint = value.entrypoint;
            this._environment = value.environment;
            this._format = value.format;
            this._id = value.id;
            this._indexName = value.indexName;
            this._instanceName = value.instanceName;
            this._json = value.json;
            this._jurisdiction = value.jurisdiction;
            this._keyBase64 = value.keyBase64;
            this._keyJwk = value.keyJwk;
            this._name = value.name;
            this._namespace = value.namespace;
            this._namespaceId = value.namespaceId;
            this._networkId = value.networkId;
            this._oldName = value.oldName;
            this._outbound.internalValue = value.outbound;
            this._part = value.part;
            this._pipeline = value.pipeline;
            this._queueName = value.queueName;
            this._scriptName = value.scriptName;
            this._secretName = value.secretName;
            this._service = value.service;
            this._serviceId = value.serviceId;
            this._simple.internalValue = value.simple;
            this._storeId = value.storeId;
            this._text = value.text;
            this._tunnelId = value.tunnelId;
            this._type = value.type;
            this._usages = value.usages;
            this._versionId = value.versionId;
            this._workflowName = value.workflowName;
        }
    }
    // algorithm - computed: true, optional: true, required: false
    _algorithm;
    get algorithm() {
        return this.getStringAttribute('algorithm');
    }
    set algorithm(value) {
        this._algorithm = value;
    }
    resetAlgorithm() {
        this._algorithm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get algorithmInput() {
        return this._algorithm;
    }
    // allowed_destination_addresses - computed: true, optional: true, required: false
    _allowedDestinationAddresses;
    get allowedDestinationAddresses() {
        return this.getListAttribute('allowed_destination_addresses');
    }
    set allowedDestinationAddresses(value) {
        this._allowedDestinationAddresses = value;
    }
    resetAllowedDestinationAddresses() {
        this._allowedDestinationAddresses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedDestinationAddressesInput() {
        return this._allowedDestinationAddresses;
    }
    // allowed_sender_addresses - computed: true, optional: true, required: false
    _allowedSenderAddresses;
    get allowedSenderAddresses() {
        return this.getListAttribute('allowed_sender_addresses');
    }
    set allowedSenderAddresses(value) {
        this._allowedSenderAddresses = value;
    }
    resetAllowedSenderAddresses() {
        this._allowedSenderAddresses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowedSenderAddressesInput() {
        return this._allowedSenderAddresses;
    }
    // app_id - computed: true, optional: true, required: false
    _appId;
    get appId() {
        return this.getStringAttribute('app_id');
    }
    set appId(value) {
        this._appId = value;
    }
    resetAppId() {
        this._appId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get appIdInput() {
        return this._appId;
    }
    // bucket_name - computed: true, optional: true, required: false
    _bucketName;
    get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    set bucketName(value) {
        this._bucketName = value;
    }
    resetBucketName() {
        this._bucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bucketNameInput() {
        return this._bucketName;
    }
    // certificate_id - computed: true, optional: true, required: false
    _certificateId;
    get certificateId() {
        return this.getStringAttribute('certificate_id');
    }
    set certificateId(value) {
        this._certificateId = value;
    }
    resetCertificateId() {
        this._certificateId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get certificateIdInput() {
        return this._certificateId;
    }
    // class_name - computed: true, optional: true, required: false
    _className;
    get className() {
        return this.getStringAttribute('class_name');
    }
    set className(value) {
        this._className = value;
    }
    resetClassName() {
        this._className = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get classNameInput() {
        return this._className;
    }
    // database_id - computed: true, optional: true, required: false
    _databaseId;
    get databaseId() {
        return this.getStringAttribute('database_id');
    }
    set databaseId(value) {
        this._databaseId = value;
    }
    resetDatabaseId() {
        this._databaseId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get databaseIdInput() {
        return this._databaseId;
    }
    // dataset - computed: true, optional: true, required: false
    _dataset;
    get dataset() {
        return this.getStringAttribute('dataset');
    }
    set dataset(value) {
        this._dataset = value;
    }
    resetDataset() {
        this._dataset = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get datasetInput() {
        return this._dataset;
    }
    // destination_address - computed: true, optional: true, required: false
    _destinationAddress;
    get destinationAddress() {
        return this.getStringAttribute('destination_address');
    }
    set destinationAddress(value) {
        this._destinationAddress = value;
    }
    resetDestinationAddress() {
        this._destinationAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get destinationAddressInput() {
        return this._destinationAddress;
    }
    // dispatch_namespace - computed: true, optional: true, required: false
    _dispatchNamespace;
    get dispatchNamespace() {
        return this.getStringAttribute('dispatch_namespace');
    }
    set dispatchNamespace(value) {
        this._dispatchNamespace = value;
    }
    resetDispatchNamespace() {
        this._dispatchNamespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dispatchNamespaceInput() {
        return this._dispatchNamespace;
    }
    // entrypoint - computed: true, optional: true, required: false
    _entrypoint;
    get entrypoint() {
        return this.getStringAttribute('entrypoint');
    }
    set entrypoint(value) {
        this._entrypoint = value;
    }
    resetEntrypoint() {
        this._entrypoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get entrypointInput() {
        return this._entrypoint;
    }
    // environment - computed: true, optional: true, required: false
    _environment;
    get environment() {
        return this.getStringAttribute('environment');
    }
    set environment(value) {
        this._environment = value;
    }
    resetEnvironment() {
        this._environment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get environmentInput() {
        return this._environment;
    }
    // format - computed: true, optional: true, required: false
    _format;
    get format() {
        return this.getStringAttribute('format');
    }
    set format(value) {
        this._format = value;
    }
    resetFormat() {
        this._format = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get formatInput() {
        return this._format;
    }
    // id - computed: true, optional: true, required: false
    _id;
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // index_name - computed: true, optional: true, required: false
    _indexName;
    get indexName() {
        return this.getStringAttribute('index_name');
    }
    set indexName(value) {
        this._indexName = value;
    }
    resetIndexName() {
        this._indexName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get indexNameInput() {
        return this._indexName;
    }
    // instance_name - computed: true, optional: true, required: false
    _instanceName;
    get instanceName() {
        return this.getStringAttribute('instance_name');
    }
    set instanceName(value) {
        this._instanceName = value;
    }
    resetInstanceName() {
        this._instanceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instanceNameInput() {
        return this._instanceName;
    }
    // json - computed: true, optional: true, required: false
    _json;
    get json() {
        return this.getStringAttribute('json');
    }
    set json(value) {
        this._json = value;
    }
    resetJson() {
        this._json = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get jsonInput() {
        return this._json;
    }
    // jurisdiction - computed: true, optional: true, required: false
    _jurisdiction;
    get jurisdiction() {
        return this.getStringAttribute('jurisdiction');
    }
    set jurisdiction(value) {
        this._jurisdiction = value;
    }
    resetJurisdiction() {
        this._jurisdiction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get jurisdictionInput() {
        return this._jurisdiction;
    }
    // key_base64 - computed: true, optional: true, required: false
    _keyBase64;
    get keyBase64() {
        return this.getStringAttribute('key_base64');
    }
    set keyBase64(value) {
        this._keyBase64 = value;
    }
    resetKeyBase64() {
        this._keyBase64 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get keyBase64Input() {
        return this._keyBase64;
    }
    // key_jwk - computed: true, optional: true, required: false
    _keyJwk;
    get keyJwk() {
        return this.getStringAttribute('key_jwk');
    }
    set keyJwk(value) {
        this._keyJwk = value;
    }
    resetKeyJwk() {
        this._keyJwk = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get keyJwkInput() {
        return this._keyJwk;
    }
    // name - computed: true, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // namespace - computed: true, optional: true, required: false
    _namespace;
    get namespace() {
        return this.getStringAttribute('namespace');
    }
    set namespace(value) {
        this._namespace = value;
    }
    resetNamespace() {
        this._namespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get namespaceInput() {
        return this._namespace;
    }
    // namespace_id - computed: true, optional: true, required: false
    _namespaceId;
    get namespaceId() {
        return this.getStringAttribute('namespace_id');
    }
    set namespaceId(value) {
        this._namespaceId = value;
    }
    resetNamespaceId() {
        this._namespaceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get namespaceIdInput() {
        return this._namespaceId;
    }
    // network_id - computed: true, optional: true, required: false
    _networkId;
    get networkId() {
        return this.getStringAttribute('network_id');
    }
    set networkId(value) {
        this._networkId = value;
    }
    resetNetworkId() {
        this._networkId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networkIdInput() {
        return this._networkId;
    }
    // old_name - computed: true, optional: true, required: false
    _oldName;
    get oldName() {
        return this.getStringAttribute('old_name');
    }
    set oldName(value) {
        this._oldName = value;
    }
    resetOldName() {
        this._oldName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get oldNameInput() {
        return this._oldName;
    }
    // outbound - computed: true, optional: true, required: false
    _outbound = new WorkersScriptBindingsOutboundOutputReference(this, "outbound");
    get outbound() {
        return this._outbound;
    }
    putOutbound(value) {
        this._outbound.internalValue = value;
    }
    resetOutbound() {
        this._outbound.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get outboundInput() {
        return this._outbound.internalValue;
    }
    // part - computed: true, optional: true, required: false
    _part;
    get part() {
        return this.getStringAttribute('part');
    }
    set part(value) {
        this._part = value;
    }
    resetPart() {
        this._part = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get partInput() {
        return this._part;
    }
    // pipeline - computed: true, optional: true, required: false
    _pipeline;
    get pipeline() {
        return this.getStringAttribute('pipeline');
    }
    set pipeline(value) {
        this._pipeline = value;
    }
    resetPipeline() {
        this._pipeline = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pipelineInput() {
        return this._pipeline;
    }
    // queue_name - computed: true, optional: true, required: false
    _queueName;
    get queueName() {
        return this.getStringAttribute('queue_name');
    }
    set queueName(value) {
        this._queueName = value;
    }
    resetQueueName() {
        this._queueName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queueNameInput() {
        return this._queueName;
    }
    // script_name - computed: true, optional: true, required: false
    _scriptName;
    get scriptName() {
        return this.getStringAttribute('script_name');
    }
    set scriptName(value) {
        this._scriptName = value;
    }
    resetScriptName() {
        this._scriptName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scriptNameInput() {
        return this._scriptName;
    }
    // secret_name - computed: true, optional: true, required: false
    _secretName;
    get secretName() {
        return this.getStringAttribute('secret_name');
    }
    set secretName(value) {
        this._secretName = value;
    }
    resetSecretName() {
        this._secretName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get secretNameInput() {
        return this._secretName;
    }
    // service - computed: true, optional: true, required: false
    _service;
    get service() {
        return this.getStringAttribute('service');
    }
    set service(value) {
        this._service = value;
    }
    resetService() {
        this._service = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serviceInput() {
        return this._service;
    }
    // service_id - computed: true, optional: true, required: false
    _serviceId;
    get serviceId() {
        return this.getStringAttribute('service_id');
    }
    set serviceId(value) {
        this._serviceId = value;
    }
    resetServiceId() {
        this._serviceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serviceIdInput() {
        return this._serviceId;
    }
    // simple - computed: true, optional: true, required: false
    _simple = new WorkersScriptBindingsSimpleOutputReference(this, "simple");
    get simple() {
        return this._simple;
    }
    putSimple(value) {
        this._simple.internalValue = value;
    }
    resetSimple() {
        this._simple.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get simpleInput() {
        return this._simple.internalValue;
    }
    // store_id - computed: true, optional: true, required: false
    _storeId;
    get storeId() {
        return this.getStringAttribute('store_id');
    }
    set storeId(value) {
        this._storeId = value;
    }
    resetStoreId() {
        this._storeId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get storeIdInput() {
        return this._storeId;
    }
    // text - computed: true, optional: true, required: false
    _text;
    get text() {
        return this.getStringAttribute('text');
    }
    set text(value) {
        this._text = value;
    }
    resetText() {
        this._text = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get textInput() {
        return this._text;
    }
    // tunnel_id - computed: true, optional: true, required: false
    _tunnelId;
    get tunnelId() {
        return this.getStringAttribute('tunnel_id');
    }
    set tunnelId(value) {
        this._tunnelId = value;
    }
    resetTunnelId() {
        this._tunnelId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnelIdInput() {
        return this._tunnelId;
    }
    // type - computed: true, optional: false, required: true
    _type;
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    // usages - computed: true, optional: true, required: false
    _usages;
    get usages() {
        return cdktf.Fn.tolist(this.getListAttribute('usages'));
    }
    set usages(value) {
        this._usages = value;
    }
    resetUsages() {
        this._usages = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get usagesInput() {
        return this._usages;
    }
    // version_id - computed: true, optional: true, required: false
    _versionId;
    get versionId() {
        return this.getStringAttribute('version_id');
    }
    set versionId(value) {
        this._versionId = value;
    }
    resetVersionId() {
        this._versionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get versionIdInput() {
        return this._versionId;
    }
    // workflow_name - computed: true, optional: true, required: false
    _workflowName;
    get workflowName() {
        return this.getStringAttribute('workflow_name');
    }
    set workflowName(value) {
        this._workflowName = value;
    }
    resetWorkflowName() {
        this._workflowName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get workflowNameInput() {
        return this._workflowName;
    }
}
export class WorkersScriptBindingsList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new WorkersScriptBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function workersScriptLimitsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cpu_ms: cdktf.numberToTerraform(struct.cpuMs),
        subrequests: cdktf.numberToTerraform(struct.subrequests),
    };
}
export function workersScriptLimitsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        cpu_ms: {
            value: cdktf.numberToHclTerraform(struct.cpuMs),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        subrequests: {
            value: cdktf.numberToHclTerraform(struct.subrequests),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class WorkersScriptLimitsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._cpuMs !== undefined) {
            hasAnyValues = true;
            internalValueResult.cpuMs = this._cpuMs;
        }
        if (this._subrequests !== undefined) {
            hasAnyValues = true;
            internalValueResult.subrequests = this._subrequests;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cpuMs = undefined;
            this._subrequests = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cpuMs = value.cpuMs;
            this._subrequests = value.subrequests;
        }
    }
    // cpu_ms - computed: false, optional: true, required: false
    _cpuMs;
    get cpuMs() {
        return this.getNumberAttribute('cpu_ms');
    }
    set cpuMs(value) {
        this._cpuMs = value;
    }
    resetCpuMs() {
        this._cpuMs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cpuMsInput() {
        return this._cpuMs;
    }
    // subrequests - computed: false, optional: true, required: false
    _subrequests;
    get subrequests() {
        return this.getNumberAttribute('subrequests');
    }
    set subrequests(value) {
        this._subrequests = value;
    }
    resetSubrequests() {
        this._subrequests = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get subrequestsInput() {
        return this._subrequests;
    }
}
export function workersScriptMigrationsRenamedClassesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        from: cdktf.stringToTerraform(struct.from),
        to: cdktf.stringToTerraform(struct.to),
    };
}
export function workersScriptMigrationsRenamedClassesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        from: {
            value: cdktf.stringToHclTerraform(struct.from),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        to: {
            value: cdktf.stringToHclTerraform(struct.to),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class WorkersScriptMigrationsRenamedClassesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._from !== undefined) {
            hasAnyValues = true;
            internalValueResult.from = this._from;
        }
        if (this._to !== undefined) {
            hasAnyValues = true;
            internalValueResult.to = this._to;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._from = undefined;
            this._to = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._from = value.from;
            this._to = value.to;
        }
    }
    // from - computed: false, optional: true, required: false
    _from;
    get from() {
        return this.getStringAttribute('from');
    }
    set from(value) {
        this._from = value;
    }
    resetFrom() {
        this._from = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fromInput() {
        return this._from;
    }
    // to - computed: false, optional: true, required: false
    _to;
    get to() {
        return this.getStringAttribute('to');
    }
    set to(value) {
        this._to = value;
    }
    resetTo() {
        this._to = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get toInput() {
        return this._to;
    }
}
export class WorkersScriptMigrationsRenamedClassesList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new WorkersScriptMigrationsRenamedClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function workersScriptMigrationsStepsRenamedClassesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        from: cdktf.stringToTerraform(struct.from),
        to: cdktf.stringToTerraform(struct.to),
    };
}
export function workersScriptMigrationsStepsRenamedClassesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        from: {
            value: cdktf.stringToHclTerraform(struct.from),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        to: {
            value: cdktf.stringToHclTerraform(struct.to),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class WorkersScriptMigrationsStepsRenamedClassesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._from !== undefined) {
            hasAnyValues = true;
            internalValueResult.from = this._from;
        }
        if (this._to !== undefined) {
            hasAnyValues = true;
            internalValueResult.to = this._to;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._from = undefined;
            this._to = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._from = value.from;
            this._to = value.to;
        }
    }
    // from - computed: false, optional: true, required: false
    _from;
    get from() {
        return this.getStringAttribute('from');
    }
    set from(value) {
        this._from = value;
    }
    resetFrom() {
        this._from = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fromInput() {
        return this._from;
    }
    // to - computed: false, optional: true, required: false
    _to;
    get to() {
        return this.getStringAttribute('to');
    }
    set to(value) {
        this._to = value;
    }
    resetTo() {
        this._to = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get toInput() {
        return this._to;
    }
}
export class WorkersScriptMigrationsStepsRenamedClassesList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new WorkersScriptMigrationsStepsRenamedClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function workersScriptMigrationsStepsTransferredClassesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        from: cdktf.stringToTerraform(struct.from),
        from_script: cdktf.stringToTerraform(struct.fromScript),
        to: cdktf.stringToTerraform(struct.to),
    };
}
export function workersScriptMigrationsStepsTransferredClassesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        from: {
            value: cdktf.stringToHclTerraform(struct.from),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        from_script: {
            value: cdktf.stringToHclTerraform(struct.fromScript),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        to: {
            value: cdktf.stringToHclTerraform(struct.to),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class WorkersScriptMigrationsStepsTransferredClassesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._from !== undefined) {
            hasAnyValues = true;
            internalValueResult.from = this._from;
        }
        if (this._fromScript !== undefined) {
            hasAnyValues = true;
            internalValueResult.fromScript = this._fromScript;
        }
        if (this._to !== undefined) {
            hasAnyValues = true;
            internalValueResult.to = this._to;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._from = undefined;
            this._fromScript = undefined;
            this._to = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._from = value.from;
            this._fromScript = value.fromScript;
            this._to = value.to;
        }
    }
    // from - computed: false, optional: true, required: false
    _from;
    get from() {
        return this.getStringAttribute('from');
    }
    set from(value) {
        this._from = value;
    }
    resetFrom() {
        this._from = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fromInput() {
        return this._from;
    }
    // from_script - computed: false, optional: true, required: false
    _fromScript;
    get fromScript() {
        return this.getStringAttribute('from_script');
    }
    set fromScript(value) {
        this._fromScript = value;
    }
    resetFromScript() {
        this._fromScript = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fromScriptInput() {
        return this._fromScript;
    }
    // to - computed: false, optional: true, required: false
    _to;
    get to() {
        return this.getStringAttribute('to');
    }
    set to(value) {
        this._to = value;
    }
    resetTo() {
        this._to = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get toInput() {
        return this._to;
    }
}
export class WorkersScriptMigrationsStepsTransferredClassesList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new WorkersScriptMigrationsStepsTransferredClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function workersScriptMigrationsStepsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        deleted_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.deletedClasses),
        new_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.newClasses),
        new_sqlite_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.newSqliteClasses),
        renamed_classes: cdktf.listMapper(workersScriptMigrationsStepsRenamedClassesToTerraform, false)(struct.renamedClasses),
        transferred_classes: cdktf.listMapper(workersScriptMigrationsStepsTransferredClassesToTerraform, false)(struct.transferredClasses),
    };
}
export function workersScriptMigrationsStepsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        deleted_classes: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.deletedClasses),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        new_classes: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.newClasses),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        new_sqlite_classes: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.newSqliteClasses),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        renamed_classes: {
            value: cdktf.listMapperHcl(workersScriptMigrationsStepsRenamedClassesToHclTerraform, false)(struct.renamedClasses),
            isBlock: true,
            type: "list",
            storageClassType: "WorkersScriptMigrationsStepsRenamedClassesList",
        },
        transferred_classes: {
            value: cdktf.listMapperHcl(workersScriptMigrationsStepsTransferredClassesToHclTerraform, false)(struct.transferredClasses),
            isBlock: true,
            type: "list",
            storageClassType: "WorkersScriptMigrationsStepsTransferredClassesList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class WorkersScriptMigrationsStepsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._deletedClasses !== undefined) {
            hasAnyValues = true;
            internalValueResult.deletedClasses = this._deletedClasses;
        }
        if (this._newClasses !== undefined) {
            hasAnyValues = true;
            internalValueResult.newClasses = this._newClasses;
        }
        if (this._newSqliteClasses !== undefined) {
            hasAnyValues = true;
            internalValueResult.newSqliteClasses = this._newSqliteClasses;
        }
        if (this._renamedClasses?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.renamedClasses = this._renamedClasses?.internalValue;
        }
        if (this._transferredClasses?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.transferredClasses = this._transferredClasses?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deletedClasses = undefined;
            this._newClasses = undefined;
            this._newSqliteClasses = undefined;
            this._renamedClasses.internalValue = undefined;
            this._transferredClasses.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deletedClasses = value.deletedClasses;
            this._newClasses = value.newClasses;
            this._newSqliteClasses = value.newSqliteClasses;
            this._renamedClasses.internalValue = value.renamedClasses;
            this._transferredClasses.internalValue = value.transferredClasses;
        }
    }
    // deleted_classes - computed: false, optional: true, required: false
    _deletedClasses;
    get deletedClasses() {
        return this.getListAttribute('deleted_classes');
    }
    set deletedClasses(value) {
        this._deletedClasses = value;
    }
    resetDeletedClasses() {
        this._deletedClasses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deletedClassesInput() {
        return this._deletedClasses;
    }
    // new_classes - computed: false, optional: true, required: false
    _newClasses;
    get newClasses() {
        return this.getListAttribute('new_classes');
    }
    set newClasses(value) {
        this._newClasses = value;
    }
    resetNewClasses() {
        this._newClasses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get newClassesInput() {
        return this._newClasses;
    }
    // new_sqlite_classes - computed: false, optional: true, required: false
    _newSqliteClasses;
    get newSqliteClasses() {
        return this.getListAttribute('new_sqlite_classes');
    }
    set newSqliteClasses(value) {
        this._newSqliteClasses = value;
    }
    resetNewSqliteClasses() {
        this._newSqliteClasses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get newSqliteClassesInput() {
        return this._newSqliteClasses;
    }
    // renamed_classes - computed: false, optional: true, required: false
    _renamedClasses = new WorkersScriptMigrationsStepsRenamedClassesList(this, "renamed_classes", false);
    get renamedClasses() {
        return this._renamedClasses;
    }
    putRenamedClasses(value) {
        this._renamedClasses.internalValue = value;
    }
    resetRenamedClasses() {
        this._renamedClasses.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get renamedClassesInput() {
        return this._renamedClasses.internalValue;
    }
    // transferred_classes - computed: false, optional: true, required: false
    _transferredClasses = new WorkersScriptMigrationsStepsTransferredClassesList(this, "transferred_classes", false);
    get transferredClasses() {
        return this._transferredClasses;
    }
    putTransferredClasses(value) {
        this._transferredClasses.internalValue = value;
    }
    resetTransferredClasses() {
        this._transferredClasses.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get transferredClassesInput() {
        return this._transferredClasses.internalValue;
    }
}
export class WorkersScriptMigrationsStepsList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new WorkersScriptMigrationsStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function workersScriptMigrationsTransferredClassesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        from: cdktf.stringToTerraform(struct.from),
        from_script: cdktf.stringToTerraform(struct.fromScript),
        to: cdktf.stringToTerraform(struct.to),
    };
}
export function workersScriptMigrationsTransferredClassesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        from: {
            value: cdktf.stringToHclTerraform(struct.from),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        from_script: {
            value: cdktf.stringToHclTerraform(struct.fromScript),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        to: {
            value: cdktf.stringToHclTerraform(struct.to),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class WorkersScriptMigrationsTransferredClassesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._from !== undefined) {
            hasAnyValues = true;
            internalValueResult.from = this._from;
        }
        if (this._fromScript !== undefined) {
            hasAnyValues = true;
            internalValueResult.fromScript = this._fromScript;
        }
        if (this._to !== undefined) {
            hasAnyValues = true;
            internalValueResult.to = this._to;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._from = undefined;
            this._fromScript = undefined;
            this._to = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._from = value.from;
            this._fromScript = value.fromScript;
            this._to = value.to;
        }
    }
    // from - computed: false, optional: true, required: false
    _from;
    get from() {
        return this.getStringAttribute('from');
    }
    set from(value) {
        this._from = value;
    }
    resetFrom() {
        this._from = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fromInput() {
        return this._from;
    }
    // from_script - computed: false, optional: true, required: false
    _fromScript;
    get fromScript() {
        return this.getStringAttribute('from_script');
    }
    set fromScript(value) {
        this._fromScript = value;
    }
    resetFromScript() {
        this._fromScript = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fromScriptInput() {
        return this._fromScript;
    }
    // to - computed: false, optional: true, required: false
    _to;
    get to() {
        return this.getStringAttribute('to');
    }
    set to(value) {
        this._to = value;
    }
    resetTo() {
        this._to = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get toInput() {
        return this._to;
    }
}
export class WorkersScriptMigrationsTransferredClassesList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new WorkersScriptMigrationsTransferredClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function workersScriptMigrationsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        deleted_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.deletedClasses),
        new_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.newClasses),
        new_sqlite_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.newSqliteClasses),
        new_tag: cdktf.stringToTerraform(struct.newTag),
        old_tag: cdktf.stringToTerraform(struct.oldTag),
        renamed_classes: cdktf.listMapper(workersScriptMigrationsRenamedClassesToTerraform, false)(struct.renamedClasses),
        steps: cdktf.listMapper(workersScriptMigrationsStepsToTerraform, false)(struct.steps),
        transferred_classes: cdktf.listMapper(workersScriptMigrationsTransferredClassesToTerraform, false)(struct.transferredClasses),
    };
}
export function workersScriptMigrationsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        deleted_classes: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.deletedClasses),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        new_classes: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.newClasses),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        new_sqlite_classes: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.newSqliteClasses),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        new_tag: {
            value: cdktf.stringToHclTerraform(struct.newTag),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        old_tag: {
            value: cdktf.stringToHclTerraform(struct.oldTag),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        renamed_classes: {
            value: cdktf.listMapperHcl(workersScriptMigrationsRenamedClassesToHclTerraform, false)(struct.renamedClasses),
            isBlock: true,
            type: "list",
            storageClassType: "WorkersScriptMigrationsRenamedClassesList",
        },
        steps: {
            value: cdktf.listMapperHcl(workersScriptMigrationsStepsToHclTerraform, false)(struct.steps),
            isBlock: true,
            type: "list",
            storageClassType: "WorkersScriptMigrationsStepsList",
        },
        transferred_classes: {
            value: cdktf.listMapperHcl(workersScriptMigrationsTransferredClassesToHclTerraform, false)(struct.transferredClasses),
            isBlock: true,
            type: "list",
            storageClassType: "WorkersScriptMigrationsTransferredClassesList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class WorkersScriptMigrationsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._deletedClasses !== undefined) {
            hasAnyValues = true;
            internalValueResult.deletedClasses = this._deletedClasses;
        }
        if (this._newClasses !== undefined) {
            hasAnyValues = true;
            internalValueResult.newClasses = this._newClasses;
        }
        if (this._newSqliteClasses !== undefined) {
            hasAnyValues = true;
            internalValueResult.newSqliteClasses = this._newSqliteClasses;
        }
        if (this._newTag !== undefined) {
            hasAnyValues = true;
            internalValueResult.newTag = this._newTag;
        }
        if (this._oldTag !== undefined) {
            hasAnyValues = true;
            internalValueResult.oldTag = this._oldTag;
        }
        if (this._renamedClasses?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.renamedClasses = this._renamedClasses?.internalValue;
        }
        if (this._steps?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.steps = this._steps?.internalValue;
        }
        if (this._transferredClasses?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.transferredClasses = this._transferredClasses?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deletedClasses = undefined;
            this._newClasses = undefined;
            this._newSqliteClasses = undefined;
            this._newTag = undefined;
            this._oldTag = undefined;
            this._renamedClasses.internalValue = undefined;
            this._steps.internalValue = undefined;
            this._transferredClasses.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deletedClasses = value.deletedClasses;
            this._newClasses = value.newClasses;
            this._newSqliteClasses = value.newSqliteClasses;
            this._newTag = value.newTag;
            this._oldTag = value.oldTag;
            this._renamedClasses.internalValue = value.renamedClasses;
            this._steps.internalValue = value.steps;
            this._transferredClasses.internalValue = value.transferredClasses;
        }
    }
    // deleted_classes - computed: false, optional: true, required: false
    _deletedClasses;
    get deletedClasses() {
        return this.getListAttribute('deleted_classes');
    }
    set deletedClasses(value) {
        this._deletedClasses = value;
    }
    resetDeletedClasses() {
        this._deletedClasses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deletedClassesInput() {
        return this._deletedClasses;
    }
    // new_classes - computed: false, optional: true, required: false
    _newClasses;
    get newClasses() {
        return this.getListAttribute('new_classes');
    }
    set newClasses(value) {
        this._newClasses = value;
    }
    resetNewClasses() {
        this._newClasses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get newClassesInput() {
        return this._newClasses;
    }
    // new_sqlite_classes - computed: false, optional: true, required: false
    _newSqliteClasses;
    get newSqliteClasses() {
        return this.getListAttribute('new_sqlite_classes');
    }
    set newSqliteClasses(value) {
        this._newSqliteClasses = value;
    }
    resetNewSqliteClasses() {
        this._newSqliteClasses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get newSqliteClassesInput() {
        return this._newSqliteClasses;
    }
    // new_tag - computed: false, optional: true, required: false
    _newTag;
    get newTag() {
        return this.getStringAttribute('new_tag');
    }
    set newTag(value) {
        this._newTag = value;
    }
    resetNewTag() {
        this._newTag = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get newTagInput() {
        return this._newTag;
    }
    // old_tag - computed: false, optional: true, required: false
    _oldTag;
    get oldTag() {
        return this.getStringAttribute('old_tag');
    }
    set oldTag(value) {
        this._oldTag = value;
    }
    resetOldTag() {
        this._oldTag = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get oldTagInput() {
        return this._oldTag;
    }
    // renamed_classes - computed: false, optional: true, required: false
    _renamedClasses = new WorkersScriptMigrationsRenamedClassesList(this, "renamed_classes", false);
    get renamedClasses() {
        return this._renamedClasses;
    }
    putRenamedClasses(value) {
        this._renamedClasses.internalValue = value;
    }
    resetRenamedClasses() {
        this._renamedClasses.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get renamedClassesInput() {
        return this._renamedClasses.internalValue;
    }
    // steps - computed: false, optional: true, required: false
    _steps = new WorkersScriptMigrationsStepsList(this, "steps", false);
    get steps() {
        return this._steps;
    }
    putSteps(value) {
        this._steps.internalValue = value;
    }
    resetSteps() {
        this._steps.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get stepsInput() {
        return this._steps.internalValue;
    }
    // transferred_classes - computed: false, optional: true, required: false
    _transferredClasses = new WorkersScriptMigrationsTransferredClassesList(this, "transferred_classes", false);
    get transferredClasses() {
        return this._transferredClasses;
    }
    putTransferredClasses(value) {
        this._transferredClasses.internalValue = value;
    }
    resetTransferredClasses() {
        this._transferredClasses.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get transferredClassesInput() {
        return this._transferredClasses.internalValue;
    }
}
export function workersScriptNamedHandlersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function workersScriptNamedHandlersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class WorkersScriptNamedHandlersOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // handlers - computed: true, optional: false, required: false
    get handlers() {
        return this.getListAttribute('handlers');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
}
export class WorkersScriptNamedHandlersList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new WorkersScriptNamedHandlersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function workersScriptObservabilityLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        destinations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.destinations),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        head_sampling_rate: cdktf.numberToTerraform(struct.headSamplingRate),
        invocation_logs: cdktf.booleanToTerraform(struct.invocationLogs),
        persist: cdktf.booleanToTerraform(struct.persist),
    };
}
export function workersScriptObservabilityLogsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        destinations: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.destinations),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        head_sampling_rate: {
            value: cdktf.numberToHclTerraform(struct.headSamplingRate),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        invocation_logs: {
            value: cdktf.booleanToHclTerraform(struct.invocationLogs),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        persist: {
            value: cdktf.booleanToHclTerraform(struct.persist),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class WorkersScriptObservabilityLogsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._destinations !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinations = this._destinations;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._headSamplingRate !== undefined) {
            hasAnyValues = true;
            internalValueResult.headSamplingRate = this._headSamplingRate;
        }
        if (this._invocationLogs !== undefined) {
            hasAnyValues = true;
            internalValueResult.invocationLogs = this._invocationLogs;
        }
        if (this._persist !== undefined) {
            hasAnyValues = true;
            internalValueResult.persist = this._persist;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinations = undefined;
            this._enabled = undefined;
            this._headSamplingRate = undefined;
            this._invocationLogs = undefined;
            this._persist = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinations = value.destinations;
            this._enabled = value.enabled;
            this._headSamplingRate = value.headSamplingRate;
            this._invocationLogs = value.invocationLogs;
            this._persist = value.persist;
        }
    }
    // destinations - computed: false, optional: true, required: false
    _destinations;
    get destinations() {
        return this.getListAttribute('destinations');
    }
    set destinations(value) {
        this._destinations = value;
    }
    resetDestinations() {
        this._destinations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get destinationsInput() {
        return this._destinations;
    }
    // enabled - computed: false, optional: false, required: true
    _enabled;
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    // head_sampling_rate - computed: false, optional: true, required: false
    _headSamplingRate;
    get headSamplingRate() {
        return this.getNumberAttribute('head_sampling_rate');
    }
    set headSamplingRate(value) {
        this._headSamplingRate = value;
    }
    resetHeadSamplingRate() {
        this._headSamplingRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get headSamplingRateInput() {
        return this._headSamplingRate;
    }
    // invocation_logs - computed: false, optional: false, required: true
    _invocationLogs;
    get invocationLogs() {
        return this.getBooleanAttribute('invocation_logs');
    }
    set invocationLogs(value) {
        this._invocationLogs = value;
    }
    // Temporarily expose input value. Use with caution.
    get invocationLogsInput() {
        return this._invocationLogs;
    }
    // persist - computed: true, optional: true, required: false
    _persist;
    get persist() {
        return this.getBooleanAttribute('persist');
    }
    set persist(value) {
        this._persist = value;
    }
    resetPersist() {
        this._persist = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get persistInput() {
        return this._persist;
    }
}
export function workersScriptObservabilityTracesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        destinations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.destinations),
        enabled: cdktf.booleanToTerraform(struct.enabled),
        head_sampling_rate: cdktf.numberToTerraform(struct.headSamplingRate),
        persist: cdktf.booleanToTerraform(struct.persist),
    };
}
export function workersScriptObservabilityTracesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        destinations: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.destinations),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        head_sampling_rate: {
            value: cdktf.numberToHclTerraform(struct.headSamplingRate),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        persist: {
            value: cdktf.booleanToHclTerraform(struct.persist),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class WorkersScriptObservabilityTracesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._destinations !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinations = this._destinations;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._headSamplingRate !== undefined) {
            hasAnyValues = true;
            internalValueResult.headSamplingRate = this._headSamplingRate;
        }
        if (this._persist !== undefined) {
            hasAnyValues = true;
            internalValueResult.persist = this._persist;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinations = undefined;
            this._enabled = undefined;
            this._headSamplingRate = undefined;
            this._persist = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinations = value.destinations;
            this._enabled = value.enabled;
            this._headSamplingRate = value.headSamplingRate;
            this._persist = value.persist;
        }
    }
    // destinations - computed: false, optional: true, required: false
    _destinations;
    get destinations() {
        return this.getListAttribute('destinations');
    }
    set destinations(value) {
        this._destinations = value;
    }
    resetDestinations() {
        this._destinations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get destinationsInput() {
        return this._destinations;
    }
    // enabled - computed: false, optional: true, required: false
    _enabled;
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    // head_sampling_rate - computed: false, optional: true, required: false
    _headSamplingRate;
    get headSamplingRate() {
        return this.getNumberAttribute('head_sampling_rate');
    }
    set headSamplingRate(value) {
        this._headSamplingRate = value;
    }
    resetHeadSamplingRate() {
        this._headSamplingRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get headSamplingRateInput() {
        return this._headSamplingRate;
    }
    // persist - computed: true, optional: true, required: false
    _persist;
    get persist() {
        return this.getBooleanAttribute('persist');
    }
    set persist(value) {
        this._persist = value;
    }
    resetPersist() {
        this._persist = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get persistInput() {
        return this._persist;
    }
}
export function workersScriptObservabilityToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        head_sampling_rate: cdktf.numberToTerraform(struct.headSamplingRate),
        logs: workersScriptObservabilityLogsToTerraform(struct.logs),
        traces: workersScriptObservabilityTracesToTerraform(struct.traces),
    };
}
export function workersScriptObservabilityToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        enabled: {
            value: cdktf.booleanToHclTerraform(struct.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        head_sampling_rate: {
            value: cdktf.numberToHclTerraform(struct.headSamplingRate),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        logs: {
            value: workersScriptObservabilityLogsToHclTerraform(struct.logs),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkersScriptObservabilityLogs",
        },
        traces: {
            value: workersScriptObservabilityTracesToHclTerraform(struct.traces),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkersScriptObservabilityTraces",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class WorkersScriptObservabilityOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._headSamplingRate !== undefined) {
            hasAnyValues = true;
            internalValueResult.headSamplingRate = this._headSamplingRate;
        }
        if (this._logs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.logs = this._logs?.internalValue;
        }
        if (this._traces?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.traces = this._traces?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._headSamplingRate = undefined;
            this._logs.internalValue = undefined;
            this._traces.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._headSamplingRate = value.headSamplingRate;
            this._logs.internalValue = value.logs;
            this._traces.internalValue = value.traces;
        }
    }
    // enabled - computed: false, optional: false, required: true
    _enabled;
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    // head_sampling_rate - computed: false, optional: true, required: false
    _headSamplingRate;
    get headSamplingRate() {
        return this.getNumberAttribute('head_sampling_rate');
    }
    set headSamplingRate(value) {
        this._headSamplingRate = value;
    }
    resetHeadSamplingRate() {
        this._headSamplingRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get headSamplingRateInput() {
        return this._headSamplingRate;
    }
    // logs - computed: false, optional: true, required: false
    _logs = new WorkersScriptObservabilityLogsOutputReference(this, "logs");
    get logs() {
        return this._logs;
    }
    putLogs(value) {
        this._logs.internalValue = value;
    }
    resetLogs() {
        this._logs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logsInput() {
        return this._logs.internalValue;
    }
    // traces - computed: false, optional: true, required: false
    _traces = new WorkersScriptObservabilityTracesOutputReference(this, "traces");
    get traces() {
        return this._traces;
    }
    putTraces(value) {
        this._traces.internalValue = value;
    }
    resetTraces() {
        this._traces.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tracesInput() {
        return this._traces.internalValue;
    }
}
export function workersScriptPlacementTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function workersScriptPlacementTargetToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class WorkersScriptPlacementTargetOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // hostname - computed: true, optional: false, required: false
    get hostname() {
        return this.getStringAttribute('hostname');
    }
    // region - computed: true, optional: false, required: false
    get region() {
        return this.getStringAttribute('region');
    }
}
export class WorkersScriptPlacementTargetList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new WorkersScriptPlacementTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function workersScriptPlacementToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        mode: cdktf.stringToTerraform(struct.mode),
    };
}
export function workersScriptPlacementToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        mode: {
            value: cdktf.stringToHclTerraform(struct.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class WorkersScriptPlacementOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mode = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mode = value.mode;
        }
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // hostname - computed: true, optional: false, required: false
    get hostname() {
        return this.getStringAttribute('hostname');
    }
    // last_analyzed_at - computed: true, optional: false, required: false
    get lastAnalyzedAt() {
        return this.getStringAttribute('last_analyzed_at');
    }
    // mode - computed: true, optional: true, required: false
    _mode;
    get mode() {
        return this.getStringAttribute('mode');
    }
    set mode(value) {
        this._mode = value;
    }
    resetMode() {
        this._mode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get modeInput() {
        return this._mode;
    }
    // region - computed: true, optional: false, required: false
    get region() {
        return this.getStringAttribute('region');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // target - computed: true, optional: false, required: false
    _target = new WorkersScriptPlacementTargetList(this, "target", false);
    get target() {
        return this._target;
    }
}
export function workersScriptTailConsumersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        environment: cdktf.stringToTerraform(struct.environment),
        namespace: cdktf.stringToTerraform(struct.namespace),
        service: cdktf.stringToTerraform(struct.service),
    };
}
export function workersScriptTailConsumersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        environment: {
            value: cdktf.stringToHclTerraform(struct.environment),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        namespace: {
            value: cdktf.stringToHclTerraform(struct.namespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service: {
            value: cdktf.stringToHclTerraform(struct.service),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class WorkersScriptTailConsumersOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._environment !== undefined) {
            hasAnyValues = true;
            internalValueResult.environment = this._environment;
        }
        if (this._namespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespace = this._namespace;
        }
        if (this._service !== undefined) {
            hasAnyValues = true;
            internalValueResult.service = this._service;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._environment = undefined;
            this._namespace = undefined;
            this._service = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._environment = value.environment;
            this._namespace = value.namespace;
            this._service = value.service;
        }
    }
    // environment - computed: true, optional: true, required: false
    _environment;
    get environment() {
        return this.getStringAttribute('environment');
    }
    set environment(value) {
        this._environment = value;
    }
    resetEnvironment() {
        this._environment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get environmentInput() {
        return this._environment;
    }
    // namespace - computed: true, optional: true, required: false
    _namespace;
    get namespace() {
        return this.getStringAttribute('namespace');
    }
    set namespace(value) {
        this._namespace = value;
    }
    resetNamespace() {
        this._namespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get namespaceInput() {
        return this._namespace;
    }
    // service - computed: true, optional: false, required: true
    _service;
    get service() {
        return this.getStringAttribute('service');
    }
    set service(value) {
        this._service = value;
    }
    // Temporarily expose input value. Use with caution.
    get serviceInput() {
        return this._service;
    }
}
export class WorkersScriptTailConsumersList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new WorkersScriptTailConsumersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script cloudflare_workers_script}
*/
export class WorkersScript extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_workers_script";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a WorkersScript resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WorkersScript to import
    * @param importFromId The id of the existing WorkersScript that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WorkersScript to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_workers_script", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/workers_script cloudflare_workers_script} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkersScriptConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_workers_script',
            terraformGeneratorMetadata: {
                providerName: 'cloudflare',
                providerVersion: '5.19.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._accountId = config.accountId;
        this._annotations.internalValue = config.annotations;
        this._assets.internalValue = config.assets;
        this._bindings.internalValue = config.bindings;
        this._bodyPart = config.bodyPart;
        this._compatibilityDate = config.compatibilityDate;
        this._compatibilityFlags = config.compatibilityFlags;
        this._content = config.content;
        this._contentFile = config.contentFile;
        this._contentSha256 = config.contentSha256;
        this._contentType = config.contentType;
        this._keepAssets = config.keepAssets;
        this._keepBindings = config.keepBindings;
        this._limits.internalValue = config.limits;
        this._logpush = config.logpush;
        this._mainModule = config.mainModule;
        this._migrations.internalValue = config.migrations;
        this._observability.internalValue = config.observability;
        this._placement.internalValue = config.placement;
        this._scriptName = config.scriptName;
        this._tailConsumers.internalValue = config.tailConsumers;
        this._usageModel = config.usageModel;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // account_id - computed: false, optional: true, required: false
    _accountId;
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    set accountId(value) {
        this._accountId = value;
    }
    resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accountIdInput() {
        return this._accountId;
    }
    // annotations - computed: true, optional: true, required: false
    _annotations = new WorkersScriptAnnotationsOutputReference(this, "annotations");
    get annotations() {
        return this._annotations;
    }
    putAnnotations(value) {
        this._annotations.internalValue = value;
    }
    resetAnnotations() {
        this._annotations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get annotationsInput() {
        return this._annotations.internalValue;
    }
    // assets - computed: false, optional: true, required: false
    _assets = new WorkersScriptAssetsOutputReference(this, "assets");
    get assets() {
        return this._assets;
    }
    putAssets(value) {
        this._assets.internalValue = value;
    }
    resetAssets() {
        this._assets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get assetsInput() {
        return this._assets.internalValue;
    }
    // bindings - computed: true, optional: true, required: false
    _bindings = new WorkersScriptBindingsList(this, "bindings", false);
    get bindings() {
        return this._bindings;
    }
    putBindings(value) {
        this._bindings.internalValue = value;
    }
    resetBindings() {
        this._bindings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bindingsInput() {
        return this._bindings.internalValue;
    }
    // body_part - computed: false, optional: true, required: false
    _bodyPart;
    get bodyPart() {
        return this.getStringAttribute('body_part');
    }
    set bodyPart(value) {
        this._bodyPart = value;
    }
    resetBodyPart() {
        this._bodyPart = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyPartInput() {
        return this._bodyPart;
    }
    // compatibility_date - computed: true, optional: true, required: false
    _compatibilityDate;
    get compatibilityDate() {
        return this.getStringAttribute('compatibility_date');
    }
    set compatibilityDate(value) {
        this._compatibilityDate = value;
    }
    resetCompatibilityDate() {
        this._compatibilityDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get compatibilityDateInput() {
        return this._compatibilityDate;
    }
    // compatibility_flags - computed: true, optional: true, required: false
    _compatibilityFlags;
    get compatibilityFlags() {
        return cdktf.Fn.tolist(this.getListAttribute('compatibility_flags'));
    }
    set compatibilityFlags(value) {
        this._compatibilityFlags = value;
    }
    resetCompatibilityFlags() {
        this._compatibilityFlags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get compatibilityFlagsInput() {
        return this._compatibilityFlags;
    }
    // content - computed: false, optional: true, required: false
    _content;
    get content() {
        return this.getStringAttribute('content');
    }
    set content(value) {
        this._content = value;
    }
    resetContent() {
        this._content = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contentInput() {
        return this._content;
    }
    // content_file - computed: false, optional: true, required: false
    _contentFile;
    get contentFile() {
        return this.getStringAttribute('content_file');
    }
    set contentFile(value) {
        this._contentFile = value;
    }
    resetContentFile() {
        this._contentFile = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contentFileInput() {
        return this._contentFile;
    }
    // content_sha256 - computed: false, optional: true, required: false
    _contentSha256;
    get contentSha256() {
        return this.getStringAttribute('content_sha256');
    }
    set contentSha256(value) {
        this._contentSha256 = value;
    }
    resetContentSha256() {
        this._contentSha256 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contentSha256Input() {
        return this._contentSha256;
    }
    // content_type - computed: false, optional: true, required: false
    _contentType;
    get contentType() {
        return this.getStringAttribute('content_type');
    }
    set contentType(value) {
        this._contentType = value;
    }
    resetContentType() {
        this._contentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contentTypeInput() {
        return this._contentType;
    }
    // created_on - computed: true, optional: false, required: false
    get createdOn() {
        return this.getStringAttribute('created_on');
    }
    // etag - computed: true, optional: false, required: false
    get etag() {
        return this.getStringAttribute('etag');
    }
    // handlers - computed: true, optional: false, required: false
    get handlers() {
        return this.getListAttribute('handlers');
    }
    // has_assets - computed: true, optional: false, required: false
    get hasAssets() {
        return this.getBooleanAttribute('has_assets');
    }
    // has_modules - computed: true, optional: false, required: false
    get hasModules() {
        return this.getBooleanAttribute('has_modules');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // keep_assets - computed: false, optional: true, required: false
    _keepAssets;
    get keepAssets() {
        return this.getBooleanAttribute('keep_assets');
    }
    set keepAssets(value) {
        this._keepAssets = value;
    }
    resetKeepAssets() {
        this._keepAssets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get keepAssetsInput() {
        return this._keepAssets;
    }
    // keep_bindings - computed: false, optional: true, required: false
    _keepBindings;
    get keepBindings() {
        return cdktf.Fn.tolist(this.getListAttribute('keep_bindings'));
    }
    set keepBindings(value) {
        this._keepBindings = value;
    }
    resetKeepBindings() {
        this._keepBindings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get keepBindingsInput() {
        return this._keepBindings;
    }
    // last_deployed_from - computed: true, optional: false, required: false
    get lastDeployedFrom() {
        return this.getStringAttribute('last_deployed_from');
    }
    // limits - computed: false, optional: true, required: false
    _limits = new WorkersScriptLimitsOutputReference(this, "limits");
    get limits() {
        return this._limits;
    }
    putLimits(value) {
        this._limits.internalValue = value;
    }
    resetLimits() {
        this._limits.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get limitsInput() {
        return this._limits.internalValue;
    }
    // logpush - computed: true, optional: true, required: false
    _logpush;
    get logpush() {
        return this.getBooleanAttribute('logpush');
    }
    set logpush(value) {
        this._logpush = value;
    }
    resetLogpush() {
        this._logpush = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logpushInput() {
        return this._logpush;
    }
    // main_module - computed: false, optional: true, required: false
    _mainModule;
    get mainModule() {
        return this.getStringAttribute('main_module');
    }
    set mainModule(value) {
        this._mainModule = value;
    }
    resetMainModule() {
        this._mainModule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mainModuleInput() {
        return this._mainModule;
    }
    // migration_tag - computed: true, optional: false, required: false
    get migrationTag() {
        return this.getStringAttribute('migration_tag');
    }
    // migrations - computed: false, optional: true, required: false
    _migrations = new WorkersScriptMigrationsOutputReference(this, "migrations");
    get migrations() {
        return this._migrations;
    }
    putMigrations(value) {
        this._migrations.internalValue = value;
    }
    resetMigrations() {
        this._migrations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get migrationsInput() {
        return this._migrations.internalValue;
    }
    // modified_on - computed: true, optional: false, required: false
    get modifiedOn() {
        return this.getStringAttribute('modified_on');
    }
    // named_handlers - computed: true, optional: false, required: false
    _namedHandlers = new WorkersScriptNamedHandlersList(this, "named_handlers", false);
    get namedHandlers() {
        return this._namedHandlers;
    }
    // observability - computed: false, optional: true, required: false
    _observability = new WorkersScriptObservabilityOutputReference(this, "observability");
    get observability() {
        return this._observability;
    }
    putObservability(value) {
        this._observability.internalValue = value;
    }
    resetObservability() {
        this._observability.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get observabilityInput() {
        return this._observability.internalValue;
    }
    // placement - computed: true, optional: true, required: false
    _placement = new WorkersScriptPlacementOutputReference(this, "placement");
    get placement() {
        return this._placement;
    }
    putPlacement(value) {
        this._placement.internalValue = value;
    }
    resetPlacement() {
        this._placement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get placementInput() {
        return this._placement.internalValue;
    }
    // placement_mode - computed: true, optional: false, required: false
    get placementMode() {
        return this.getStringAttribute('placement_mode');
    }
    // placement_status - computed: true, optional: false, required: false
    get placementStatus() {
        return this.getStringAttribute('placement_status');
    }
    // script_name - computed: false, optional: false, required: true
    _scriptName;
    get scriptName() {
        return this.getStringAttribute('script_name');
    }
    set scriptName(value) {
        this._scriptName = value;
    }
    // Temporarily expose input value. Use with caution.
    get scriptNameInput() {
        return this._scriptName;
    }
    // startup_time_ms - computed: true, optional: false, required: false
    get startupTimeMs() {
        return this.getNumberAttribute('startup_time_ms');
    }
    // tail_consumers - computed: true, optional: true, required: false
    _tailConsumers = new WorkersScriptTailConsumersList(this, "tail_consumers", true);
    get tailConsumers() {
        return this._tailConsumers;
    }
    putTailConsumers(value) {
        this._tailConsumers.internalValue = value;
    }
    resetTailConsumers() {
        this._tailConsumers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tailConsumersInput() {
        return this._tailConsumers.internalValue;
    }
    // usage_model - computed: true, optional: true, required: false
    _usageModel;
    get usageModel() {
        return this.getStringAttribute('usage_model');
    }
    set usageModel(value) {
        this._usageModel = value;
    }
    resetUsageModel() {
        this._usageModel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get usageModelInput() {
        return this._usageModel;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            annotations: workersScriptAnnotationsToTerraform(this._annotations.internalValue),
            assets: workersScriptAssetsToTerraform(this._assets.internalValue),
            bindings: cdktf.listMapper(workersScriptBindingsToTerraform, false)(this._bindings.internalValue),
            body_part: cdktf.stringToTerraform(this._bodyPart),
            compatibility_date: cdktf.stringToTerraform(this._compatibilityDate),
            compatibility_flags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._compatibilityFlags),
            content: cdktf.stringToTerraform(this._content),
            content_file: cdktf.stringToTerraform(this._contentFile),
            content_sha256: cdktf.stringToTerraform(this._contentSha256),
            content_type: cdktf.stringToTerraform(this._contentType),
            keep_assets: cdktf.booleanToTerraform(this._keepAssets),
            keep_bindings: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keepBindings),
            limits: workersScriptLimitsToTerraform(this._limits.internalValue),
            logpush: cdktf.booleanToTerraform(this._logpush),
            main_module: cdktf.stringToTerraform(this._mainModule),
            migrations: workersScriptMigrationsToTerraform(this._migrations.internalValue),
            observability: workersScriptObservabilityToTerraform(this._observability.internalValue),
            placement: workersScriptPlacementToTerraform(this._placement.internalValue),
            script_name: cdktf.stringToTerraform(this._scriptName),
            tail_consumers: cdktf.listMapper(workersScriptTailConsumersToTerraform, false)(this._tailConsumers.internalValue),
            usage_model: cdktf.stringToTerraform(this._usageModel),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            annotations: {
                value: workersScriptAnnotationsToHclTerraform(this._annotations.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "WorkersScriptAnnotations",
            },
            assets: {
                value: workersScriptAssetsToHclTerraform(this._assets.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "WorkersScriptAssets",
            },
            bindings: {
                value: cdktf.listMapperHcl(workersScriptBindingsToHclTerraform, false)(this._bindings.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "WorkersScriptBindingsList",
            },
            body_part: {
                value: cdktf.stringToHclTerraform(this._bodyPart),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            compatibility_date: {
                value: cdktf.stringToHclTerraform(this._compatibilityDate),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            compatibility_flags: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._compatibilityFlags),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            content: {
                value: cdktf.stringToHclTerraform(this._content),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            content_file: {
                value: cdktf.stringToHclTerraform(this._contentFile),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            content_sha256: {
                value: cdktf.stringToHclTerraform(this._contentSha256),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            content_type: {
                value: cdktf.stringToHclTerraform(this._contentType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            keep_assets: {
                value: cdktf.booleanToHclTerraform(this._keepAssets),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            keep_bindings: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._keepBindings),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            limits: {
                value: workersScriptLimitsToHclTerraform(this._limits.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "WorkersScriptLimits",
            },
            logpush: {
                value: cdktf.booleanToHclTerraform(this._logpush),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            main_module: {
                value: cdktf.stringToHclTerraform(this._mainModule),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            migrations: {
                value: workersScriptMigrationsToHclTerraform(this._migrations.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "WorkersScriptMigrations",
            },
            observability: {
                value: workersScriptObservabilityToHclTerraform(this._observability.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "WorkersScriptObservability",
            },
            placement: {
                value: workersScriptPlacementToHclTerraform(this._placement.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "WorkersScriptPlacement",
            },
            script_name: {
                value: cdktf.stringToHclTerraform(this._scriptName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tail_consumers: {
                value: cdktf.listMapperHcl(workersScriptTailConsumersToHclTerraform, false)(this._tailConsumers.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "WorkersScriptTailConsumersList",
            },
            usage_model: {
                value: cdktf.stringToHclTerraform(this._usageModel),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function workerVersionAnnotationsToTerraform(struct) {
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
export function workerVersionAnnotationsToHclTerraform(struct) {
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
export class WorkerVersionAnnotationsOutputReference extends cdktf.ComplexObject {
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
export function workerVersionAssetsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        html_handling: cdktf.stringToTerraform(struct.htmlHandling),
        not_found_handling: cdktf.stringToTerraform(struct.notFoundHandling),
        run_worker_first: cdktf.hashMapper(cdktf.anyToTerraform)(struct.runWorkerFirst),
    };
}
export function workerVersionAssetsConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
        run_worker_first: {
            value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(struct.runWorkerFirst),
            isBlock: false,
            type: "map",
            storageClassType: "anyMap",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class WorkerVersionAssetsConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._htmlHandling !== undefined) {
            hasAnyValues = true;
            internalValueResult.htmlHandling = this._htmlHandling;
        }
        if (this._notFoundHandling !== undefined) {
            hasAnyValues = true;
            internalValueResult.notFoundHandling = this._notFoundHandling;
        }
        if (this._runWorkerFirst !== undefined) {
            hasAnyValues = true;
            internalValueResult.runWorkerFirst = this._runWorkerFirst;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._htmlHandling = undefined;
            this._notFoundHandling = undefined;
            this._runWorkerFirst = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._htmlHandling = value.htmlHandling;
            this._notFoundHandling = value.notFoundHandling;
            this._runWorkerFirst = value.runWorkerFirst;
        }
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
}
export function workerVersionAssetsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        config: workerVersionAssetsConfigToTerraform(struct.config),
        directory: cdktf.stringToTerraform(struct.directory),
        jwt: cdktf.stringToTerraform(struct.jwt),
    };
}
export function workerVersionAssetsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        config: {
            value: workerVersionAssetsConfigToHclTerraform(struct.config),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkerVersionAssetsConfig",
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
export class WorkerVersionAssetsOutputReference extends cdktf.ComplexObject {
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
    _config = new WorkerVersionAssetsConfigOutputReference(this, "config");
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
export function workerVersionBindingsOutboundParamsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export function workerVersionBindingsOutboundParamsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class WorkerVersionBindingsOutboundParamsOutputReference extends cdktf.ComplexObject {
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
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
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
}
export class WorkerVersionBindingsOutboundParamsList extends cdktf.ComplexList {
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
        return new WorkerVersionBindingsOutboundParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function workerVersionBindingsOutboundWorkerToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        entrypoint: cdktf.stringToTerraform(struct.entrypoint),
        environment: cdktf.stringToTerraform(struct.environment),
        service: cdktf.stringToTerraform(struct.service),
    };
}
export function workerVersionBindingsOutboundWorkerToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
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
export class WorkerVersionBindingsOutboundWorkerOutputReference extends cdktf.ComplexObject {
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
        if (this._entrypoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.entrypoint = this._entrypoint;
        }
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
            this._entrypoint = undefined;
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
            this._entrypoint = value.entrypoint;
            this._environment = value.environment;
            this._service = value.service;
        }
    }
    // entrypoint - computed: false, optional: true, required: false
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
    // environment - computed: false, optional: true, required: false
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
    // service - computed: false, optional: true, required: false
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
export function workerVersionBindingsOutboundToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        params: cdktf.listMapper(workerVersionBindingsOutboundParamsToTerraform, false)(struct.params),
        worker: workerVersionBindingsOutboundWorkerToTerraform(struct.worker),
    };
}
export function workerVersionBindingsOutboundToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        params: {
            value: cdktf.listMapperHcl(workerVersionBindingsOutboundParamsToHclTerraform, false)(struct.params),
            isBlock: true,
            type: "list",
            storageClassType: "WorkerVersionBindingsOutboundParamsList",
        },
        worker: {
            value: workerVersionBindingsOutboundWorkerToHclTerraform(struct.worker),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkerVersionBindingsOutboundWorker",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class WorkerVersionBindingsOutboundOutputReference extends cdktf.ComplexObject {
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
        if (this._params?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.params = this._params?.internalValue;
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
            this._params.internalValue = undefined;
            this._worker.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._params.internalValue = value.params;
            this._worker.internalValue = value.worker;
        }
    }
    // params - computed: false, optional: true, required: false
    _params = new WorkerVersionBindingsOutboundParamsList(this, "params", false);
    get params() {
        return this._params;
    }
    putParams(value) {
        this._params.internalValue = value;
    }
    resetParams() {
        this._params.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get paramsInput() {
        return this._params.internalValue;
    }
    // worker - computed: false, optional: true, required: false
    _worker = new WorkerVersionBindingsOutboundWorkerOutputReference(this, "worker");
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
export function workerVersionBindingsSimpleToTerraform(struct) {
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
export function workerVersionBindingsSimpleToHclTerraform(struct) {
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
export class WorkerVersionBindingsSimpleOutputReference extends cdktf.ComplexObject {
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
    // limit - computed: false, optional: false, required: true
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
    // period - computed: false, optional: false, required: true
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
export function workerVersionBindingsToTerraform(struct) {
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
        outbound: workerVersionBindingsOutboundToTerraform(struct.outbound),
        part: cdktf.stringToTerraform(struct.part),
        pipeline: cdktf.stringToTerraform(struct.pipeline),
        queue_name: cdktf.stringToTerraform(struct.queueName),
        script_name: cdktf.stringToTerraform(struct.scriptName),
        secret_name: cdktf.stringToTerraform(struct.secretName),
        service: cdktf.stringToTerraform(struct.service),
        service_id: cdktf.stringToTerraform(struct.serviceId),
        simple: workerVersionBindingsSimpleToTerraform(struct.simple),
        store_id: cdktf.stringToTerraform(struct.storeId),
        text: cdktf.stringToTerraform(struct.text),
        tunnel_id: cdktf.stringToTerraform(struct.tunnelId),
        type: cdktf.stringToTerraform(struct.type),
        usages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.usages),
        version_id: cdktf.stringToTerraform(struct.versionId),
        workflow_name: cdktf.stringToTerraform(struct.workflowName),
    };
}
export function workerVersionBindingsToHclTerraform(struct) {
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
            value: workerVersionBindingsOutboundToHclTerraform(struct.outbound),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkerVersionBindingsOutbound",
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
            value: workerVersionBindingsSimpleToHclTerraform(struct.simple),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkerVersionBindingsSimple",
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
export class WorkerVersionBindingsOutputReference extends cdktf.ComplexObject {
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
    // algorithm - computed: false, optional: true, required: false
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
    // allowed_destination_addresses - computed: false, optional: true, required: false
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
    // allowed_sender_addresses - computed: false, optional: true, required: false
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
    // app_id - computed: false, optional: true, required: false
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
    // bucket_name - computed: false, optional: true, required: false
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
    // certificate_id - computed: false, optional: true, required: false
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
    // dataset - computed: false, optional: true, required: false
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
    // destination_address - computed: false, optional: true, required: false
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
    // dispatch_namespace - computed: false, optional: true, required: false
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
    // entrypoint - computed: false, optional: true, required: false
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
    // environment - computed: false, optional: true, required: false
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
    // format - computed: false, optional: true, required: false
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
    // id - computed: false, optional: true, required: false
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
    // index_name - computed: false, optional: true, required: false
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
    // instance_name - computed: false, optional: true, required: false
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
    // json - computed: false, optional: true, required: false
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
    // jurisdiction - computed: false, optional: true, required: false
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
    // key_base64 - computed: false, optional: true, required: false
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
    // key_jwk - computed: false, optional: true, required: false
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
    // name - computed: false, optional: false, required: true
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
    // namespace - computed: false, optional: true, required: false
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
    // network_id - computed: false, optional: true, required: false
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
    // old_name - computed: false, optional: true, required: false
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
    // outbound - computed: false, optional: true, required: false
    _outbound = new WorkerVersionBindingsOutboundOutputReference(this, "outbound");
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
    // part - computed: false, optional: true, required: false
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
    // pipeline - computed: false, optional: true, required: false
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
    // queue_name - computed: false, optional: true, required: false
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
    // secret_name - computed: false, optional: true, required: false
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
    // service - computed: false, optional: true, required: false
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
    // service_id - computed: false, optional: true, required: false
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
    // simple - computed: false, optional: true, required: false
    _simple = new WorkerVersionBindingsSimpleOutputReference(this, "simple");
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
    // store_id - computed: false, optional: true, required: false
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
    // text - computed: false, optional: true, required: false
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
    // tunnel_id - computed: false, optional: true, required: false
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
    // type - computed: false, optional: false, required: true
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
    // usages - computed: false, optional: true, required: false
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
    // version_id - computed: false, optional: true, required: false
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
    // workflow_name - computed: false, optional: true, required: false
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
export class WorkerVersionBindingsList extends cdktf.ComplexList {
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
        return new WorkerVersionBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function workerVersionContainersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        class_name: cdktf.stringToTerraform(struct.className),
    };
}
export function workerVersionContainersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        class_name: {
            value: cdktf.stringToHclTerraform(struct.className),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class WorkerVersionContainersOutputReference extends cdktf.ComplexObject {
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
        if (this._className !== undefined) {
            hasAnyValues = true;
            internalValueResult.className = this._className;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._className = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._className = value.className;
        }
    }
    // class_name - computed: false, optional: false, required: true
    _className;
    get className() {
        return this.getStringAttribute('class_name');
    }
    set className(value) {
        this._className = value;
    }
    // Temporarily expose input value. Use with caution.
    get classNameInput() {
        return this._className;
    }
}
export class WorkerVersionContainersList extends cdktf.ComplexList {
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
        return new WorkerVersionContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function workerVersionLimitsToTerraform(struct) {
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
export function workerVersionLimitsToHclTerraform(struct) {
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
export class WorkerVersionLimitsOutputReference extends cdktf.ComplexObject {
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
    // cpu_ms - computed: true, optional: true, required: false
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
    // subrequests - computed: true, optional: true, required: false
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
export function workerVersionMigrationsRenamedClassesToTerraform(struct) {
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
export function workerVersionMigrationsRenamedClassesToHclTerraform(struct) {
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
export class WorkerVersionMigrationsRenamedClassesOutputReference extends cdktf.ComplexObject {
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
export class WorkerVersionMigrationsRenamedClassesList extends cdktf.ComplexList {
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
        return new WorkerVersionMigrationsRenamedClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function workerVersionMigrationsStepsRenamedClassesToTerraform(struct) {
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
export function workerVersionMigrationsStepsRenamedClassesToHclTerraform(struct) {
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
export class WorkerVersionMigrationsStepsRenamedClassesOutputReference extends cdktf.ComplexObject {
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
export class WorkerVersionMigrationsStepsRenamedClassesList extends cdktf.ComplexList {
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
        return new WorkerVersionMigrationsStepsRenamedClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function workerVersionMigrationsStepsTransferredClassesToTerraform(struct) {
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
export function workerVersionMigrationsStepsTransferredClassesToHclTerraform(struct) {
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
export class WorkerVersionMigrationsStepsTransferredClassesOutputReference extends cdktf.ComplexObject {
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
export class WorkerVersionMigrationsStepsTransferredClassesList extends cdktf.ComplexList {
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
        return new WorkerVersionMigrationsStepsTransferredClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function workerVersionMigrationsStepsToTerraform(struct) {
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
        renamed_classes: cdktf.listMapper(workerVersionMigrationsStepsRenamedClassesToTerraform, false)(struct.renamedClasses),
        transferred_classes: cdktf.listMapper(workerVersionMigrationsStepsTransferredClassesToTerraform, false)(struct.transferredClasses),
    };
}
export function workerVersionMigrationsStepsToHclTerraform(struct) {
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
            value: cdktf.listMapperHcl(workerVersionMigrationsStepsRenamedClassesToHclTerraform, false)(struct.renamedClasses),
            isBlock: true,
            type: "list",
            storageClassType: "WorkerVersionMigrationsStepsRenamedClassesList",
        },
        transferred_classes: {
            value: cdktf.listMapperHcl(workerVersionMigrationsStepsTransferredClassesToHclTerraform, false)(struct.transferredClasses),
            isBlock: true,
            type: "list",
            storageClassType: "WorkerVersionMigrationsStepsTransferredClassesList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class WorkerVersionMigrationsStepsOutputReference extends cdktf.ComplexObject {
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
    _renamedClasses = new WorkerVersionMigrationsStepsRenamedClassesList(this, "renamed_classes", false);
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
    _transferredClasses = new WorkerVersionMigrationsStepsTransferredClassesList(this, "transferred_classes", false);
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
export class WorkerVersionMigrationsStepsList extends cdktf.ComplexList {
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
        return new WorkerVersionMigrationsStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function workerVersionMigrationsTransferredClassesToTerraform(struct) {
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
export function workerVersionMigrationsTransferredClassesToHclTerraform(struct) {
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
export class WorkerVersionMigrationsTransferredClassesOutputReference extends cdktf.ComplexObject {
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
export class WorkerVersionMigrationsTransferredClassesList extends cdktf.ComplexList {
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
        return new WorkerVersionMigrationsTransferredClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function workerVersionMigrationsToTerraform(struct) {
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
        renamed_classes: cdktf.listMapper(workerVersionMigrationsRenamedClassesToTerraform, false)(struct.renamedClasses),
        steps: cdktf.listMapper(workerVersionMigrationsStepsToTerraform, false)(struct.steps),
        transferred_classes: cdktf.listMapper(workerVersionMigrationsTransferredClassesToTerraform, false)(struct.transferredClasses),
    };
}
export function workerVersionMigrationsToHclTerraform(struct) {
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
            value: cdktf.listMapperHcl(workerVersionMigrationsRenamedClassesToHclTerraform, false)(struct.renamedClasses),
            isBlock: true,
            type: "list",
            storageClassType: "WorkerVersionMigrationsRenamedClassesList",
        },
        steps: {
            value: cdktf.listMapperHcl(workerVersionMigrationsStepsToHclTerraform, false)(struct.steps),
            isBlock: true,
            type: "list",
            storageClassType: "WorkerVersionMigrationsStepsList",
        },
        transferred_classes: {
            value: cdktf.listMapperHcl(workerVersionMigrationsTransferredClassesToHclTerraform, false)(struct.transferredClasses),
            isBlock: true,
            type: "list",
            storageClassType: "WorkerVersionMigrationsTransferredClassesList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class WorkerVersionMigrationsOutputReference extends cdktf.ComplexObject {
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
    _renamedClasses = new WorkerVersionMigrationsRenamedClassesList(this, "renamed_classes", false);
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
    _steps = new WorkerVersionMigrationsStepsList(this, "steps", false);
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
    _transferredClasses = new WorkerVersionMigrationsTransferredClassesList(this, "transferred_classes", false);
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
export function workerVersionModulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        content_base64: cdktf.stringToTerraform(struct.contentBase64),
        content_file: cdktf.stringToTerraform(struct.contentFile),
        content_type: cdktf.stringToTerraform(struct.contentType),
        name: cdktf.stringToTerraform(struct.name),
    };
}
export function workerVersionModulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        content_base64: {
            value: cdktf.stringToHclTerraform(struct.contentBase64),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        content_file: {
            value: cdktf.stringToHclTerraform(struct.contentFile),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        content_type: {
            value: cdktf.stringToHclTerraform(struct.contentType),
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
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class WorkerVersionModulesOutputReference extends cdktf.ComplexObject {
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
        if (this._contentBase64 !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentBase64 = this._contentBase64;
        }
        if (this._contentFile !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentFile = this._contentFile;
        }
        if (this._contentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentBase64 = undefined;
            this._contentFile = undefined;
            this._contentType = undefined;
            this._name = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentBase64 = value.contentBase64;
            this._contentFile = value.contentFile;
            this._contentType = value.contentType;
            this._name = value.name;
        }
    }
    // content_base64 - computed: false, optional: true, required: false
    _contentBase64;
    get contentBase64() {
        return this.getStringAttribute('content_base64');
    }
    set contentBase64(value) {
        this._contentBase64 = value;
    }
    resetContentBase64() {
        this._contentBase64 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contentBase64Input() {
        return this._contentBase64;
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
    // content_sha256 - computed: true, optional: false, required: false
    get contentSha256() {
        return this.getStringAttribute('content_sha256');
    }
    // content_type - computed: false, optional: false, required: true
    _contentType;
    get contentType() {
        return this.getStringAttribute('content_type');
    }
    set contentType(value) {
        this._contentType = value;
    }
    // Temporarily expose input value. Use with caution.
    get contentTypeInput() {
        return this._contentType;
    }
    // name - computed: false, optional: false, required: true
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
}
export class WorkerVersionModulesList extends cdktf.ComplexList {
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
        return new WorkerVersionModulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function workerVersionPlacementTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        host: cdktf.stringToTerraform(struct.host),
        hostname: cdktf.stringToTerraform(struct.hostname),
        region: cdktf.stringToTerraform(struct.region),
    };
}
export function workerVersionPlacementTargetToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        host: {
            value: cdktf.stringToHclTerraform(struct.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hostname: {
            value: cdktf.stringToHclTerraform(struct.hostname),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        region: {
            value: cdktf.stringToHclTerraform(struct.region),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class WorkerVersionPlacementTargetOutputReference extends cdktf.ComplexObject {
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
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._hostname !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostname = this._hostname;
        }
        if (this._region !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._host = undefined;
            this._hostname = undefined;
            this._region = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._host = value.host;
            this._hostname = value.hostname;
            this._region = value.region;
        }
    }
    // host - computed: false, optional: true, required: false
    _host;
    get host() {
        return this.getStringAttribute('host');
    }
    set host(value) {
        this._host = value;
    }
    resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostInput() {
        return this._host;
    }
    // hostname - computed: false, optional: true, required: false
    _hostname;
    get hostname() {
        return this.getStringAttribute('hostname');
    }
    set hostname(value) {
        this._hostname = value;
    }
    resetHostname() {
        this._hostname = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostnameInput() {
        return this._hostname;
    }
    // region - computed: false, optional: true, required: false
    _region;
    get region() {
        return this.getStringAttribute('region');
    }
    set region(value) {
        this._region = value;
    }
    resetRegion() {
        this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get regionInput() {
        return this._region;
    }
}
export class WorkerVersionPlacementTargetList extends cdktf.ComplexList {
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
        return new WorkerVersionPlacementTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function workerVersionPlacementToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        host: cdktf.stringToTerraform(struct.host),
        hostname: cdktf.stringToTerraform(struct.hostname),
        mode: cdktf.stringToTerraform(struct.mode),
        region: cdktf.stringToTerraform(struct.region),
        target: cdktf.listMapper(workerVersionPlacementTargetToTerraform, false)(struct.target),
    };
}
export function workerVersionPlacementToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        host: {
            value: cdktf.stringToHclTerraform(struct.host),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hostname: {
            value: cdktf.stringToHclTerraform(struct.hostname),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mode: {
            value: cdktf.stringToHclTerraform(struct.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        region: {
            value: cdktf.stringToHclTerraform(struct.region),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target: {
            value: cdktf.listMapperHcl(workerVersionPlacementTargetToHclTerraform, false)(struct.target),
            isBlock: true,
            type: "list",
            storageClassType: "WorkerVersionPlacementTargetList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class WorkerVersionPlacementOutputReference extends cdktf.ComplexObject {
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
        if (this._host !== undefined) {
            hasAnyValues = true;
            internalValueResult.host = this._host;
        }
        if (this._hostname !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostname = this._hostname;
        }
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        if (this._region !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        if (this._target?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.target = this._target?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._host = undefined;
            this._hostname = undefined;
            this._mode = undefined;
            this._region = undefined;
            this._target.internalValue = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._host = value.host;
            this._hostname = value.hostname;
            this._mode = value.mode;
            this._region = value.region;
            this._target.internalValue = value.target;
        }
    }
    // host - computed: false, optional: true, required: false
    _host;
    get host() {
        return this.getStringAttribute('host');
    }
    set host(value) {
        this._host = value;
    }
    resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostInput() {
        return this._host;
    }
    // hostname - computed: false, optional: true, required: false
    _hostname;
    get hostname() {
        return this.getStringAttribute('hostname');
    }
    set hostname(value) {
        this._hostname = value;
    }
    resetHostname() {
        this._hostname = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostnameInput() {
        return this._hostname;
    }
    // mode - computed: false, optional: true, required: false
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
    // region - computed: false, optional: true, required: false
    _region;
    get region() {
        return this.getStringAttribute('region');
    }
    set region(value) {
        this._region = value;
    }
    resetRegion() {
        this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get regionInput() {
        return this._region;
    }
    // target - computed: false, optional: true, required: false
    _target = new WorkerVersionPlacementTargetList(this, "target", false);
    get target() {
        return this._target;
    }
    putTarget(value) {
        this._target.internalValue = value;
    }
    resetTarget() {
        this._target.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get targetInput() {
        return this._target.internalValue;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version cloudflare_worker_version}
*/
export class WorkerVersion extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_worker_version";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a WorkerVersion resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WorkerVersion to import
    * @param importFromId The id of the existing WorkerVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WorkerVersion to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_worker_version", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker_version cloudflare_worker_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkerVersionConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_worker_version',
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
        this._compatibilityDate = config.compatibilityDate;
        this._compatibilityFlags = config.compatibilityFlags;
        this._containers.internalValue = config.containers;
        this._limits.internalValue = config.limits;
        this._mainModule = config.mainModule;
        this._migrations.internalValue = config.migrations;
        this._modules.internalValue = config.modules;
        this._placement.internalValue = config.placement;
        this._usageModel = config.usageModel;
        this._workerId = config.workerId;
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
    _annotations = new WorkerVersionAnnotationsOutputReference(this, "annotations");
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
    _assets = new WorkerVersionAssetsOutputReference(this, "assets");
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
    // bindings - computed: false, optional: true, required: false
    _bindings = new WorkerVersionBindingsList(this, "bindings", false);
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
    // compatibility_date - computed: false, optional: true, required: false
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
    // containers - computed: false, optional: true, required: false
    _containers = new WorkerVersionContainersList(this, "containers", true);
    get containers() {
        return this._containers;
    }
    putContainers(value) {
        this._containers.internalValue = value;
    }
    resetContainers() {
        this._containers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get containersInput() {
        return this._containers.internalValue;
    }
    // created_on - computed: true, optional: false, required: false
    get createdOn() {
        return this.getStringAttribute('created_on');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // limits - computed: true, optional: true, required: false
    _limits = new WorkerVersionLimitsOutputReference(this, "limits");
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
    // main_script_base64 - computed: true, optional: false, required: false
    get mainScriptBase64() {
        return this.getStringAttribute('main_script_base64');
    }
    // migration_tag - computed: true, optional: false, required: false
    get migrationTag() {
        return this.getStringAttribute('migration_tag');
    }
    // migrations - computed: false, optional: true, required: false
    _migrations = new WorkerVersionMigrationsOutputReference(this, "migrations");
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
    // modules - computed: false, optional: true, required: false
    _modules = new WorkerVersionModulesList(this, "modules", true);
    get modules() {
        return this._modules;
    }
    putModules(value) {
        this._modules.internalValue = value;
    }
    resetModules() {
        this._modules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get modulesInput() {
        return this._modules.internalValue;
    }
    // number - computed: true, optional: false, required: false
    get number() {
        return this.getNumberAttribute('number');
    }
    // placement - computed: false, optional: true, required: false
    _placement = new WorkerVersionPlacementOutputReference(this, "placement");
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
    // source - computed: true, optional: false, required: false
    get source() {
        return this.getStringAttribute('source');
    }
    // startup_time_ms - computed: true, optional: false, required: false
    get startupTimeMs() {
        return this.getNumberAttribute('startup_time_ms');
    }
    // urls - computed: true, optional: false, required: false
    get urls() {
        return this.getListAttribute('urls');
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
    // worker_id - computed: false, optional: false, required: true
    _workerId;
    get workerId() {
        return this.getStringAttribute('worker_id');
    }
    set workerId(value) {
        this._workerId = value;
    }
    // Temporarily expose input value. Use with caution.
    get workerIdInput() {
        return this._workerId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            annotations: workerVersionAnnotationsToTerraform(this._annotations.internalValue),
            assets: workerVersionAssetsToTerraform(this._assets.internalValue),
            bindings: cdktf.listMapper(workerVersionBindingsToTerraform, false)(this._bindings.internalValue),
            compatibility_date: cdktf.stringToTerraform(this._compatibilityDate),
            compatibility_flags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._compatibilityFlags),
            containers: cdktf.listMapper(workerVersionContainersToTerraform, false)(this._containers.internalValue),
            limits: workerVersionLimitsToTerraform(this._limits.internalValue),
            main_module: cdktf.stringToTerraform(this._mainModule),
            migrations: workerVersionMigrationsToTerraform(this._migrations.internalValue),
            modules: cdktf.listMapper(workerVersionModulesToTerraform, false)(this._modules.internalValue),
            placement: workerVersionPlacementToTerraform(this._placement.internalValue),
            usage_model: cdktf.stringToTerraform(this._usageModel),
            worker_id: cdktf.stringToTerraform(this._workerId),
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
                value: workerVersionAnnotationsToHclTerraform(this._annotations.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "WorkerVersionAnnotations",
            },
            assets: {
                value: workerVersionAssetsToHclTerraform(this._assets.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "WorkerVersionAssets",
            },
            bindings: {
                value: cdktf.listMapperHcl(workerVersionBindingsToHclTerraform, false)(this._bindings.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "WorkerVersionBindingsList",
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
            containers: {
                value: cdktf.listMapperHcl(workerVersionContainersToHclTerraform, false)(this._containers.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "WorkerVersionContainersList",
            },
            limits: {
                value: workerVersionLimitsToHclTerraform(this._limits.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "WorkerVersionLimits",
            },
            main_module: {
                value: cdktf.stringToHclTerraform(this._mainModule),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            migrations: {
                value: workerVersionMigrationsToHclTerraform(this._migrations.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "WorkerVersionMigrations",
            },
            modules: {
                value: cdktf.listMapperHcl(workerVersionModulesToHclTerraform, false)(this._modules.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "WorkerVersionModulesList",
            },
            placement: {
                value: workerVersionPlacementToHclTerraform(this._placement.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "WorkerVersionPlacement",
            },
            usage_model: {
                value: cdktf.stringToHclTerraform(this._usageModel),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            worker_id: {
                value: cdktf.stringToHclTerraform(this._workerId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function workerObservabilityLogsToTerraform(struct) {
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
export function workerObservabilityLogsToHclTerraform(struct) {
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
export class WorkerObservabilityLogsOutputReference extends cdktf.ComplexObject {
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
    // destinations - computed: true, optional: true, required: false
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
    // enabled - computed: true, optional: true, required: false
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
    // head_sampling_rate - computed: true, optional: true, required: false
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
    // invocation_logs - computed: true, optional: true, required: false
    _invocationLogs;
    get invocationLogs() {
        return this.getBooleanAttribute('invocation_logs');
    }
    set invocationLogs(value) {
        this._invocationLogs = value;
    }
    resetInvocationLogs() {
        this._invocationLogs = undefined;
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
export function workerObservabilityTracesToTerraform(struct) {
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
export function workerObservabilityTracesToHclTerraform(struct) {
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
export class WorkerObservabilityTracesOutputReference extends cdktf.ComplexObject {
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
    // destinations - computed: true, optional: true, required: false
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
    // enabled - computed: true, optional: true, required: false
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
    // head_sampling_rate - computed: true, optional: true, required: false
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
export function workerObservabilityToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        head_sampling_rate: cdktf.numberToTerraform(struct.headSamplingRate),
        logs: workerObservabilityLogsToTerraform(struct.logs),
        traces: workerObservabilityTracesToTerraform(struct.traces),
    };
}
export function workerObservabilityToHclTerraform(struct) {
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
            value: workerObservabilityLogsToHclTerraform(struct.logs),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkerObservabilityLogs",
        },
        traces: {
            value: workerObservabilityTracesToHclTerraform(struct.traces),
            isBlock: true,
            type: "struct",
            storageClassType: "WorkerObservabilityTraces",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class WorkerObservabilityOutputReference extends cdktf.ComplexObject {
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
    // enabled - computed: true, optional: true, required: false
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
    // head_sampling_rate - computed: true, optional: true, required: false
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
    // logs - computed: true, optional: true, required: false
    _logs = new WorkerObservabilityLogsOutputReference(this, "logs");
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
    // traces - computed: true, optional: true, required: false
    _traces = new WorkerObservabilityTracesOutputReference(this, "traces");
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
export function workerReferencesDispatchNamespaceOutboundsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function workerReferencesDispatchNamespaceOutboundsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class WorkerReferencesDispatchNamespaceOutboundsOutputReference extends cdktf.ComplexObject {
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
    // namespace_id - computed: true, optional: false, required: false
    get namespaceId() {
        return this.getStringAttribute('namespace_id');
    }
    // namespace_name - computed: true, optional: false, required: false
    get namespaceName() {
        return this.getStringAttribute('namespace_name');
    }
    // worker_id - computed: true, optional: false, required: false
    get workerId() {
        return this.getStringAttribute('worker_id');
    }
    // worker_name - computed: true, optional: false, required: false
    get workerName() {
        return this.getStringAttribute('worker_name');
    }
}
export class WorkerReferencesDispatchNamespaceOutboundsList extends cdktf.ComplexList {
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
        return new WorkerReferencesDispatchNamespaceOutboundsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function workerReferencesDomainsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function workerReferencesDomainsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class WorkerReferencesDomainsOutputReference extends cdktf.ComplexObject {
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
    // certificate_id - computed: true, optional: false, required: false
    get certificateId() {
        return this.getStringAttribute('certificate_id');
    }
    // hostname - computed: true, optional: false, required: false
    get hostname() {
        return this.getStringAttribute('hostname');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // zone_id - computed: true, optional: false, required: false
    get zoneId() {
        return this.getStringAttribute('zone_id');
    }
    // zone_name - computed: true, optional: false, required: false
    get zoneName() {
        return this.getStringAttribute('zone_name');
    }
}
export class WorkerReferencesDomainsList extends cdktf.ComplexList {
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
        return new WorkerReferencesDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function workerReferencesDurableObjectsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function workerReferencesDurableObjectsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class WorkerReferencesDurableObjectsOutputReference extends cdktf.ComplexObject {
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
    // namespace_id - computed: true, optional: false, required: false
    get namespaceId() {
        return this.getStringAttribute('namespace_id');
    }
    // namespace_name - computed: true, optional: false, required: false
    get namespaceName() {
        return this.getStringAttribute('namespace_name');
    }
    // worker_id - computed: true, optional: false, required: false
    get workerId() {
        return this.getStringAttribute('worker_id');
    }
    // worker_name - computed: true, optional: false, required: false
    get workerName() {
        return this.getStringAttribute('worker_name');
    }
}
export class WorkerReferencesDurableObjectsList extends cdktf.ComplexList {
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
        return new WorkerReferencesDurableObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function workerReferencesQueuesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function workerReferencesQueuesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class WorkerReferencesQueuesOutputReference extends cdktf.ComplexObject {
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
    // queue_consumer_id - computed: true, optional: false, required: false
    get queueConsumerId() {
        return this.getStringAttribute('queue_consumer_id');
    }
    // queue_id - computed: true, optional: false, required: false
    get queueId() {
        return this.getStringAttribute('queue_id');
    }
    // queue_name - computed: true, optional: false, required: false
    get queueName() {
        return this.getStringAttribute('queue_name');
    }
}
export class WorkerReferencesQueuesList extends cdktf.ComplexList {
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
        return new WorkerReferencesQueuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function workerReferencesWorkersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function workerReferencesWorkersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class WorkerReferencesWorkersOutputReference extends cdktf.ComplexObject {
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
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
}
export class WorkerReferencesWorkersList extends cdktf.ComplexList {
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
        return new WorkerReferencesWorkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function workerReferencesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function workerReferencesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class WorkerReferencesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
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
    // dispatch_namespace_outbounds - computed: true, optional: false, required: false
    _dispatchNamespaceOutbounds = new WorkerReferencesDispatchNamespaceOutboundsList(this, "dispatch_namespace_outbounds", false);
    get dispatchNamespaceOutbounds() {
        return this._dispatchNamespaceOutbounds;
    }
    // domains - computed: true, optional: false, required: false
    _domains = new WorkerReferencesDomainsList(this, "domains", false);
    get domains() {
        return this._domains;
    }
    // durable_objects - computed: true, optional: false, required: false
    _durableObjects = new WorkerReferencesDurableObjectsList(this, "durable_objects", false);
    get durableObjects() {
        return this._durableObjects;
    }
    // queues - computed: true, optional: false, required: false
    _queues = new WorkerReferencesQueuesList(this, "queues", false);
    get queues() {
        return this._queues;
    }
    // workers - computed: true, optional: false, required: false
    _workers = new WorkerReferencesWorkersList(this, "workers", false);
    get workers() {
        return this._workers;
    }
}
export function workerSubdomainToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        previews_enabled: cdktf.booleanToTerraform(struct.previewsEnabled),
    };
}
export function workerSubdomainToHclTerraform(struct) {
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
        previews_enabled: {
            value: cdktf.booleanToHclTerraform(struct.previewsEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class WorkerSubdomainOutputReference extends cdktf.ComplexObject {
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
        if (this._previewsEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.previewsEnabled = this._previewsEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._previewsEnabled = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._previewsEnabled = value.previewsEnabled;
        }
    }
    // enabled - computed: true, optional: true, required: false
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
    // previews_enabled - computed: true, optional: true, required: false
    _previewsEnabled;
    get previewsEnabled() {
        return this.getBooleanAttribute('previews_enabled');
    }
    set previewsEnabled(value) {
        this._previewsEnabled = value;
    }
    resetPreviewsEnabled() {
        this._previewsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get previewsEnabledInput() {
        return this._previewsEnabled;
    }
}
export function workerTailConsumersToTerraform(struct) {
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
export function workerTailConsumersToHclTerraform(struct) {
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
export class WorkerTailConsumersOutputReference extends cdktf.ComplexObject {
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
}
export class WorkerTailConsumersList extends cdktf.ComplexList {
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
        return new WorkerTailConsumersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker cloudflare_worker}
*/
export class Worker extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_worker";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Worker resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Worker to import
    * @param importFromId The id of the existing Worker that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Worker to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_worker", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/worker cloudflare_worker} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkerConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_worker',
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
        this._logpush = config.logpush;
        this._name = config.name;
        this._observability.internalValue = config.observability;
        this._subdomain.internalValue = config.subdomain;
        this._tags = config.tags;
        this._tailConsumers.internalValue = config.tailConsumers;
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
    // created_on - computed: true, optional: false, required: false
    get createdOn() {
        return this.getStringAttribute('created_on');
    }
    // deployed_on - computed: true, optional: false, required: false
    get deployedOn() {
        return this.getStringAttribute('deployed_on');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
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
    // observability - computed: true, optional: true, required: false
    _observability = new WorkerObservabilityOutputReference(this, "observability");
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
    // references - computed: true, optional: false, required: false
    _references = new WorkerReferencesOutputReference(this, "references");
    get references() {
        return this._references;
    }
    // subdomain - computed: true, optional: true, required: false
    _subdomain = new WorkerSubdomainOutputReference(this, "subdomain");
    get subdomain() {
        return this._subdomain;
    }
    putSubdomain(value) {
        this._subdomain.internalValue = value;
    }
    resetSubdomain() {
        this._subdomain.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get subdomainInput() {
        return this._subdomain.internalValue;
    }
    // tags - computed: true, optional: true, required: false
    _tags;
    get tags() {
        return cdktf.Fn.tolist(this.getListAttribute('tags'));
    }
    set tags(value) {
        this._tags = value;
    }
    resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsInput() {
        return this._tags;
    }
    // tail_consumers - computed: true, optional: true, required: false
    _tailConsumers = new WorkerTailConsumersList(this, "tail_consumers", true);
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
    // updated_on - computed: true, optional: false, required: false
    get updatedOn() {
        return this.getStringAttribute('updated_on');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            logpush: cdktf.booleanToTerraform(this._logpush),
            name: cdktf.stringToTerraform(this._name),
            observability: workerObservabilityToTerraform(this._observability.internalValue),
            subdomain: workerSubdomainToTerraform(this._subdomain.internalValue),
            tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
            tail_consumers: cdktf.listMapper(workerTailConsumersToTerraform, false)(this._tailConsumers.internalValue),
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
            logpush: {
                value: cdktf.booleanToHclTerraform(this._logpush),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            observability: {
                value: workerObservabilityToHclTerraform(this._observability.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "WorkerObservability",
            },
            subdomain: {
                value: workerSubdomainToHclTerraform(this._subdomain.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "WorkerSubdomain",
            },
            tags: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            tail_consumers: {
                value: cdktf.listMapperHcl(workerTailConsumersToHclTerraform, false)(this._tailConsumers.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "WorkerTailConsumersList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}

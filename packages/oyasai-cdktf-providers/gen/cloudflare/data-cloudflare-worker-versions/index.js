// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/worker_versions
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareWorkerVersionsResultAnnotationsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareWorkerVersionsResultAnnotationsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareWorkerVersionsResultAnnotationsOutputReference extends cdktf.ComplexObject {
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
    // workers_message - computed: true, optional: false, required: false
    get workersMessage() {
        return this.getStringAttribute('workers_message');
    }
    // workers_tag - computed: true, optional: false, required: false
    get workersTag() {
        return this.getStringAttribute('workers_tag');
    }
    // workers_triggered_by - computed: true, optional: false, required: false
    get workersTriggeredBy() {
        return this.getStringAttribute('workers_triggered_by');
    }
}
export function dataCloudflareWorkerVersionsResultAssetsConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareWorkerVersionsResultAssetsConfigToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareWorkerVersionsResultAssetsConfigOutputReference extends cdktf.ComplexObject {
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
    // html_handling - computed: true, optional: false, required: false
    get htmlHandling() {
        return this.getStringAttribute('html_handling');
    }
    // not_found_handling - computed: true, optional: false, required: false
    get notFoundHandling() {
        return this.getStringAttribute('not_found_handling');
    }
    // run_worker_first - computed: true, optional: false, required: false
    get runWorkerFirst() {
        return this.getListAttribute('run_worker_first');
    }
}
export function dataCloudflareWorkerVersionsResultAssetsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareWorkerVersionsResultAssetsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareWorkerVersionsResultAssetsOutputReference extends cdktf.ComplexObject {
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
    // config - computed: true, optional: false, required: false
    _config = new DataCloudflareWorkerVersionsResultAssetsConfigOutputReference(this, "config");
    get config() {
        return this._config;
    }
    // jwt - computed: true, optional: false, required: false
    get jwt() {
        return this.getStringAttribute('jwt');
    }
}
export function dataCloudflareWorkerVersionsResultBindingsOutboundParamsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareWorkerVersionsResultBindingsOutboundParamsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference extends cdktf.ComplexObject {
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
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
}
export class DataCloudflareWorkerVersionsResultBindingsOutboundParamsList extends cdktf.ComplexList {
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
        return new DataCloudflareWorkerVersionsResultBindingsOutboundParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataCloudflareWorkerVersionsResultBindingsOutboundWorkerToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareWorkerVersionsResultBindingsOutboundWorkerToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference extends cdktf.ComplexObject {
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
    // entrypoint - computed: true, optional: false, required: false
    get entrypoint() {
        return this.getStringAttribute('entrypoint');
    }
    // environment - computed: true, optional: false, required: false
    get environment() {
        return this.getStringAttribute('environment');
    }
    // service - computed: true, optional: false, required: false
    get service() {
        return this.getStringAttribute('service');
    }
}
export function dataCloudflareWorkerVersionsResultBindingsOutboundToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareWorkerVersionsResultBindingsOutboundToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference extends cdktf.ComplexObject {
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
    // params - computed: true, optional: false, required: false
    _params = new DataCloudflareWorkerVersionsResultBindingsOutboundParamsList(this, "params", false);
    get params() {
        return this._params;
    }
    // worker - computed: true, optional: false, required: false
    _worker = new DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference(this, "worker");
    get worker() {
        return this._worker;
    }
}
export function dataCloudflareWorkerVersionsResultBindingsSimpleToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareWorkerVersionsResultBindingsSimpleToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference extends cdktf.ComplexObject {
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
    // limit - computed: true, optional: false, required: false
    get limit() {
        return this.getNumberAttribute('limit');
    }
    // period - computed: true, optional: false, required: false
    get period() {
        return this.getNumberAttribute('period');
    }
}
export function dataCloudflareWorkerVersionsResultBindingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareWorkerVersionsResultBindingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareWorkerVersionsResultBindingsOutputReference extends cdktf.ComplexObject {
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
    // algorithm - computed: true, optional: false, required: false
    get algorithm() {
        return this.getStringAttribute('algorithm');
    }
    // allowed_destination_addresses - computed: true, optional: false, required: false
    get allowedDestinationAddresses() {
        return this.getListAttribute('allowed_destination_addresses');
    }
    // allowed_sender_addresses - computed: true, optional: false, required: false
    get allowedSenderAddresses() {
        return this.getListAttribute('allowed_sender_addresses');
    }
    // app_id - computed: true, optional: false, required: false
    get appId() {
        return this.getStringAttribute('app_id');
    }
    // bucket_name - computed: true, optional: false, required: false
    get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    // certificate_id - computed: true, optional: false, required: false
    get certificateId() {
        return this.getStringAttribute('certificate_id');
    }
    // class_name - computed: true, optional: false, required: false
    get className() {
        return this.getStringAttribute('class_name');
    }
    // database_id - computed: true, optional: false, required: false
    get databaseId() {
        return this.getStringAttribute('database_id');
    }
    // dataset - computed: true, optional: false, required: false
    get dataset() {
        return this.getStringAttribute('dataset');
    }
    // destination_address - computed: true, optional: false, required: false
    get destinationAddress() {
        return this.getStringAttribute('destination_address');
    }
    // dispatch_namespace - computed: true, optional: false, required: false
    get dispatchNamespace() {
        return this.getStringAttribute('dispatch_namespace');
    }
    // entrypoint - computed: true, optional: false, required: false
    get entrypoint() {
        return this.getStringAttribute('entrypoint');
    }
    // environment - computed: true, optional: false, required: false
    get environment() {
        return this.getStringAttribute('environment');
    }
    // format - computed: true, optional: false, required: false
    get format() {
        return this.getStringAttribute('format');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // index_name - computed: true, optional: false, required: false
    get indexName() {
        return this.getStringAttribute('index_name');
    }
    // instance_name - computed: true, optional: false, required: false
    get instanceName() {
        return this.getStringAttribute('instance_name');
    }
    // json - computed: true, optional: false, required: false
    get json() {
        return this.getStringAttribute('json');
    }
    // jurisdiction - computed: true, optional: false, required: false
    get jurisdiction() {
        return this.getStringAttribute('jurisdiction');
    }
    // key_base64 - computed: true, optional: false, required: false
    get keyBase64() {
        return this.getStringAttribute('key_base64');
    }
    // key_jwk - computed: true, optional: false, required: false
    get keyJwk() {
        return this.getStringAttribute('key_jwk');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // namespace - computed: true, optional: false, required: false
    get namespace() {
        return this.getStringAttribute('namespace');
    }
    // namespace_id - computed: true, optional: false, required: false
    get namespaceId() {
        return this.getStringAttribute('namespace_id');
    }
    // network_id - computed: true, optional: false, required: false
    get networkId() {
        return this.getStringAttribute('network_id');
    }
    // old_name - computed: true, optional: false, required: false
    get oldName() {
        return this.getStringAttribute('old_name');
    }
    // outbound - computed: true, optional: false, required: false
    _outbound = new DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference(this, "outbound");
    get outbound() {
        return this._outbound;
    }
    // part - computed: true, optional: false, required: false
    get part() {
        return this.getStringAttribute('part');
    }
    // pipeline - computed: true, optional: false, required: false
    get pipeline() {
        return this.getStringAttribute('pipeline');
    }
    // queue_name - computed: true, optional: false, required: false
    get queueName() {
        return this.getStringAttribute('queue_name');
    }
    // script_name - computed: true, optional: false, required: false
    get scriptName() {
        return this.getStringAttribute('script_name');
    }
    // secret_name - computed: true, optional: false, required: false
    get secretName() {
        return this.getStringAttribute('secret_name');
    }
    // service - computed: true, optional: false, required: false
    get service() {
        return this.getStringAttribute('service');
    }
    // service_id - computed: true, optional: false, required: false
    get serviceId() {
        return this.getStringAttribute('service_id');
    }
    // simple - computed: true, optional: false, required: false
    _simple = new DataCloudflareWorkerVersionsResultBindingsSimpleOutputReference(this, "simple");
    get simple() {
        return this._simple;
    }
    // store_id - computed: true, optional: false, required: false
    get storeId() {
        return this.getStringAttribute('store_id');
    }
    // text - computed: true, optional: false, required: false
    get text() {
        return this.getStringAttribute('text');
    }
    // tunnel_id - computed: true, optional: false, required: false
    get tunnelId() {
        return this.getStringAttribute('tunnel_id');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
    // usages - computed: true, optional: false, required: false
    get usages() {
        return cdktf.Fn.tolist(this.getListAttribute('usages'));
    }
    // version_id - computed: true, optional: false, required: false
    get versionId() {
        return this.getStringAttribute('version_id');
    }
    // workflow_name - computed: true, optional: false, required: false
    get workflowName() {
        return this.getStringAttribute('workflow_name');
    }
}
export class DataCloudflareWorkerVersionsResultBindingsList extends cdktf.ComplexList {
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
        return new DataCloudflareWorkerVersionsResultBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataCloudflareWorkerVersionsResultContainersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareWorkerVersionsResultContainersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareWorkerVersionsResultContainersOutputReference extends cdktf.ComplexObject {
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
    // class_name - computed: true, optional: false, required: false
    get className() {
        return this.getStringAttribute('class_name');
    }
}
export class DataCloudflareWorkerVersionsResultContainersList extends cdktf.ComplexList {
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
        return new DataCloudflareWorkerVersionsResultContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataCloudflareWorkerVersionsResultLimitsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareWorkerVersionsResultLimitsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareWorkerVersionsResultLimitsOutputReference extends cdktf.ComplexObject {
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
    // cpu_ms - computed: true, optional: false, required: false
    get cpuMs() {
        return this.getNumberAttribute('cpu_ms');
    }
    // subrequests - computed: true, optional: false, required: false
    get subrequests() {
        return this.getNumberAttribute('subrequests');
    }
}
export function dataCloudflareWorkerVersionsResultMigrationsRenamedClassesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareWorkerVersionsResultMigrationsRenamedClassesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference extends cdktf.ComplexObject {
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
    // from - computed: true, optional: false, required: false
    get from() {
        return this.getStringAttribute('from');
    }
    // to - computed: true, optional: false, required: false
    get to() {
        return this.getStringAttribute('to');
    }
}
export class DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList extends cdktf.ComplexList {
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
        return new DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference extends cdktf.ComplexObject {
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
    // from - computed: true, optional: false, required: false
    get from() {
        return this.getStringAttribute('from');
    }
    // to - computed: true, optional: false, required: false
    get to() {
        return this.getStringAttribute('to');
    }
}
export class DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList extends cdktf.ComplexList {
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
        return new DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference extends cdktf.ComplexObject {
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
    // from - computed: true, optional: false, required: false
    get from() {
        return this.getStringAttribute('from');
    }
    // from_script - computed: true, optional: false, required: false
    get fromScript() {
        return this.getStringAttribute('from_script');
    }
    // to - computed: true, optional: false, required: false
    get to() {
        return this.getStringAttribute('to');
    }
}
export class DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList extends cdktf.ComplexList {
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
        return new DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataCloudflareWorkerVersionsResultMigrationsStepsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareWorkerVersionsResultMigrationsStepsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference extends cdktf.ComplexObject {
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
    // deleted_classes - computed: true, optional: false, required: false
    get deletedClasses() {
        return this.getListAttribute('deleted_classes');
    }
    // new_classes - computed: true, optional: false, required: false
    get newClasses() {
        return this.getListAttribute('new_classes');
    }
    // new_sqlite_classes - computed: true, optional: false, required: false
    get newSqliteClasses() {
        return this.getListAttribute('new_sqlite_classes');
    }
    // renamed_classes - computed: true, optional: false, required: false
    _renamedClasses = new DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList(this, "renamed_classes", false);
    get renamedClasses() {
        return this._renamedClasses;
    }
    // transferred_classes - computed: true, optional: false, required: false
    _transferredClasses = new DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList(this, "transferred_classes", false);
    get transferredClasses() {
        return this._transferredClasses;
    }
}
export class DataCloudflareWorkerVersionsResultMigrationsStepsList extends cdktf.ComplexList {
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
        return new DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataCloudflareWorkerVersionsResultMigrationsTransferredClassesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareWorkerVersionsResultMigrationsTransferredClassesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference extends cdktf.ComplexObject {
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
    // from - computed: true, optional: false, required: false
    get from() {
        return this.getStringAttribute('from');
    }
    // from_script - computed: true, optional: false, required: false
    get fromScript() {
        return this.getStringAttribute('from_script');
    }
    // to - computed: true, optional: false, required: false
    get to() {
        return this.getStringAttribute('to');
    }
}
export class DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList extends cdktf.ComplexList {
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
        return new DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataCloudflareWorkerVersionsResultMigrationsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareWorkerVersionsResultMigrationsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareWorkerVersionsResultMigrationsOutputReference extends cdktf.ComplexObject {
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
    // deleted_classes - computed: true, optional: false, required: false
    get deletedClasses() {
        return this.getListAttribute('deleted_classes');
    }
    // new_classes - computed: true, optional: false, required: false
    get newClasses() {
        return this.getListAttribute('new_classes');
    }
    // new_sqlite_classes - computed: true, optional: false, required: false
    get newSqliteClasses() {
        return this.getListAttribute('new_sqlite_classes');
    }
    // new_tag - computed: true, optional: false, required: false
    get newTag() {
        return this.getStringAttribute('new_tag');
    }
    // old_tag - computed: true, optional: false, required: false
    get oldTag() {
        return this.getStringAttribute('old_tag');
    }
    // renamed_classes - computed: true, optional: false, required: false
    _renamedClasses = new DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList(this, "renamed_classes", false);
    get renamedClasses() {
        return this._renamedClasses;
    }
    // steps - computed: true, optional: false, required: false
    _steps = new DataCloudflareWorkerVersionsResultMigrationsStepsList(this, "steps", false);
    get steps() {
        return this._steps;
    }
    // transferred_classes - computed: true, optional: false, required: false
    _transferredClasses = new DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList(this, "transferred_classes", false);
    get transferredClasses() {
        return this._transferredClasses;
    }
}
export function dataCloudflareWorkerVersionsResultModulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareWorkerVersionsResultModulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareWorkerVersionsResultModulesOutputReference extends cdktf.ComplexObject {
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
    // content_base64 - computed: true, optional: false, required: false
    get contentBase64() {
        return this.getStringAttribute('content_base64');
    }
    // content_type - computed: true, optional: false, required: false
    get contentType() {
        return this.getStringAttribute('content_type');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
}
export class DataCloudflareWorkerVersionsResultModulesList extends cdktf.ComplexList {
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
        return new DataCloudflareWorkerVersionsResultModulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataCloudflareWorkerVersionsResultPlacementTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareWorkerVersionsResultPlacementTargetToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareWorkerVersionsResultPlacementTargetOutputReference extends cdktf.ComplexObject {
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
export class DataCloudflareWorkerVersionsResultPlacementTargetList extends cdktf.ComplexList {
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
        return new DataCloudflareWorkerVersionsResultPlacementTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataCloudflareWorkerVersionsResultPlacementToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareWorkerVersionsResultPlacementToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareWorkerVersionsResultPlacementOutputReference extends cdktf.ComplexObject {
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
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    // hostname - computed: true, optional: false, required: false
    get hostname() {
        return this.getStringAttribute('hostname');
    }
    // mode - computed: true, optional: false, required: false
    get mode() {
        return this.getStringAttribute('mode');
    }
    // region - computed: true, optional: false, required: false
    get region() {
        return this.getStringAttribute('region');
    }
    // target - computed: true, optional: false, required: false
    _target = new DataCloudflareWorkerVersionsResultPlacementTargetList(this, "target", false);
    get target() {
        return this._target;
    }
}
export function dataCloudflareWorkerVersionsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareWorkerVersionsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareWorkerVersionsResultOutputReference extends cdktf.ComplexObject {
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
    // annotations - computed: true, optional: false, required: false
    _annotations = new DataCloudflareWorkerVersionsResultAnnotationsOutputReference(this, "annotations");
    get annotations() {
        return this._annotations;
    }
    // assets - computed: true, optional: false, required: false
    _assets = new DataCloudflareWorkerVersionsResultAssetsOutputReference(this, "assets");
    get assets() {
        return this._assets;
    }
    // bindings - computed: true, optional: false, required: false
    _bindings = new DataCloudflareWorkerVersionsResultBindingsList(this, "bindings", false);
    get bindings() {
        return this._bindings;
    }
    // compatibility_date - computed: true, optional: false, required: false
    get compatibilityDate() {
        return this.getStringAttribute('compatibility_date');
    }
    // compatibility_flags - computed: true, optional: false, required: false
    get compatibilityFlags() {
        return cdktf.Fn.tolist(this.getListAttribute('compatibility_flags'));
    }
    // containers - computed: true, optional: false, required: false
    _containers = new DataCloudflareWorkerVersionsResultContainersList(this, "containers", true);
    get containers() {
        return this._containers;
    }
    // created_on - computed: true, optional: false, required: false
    get createdOn() {
        return this.getStringAttribute('created_on');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // limits - computed: true, optional: false, required: false
    _limits = new DataCloudflareWorkerVersionsResultLimitsOutputReference(this, "limits");
    get limits() {
        return this._limits;
    }
    // main_module - computed: true, optional: false, required: false
    get mainModule() {
        return this.getStringAttribute('main_module');
    }
    // main_script_base64 - computed: true, optional: false, required: false
    get mainScriptBase64() {
        return this.getStringAttribute('main_script_base64');
    }
    // migration_tag - computed: true, optional: false, required: false
    get migrationTag() {
        return this.getStringAttribute('migration_tag');
    }
    // migrations - computed: true, optional: false, required: false
    _migrations = new DataCloudflareWorkerVersionsResultMigrationsOutputReference(this, "migrations");
    get migrations() {
        return this._migrations;
    }
    // modules - computed: true, optional: false, required: false
    _modules = new DataCloudflareWorkerVersionsResultModulesList(this, "modules", true);
    get modules() {
        return this._modules;
    }
    // number - computed: true, optional: false, required: false
    get number() {
        return this.getNumberAttribute('number');
    }
    // placement - computed: true, optional: false, required: false
    _placement = new DataCloudflareWorkerVersionsResultPlacementOutputReference(this, "placement");
    get placement() {
        return this._placement;
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
    // usage_model - computed: true, optional: false, required: false
    get usageModel() {
        return this.getStringAttribute('usage_model');
    }
}
export class DataCloudflareWorkerVersionsResultList extends cdktf.ComplexList {
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
        return new DataCloudflareWorkerVersionsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/worker_versions cloudflare_worker_versions}
*/
export class DataCloudflareWorkerVersions extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_worker_versions";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareWorkerVersions resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWorkerVersions to import
    * @param importFromId The id of the existing DataCloudflareWorkerVersions that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/worker_versions#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWorkerVersions to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_worker_versions", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/worker_versions cloudflare_worker_versions} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWorkerVersionsConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_worker_versions',
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
        this._maxItems = config.maxItems;
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
    // max_items - computed: false, optional: true, required: false
    _maxItems;
    get maxItems() {
        return this.getNumberAttribute('max_items');
    }
    set maxItems(value) {
        this._maxItems = value;
    }
    resetMaxItems() {
        this._maxItems = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxItemsInput() {
        return this._maxItems;
    }
    // result - computed: true, optional: false, required: false
    _result = new DataCloudflareWorkerVersionsResultList(this, "result", false);
    get result() {
        return this._result;
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
            max_items: cdktf.numberToTerraform(this._maxItems),
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
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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

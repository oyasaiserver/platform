// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_instance
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareAiSearchInstanceCustomMetadataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareAiSearchInstanceCustomMetadataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareAiSearchInstanceCustomMetadataOutputReference extends cdktf.ComplexObject {
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
    // data_type - computed: true, optional: false, required: false
    get dataType() {
        return this.getStringAttribute('data_type');
    }
    // field_name - computed: true, optional: false, required: false
    get fieldName() {
        return this.getStringAttribute('field_name');
    }
}
export class DataCloudflareAiSearchInstanceCustomMetadataList extends cdktf.ComplexList {
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
        return new DataCloudflareAiSearchInstanceCustomMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataCloudflareAiSearchInstanceFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        namespace: cdktf.stringToTerraform(struct.namespace),
        order_by: cdktf.stringToTerraform(struct.orderBy),
        order_by_direction: cdktf.stringToTerraform(struct.orderByDirection),
        search: cdktf.stringToTerraform(struct.search),
    };
}
export function dataCloudflareAiSearchInstanceFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        namespace: {
            value: cdktf.stringToHclTerraform(struct.namespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        order_by: {
            value: cdktf.stringToHclTerraform(struct.orderBy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        order_by_direction: {
            value: cdktf.stringToHclTerraform(struct.orderByDirection),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        search: {
            value: cdktf.stringToHclTerraform(struct.search),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DataCloudflareAiSearchInstanceFilterOutputReference extends cdktf.ComplexObject {
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
        if (this._namespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespace = this._namespace;
        }
        if (this._orderBy !== undefined) {
            hasAnyValues = true;
            internalValueResult.orderBy = this._orderBy;
        }
        if (this._orderByDirection !== undefined) {
            hasAnyValues = true;
            internalValueResult.orderByDirection = this._orderByDirection;
        }
        if (this._search !== undefined) {
            hasAnyValues = true;
            internalValueResult.search = this._search;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._namespace = undefined;
            this._orderBy = undefined;
            this._orderByDirection = undefined;
            this._search = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._namespace = value.namespace;
            this._orderBy = value.orderBy;
            this._orderByDirection = value.orderByDirection;
            this._search = value.search;
        }
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
    // order_by - computed: true, optional: true, required: false
    _orderBy;
    get orderBy() {
        return this.getStringAttribute('order_by');
    }
    set orderBy(value) {
        this._orderBy = value;
    }
    resetOrderBy() {
        this._orderBy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get orderByInput() {
        return this._orderBy;
    }
    // order_by_direction - computed: true, optional: true, required: false
    _orderByDirection;
    get orderByDirection() {
        return this.getStringAttribute('order_by_direction');
    }
    set orderByDirection(value) {
        this._orderByDirection = value;
    }
    resetOrderByDirection() {
        this._orderByDirection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get orderByDirectionInput() {
        return this._orderByDirection;
    }
    // search - computed: false, optional: true, required: false
    _search;
    get search() {
        return this.getStringAttribute('search');
    }
    set search(value) {
        this._search = value;
    }
    resetSearch() {
        this._search = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get searchInput() {
        return this._search;
    }
}
export function dataCloudflareAiSearchInstanceIndexMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareAiSearchInstanceIndexMethodToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareAiSearchInstanceIndexMethodOutputReference extends cdktf.ComplexObject {
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
    // keyword - computed: true, optional: false, required: false
    get keyword() {
        return this.getBooleanAttribute('keyword');
    }
    // vector - computed: true, optional: false, required: false
    get vector() {
        return this.getBooleanAttribute('vector');
    }
}
export function dataCloudflareAiSearchInstanceIndexingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareAiSearchInstanceIndexingOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareAiSearchInstanceIndexingOptionsOutputReference extends cdktf.ComplexObject {
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
    // keyword_tokenizer - computed: true, optional: false, required: false
    get keywordTokenizer() {
        return this.getStringAttribute('keyword_tokenizer');
    }
}
export function dataCloudflareAiSearchInstanceMetadataSearchForAgentsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareAiSearchInstanceMetadataSearchForAgentsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareAiSearchInstanceMetadataSearchForAgentsOutputReference extends cdktf.ComplexObject {
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
    // hostname - computed: true, optional: false, required: false
    get hostname() {
        return this.getStringAttribute('hostname');
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
export function dataCloudflareAiSearchInstanceMetadataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareAiSearchInstanceMetadataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareAiSearchInstanceMetadataOutputReference extends cdktf.ComplexObject {
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
    // created_from_aisearch_wizard - computed: true, optional: false, required: false
    get createdFromAisearchWizard() {
        return this.getBooleanAttribute('created_from_aisearch_wizard');
    }
    // search_for_agents - computed: true, optional: false, required: false
    _searchForAgents = new DataCloudflareAiSearchInstanceMetadataSearchForAgentsOutputReference(this, "search_for_agents");
    get searchForAgents() {
        return this._searchForAgents;
    }
    // worker_domain - computed: true, optional: false, required: false
    get workerDomain() {
        return this.getStringAttribute('worker_domain');
    }
}
export function dataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference extends cdktf.ComplexObject {
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
    // disabled - computed: true, optional: false, required: false
    get disabled() {
        return this.getBooleanAttribute('disabled');
    }
}
export function dataCloudflareAiSearchInstancePublicEndpointParamsMcpToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareAiSearchInstancePublicEndpointParamsMcpToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference extends cdktf.ComplexObject {
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
    // description - computed: true, optional: false, required: false
    get description() {
        return this.getStringAttribute('description');
    }
    // disabled - computed: true, optional: false, required: false
    get disabled() {
        return this.getBooleanAttribute('disabled');
    }
}
export function dataCloudflareAiSearchInstancePublicEndpointParamsRateLimitToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareAiSearchInstancePublicEndpointParamsRateLimitToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference extends cdktf.ComplexObject {
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
    // period_ms - computed: true, optional: false, required: false
    get periodMs() {
        return this.getNumberAttribute('period_ms');
    }
    // requests - computed: true, optional: false, required: false
    get requests() {
        return this.getNumberAttribute('requests');
    }
    // technique - computed: true, optional: false, required: false
    get technique() {
        return this.getStringAttribute('technique');
    }
}
export function dataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference extends cdktf.ComplexObject {
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
    // disabled - computed: true, optional: false, required: false
    get disabled() {
        return this.getBooleanAttribute('disabled');
    }
}
export function dataCloudflareAiSearchInstancePublicEndpointParamsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareAiSearchInstancePublicEndpointParamsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference extends cdktf.ComplexObject {
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
    // authorized_hosts - computed: true, optional: false, required: false
    get authorizedHosts() {
        return this.getListAttribute('authorized_hosts');
    }
    // chat_completions_endpoint - computed: true, optional: false, required: false
    _chatCompletionsEndpoint = new DataCloudflareAiSearchInstancePublicEndpointParamsChatCompletionsEndpointOutputReference(this, "chat_completions_endpoint");
    get chatCompletionsEndpoint() {
        return this._chatCompletionsEndpoint;
    }
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // mcp - computed: true, optional: false, required: false
    _mcp = new DataCloudflareAiSearchInstancePublicEndpointParamsMcpOutputReference(this, "mcp");
    get mcp() {
        return this._mcp;
    }
    // rate_limit - computed: true, optional: false, required: false
    _rateLimit = new DataCloudflareAiSearchInstancePublicEndpointParamsRateLimitOutputReference(this, "rate_limit");
    get rateLimit() {
        return this._rateLimit;
    }
    // search_endpoint - computed: true, optional: false, required: false
    _searchEndpoint = new DataCloudflareAiSearchInstancePublicEndpointParamsSearchEndpointOutputReference(this, "search_endpoint");
    get searchEndpoint() {
        return this._searchEndpoint;
    }
}
export function dataCloudflareAiSearchInstanceRetrievalOptionsBoostByToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareAiSearchInstanceRetrievalOptionsBoostByToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference extends cdktf.ComplexObject {
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
    // direction - computed: true, optional: false, required: false
    get direction() {
        return this.getStringAttribute('direction');
    }
    // field - computed: true, optional: false, required: false
    get field() {
        return this.getStringAttribute('field');
    }
}
export class DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList extends cdktf.ComplexList {
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
        return new DataCloudflareAiSearchInstanceRetrievalOptionsBoostByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataCloudflareAiSearchInstanceRetrievalOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareAiSearchInstanceRetrievalOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference extends cdktf.ComplexObject {
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
    // boost_by - computed: true, optional: false, required: false
    _boostBy = new DataCloudflareAiSearchInstanceRetrievalOptionsBoostByList(this, "boost_by", false);
    get boostBy() {
        return this._boostBy;
    }
    // keyword_match_mode - computed: true, optional: false, required: false
    get keywordMatchMode() {
        return this.getStringAttribute('keyword_match_mode');
    }
}
export function dataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference extends cdktf.ComplexObject {
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
    // depth - computed: true, optional: false, required: false
    get depth() {
        return this.getNumberAttribute('depth');
    }
    // include_external_links - computed: true, optional: false, required: false
    get includeExternalLinks() {
        return this.getBooleanAttribute('include_external_links');
    }
    // include_subdomains - computed: true, optional: false, required: false
    get includeSubdomains() {
        return this.getBooleanAttribute('include_subdomains');
    }
    // max_age - computed: true, optional: false, required: false
    get maxAge() {
        return this.getNumberAttribute('max_age');
    }
    // source - computed: true, optional: false, required: false
    get source() {
        return this.getStringAttribute('source');
    }
}
export function dataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference extends cdktf.ComplexObject {
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
    // path - computed: true, optional: false, required: false
    get path() {
        return this.getStringAttribute('path');
    }
    // selector - computed: true, optional: false, required: false
    get selector() {
        return this.getStringAttribute('selector');
    }
}
export class DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList extends cdktf.ComplexList {
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
        return new DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export function dataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference extends cdktf.ComplexObject {
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
    // content_selector - computed: true, optional: false, required: false
    _contentSelector = new DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsContentSelectorList(this, "content_selector", false);
    get contentSelector() {
        return this._contentSelector;
    }
    // include_headers - computed: true, optional: false, required: false
    _includeHeaders = new cdktf.StringMap(this, "include_headers");
    get includeHeaders() {
        return this._includeHeaders;
    }
    // include_images - computed: true, optional: false, required: false
    get includeImages() {
        return this.getBooleanAttribute('include_images');
    }
    // specific_sitemaps - computed: true, optional: false, required: false
    get specificSitemaps() {
        return this.getListAttribute('specific_sitemaps');
    }
    // use_browser_rendering - computed: true, optional: false, required: false
    get useBrowserRendering() {
        return this.getBooleanAttribute('use_browser_rendering');
    }
}
export function dataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference extends cdktf.ComplexObject {
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
    // r2_jurisdiction - computed: true, optional: false, required: false
    get r2Jurisdiction() {
        return this.getStringAttribute('r2_jurisdiction');
    }
    // storage_id - computed: true, optional: false, required: false
    get storageId() {
        return this.getStringAttribute('storage_id');
    }
    // storage_type - computed: true, optional: false, required: false
    get storageType() {
        return this.getStringAttribute('storage_type');
    }
}
export function dataCloudflareAiSearchInstanceSourceParamsWebCrawlerToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareAiSearchInstanceSourceParamsWebCrawlerToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference extends cdktf.ComplexObject {
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
    // crawl_options - computed: true, optional: false, required: false
    _crawlOptions = new DataCloudflareAiSearchInstanceSourceParamsWebCrawlerCrawlOptionsOutputReference(this, "crawl_options");
    get crawlOptions() {
        return this._crawlOptions;
    }
    // parse_options - computed: true, optional: false, required: false
    _parseOptions = new DataCloudflareAiSearchInstanceSourceParamsWebCrawlerParseOptionsOutputReference(this, "parse_options");
    get parseOptions() {
        return this._parseOptions;
    }
    // parse_type - computed: true, optional: false, required: false
    get parseType() {
        return this.getStringAttribute('parse_type');
    }
    // store_options - computed: true, optional: false, required: false
    _storeOptions = new DataCloudflareAiSearchInstanceSourceParamsWebCrawlerStoreOptionsOutputReference(this, "store_options");
    get storeOptions() {
        return this._storeOptions;
    }
}
export function dataCloudflareAiSearchInstanceSourceParamsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareAiSearchInstanceSourceParamsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareAiSearchInstanceSourceParamsOutputReference extends cdktf.ComplexObject {
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
    // exclude_items - computed: true, optional: false, required: false
    get excludeItems() {
        return this.getListAttribute('exclude_items');
    }
    // include_items - computed: true, optional: false, required: false
    get includeItems() {
        return this.getListAttribute('include_items');
    }
    // prefix - computed: true, optional: false, required: false
    get prefix() {
        return this.getStringAttribute('prefix');
    }
    // r2_jurisdiction - computed: true, optional: false, required: false
    get r2Jurisdiction() {
        return this.getStringAttribute('r2_jurisdiction');
    }
    // web_crawler - computed: true, optional: false, required: false
    _webCrawler = new DataCloudflareAiSearchInstanceSourceParamsWebCrawlerOutputReference(this, "web_crawler");
    get webCrawler() {
        return this._webCrawler;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_instance cloudflare_ai_search_instance}
*/
export class DataCloudflareAiSearchInstance extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_ai_search_instance";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareAiSearchInstance resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareAiSearchInstance to import
    * @param importFromId The id of the existing DataCloudflareAiSearchInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareAiSearchInstance to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_ai_search_instance", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/ai_search_instance cloudflare_ai_search_instance} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareAiSearchInstanceConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_ai_search_instance',
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
        this._filter.internalValue = config.filter;
        this._id = config.id;
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
    // ai_gateway_id - computed: true, optional: false, required: false
    get aiGatewayId() {
        return this.getStringAttribute('ai_gateway_id');
    }
    // aisearch_model - computed: true, optional: false, required: false
    get aisearchModel() {
        return this.getStringAttribute('aisearch_model');
    }
    // cache - computed: true, optional: false, required: false
    get cache() {
        return this.getBooleanAttribute('cache');
    }
    // cache_threshold - computed: true, optional: false, required: false
    get cacheThreshold() {
        return this.getStringAttribute('cache_threshold');
    }
    // chunk_overlap - computed: true, optional: false, required: false
    get chunkOverlap() {
        return this.getNumberAttribute('chunk_overlap');
    }
    // chunk_size - computed: true, optional: false, required: false
    get chunkSize() {
        return this.getNumberAttribute('chunk_size');
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // created_by - computed: true, optional: false, required: false
    get createdBy() {
        return this.getStringAttribute('created_by');
    }
    // custom_metadata - computed: true, optional: false, required: false
    _customMetadata = new DataCloudflareAiSearchInstanceCustomMetadataList(this, "custom_metadata", false);
    get customMetadata() {
        return this._customMetadata;
    }
    // embedding_model - computed: true, optional: false, required: false
    get embeddingModel() {
        return this.getStringAttribute('embedding_model');
    }
    // enable - computed: true, optional: false, required: false
    get enable() {
        return this.getBooleanAttribute('enable');
    }
    // engine_version - computed: true, optional: false, required: false
    get engineVersion() {
        return this.getNumberAttribute('engine_version');
    }
    // filter - computed: false, optional: true, required: false
    _filter = new DataCloudflareAiSearchInstanceFilterOutputReference(this, "filter");
    get filter() {
        return this._filter;
    }
    putFilter(value) {
        this._filter.internalValue = value;
    }
    resetFilter() {
        this._filter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get filterInput() {
        return this._filter.internalValue;
    }
    // fusion_method - computed: true, optional: false, required: false
    get fusionMethod() {
        return this.getStringAttribute('fusion_method');
    }
    // hybrid_search_enabled - computed: true, optional: false, required: false
    get hybridSearchEnabled() {
        return this.getBooleanAttribute('hybrid_search_enabled');
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
    // index_method - computed: true, optional: false, required: false
    _indexMethod = new DataCloudflareAiSearchInstanceIndexMethodOutputReference(this, "index_method");
    get indexMethod() {
        return this._indexMethod;
    }
    // indexing_options - computed: true, optional: false, required: false
    _indexingOptions = new DataCloudflareAiSearchInstanceIndexingOptionsOutputReference(this, "indexing_options");
    get indexingOptions() {
        return this._indexingOptions;
    }
    // last_activity - computed: true, optional: false, required: false
    get lastActivity() {
        return this.getStringAttribute('last_activity');
    }
    // max_num_results - computed: true, optional: false, required: false
    get maxNumResults() {
        return this.getNumberAttribute('max_num_results');
    }
    // metadata - computed: true, optional: false, required: false
    _metadata = new DataCloudflareAiSearchInstanceMetadataOutputReference(this, "metadata");
    get metadata() {
        return this._metadata;
    }
    // modified_at - computed: true, optional: false, required: false
    get modifiedAt() {
        return this.getStringAttribute('modified_at');
    }
    // modified_by - computed: true, optional: false, required: false
    get modifiedBy() {
        return this.getStringAttribute('modified_by');
    }
    // namespace - computed: true, optional: false, required: false
    get namespace() {
        return this.getStringAttribute('namespace');
    }
    // paused - computed: true, optional: false, required: false
    get paused() {
        return this.getBooleanAttribute('paused');
    }
    // public_endpoint_id - computed: true, optional: false, required: false
    get publicEndpointId() {
        return this.getStringAttribute('public_endpoint_id');
    }
    // public_endpoint_params - computed: true, optional: false, required: false
    _publicEndpointParams = new DataCloudflareAiSearchInstancePublicEndpointParamsOutputReference(this, "public_endpoint_params");
    get publicEndpointParams() {
        return this._publicEndpointParams;
    }
    // reranking - computed: true, optional: false, required: false
    get reranking() {
        return this.getBooleanAttribute('reranking');
    }
    // reranking_model - computed: true, optional: false, required: false
    get rerankingModel() {
        return this.getStringAttribute('reranking_model');
    }
    // retrieval_options - computed: true, optional: false, required: false
    _retrievalOptions = new DataCloudflareAiSearchInstanceRetrievalOptionsOutputReference(this, "retrieval_options");
    get retrievalOptions() {
        return this._retrievalOptions;
    }
    // rewrite_model - computed: true, optional: false, required: false
    get rewriteModel() {
        return this.getStringAttribute('rewrite_model');
    }
    // rewrite_query - computed: true, optional: false, required: false
    get rewriteQuery() {
        return this.getBooleanAttribute('rewrite_query');
    }
    // score_threshold - computed: true, optional: false, required: false
    get scoreThreshold() {
        return this.getNumberAttribute('score_threshold');
    }
    // source - computed: true, optional: false, required: false
    get source() {
        return this.getStringAttribute('source');
    }
    // source_params - computed: true, optional: false, required: false
    _sourceParams = new DataCloudflareAiSearchInstanceSourceParamsOutputReference(this, "source_params");
    get sourceParams() {
        return this._sourceParams;
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // sync_interval - computed: true, optional: false, required: false
    get syncInterval() {
        return this.getNumberAttribute('sync_interval');
    }
    // token_id - computed: true, optional: false, required: false
    get tokenId() {
        return this.getStringAttribute('token_id');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            filter: dataCloudflareAiSearchInstanceFilterToTerraform(this._filter.internalValue),
            id: cdktf.stringToTerraform(this._id),
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
            filter: {
                value: dataCloudflareAiSearchInstanceFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareAiSearchInstanceFilter",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_requests
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareCloudforceOneRequestsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareCloudforceOneRequestsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareCloudforceOneRequestsResultOutputReference extends cdktf.ComplexObject {
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
    // completed - computed: true, optional: false, required: false
    get completed() {
        return this.getStringAttribute('completed');
    }
    // created - computed: true, optional: false, required: false
    get created() {
        return this.getStringAttribute('created');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // message_tokens - computed: true, optional: false, required: false
    get messageTokens() {
        return this.getNumberAttribute('message_tokens');
    }
    // priority - computed: true, optional: false, required: false
    get priority() {
        return this.getStringAttribute('priority');
    }
    // readable_id - computed: true, optional: false, required: false
    get readableId() {
        return this.getStringAttribute('readable_id');
    }
    // request - computed: true, optional: false, required: false
    get request() {
        return this.getStringAttribute('request');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // summary - computed: true, optional: false, required: false
    get summary() {
        return this.getStringAttribute('summary');
    }
    // tlp - computed: true, optional: false, required: false
    get tlp() {
        return this.getStringAttribute('tlp');
    }
    // tokens - computed: true, optional: false, required: false
    get tokens() {
        return this.getNumberAttribute('tokens');
    }
    // updated - computed: true, optional: false, required: false
    get updated() {
        return this.getStringAttribute('updated');
    }
}
export class DataCloudflareCloudforceOneRequestsResultList extends cdktf.ComplexList {
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
        return new DataCloudflareCloudforceOneRequestsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_requests cloudflare_cloudforce_one_requests}
*/
export class DataCloudflareCloudforceOneRequests extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_cloudforce_one_requests";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareCloudforceOneRequests resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCloudforceOneRequests to import
    * @param importFromId The id of the existing DataCloudflareCloudforceOneRequests that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_requests#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCloudforceOneRequests to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_cloudforce_one_requests", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_requests cloudflare_cloudforce_one_requests} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCloudforceOneRequestsConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_cloudforce_one_requests',
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
        this._completedAfter = config.completedAfter;
        this._completedBefore = config.completedBefore;
        this._createdAfter = config.createdAfter;
        this._createdBefore = config.createdBefore;
        this._maxItems = config.maxItems;
        this._page = config.page;
        this._perPage = config.perPage;
        this._requestType = config.requestType;
        this._sortBy = config.sortBy;
        this._sortOrder = config.sortOrder;
        this._status = config.status;
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
    // completed_after - computed: false, optional: true, required: false
    _completedAfter;
    get completedAfter() {
        return this.getStringAttribute('completed_after');
    }
    set completedAfter(value) {
        this._completedAfter = value;
    }
    resetCompletedAfter() {
        this._completedAfter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get completedAfterInput() {
        return this._completedAfter;
    }
    // completed_before - computed: false, optional: true, required: false
    _completedBefore;
    get completedBefore() {
        return this.getStringAttribute('completed_before');
    }
    set completedBefore(value) {
        this._completedBefore = value;
    }
    resetCompletedBefore() {
        this._completedBefore = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get completedBeforeInput() {
        return this._completedBefore;
    }
    // created_after - computed: false, optional: true, required: false
    _createdAfter;
    get createdAfter() {
        return this.getStringAttribute('created_after');
    }
    set createdAfter(value) {
        this._createdAfter = value;
    }
    resetCreatedAfter() {
        this._createdAfter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get createdAfterInput() {
        return this._createdAfter;
    }
    // created_before - computed: false, optional: true, required: false
    _createdBefore;
    get createdBefore() {
        return this.getStringAttribute('created_before');
    }
    set createdBefore(value) {
        this._createdBefore = value;
    }
    resetCreatedBefore() {
        this._createdBefore = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get createdBeforeInput() {
        return this._createdBefore;
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
    // page - computed: false, optional: false, required: true
    _page;
    get page() {
        return this.getNumberAttribute('page');
    }
    set page(value) {
        this._page = value;
    }
    // Temporarily expose input value. Use with caution.
    get pageInput() {
        return this._page;
    }
    // per_page - computed: false, optional: false, required: true
    _perPage;
    get perPage() {
        return this.getNumberAttribute('per_page');
    }
    set perPage(value) {
        this._perPage = value;
    }
    // Temporarily expose input value. Use with caution.
    get perPageInput() {
        return this._perPage;
    }
    // request_type - computed: false, optional: true, required: false
    _requestType;
    get requestType() {
        return this.getStringAttribute('request_type');
    }
    set requestType(value) {
        this._requestType = value;
    }
    resetRequestType() {
        this._requestType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requestTypeInput() {
        return this._requestType;
    }
    // result - computed: true, optional: false, required: false
    _result = new DataCloudflareCloudforceOneRequestsResultList(this, "result", false);
    get result() {
        return this._result;
    }
    // sort_by - computed: false, optional: true, required: false
    _sortBy;
    get sortBy() {
        return this.getStringAttribute('sort_by');
    }
    set sortBy(value) {
        this._sortBy = value;
    }
    resetSortBy() {
        this._sortBy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sortByInput() {
        return this._sortBy;
    }
    // sort_order - computed: false, optional: true, required: false
    _sortOrder;
    get sortOrder() {
        return this.getStringAttribute('sort_order');
    }
    set sortOrder(value) {
        this._sortOrder = value;
    }
    resetSortOrder() {
        this._sortOrder = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sortOrderInput() {
        return this._sortOrder;
    }
    // status - computed: false, optional: true, required: false
    _status;
    get status() {
        return this.getStringAttribute('status');
    }
    set status(value) {
        this._status = value;
    }
    resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get statusInput() {
        return this._status;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            completed_after: cdktf.stringToTerraform(this._completedAfter),
            completed_before: cdktf.stringToTerraform(this._completedBefore),
            created_after: cdktf.stringToTerraform(this._createdAfter),
            created_before: cdktf.stringToTerraform(this._createdBefore),
            max_items: cdktf.numberToTerraform(this._maxItems),
            page: cdktf.numberToTerraform(this._page),
            per_page: cdktf.numberToTerraform(this._perPage),
            request_type: cdktf.stringToTerraform(this._requestType),
            sort_by: cdktf.stringToTerraform(this._sortBy),
            sort_order: cdktf.stringToTerraform(this._sortOrder),
            status: cdktf.stringToTerraform(this._status),
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
            completed_after: {
                value: cdktf.stringToHclTerraform(this._completedAfter),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            completed_before: {
                value: cdktf.stringToHclTerraform(this._completedBefore),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            created_after: {
                value: cdktf.stringToHclTerraform(this._createdAfter),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            created_before: {
                value: cdktf.stringToHclTerraform(this._createdBefore),
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
            page: {
                value: cdktf.numberToHclTerraform(this._page),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            per_page: {
                value: cdktf.numberToHclTerraform(this._perPage),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            request_type: {
                value: cdktf.stringToHclTerraform(this._requestType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sort_by: {
                value: cdktf.stringToHclTerraform(this._sortBy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sort_order: {
                value: cdktf.stringToHclTerraform(this._sortOrder),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            status: {
                value: cdktf.stringToHclTerraform(this._status),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}

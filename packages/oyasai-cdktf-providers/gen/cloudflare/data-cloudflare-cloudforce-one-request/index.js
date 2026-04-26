// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareCloudforceOneRequestFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        completed_after: cdktf.stringToTerraform(struct.completedAfter),
        completed_before: cdktf.stringToTerraform(struct.completedBefore),
        created_after: cdktf.stringToTerraform(struct.createdAfter),
        created_before: cdktf.stringToTerraform(struct.createdBefore),
        page: cdktf.numberToTerraform(struct.page),
        per_page: cdktf.numberToTerraform(struct.perPage),
        request_type: cdktf.stringToTerraform(struct.requestType),
        sort_by: cdktf.stringToTerraform(struct.sortBy),
        sort_order: cdktf.stringToTerraform(struct.sortOrder),
        status: cdktf.stringToTerraform(struct.status),
    };
}
export function dataCloudflareCloudforceOneRequestFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        completed_after: {
            value: cdktf.stringToHclTerraform(struct.completedAfter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        completed_before: {
            value: cdktf.stringToHclTerraform(struct.completedBefore),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        created_after: {
            value: cdktf.stringToHclTerraform(struct.createdAfter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        created_before: {
            value: cdktf.stringToHclTerraform(struct.createdBefore),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        page: {
            value: cdktf.numberToHclTerraform(struct.page),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        per_page: {
            value: cdktf.numberToHclTerraform(struct.perPage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        request_type: {
            value: cdktf.stringToHclTerraform(struct.requestType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sort_by: {
            value: cdktf.stringToHclTerraform(struct.sortBy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sort_order: {
            value: cdktf.stringToHclTerraform(struct.sortOrder),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        status: {
            value: cdktf.stringToHclTerraform(struct.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DataCloudflareCloudforceOneRequestFilterOutputReference extends cdktf.ComplexObject {
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
        if (this._completedAfter !== undefined) {
            hasAnyValues = true;
            internalValueResult.completedAfter = this._completedAfter;
        }
        if (this._completedBefore !== undefined) {
            hasAnyValues = true;
            internalValueResult.completedBefore = this._completedBefore;
        }
        if (this._createdAfter !== undefined) {
            hasAnyValues = true;
            internalValueResult.createdAfter = this._createdAfter;
        }
        if (this._createdBefore !== undefined) {
            hasAnyValues = true;
            internalValueResult.createdBefore = this._createdBefore;
        }
        if (this._page !== undefined) {
            hasAnyValues = true;
            internalValueResult.page = this._page;
        }
        if (this._perPage !== undefined) {
            hasAnyValues = true;
            internalValueResult.perPage = this._perPage;
        }
        if (this._requestType !== undefined) {
            hasAnyValues = true;
            internalValueResult.requestType = this._requestType;
        }
        if (this._sortBy !== undefined) {
            hasAnyValues = true;
            internalValueResult.sortBy = this._sortBy;
        }
        if (this._sortOrder !== undefined) {
            hasAnyValues = true;
            internalValueResult.sortOrder = this._sortOrder;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._completedAfter = undefined;
            this._completedBefore = undefined;
            this._createdAfter = undefined;
            this._createdBefore = undefined;
            this._page = undefined;
            this._perPage = undefined;
            this._requestType = undefined;
            this._sortBy = undefined;
            this._sortOrder = undefined;
            this._status = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._completedAfter = value.completedAfter;
            this._completedBefore = value.completedBefore;
            this._createdAfter = value.createdAfter;
            this._createdBefore = value.createdBefore;
            this._page = value.page;
            this._perPage = value.perPage;
            this._requestType = value.requestType;
            this._sortBy = value.sortBy;
            this._sortOrder = value.sortOrder;
            this._status = value.status;
        }
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request cloudflare_cloudforce_one_request}
*/
export class DataCloudflareCloudforceOneRequest extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_cloudforce_one_request";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareCloudforceOneRequest resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCloudforceOneRequest to import
    * @param importFromId The id of the existing DataCloudflareCloudforceOneRequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCloudforceOneRequest to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_cloudforce_one_request", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request cloudflare_cloudforce_one_request} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCloudforceOneRequestConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_cloudforce_one_request',
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
        this._requestId = config.requestId;
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
    // completed - computed: true, optional: false, required: false
    get completed() {
        return this.getStringAttribute('completed');
    }
    // content - computed: true, optional: false, required: false
    get content() {
        return this.getStringAttribute('content');
    }
    // created - computed: true, optional: false, required: false
    get created() {
        return this.getStringAttribute('created');
    }
    // filter - computed: false, optional: true, required: false
    _filter = new DataCloudflareCloudforceOneRequestFilterOutputReference(this, "filter");
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
    // request_id - computed: false, optional: true, required: false
    _requestId;
    get requestId() {
        return this.getStringAttribute('request_id');
    }
    set requestId(value) {
        this._requestId = value;
    }
    resetRequestId() {
        this._requestId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requestIdInput() {
        return this._requestId;
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
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            filter: dataCloudflareCloudforceOneRequestFilterToTerraform(this._filter.internalValue),
            request_id: cdktf.stringToTerraform(this._requestId),
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
                value: dataCloudflareCloudforceOneRequestFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareCloudforceOneRequestFilter",
            },
            request_id: {
                value: cdktf.stringToHclTerraform(this._requestId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}

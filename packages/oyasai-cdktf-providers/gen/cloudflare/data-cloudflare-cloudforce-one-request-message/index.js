// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_message
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_message cloudflare_cloudforce_one_request_message}
*/
export class DataCloudflareCloudforceOneRequestMessage extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_cloudforce_one_request_message";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareCloudforceOneRequestMessage resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCloudforceOneRequestMessage to import
    * @param importFromId The id of the existing DataCloudflareCloudforceOneRequestMessage that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_message#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCloudforceOneRequestMessage to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_cloudforce_one_request_message", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_message cloudflare_cloudforce_one_request_message} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCloudforceOneRequestMessageConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_cloudforce_one_request_message',
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
        this._after = config.after;
        this._before = config.before;
        this._page = config.page;
        this._perPage = config.perPage;
        this._requestId = config.requestId;
        this._sortBy = config.sortBy;
        this._sortOrder = config.sortOrder;
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
    // after - computed: false, optional: true, required: false
    _after;
    get after() {
        return this.getStringAttribute('after');
    }
    set after(value) {
        this._after = value;
    }
    resetAfter() {
        this._after = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get afterInput() {
        return this._after;
    }
    // author - computed: true, optional: false, required: false
    get author() {
        return this.getStringAttribute('author');
    }
    // before - computed: false, optional: true, required: false
    _before;
    get before() {
        return this.getStringAttribute('before');
    }
    set before(value) {
        this._before = value;
    }
    resetBefore() {
        this._before = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get beforeInput() {
        return this._before;
    }
    // content - computed: true, optional: false, required: false
    get content() {
        return this.getStringAttribute('content');
    }
    // created - computed: true, optional: false, required: false
    get created() {
        return this.getStringAttribute('created');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // is_follow_on_request - computed: true, optional: false, required: false
    get isFollowOnRequest() {
        return this.getBooleanAttribute('is_follow_on_request');
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
    // request_id - computed: false, optional: false, required: true
    _requestId;
    get requestId() {
        return this.getStringAttribute('request_id');
    }
    set requestId(value) {
        this._requestId = value;
    }
    // Temporarily expose input value. Use with caution.
    get requestIdInput() {
        return this._requestId;
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
            after: cdktf.stringToTerraform(this._after),
            before: cdktf.stringToTerraform(this._before),
            page: cdktf.numberToTerraform(this._page),
            per_page: cdktf.numberToTerraform(this._perPage),
            request_id: cdktf.stringToTerraform(this._requestId),
            sort_by: cdktf.stringToTerraform(this._sortBy),
            sort_order: cdktf.stringToTerraform(this._sortOrder),
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
            after: {
                value: cdktf.stringToHclTerraform(this._after),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            before: {
                value: cdktf.stringToHclTerraform(this._before),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
            request_id: {
                value: cdktf.stringToHclTerraform(this._requestId),
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
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}

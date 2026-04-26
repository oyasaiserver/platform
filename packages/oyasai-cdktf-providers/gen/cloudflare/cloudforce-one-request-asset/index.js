// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_asset
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_asset cloudflare_cloudforce_one_request_asset}
*/
export class CloudforceOneRequestAsset extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_cloudforce_one_request_asset";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CloudforceOneRequestAsset resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudforceOneRequestAsset to import
    * @param importFromId The id of the existing CloudforceOneRequestAsset that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_asset#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudforceOneRequestAsset to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_cloudforce_one_request_asset", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/cloudforce_one_request_asset cloudflare_cloudforce_one_request_asset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudforceOneRequestAssetConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_cloudforce_one_request_asset',
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
        this._page = config.page;
        this._perPage = config.perPage;
        this._requestId = config.requestId;
        this._source = config.source;
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
    // created - computed: true, optional: false, required: false
    get created() {
        return this.getStringAttribute('created');
    }
    // description - computed: true, optional: false, required: false
    get description() {
        return this.getStringAttribute('description');
    }
    // file_type - computed: true, optional: false, required: false
    get fileType() {
        return this.getStringAttribute('file_type');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getNumberAttribute('id');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
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
    // source - computed: false, optional: true, required: false
    _source;
    get source() {
        return this.getStringAttribute('source');
    }
    set source(value) {
        this._source = value;
    }
    resetSource() {
        this._source = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceInput() {
        return this._source;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            page: cdktf.numberToTerraform(this._page),
            per_page: cdktf.numberToTerraform(this._perPage),
            request_id: cdktf.stringToTerraform(this._requestId),
            source: cdktf.stringToTerraform(this._source),
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
            source: {
                value: cdktf.stringToHclTerraform(this._source),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}

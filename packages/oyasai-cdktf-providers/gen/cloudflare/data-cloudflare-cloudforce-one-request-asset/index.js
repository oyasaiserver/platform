// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_asset
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_asset cloudflare_cloudforce_one_request_asset}
*/
export class DataCloudflareCloudforceOneRequestAsset extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_cloudforce_one_request_asset";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareCloudforceOneRequestAsset resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCloudforceOneRequestAsset to import
    * @param importFromId The id of the existing DataCloudflareCloudforceOneRequestAsset that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_asset#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCloudforceOneRequestAsset to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_cloudforce_one_request_asset", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/cloudforce_one_request_asset cloudflare_cloudforce_one_request_asset} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCloudforceOneRequestAssetConfig
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
        this._assetId = config.assetId;
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
    // asset_id - computed: false, optional: false, required: true
    _assetId;
    get assetId() {
        return this.getStringAttribute('asset_id');
    }
    set assetId(value) {
        this._assetId = value;
    }
    // Temporarily expose input value. Use with caution.
    get assetIdInput() {
        return this._assetId;
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
        return this.getStringAttribute('id');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
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
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            asset_id: cdktf.stringToTerraform(this._assetId),
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
            asset_id: {
                value: cdktf.stringToHclTerraform(this._assetId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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

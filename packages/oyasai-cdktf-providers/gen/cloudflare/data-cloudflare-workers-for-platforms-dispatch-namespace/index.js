// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_for_platforms_dispatch_namespace
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_for_platforms_dispatch_namespace cloudflare_workers_for_platforms_dispatch_namespace}
*/
export class DataCloudflareWorkersForPlatformsDispatchNamespace extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_workers_for_platforms_dispatch_namespace";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareWorkersForPlatformsDispatchNamespace resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareWorkersForPlatformsDispatchNamespace to import
    * @param importFromId The id of the existing DataCloudflareWorkersForPlatformsDispatchNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_for_platforms_dispatch_namespace#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareWorkersForPlatformsDispatchNamespace to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_workers_for_platforms_dispatch_namespace", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/workers_for_platforms_dispatch_namespace cloudflare_workers_for_platforms_dispatch_namespace} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareWorkersForPlatformsDispatchNamespaceConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_workers_for_platforms_dispatch_namespace',
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
        this._dispatchNamespace = config.dispatchNamespace;
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
    // created_by - computed: true, optional: false, required: false
    get createdBy() {
        return this.getStringAttribute('created_by');
    }
    // created_on - computed: true, optional: false, required: false
    get createdOn() {
        return this.getStringAttribute('created_on');
    }
    // dispatch_namespace - computed: false, optional: false, required: true
    _dispatchNamespace;
    get dispatchNamespace() {
        return this.getStringAttribute('dispatch_namespace');
    }
    set dispatchNamespace(value) {
        this._dispatchNamespace = value;
    }
    // Temporarily expose input value. Use with caution.
    get dispatchNamespaceInput() {
        return this._dispatchNamespace;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // modified_by - computed: true, optional: false, required: false
    get modifiedBy() {
        return this.getStringAttribute('modified_by');
    }
    // modified_on - computed: true, optional: false, required: false
    get modifiedOn() {
        return this.getStringAttribute('modified_on');
    }
    // namespace_id - computed: true, optional: false, required: false
    get namespaceId() {
        return this.getStringAttribute('namespace_id');
    }
    // namespace_name - computed: true, optional: false, required: false
    get namespaceName() {
        return this.getStringAttribute('namespace_name');
    }
    // script_count - computed: true, optional: false, required: false
    get scriptCount() {
        return this.getNumberAttribute('script_count');
    }
    // trusted_workers - computed: true, optional: false, required: false
    get trustedWorkers() {
        return this.getBooleanAttribute('trusted_workers');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            dispatch_namespace: cdktf.stringToTerraform(this._dispatchNamespace),
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
            dispatch_namespace: {
                value: cdktf.stringToHclTerraform(this._dispatchNamespace),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}

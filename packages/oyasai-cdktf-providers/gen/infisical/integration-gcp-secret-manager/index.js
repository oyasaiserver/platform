// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_gcp_secret_manager
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function integrationGcpSecretManagerOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        secret_prefix: cdktf.stringToTerraform(struct.secretPrefix),
        secret_suffix: cdktf.stringToTerraform(struct.secretSuffix),
    };
}
export function integrationGcpSecretManagerOptionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        secret_prefix: {
            value: cdktf.stringToHclTerraform(struct.secretPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_suffix: {
            value: cdktf.stringToHclTerraform(struct.secretSuffix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class IntegrationGcpSecretManagerOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._secretPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretPrefix = this._secretPrefix;
        }
        if (this._secretSuffix !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretSuffix = this._secretSuffix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._secretPrefix = undefined;
            this._secretSuffix = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._secretPrefix = value.secretPrefix;
            this._secretSuffix = value.secretSuffix;
        }
    }
    // secret_prefix - computed: true, optional: true, required: false
    _secretPrefix;
    get secretPrefix() {
        return this.getStringAttribute('secret_prefix');
    }
    set secretPrefix(value) {
        this._secretPrefix = value;
    }
    resetSecretPrefix() {
        this._secretPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get secretPrefixInput() {
        return this._secretPrefix;
    }
    // secret_suffix - computed: true, optional: true, required: false
    _secretSuffix;
    get secretSuffix() {
        return this.getStringAttribute('secret_suffix');
    }
    set secretSuffix(value) {
        this._secretSuffix = value;
    }
    resetSecretSuffix() {
        this._secretSuffix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get secretSuffixInput() {
        return this._secretSuffix;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_gcp_secret_manager infisical_integration_gcp_secret_manager}
*/
export class IntegrationGcpSecretManager extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_integration_gcp_secret_manager";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a IntegrationGcpSecretManager resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IntegrationGcpSecretManager to import
    * @param importFromId The id of the existing IntegrationGcpSecretManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_gcp_secret_manager#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IntegrationGcpSecretManager to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_integration_gcp_secret_manager", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/integration_gcp_secret_manager infisical_integration_gcp_secret_manager} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IntegrationGcpSecretManagerConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'infisical_integration_gcp_secret_manager',
            terraformGeneratorMetadata: {
                providerName: 'infisical',
                providerVersion: '0.16.18'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._environment = config.environment;
        this._gcpProjectId = config.gcpProjectId;
        this._options.internalValue = config.options;
        this._projectId = config.projectId;
        this._secretPath = config.secretPath;
        this._serviceAccountJson = config.serviceAccountJson;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // environment - computed: false, optional: false, required: true
    _environment;
    get environment() {
        return this.getStringAttribute('environment');
    }
    set environment(value) {
        this._environment = value;
    }
    // Temporarily expose input value. Use with caution.
    get environmentInput() {
        return this._environment;
    }
    // gcp_project_id - computed: false, optional: false, required: true
    _gcpProjectId;
    get gcpProjectId() {
        return this.getStringAttribute('gcp_project_id');
    }
    set gcpProjectId(value) {
        this._gcpProjectId = value;
    }
    // Temporarily expose input value. Use with caution.
    get gcpProjectIdInput() {
        return this._gcpProjectId;
    }
    // integration_auth_id - computed: true, optional: false, required: false
    get integrationAuthId() {
        return this.getStringAttribute('integration_auth_id');
    }
    // integration_id - computed: true, optional: false, required: false
    get integrationId() {
        return this.getStringAttribute('integration_id');
    }
    // options - computed: true, optional: true, required: false
    _options = new IntegrationGcpSecretManagerOptionsOutputReference(this, "options");
    get options() {
        return this._options;
    }
    putOptions(value) {
        this._options.internalValue = value;
    }
    resetOptions() {
        this._options.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get optionsInput() {
        return this._options.internalValue;
    }
    // project_id - computed: false, optional: false, required: true
    _projectId;
    get projectId() {
        return this.getStringAttribute('project_id');
    }
    set projectId(value) {
        this._projectId = value;
    }
    // Temporarily expose input value. Use with caution.
    get projectIdInput() {
        return this._projectId;
    }
    // secret_path - computed: false, optional: false, required: true
    _secretPath;
    get secretPath() {
        return this.getStringAttribute('secret_path');
    }
    set secretPath(value) {
        this._secretPath = value;
    }
    // Temporarily expose input value. Use with caution.
    get secretPathInput() {
        return this._secretPath;
    }
    // service_account_json - computed: false, optional: false, required: true
    _serviceAccountJson;
    get serviceAccountJson() {
        return this.getStringAttribute('service_account_json');
    }
    set serviceAccountJson(value) {
        this._serviceAccountJson = value;
    }
    // Temporarily expose input value. Use with caution.
    get serviceAccountJsonInput() {
        return this._serviceAccountJson;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            environment: cdktf.stringToTerraform(this._environment),
            gcp_project_id: cdktf.stringToTerraform(this._gcpProjectId),
            options: integrationGcpSecretManagerOptionsToTerraform(this._options.internalValue),
            project_id: cdktf.stringToTerraform(this._projectId),
            secret_path: cdktf.stringToTerraform(this._secretPath),
            service_account_json: cdktf.stringToTerraform(this._serviceAccountJson),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            environment: {
                value: cdktf.stringToHclTerraform(this._environment),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            gcp_project_id: {
                value: cdktf.stringToHclTerraform(this._gcpProjectId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            options: {
                value: integrationGcpSecretManagerOptionsToHclTerraform(this._options.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "IntegrationGcpSecretManagerOptions",
            },
            project_id: {
                value: cdktf.stringToHclTerraform(this._projectId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            secret_path: {
                value: cdktf.stringToHclTerraform(this._secretPath),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            service_account_json: {
                value: cdktf.stringToHclTerraform(this._serviceAccountJson),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}

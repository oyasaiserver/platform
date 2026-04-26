// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secrets
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataInfisicalSecretsSecretsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataInfisicalSecretsSecretsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataInfisicalSecretsSecretsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    constructor(terraformResource, terraformAttribute, complexObjectKey) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
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
    // comment - computed: true, optional: false, required: false
    get comment() {
        return this.getStringAttribute('comment');
    }
    // secret_type - computed: true, optional: false, required: false
    get secretType() {
        return this.getStringAttribute('secret_type');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
export class DataInfisicalSecretsSecretsMap extends cdktf.ComplexMap {
    terraformResource;
    terraformAttribute;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
    }
    /**
    * @param key the key of the item to return
    */
    get(key) {
        return new DataInfisicalSecretsSecretsOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secrets infisical_secrets}
*/
export class DataInfisicalSecrets extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_secrets";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataInfisicalSecrets resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataInfisicalSecrets to import
    * @param importFromId The id of the existing DataInfisicalSecrets that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secrets#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataInfisicalSecrets to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_secrets", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/data-sources/secrets infisical_secrets} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataInfisicalSecretsConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'infisical_secrets',
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
        this._envSlug = config.envSlug;
        this._folderPath = config.folderPath;
        this._workspaceId = config.workspaceId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // env_slug - computed: false, optional: false, required: true
    _envSlug;
    get envSlug() {
        return this.getStringAttribute('env_slug');
    }
    set envSlug(value) {
        this._envSlug = value;
    }
    // Temporarily expose input value. Use with caution.
    get envSlugInput() {
        return this._envSlug;
    }
    // folder_path - computed: false, optional: false, required: true
    _folderPath;
    get folderPath() {
        return this.getStringAttribute('folder_path');
    }
    set folderPath(value) {
        this._folderPath = value;
    }
    // Temporarily expose input value. Use with caution.
    get folderPathInput() {
        return this._folderPath;
    }
    // secrets - computed: true, optional: false, required: false
    _secrets = new DataInfisicalSecretsSecretsMap(this, "secrets");
    get secrets() {
        return this._secrets;
    }
    // workspace_id - computed: true, optional: true, required: false
    _workspaceId;
    get workspaceId() {
        return this.getStringAttribute('workspace_id');
    }
    set workspaceId(value) {
        this._workspaceId = value;
    }
    resetWorkspaceId() {
        this._workspaceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get workspaceIdInput() {
        return this._workspaceId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            env_slug: cdktf.stringToTerraform(this._envSlug),
            folder_path: cdktf.stringToTerraform(this._folderPath),
            workspace_id: cdktf.stringToTerraform(this._workspaceId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            env_slug: {
                value: cdktf.stringToHclTerraform(this._envSlug),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            folder_path: {
                value: cdktf.stringToHclTerraform(this._folderPath),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            workspace_id: {
                value: cdktf.stringToHclTerraform(this._workspaceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}

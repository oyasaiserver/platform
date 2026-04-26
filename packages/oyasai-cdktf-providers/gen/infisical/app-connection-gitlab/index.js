// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_gitlab
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function appConnectionGitlabCredentialsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_token: cdktf.stringToTerraform(struct.accessToken),
        access_token_type: cdktf.stringToTerraform(struct.accessTokenType),
        instance_url: cdktf.stringToTerraform(struct.instanceUrl),
    };
}
export function appConnectionGitlabCredentialsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        access_token: {
            value: cdktf.stringToHclTerraform(struct.accessToken),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        access_token_type: {
            value: cdktf.stringToHclTerraform(struct.accessTokenType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_url: {
            value: cdktf.stringToHclTerraform(struct.instanceUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class AppConnectionGitlabCredentialsOutputReference extends cdktf.ComplexObject {
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
        if (this._accessToken !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessToken = this._accessToken;
        }
        if (this._accessTokenType !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessTokenType = this._accessTokenType;
        }
        if (this._instanceUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceUrl = this._instanceUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessToken = undefined;
            this._accessTokenType = undefined;
            this._instanceUrl = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessToken = value.accessToken;
            this._accessTokenType = value.accessTokenType;
            this._instanceUrl = value.instanceUrl;
        }
    }
    // access_token - computed: false, optional: false, required: true
    _accessToken;
    get accessToken() {
        return this.getStringAttribute('access_token');
    }
    set accessToken(value) {
        this._accessToken = value;
    }
    // Temporarily expose input value. Use with caution.
    get accessTokenInput() {
        return this._accessToken;
    }
    // access_token_type - computed: false, optional: false, required: true
    _accessTokenType;
    get accessTokenType() {
        return this.getStringAttribute('access_token_type');
    }
    set accessTokenType(value) {
        this._accessTokenType = value;
    }
    // Temporarily expose input value. Use with caution.
    get accessTokenTypeInput() {
        return this._accessTokenType;
    }
    // instance_url - computed: false, optional: true, required: false
    _instanceUrl;
    get instanceUrl() {
        return this.getStringAttribute('instance_url');
    }
    set instanceUrl(value) {
        this._instanceUrl = value;
    }
    resetInstanceUrl() {
        this._instanceUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instanceUrlInput() {
        return this._instanceUrl;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_gitlab infisical_app_connection_gitlab}
*/
export class AppConnectionGitlab extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_app_connection_gitlab";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a AppConnectionGitlab resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppConnectionGitlab to import
    * @param importFromId The id of the existing AppConnectionGitlab that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_gitlab#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppConnectionGitlab to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_app_connection_gitlab", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_gitlab infisical_app_connection_gitlab} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppConnectionGitlabConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'infisical_app_connection_gitlab',
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
        this._credentials.internalValue = config.credentials;
        this._description = config.description;
        this._method = config.method;
        this._name = config.name;
        this._projectId = config.projectId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // credentials - computed: false, optional: false, required: true
    _credentials = new AppConnectionGitlabCredentialsOutputReference(this, "credentials");
    get credentials() {
        return this._credentials;
    }
    putCredentials(value) {
        this._credentials.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get credentialsInput() {
        return this._credentials.internalValue;
    }
    // credentials_hash - computed: true, optional: false, required: false
    get credentialsHash() {
        return this.getStringAttribute('credentials_hash');
    }
    // description - computed: false, optional: true, required: false
    _description;
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // method - computed: false, optional: false, required: true
    _method;
    get method() {
        return this.getStringAttribute('method');
    }
    set method(value) {
        this._method = value;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method;
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // project_id - computed: false, optional: true, required: false
    _projectId;
    get projectId() {
        return this.getStringAttribute('project_id');
    }
    set projectId(value) {
        this._projectId = value;
    }
    resetProjectId() {
        this._projectId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get projectIdInput() {
        return this._projectId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            credentials: appConnectionGitlabCredentialsToTerraform(this._credentials.internalValue),
            description: cdktf.stringToTerraform(this._description),
            method: cdktf.stringToTerraform(this._method),
            name: cdktf.stringToTerraform(this._name),
            project_id: cdktf.stringToTerraform(this._projectId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            credentials: {
                value: appConnectionGitlabCredentialsToHclTerraform(this._credentials.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "AppConnectionGitlabCredentials",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            method: {
                value: cdktf.stringToHclTerraform(this._method),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            project_id: {
                value: cdktf.stringToHclTerraform(this._projectId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}

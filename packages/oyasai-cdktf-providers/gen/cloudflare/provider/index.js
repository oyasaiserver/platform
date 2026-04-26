// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs cloudflare}
*/
export class CloudflareProvider extends cdktf.TerraformProvider {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a CloudflareProvider resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudflareProvider to import
    * @param importFromId The id of the existing CloudflareProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudflareProvider to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs cloudflare} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudflareProviderConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare',
            terraformGeneratorMetadata: {
                providerName: 'cloudflare',
                providerVersion: '5.19.0'
            },
            terraformProviderSource: 'cloudflare/cloudflare'
        });
        this._apiKey = config.apiKey;
        this._apiToken = config.apiToken;
        this._apiUserServiceKey = config.apiUserServiceKey;
        this._baseUrl = config.baseUrl;
        this._email = config.email;
        this._userAgentOperatorSuffix = config.userAgentOperatorSuffix;
        this._alias = config.alias;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // api_key - computed: false, optional: true, required: false
    _apiKey;
    get apiKey() {
        return this._apiKey;
    }
    set apiKey(value) {
        this._apiKey = value;
    }
    resetApiKey() {
        this._apiKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get apiKeyInput() {
        return this._apiKey;
    }
    // api_token - computed: false, optional: true, required: false
    _apiToken;
    get apiToken() {
        return this._apiToken;
    }
    set apiToken(value) {
        this._apiToken = value;
    }
    resetApiToken() {
        this._apiToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get apiTokenInput() {
        return this._apiToken;
    }
    // api_user_service_key - computed: false, optional: true, required: false
    _apiUserServiceKey;
    get apiUserServiceKey() {
        return this._apiUserServiceKey;
    }
    set apiUserServiceKey(value) {
        this._apiUserServiceKey = value;
    }
    resetApiUserServiceKey() {
        this._apiUserServiceKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get apiUserServiceKeyInput() {
        return this._apiUserServiceKey;
    }
    // base_url - computed: false, optional: true, required: false
    _baseUrl;
    get baseUrl() {
        return this._baseUrl;
    }
    set baseUrl(value) {
        this._baseUrl = value;
    }
    resetBaseUrl() {
        this._baseUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get baseUrlInput() {
        return this._baseUrl;
    }
    // email - computed: false, optional: true, required: false
    _email;
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    resetEmail() {
        this._email = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get emailInput() {
        return this._email;
    }
    // user_agent_operator_suffix - computed: false, optional: true, required: false
    _userAgentOperatorSuffix;
    get userAgentOperatorSuffix() {
        return this._userAgentOperatorSuffix;
    }
    set userAgentOperatorSuffix(value) {
        this._userAgentOperatorSuffix = value;
    }
    resetUserAgentOperatorSuffix() {
        this._userAgentOperatorSuffix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get userAgentOperatorSuffixInput() {
        return this._userAgentOperatorSuffix;
    }
    // alias - computed: false, optional: true, required: false
    _alias;
    get alias() {
        return this._alias;
    }
    set alias(value) {
        this._alias = value;
    }
    resetAlias() {
        this._alias = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get aliasInput() {
        return this._alias;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            api_key: cdktf.stringToTerraform(this._apiKey),
            api_token: cdktf.stringToTerraform(this._apiToken),
            api_user_service_key: cdktf.stringToTerraform(this._apiUserServiceKey),
            base_url: cdktf.stringToTerraform(this._baseUrl),
            email: cdktf.stringToTerraform(this._email),
            user_agent_operator_suffix: cdktf.stringToTerraform(this._userAgentOperatorSuffix),
            alias: cdktf.stringToTerraform(this._alias),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            api_key: {
                value: cdktf.stringToHclTerraform(this._apiKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            api_token: {
                value: cdktf.stringToHclTerraform(this._apiToken),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            api_user_service_key: {
                value: cdktf.stringToHclTerraform(this._apiUserServiceKey),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            base_url: {
                value: cdktf.stringToHclTerraform(this._baseUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            email: {
                value: cdktf.stringToHclTerraform(this._email),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            user_agent_operator_suffix: {
                value: cdktf.stringToHclTerraform(this._userAgentOperatorSuffix),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            alias: {
                value: cdktf.stringToHclTerraform(this._alias),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}

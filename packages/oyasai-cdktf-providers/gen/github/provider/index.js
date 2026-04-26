// https://registry.terraform.io/providers/integrations/github/6.12.0/docs
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function githubProviderAppAuthToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.stringToTerraform(struct.id),
        installation_id: cdktf.stringToTerraform(struct.installationId),
        pem_file: cdktf.stringToTerraform(struct.pemFile),
    };
}
export function githubProviderAppAuthToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        id: {
            value: cdktf.stringToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        installation_id: {
            value: cdktf.stringToHclTerraform(struct.installationId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pem_file: {
            value: cdktf.stringToHclTerraform(struct.pemFile),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs github}
*/
export class GithubProvider extends cdktf.TerraformProvider {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a GithubProvider resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GithubProvider to import
    * @param importFromId The id of the existing GithubProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GithubProvider to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs github} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GithubProviderConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'github',
            terraformGeneratorMetadata: {
                providerName: 'github',
                providerVersion: '6.12.0'
            },
            terraformProviderSource: 'integrations/github'
        });
        this._baseUrl = config.baseUrl;
        this._insecure = config.insecure;
        this._maxPerPage = config.maxPerPage;
        this._maxRetries = config.maxRetries;
        this._organization = config.organization;
        this._owner = config.owner;
        this._parallelRequests = config.parallelRequests;
        this._readDelayMs = config.readDelayMs;
        this._retryDelayMs = config.retryDelayMs;
        this._retryableErrors = config.retryableErrors;
        this._token = config.token;
        this._writeDelayMs = config.writeDelayMs;
        this._alias = config.alias;
        this._appAuth = config.appAuth;
    }
    // ==========
    // ATTRIBUTES
    // ==========
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
    // insecure - computed: false, optional: true, required: false
    _insecure;
    get insecure() {
        return this._insecure;
    }
    set insecure(value) {
        this._insecure = value;
    }
    resetInsecure() {
        this._insecure = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get insecureInput() {
        return this._insecure;
    }
    // max_per_page - computed: false, optional: true, required: false
    _maxPerPage;
    get maxPerPage() {
        return this._maxPerPage;
    }
    set maxPerPage(value) {
        this._maxPerPage = value;
    }
    resetMaxPerPage() {
        this._maxPerPage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxPerPageInput() {
        return this._maxPerPage;
    }
    // max_retries - computed: false, optional: true, required: false
    _maxRetries;
    get maxRetries() {
        return this._maxRetries;
    }
    set maxRetries(value) {
        this._maxRetries = value;
    }
    resetMaxRetries() {
        this._maxRetries = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxRetriesInput() {
        return this._maxRetries;
    }
    // organization - computed: false, optional: true, required: false
    _organization;
    get organization() {
        return this._organization;
    }
    set organization(value) {
        this._organization = value;
    }
    resetOrganization() {
        this._organization = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get organizationInput() {
        return this._organization;
    }
    // owner - computed: false, optional: true, required: false
    _owner;
    get owner() {
        return this._owner;
    }
    set owner(value) {
        this._owner = value;
    }
    resetOwner() {
        this._owner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ownerInput() {
        return this._owner;
    }
    // parallel_requests - computed: false, optional: true, required: false
    _parallelRequests;
    get parallelRequests() {
        return this._parallelRequests;
    }
    set parallelRequests(value) {
        this._parallelRequests = value;
    }
    resetParallelRequests() {
        this._parallelRequests = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get parallelRequestsInput() {
        return this._parallelRequests;
    }
    // read_delay_ms - computed: false, optional: true, required: false
    _readDelayMs;
    get readDelayMs() {
        return this._readDelayMs;
    }
    set readDelayMs(value) {
        this._readDelayMs = value;
    }
    resetReadDelayMs() {
        this._readDelayMs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get readDelayMsInput() {
        return this._readDelayMs;
    }
    // retry_delay_ms - computed: false, optional: true, required: false
    _retryDelayMs;
    get retryDelayMs() {
        return this._retryDelayMs;
    }
    set retryDelayMs(value) {
        this._retryDelayMs = value;
    }
    resetRetryDelayMs() {
        this._retryDelayMs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get retryDelayMsInput() {
        return this._retryDelayMs;
    }
    // retryable_errors - computed: false, optional: true, required: false
    _retryableErrors;
    get retryableErrors() {
        return this._retryableErrors;
    }
    set retryableErrors(value) {
        this._retryableErrors = value;
    }
    resetRetryableErrors() {
        this._retryableErrors = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get retryableErrorsInput() {
        return this._retryableErrors;
    }
    // token - computed: false, optional: true, required: false
    _token;
    get token() {
        return this._token;
    }
    set token(value) {
        this._token = value;
    }
    resetToken() {
        this._token = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tokenInput() {
        return this._token;
    }
    // write_delay_ms - computed: false, optional: true, required: false
    _writeDelayMs;
    get writeDelayMs() {
        return this._writeDelayMs;
    }
    set writeDelayMs(value) {
        this._writeDelayMs = value;
    }
    resetWriteDelayMs() {
        this._writeDelayMs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get writeDelayMsInput() {
        return this._writeDelayMs;
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
    // app_auth - computed: false, optional: true, required: false
    _appAuth;
    get appAuth() {
        return this._appAuth;
    }
    set appAuth(value) {
        this._appAuth = value;
    }
    resetAppAuth() {
        this._appAuth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get appAuthInput() {
        return this._appAuth;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            base_url: cdktf.stringToTerraform(this._baseUrl),
            insecure: cdktf.booleanToTerraform(this._insecure),
            max_per_page: cdktf.numberToTerraform(this._maxPerPage),
            max_retries: cdktf.numberToTerraform(this._maxRetries),
            organization: cdktf.stringToTerraform(this._organization),
            owner: cdktf.stringToTerraform(this._owner),
            parallel_requests: cdktf.booleanToTerraform(this._parallelRequests),
            read_delay_ms: cdktf.numberToTerraform(this._readDelayMs),
            retry_delay_ms: cdktf.numberToTerraform(this._retryDelayMs),
            retryable_errors: cdktf.listMapper(cdktf.numberToTerraform, false)(this._retryableErrors),
            token: cdktf.stringToTerraform(this._token),
            write_delay_ms: cdktf.numberToTerraform(this._writeDelayMs),
            alias: cdktf.stringToTerraform(this._alias),
            app_auth: githubProviderAppAuthToTerraform(this._appAuth),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            base_url: {
                value: cdktf.stringToHclTerraform(this._baseUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            insecure: {
                value: cdktf.booleanToHclTerraform(this._insecure),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            max_per_page: {
                value: cdktf.numberToHclTerraform(this._maxPerPage),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            max_retries: {
                value: cdktf.numberToHclTerraform(this._maxRetries),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            organization: {
                value: cdktf.stringToHclTerraform(this._organization),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            owner: {
                value: cdktf.stringToHclTerraform(this._owner),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            parallel_requests: {
                value: cdktf.booleanToHclTerraform(this._parallelRequests),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            read_delay_ms: {
                value: cdktf.numberToHclTerraform(this._readDelayMs),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            retry_delay_ms: {
                value: cdktf.numberToHclTerraform(this._retryDelayMs),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            retryable_errors: {
                value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._retryableErrors),
                isBlock: false,
                type: "list",
                storageClassType: "numberList",
            },
            token: {
                value: cdktf.stringToHclTerraform(this._token),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            write_delay_ms: {
                value: cdktf.numberToHclTerraform(this._writeDelayMs),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            alias: {
                value: cdktf.stringToHclTerraform(this._alias),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            app_auth: {
                value: githubProviderAppAuthToHclTerraform(this._appAuth),
                isBlock: true,
                type: "list",
                storageClassType: "GithubProviderAppAuthList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}

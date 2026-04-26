// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function infisicalProviderAuthAwsIamToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        identity_id: cdktf.stringToTerraform(struct.identityId),
    };
}
export function infisicalProviderAuthAwsIamToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        identity_id: {
            value: cdktf.stringToHclTerraform(struct.identityId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export function infisicalProviderAuthKubernetesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        identity_id: cdktf.stringToTerraform(struct.identityId),
        service_account_token: cdktf.stringToTerraform(struct.serviceAccountToken),
        service_account_token_path: cdktf.stringToTerraform(struct.serviceAccountTokenPath),
    };
}
export function infisicalProviderAuthKubernetesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        identity_id: {
            value: cdktf.stringToHclTerraform(struct.identityId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service_account_token: {
            value: cdktf.stringToHclTerraform(struct.serviceAccountToken),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service_account_token_path: {
            value: cdktf.stringToHclTerraform(struct.serviceAccountTokenPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export function infisicalProviderAuthOidcToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        identity_id: cdktf.stringToTerraform(struct.identityId),
        token_environment_variable_name: cdktf.stringToTerraform(struct.tokenEnvironmentVariableName),
    };
}
export function infisicalProviderAuthOidcToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        identity_id: {
            value: cdktf.stringToHclTerraform(struct.identityId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        token_environment_variable_name: {
            value: cdktf.stringToHclTerraform(struct.tokenEnvironmentVariableName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export function infisicalProviderAuthUniversalToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        client_id: cdktf.stringToTerraform(struct.clientId),
        client_secret: cdktf.stringToTerraform(struct.clientSecret),
    };
}
export function infisicalProviderAuthUniversalToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        client_id: {
            value: cdktf.stringToHclTerraform(struct.clientId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client_secret: {
            value: cdktf.stringToHclTerraform(struct.clientSecret),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export function infisicalProviderAuthToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        aws_iam: infisicalProviderAuthAwsIamToTerraform(struct.awsIam),
        kubernetes: infisicalProviderAuthKubernetesToTerraform(struct.kubernetes),
        oidc: infisicalProviderAuthOidcToTerraform(struct.oidc),
        organization_slug: cdktf.stringToTerraform(struct.organizationSlug),
        token: cdktf.stringToTerraform(struct.token),
        universal: infisicalProviderAuthUniversalToTerraform(struct.universal),
    };
}
export function infisicalProviderAuthToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        aws_iam: {
            value: infisicalProviderAuthAwsIamToHclTerraform(struct.awsIam),
            isBlock: true,
            type: "struct",
            storageClassType: "InfisicalProviderAuthAwsIam",
        },
        kubernetes: {
            value: infisicalProviderAuthKubernetesToHclTerraform(struct.kubernetes),
            isBlock: true,
            type: "struct",
            storageClassType: "InfisicalProviderAuthKubernetes",
        },
        oidc: {
            value: infisicalProviderAuthOidcToHclTerraform(struct.oidc),
            isBlock: true,
            type: "struct",
            storageClassType: "InfisicalProviderAuthOidc",
        },
        organization_slug: {
            value: cdktf.stringToHclTerraform(struct.organizationSlug),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        token: {
            value: cdktf.stringToHclTerraform(struct.token),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        universal: {
            value: infisicalProviderAuthUniversalToHclTerraform(struct.universal),
            isBlock: true,
            type: "struct",
            storageClassType: "InfisicalProviderAuthUniversal",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs infisical}
*/
export class InfisicalProvider extends cdktf.TerraformProvider {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a InfisicalProvider resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the InfisicalProvider to import
    * @param importFromId The id of the existing InfisicalProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the InfisicalProvider to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs infisical} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options InfisicalProviderConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'infisical',
            terraformGeneratorMetadata: {
                providerName: 'infisical',
                providerVersion: '0.16.18'
            },
            terraformProviderSource: 'infisical/infisical'
        });
        this._auth = config.auth;
        this._clientId = config.clientId;
        this._clientSecret = config.clientSecret;
        this._host = config.host;
        this._serviceToken = config.serviceToken;
        this._alias = config.alias;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // auth - computed: false, optional: true, required: false
    _auth;
    get auth() {
        return this._auth;
    }
    set auth(value) {
        this._auth = value;
    }
    resetAuth() {
        this._auth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get authInput() {
        return this._auth;
    }
    // client_id - computed: false, optional: true, required: false
    _clientId;
    get clientId() {
        return this._clientId;
    }
    set clientId(value) {
        this._clientId = value;
    }
    resetClientId() {
        this._clientId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get clientIdInput() {
        return this._clientId;
    }
    // client_secret - computed: false, optional: true, required: false
    _clientSecret;
    get clientSecret() {
        return this._clientSecret;
    }
    set clientSecret(value) {
        this._clientSecret = value;
    }
    resetClientSecret() {
        this._clientSecret = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get clientSecretInput() {
        return this._clientSecret;
    }
    // host - computed: false, optional: true, required: false
    _host;
    get host() {
        return this._host;
    }
    set host(value) {
        this._host = value;
    }
    resetHost() {
        this._host = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hostInput() {
        return this._host;
    }
    // service_token - computed: false, optional: true, required: false
    _serviceToken;
    get serviceToken() {
        return this._serviceToken;
    }
    set serviceToken(value) {
        this._serviceToken = value;
    }
    resetServiceToken() {
        this._serviceToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serviceTokenInput() {
        return this._serviceToken;
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
            auth: infisicalProviderAuthToTerraform(this._auth),
            client_id: cdktf.stringToTerraform(this._clientId),
            client_secret: cdktf.stringToTerraform(this._clientSecret),
            host: cdktf.stringToTerraform(this._host),
            service_token: cdktf.stringToTerraform(this._serviceToken),
            alias: cdktf.stringToTerraform(this._alias),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            auth: {
                value: infisicalProviderAuthToHclTerraform(this._auth),
                isBlock: true,
                type: "struct",
                storageClassType: "InfisicalProviderAuth",
            },
            client_id: {
                value: cdktf.stringToHclTerraform(this._clientId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            client_secret: {
                value: cdktf.stringToHclTerraform(this._clientSecret),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            host: {
                value: cdktf.stringToHclTerraform(this._host),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            service_token: {
                value: cdktf.stringToHclTerraform(this._serviceToken),
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

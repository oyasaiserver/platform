// https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_ldap
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function appConnectionLdapCredentialsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        dn: cdktf.stringToTerraform(struct.dn),
        password: cdktf.stringToTerraform(struct.password),
        provider: cdktf.stringToTerraform(struct.provider),
        ssl_certificate: cdktf.stringToTerraform(struct.sslCertificate),
        ssl_reject_unauthorized: cdktf.booleanToTerraform(struct.sslRejectUnauthorized),
        url: cdktf.stringToTerraform(struct.url),
    };
}
export function appConnectionLdapCredentialsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        dn: {
            value: cdktf.stringToHclTerraform(struct.dn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        password: {
            value: cdktf.stringToHclTerraform(struct.password),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        provider: {
            value: cdktf.stringToHclTerraform(struct.provider),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ssl_certificate: {
            value: cdktf.stringToHclTerraform(struct.sslCertificate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ssl_reject_unauthorized: {
            value: cdktf.booleanToHclTerraform(struct.sslRejectUnauthorized),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        url: {
            value: cdktf.stringToHclTerraform(struct.url),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class AppConnectionLdapCredentialsOutputReference extends cdktf.ComplexObject {
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
        if (this._dn !== undefined) {
            hasAnyValues = true;
            internalValueResult.dn = this._dn;
        }
        if (this._password !== undefined) {
            hasAnyValues = true;
            internalValueResult.password = this._password;
        }
        if (this._provider !== undefined) {
            hasAnyValues = true;
            internalValueResult.provider = this._provider;
        }
        if (this._sslCertificate !== undefined) {
            hasAnyValues = true;
            internalValueResult.sslCertificate = this._sslCertificate;
        }
        if (this._sslRejectUnauthorized !== undefined) {
            hasAnyValues = true;
            internalValueResult.sslRejectUnauthorized = this._sslRejectUnauthorized;
        }
        if (this._url !== undefined) {
            hasAnyValues = true;
            internalValueResult.url = this._url;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dn = undefined;
            this._password = undefined;
            this._provider = undefined;
            this._sslCertificate = undefined;
            this._sslRejectUnauthorized = undefined;
            this._url = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dn = value.dn;
            this._password = value.password;
            this._provider = value.provider;
            this._sslCertificate = value.sslCertificate;
            this._sslRejectUnauthorized = value.sslRejectUnauthorized;
            this._url = value.url;
        }
    }
    // dn - computed: false, optional: false, required: true
    _dn;
    get dn() {
        return this.getStringAttribute('dn');
    }
    set dn(value) {
        this._dn = value;
    }
    // Temporarily expose input value. Use with caution.
    get dnInput() {
        return this._dn;
    }
    // password - computed: false, optional: false, required: true
    _password;
    get password() {
        return this.getStringAttribute('password');
    }
    set password(value) {
        this._password = value;
    }
    // Temporarily expose input value. Use with caution.
    get passwordInput() {
        return this._password;
    }
    // provider - computed: false, optional: false, required: true
    _provider;
    get provider() {
        return this.getStringAttribute('provider');
    }
    set provider(value) {
        this._provider = value;
    }
    // Temporarily expose input value. Use with caution.
    get providerInput() {
        return this._provider;
    }
    // ssl_certificate - computed: false, optional: true, required: false
    _sslCertificate;
    get sslCertificate() {
        return this.getStringAttribute('ssl_certificate');
    }
    set sslCertificate(value) {
        this._sslCertificate = value;
    }
    resetSslCertificate() {
        this._sslCertificate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sslCertificateInput() {
        return this._sslCertificate;
    }
    // ssl_reject_unauthorized - computed: true, optional: true, required: false
    _sslRejectUnauthorized;
    get sslRejectUnauthorized() {
        return this.getBooleanAttribute('ssl_reject_unauthorized');
    }
    set sslRejectUnauthorized(value) {
        this._sslRejectUnauthorized = value;
    }
    resetSslRejectUnauthorized() {
        this._sslRejectUnauthorized = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sslRejectUnauthorizedInput() {
        return this._sslRejectUnauthorized;
    }
    // url - computed: false, optional: false, required: true
    _url;
    get url() {
        return this.getStringAttribute('url');
    }
    set url(value) {
        this._url = value;
    }
    // Temporarily expose input value. Use with caution.
    get urlInput() {
        return this._url;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_ldap infisical_app_connection_ldap}
*/
export class AppConnectionLdap extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "infisical_app_connection_ldap";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a AppConnectionLdap resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppConnectionLdap to import
    * @param importFromId The id of the existing AppConnectionLdap that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_ldap#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppConnectionLdap to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_app_connection_ldap", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/app_connection_ldap infisical_app_connection_ldap} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppConnectionLdapConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'infisical_app_connection_ldap',
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
    _credentials = new AppConnectionLdapCredentialsOutputReference(this, "credentials");
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
            credentials: appConnectionLdapCredentialsToTerraform(this._credentials.internalValue),
            description: cdktf.stringToTerraform(this._description),
            method: cdktf.stringToTerraform(this._method),
            name: cdktf.stringToTerraform(this._name),
            project_id: cdktf.stringToTerraform(this._projectId),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            credentials: {
                value: appConnectionLdapCredentialsToHclTerraform(this._credentials.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "AppConnectionLdapCredentials",
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

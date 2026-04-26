// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_webhook
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function repositoryWebhookConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        content_type: cdktf.stringToTerraform(struct.contentType),
        insecure_ssl: cdktf.booleanToTerraform(struct.insecureSsl),
        secret: cdktf.stringToTerraform(struct.secret),
        url: cdktf.stringToTerraform(struct.url),
    };
}
export function repositoryWebhookConfigurationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        content_type: {
            value: cdktf.stringToHclTerraform(struct.contentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        insecure_ssl: {
            value: cdktf.booleanToHclTerraform(struct.insecureSsl),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        secret: {
            value: cdktf.stringToHclTerraform(struct.secret),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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
export class RepositoryWebhookConfigurationOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._contentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        if (this._insecureSsl !== undefined) {
            hasAnyValues = true;
            internalValueResult.insecureSsl = this._insecureSsl;
        }
        if (this._secret !== undefined) {
            hasAnyValues = true;
            internalValueResult.secret = this._secret;
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
            this._contentType = undefined;
            this._insecureSsl = undefined;
            this._secret = undefined;
            this._url = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._contentType = value.contentType;
            this._insecureSsl = value.insecureSsl;
            this._secret = value.secret;
            this._url = value.url;
        }
    }
    // content_type - computed: false, optional: true, required: false
    _contentType;
    get contentType() {
        return this.getStringAttribute('content_type');
    }
    set contentType(value) {
        this._contentType = value;
    }
    resetContentType() {
        this._contentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contentTypeInput() {
        return this._contentType;
    }
    // insecure_ssl - computed: false, optional: true, required: false
    _insecureSsl;
    get insecureSsl() {
        return this.getBooleanAttribute('insecure_ssl');
    }
    set insecureSsl(value) {
        this._insecureSsl = value;
    }
    resetInsecureSsl() {
        this._insecureSsl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get insecureSslInput() {
        return this._insecureSsl;
    }
    // secret - computed: false, optional: true, required: false
    _secret;
    get secret() {
        return this.getStringAttribute('secret');
    }
    set secret(value) {
        this._secret = value;
    }
    resetSecret() {
        this._secret = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get secretInput() {
        return this._secret;
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
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_webhook github_repository_webhook}
*/
export class RepositoryWebhook extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_repository_webhook";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a RepositoryWebhook resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryWebhook to import
    * @param importFromId The id of the existing RepositoryWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_webhook#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryWebhook to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_webhook", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_webhook github_repository_webhook} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryWebhookConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_repository_webhook',
            terraformGeneratorMetadata: {
                providerName: 'github',
                providerVersion: '6.12.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._active = config.active;
        this._etag = config.etag;
        this._events = config.events;
        this._id = config.id;
        this._repository = config.repository;
        this._configuration.internalValue = config.configuration;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // active - computed: false, optional: true, required: false
    _active;
    get active() {
        return this.getBooleanAttribute('active');
    }
    set active(value) {
        this._active = value;
    }
    resetActive() {
        this._active = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get activeInput() {
        return this._active;
    }
    // etag - computed: true, optional: true, required: false
    _etag;
    get etag() {
        return this.getStringAttribute('etag');
    }
    set etag(value) {
        this._etag = value;
    }
    resetEtag() {
        this._etag = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get etagInput() {
        return this._etag;
    }
    // events - computed: false, optional: false, required: true
    _events;
    get events() {
        return cdktf.Fn.tolist(this.getListAttribute('events'));
    }
    set events(value) {
        this._events = value;
    }
    // Temporarily expose input value. Use with caution.
    get eventsInput() {
        return this._events;
    }
    // id - computed: true, optional: true, required: false
    _id;
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // repository - computed: false, optional: false, required: true
    _repository;
    get repository() {
        return this.getStringAttribute('repository');
    }
    set repository(value) {
        this._repository = value;
    }
    // Temporarily expose input value. Use with caution.
    get repositoryInput() {
        return this._repository;
    }
    // url - computed: true, optional: false, required: false
    get url() {
        return this.getStringAttribute('url');
    }
    // configuration - computed: false, optional: true, required: false
    _configuration = new RepositoryWebhookConfigurationOutputReference(this, "configuration");
    get configuration() {
        return this._configuration;
    }
    putConfiguration(value) {
        this._configuration.internalValue = value;
    }
    resetConfiguration() {
        this._configuration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get configurationInput() {
        return this._configuration.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            active: cdktf.booleanToTerraform(this._active),
            etag: cdktf.stringToTerraform(this._etag),
            events: cdktf.listMapper(cdktf.stringToTerraform, false)(this._events),
            id: cdktf.stringToTerraform(this._id),
            repository: cdktf.stringToTerraform(this._repository),
            configuration: repositoryWebhookConfigurationToTerraform(this._configuration.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            active: {
                value: cdktf.booleanToHclTerraform(this._active),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            etag: {
                value: cdktf.stringToHclTerraform(this._etag),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            events: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._events),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            repository: {
                value: cdktf.stringToHclTerraform(this._repository),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            configuration: {
                value: repositoryWebhookConfigurationToHclTerraform(this._configuration.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "RepositoryWebhookConfigurationList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}

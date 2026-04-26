// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy_webhooks
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy_webhooks cloudflare_notification_policy_webhooks}
*/
export class NotificationPolicyWebhooks extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_notification_policy_webhooks";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a NotificationPolicyWebhooks resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NotificationPolicyWebhooks to import
    * @param importFromId The id of the existing NotificationPolicyWebhooks that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy_webhooks#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NotificationPolicyWebhooks to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_notification_policy_webhooks", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/notification_policy_webhooks cloudflare_notification_policy_webhooks} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NotificationPolicyWebhooksConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_notification_policy_webhooks',
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
        this._name = config.name;
        this._secret = config.secret;
        this._url = config.url;
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
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // last_failure - computed: true, optional: false, required: false
    get lastFailure() {
        return this.getStringAttribute('last_failure');
    }
    // last_success - computed: true, optional: false, required: false
    get lastSuccess() {
        return this.getStringAttribute('last_success');
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
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
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
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            name: cdktf.stringToTerraform(this._name),
            secret: cdktf.stringToTerraform(this._secret),
            url: cdktf.stringToTerraform(this._url),
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
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            secret: {
                value: cdktf.stringToHclTerraform(this._secret),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            url: {
                value: cdktf.stringToHclTerraform(this._url),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}

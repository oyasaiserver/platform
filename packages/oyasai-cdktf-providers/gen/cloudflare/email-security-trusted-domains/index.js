// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_trusted_domains
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function emailSecurityTrustedDomainsBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comments: cdktf.stringToTerraform(struct.comments),
        is_recent: cdktf.booleanToTerraform(struct.isRecent),
        is_regex: cdktf.booleanToTerraform(struct.isRegex),
        is_similarity: cdktf.booleanToTerraform(struct.isSimilarity),
        pattern: cdktf.stringToTerraform(struct.pattern),
    };
}
export function emailSecurityTrustedDomainsBodyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        comments: {
            value: cdktf.stringToHclTerraform(struct.comments),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        is_recent: {
            value: cdktf.booleanToHclTerraform(struct.isRecent),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        is_regex: {
            value: cdktf.booleanToHclTerraform(struct.isRegex),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        is_similarity: {
            value: cdktf.booleanToHclTerraform(struct.isSimilarity),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        pattern: {
            value: cdktf.stringToHclTerraform(struct.pattern),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class EmailSecurityTrustedDomainsBodyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._comments !== undefined) {
            hasAnyValues = true;
            internalValueResult.comments = this._comments;
        }
        if (this._isRecent !== undefined) {
            hasAnyValues = true;
            internalValueResult.isRecent = this._isRecent;
        }
        if (this._isRegex !== undefined) {
            hasAnyValues = true;
            internalValueResult.isRegex = this._isRegex;
        }
        if (this._isSimilarity !== undefined) {
            hasAnyValues = true;
            internalValueResult.isSimilarity = this._isSimilarity;
        }
        if (this._pattern !== undefined) {
            hasAnyValues = true;
            internalValueResult.pattern = this._pattern;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comments = undefined;
            this._isRecent = undefined;
            this._isRegex = undefined;
            this._isSimilarity = undefined;
            this._pattern = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comments = value.comments;
            this._isRecent = value.isRecent;
            this._isRegex = value.isRegex;
            this._isSimilarity = value.isSimilarity;
            this._pattern = value.pattern;
        }
    }
    // comments - computed: false, optional: true, required: false
    _comments;
    get comments() {
        return this.getStringAttribute('comments');
    }
    set comments(value) {
        this._comments = value;
    }
    resetComments() {
        this._comments = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get commentsInput() {
        return this._comments;
    }
    // is_recent - computed: false, optional: false, required: true
    _isRecent;
    get isRecent() {
        return this.getBooleanAttribute('is_recent');
    }
    set isRecent(value) {
        this._isRecent = value;
    }
    // Temporarily expose input value. Use with caution.
    get isRecentInput() {
        return this._isRecent;
    }
    // is_regex - computed: false, optional: false, required: true
    _isRegex;
    get isRegex() {
        return this.getBooleanAttribute('is_regex');
    }
    set isRegex(value) {
        this._isRegex = value;
    }
    // Temporarily expose input value. Use with caution.
    get isRegexInput() {
        return this._isRegex;
    }
    // is_similarity - computed: false, optional: false, required: true
    _isSimilarity;
    get isSimilarity() {
        return this.getBooleanAttribute('is_similarity');
    }
    set isSimilarity(value) {
        this._isSimilarity = value;
    }
    // Temporarily expose input value. Use with caution.
    get isSimilarityInput() {
        return this._isSimilarity;
    }
    // pattern - computed: false, optional: false, required: true
    _pattern;
    get pattern() {
        return this.getStringAttribute('pattern');
    }
    set pattern(value) {
        this._pattern = value;
    }
    // Temporarily expose input value. Use with caution.
    get patternInput() {
        return this._pattern;
    }
}
export class EmailSecurityTrustedDomainsBodyList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    internalValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new EmailSecurityTrustedDomainsBodyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_trusted_domains cloudflare_email_security_trusted_domains}
*/
export class EmailSecurityTrustedDomains extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_email_security_trusted_domains";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a EmailSecurityTrustedDomains resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EmailSecurityTrustedDomains to import
    * @param importFromId The id of the existing EmailSecurityTrustedDomains that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_trusted_domains#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EmailSecurityTrustedDomains to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_email_security_trusted_domains", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_trusted_domains cloudflare_email_security_trusted_domains} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmailSecurityTrustedDomainsConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_email_security_trusted_domains',
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
        this._body.internalValue = config.body;
        this._comments = config.comments;
        this._isRecent = config.isRecent;
        this._isRegex = config.isRegex;
        this._isSimilarity = config.isSimilarity;
        this._pattern = config.pattern;
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
    // body - computed: false, optional: true, required: false
    _body = new EmailSecurityTrustedDomainsBodyList(this, "body", false);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // comments - computed: false, optional: true, required: false
    _comments;
    get comments() {
        return this.getStringAttribute('comments');
    }
    set comments(value) {
        this._comments = value;
    }
    resetComments() {
        this._comments = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get commentsInput() {
        return this._comments;
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getNumberAttribute('id');
    }
    // is_recent - computed: false, optional: true, required: false
    _isRecent;
    get isRecent() {
        return this.getBooleanAttribute('is_recent');
    }
    set isRecent(value) {
        this._isRecent = value;
    }
    resetIsRecent() {
        this._isRecent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get isRecentInput() {
        return this._isRecent;
    }
    // is_regex - computed: false, optional: true, required: false
    _isRegex;
    get isRegex() {
        return this.getBooleanAttribute('is_regex');
    }
    set isRegex(value) {
        this._isRegex = value;
    }
    resetIsRegex() {
        this._isRegex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get isRegexInput() {
        return this._isRegex;
    }
    // is_similarity - computed: false, optional: true, required: false
    _isSimilarity;
    get isSimilarity() {
        return this.getBooleanAttribute('is_similarity');
    }
    set isSimilarity(value) {
        this._isSimilarity = value;
    }
    resetIsSimilarity() {
        this._isSimilarity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get isSimilarityInput() {
        return this._isSimilarity;
    }
    // last_modified - computed: true, optional: false, required: false
    get lastModified() {
        return this.getStringAttribute('last_modified');
    }
    // pattern - computed: false, optional: true, required: false
    _pattern;
    get pattern() {
        return this.getStringAttribute('pattern');
    }
    set pattern(value) {
        this._pattern = value;
    }
    resetPattern() {
        this._pattern = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get patternInput() {
        return this._pattern;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            body: cdktf.listMapper(emailSecurityTrustedDomainsBodyToTerraform, false)(this._body.internalValue),
            comments: cdktf.stringToTerraform(this._comments),
            is_recent: cdktf.booleanToTerraform(this._isRecent),
            is_regex: cdktf.booleanToTerraform(this._isRegex),
            is_similarity: cdktf.booleanToTerraform(this._isSimilarity),
            pattern: cdktf.stringToTerraform(this._pattern),
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
            body: {
                value: cdktf.listMapperHcl(emailSecurityTrustedDomainsBodyToHclTerraform, false)(this._body.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "EmailSecurityTrustedDomainsBodyList",
            },
            comments: {
                value: cdktf.stringToHclTerraform(this._comments),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            is_recent: {
                value: cdktf.booleanToHclTerraform(this._isRecent),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            is_regex: {
                value: cdktf.booleanToHclTerraform(this._isRegex),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            is_similarity: {
                value: cdktf.booleanToHclTerraform(this._isSimilarity),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            pattern: {
                value: cdktf.stringToHclTerraform(this._pattern),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}

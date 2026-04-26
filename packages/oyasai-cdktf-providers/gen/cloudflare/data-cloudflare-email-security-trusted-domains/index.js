// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_trusted_domains
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareEmailSecurityTrustedDomainsFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        direction: cdktf.stringToTerraform(struct.direction),
        is_recent: cdktf.booleanToTerraform(struct.isRecent),
        is_similarity: cdktf.booleanToTerraform(struct.isSimilarity),
        order: cdktf.stringToTerraform(struct.order),
        pattern: cdktf.stringToTerraform(struct.pattern),
        search: cdktf.stringToTerraform(struct.search),
    };
}
export function dataCloudflareEmailSecurityTrustedDomainsFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        direction: {
            value: cdktf.stringToHclTerraform(struct.direction),
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
        is_similarity: {
            value: cdktf.booleanToHclTerraform(struct.isSimilarity),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        order: {
            value: cdktf.stringToHclTerraform(struct.order),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pattern: {
            value: cdktf.stringToHclTerraform(struct.pattern),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        search: {
            value: cdktf.stringToHclTerraform(struct.search),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference extends cdktf.ComplexObject {
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
        if (this._direction !== undefined) {
            hasAnyValues = true;
            internalValueResult.direction = this._direction;
        }
        if (this._isRecent !== undefined) {
            hasAnyValues = true;
            internalValueResult.isRecent = this._isRecent;
        }
        if (this._isSimilarity !== undefined) {
            hasAnyValues = true;
            internalValueResult.isSimilarity = this._isSimilarity;
        }
        if (this._order !== undefined) {
            hasAnyValues = true;
            internalValueResult.order = this._order;
        }
        if (this._pattern !== undefined) {
            hasAnyValues = true;
            internalValueResult.pattern = this._pattern;
        }
        if (this._search !== undefined) {
            hasAnyValues = true;
            internalValueResult.search = this._search;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._direction = undefined;
            this._isRecent = undefined;
            this._isSimilarity = undefined;
            this._order = undefined;
            this._pattern = undefined;
            this._search = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._direction = value.direction;
            this._isRecent = value.isRecent;
            this._isSimilarity = value.isSimilarity;
            this._order = value.order;
            this._pattern = value.pattern;
            this._search = value.search;
        }
    }
    // direction - computed: false, optional: true, required: false
    _direction;
    get direction() {
        return this.getStringAttribute('direction');
    }
    set direction(value) {
        this._direction = value;
    }
    resetDirection() {
        this._direction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get directionInput() {
        return this._direction;
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
    // order - computed: false, optional: true, required: false
    _order;
    get order() {
        return this.getStringAttribute('order');
    }
    set order(value) {
        this._order = value;
    }
    resetOrder() {
        this._order = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get orderInput() {
        return this._order;
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
    // search - computed: false, optional: true, required: false
    _search;
    get search() {
        return this.getStringAttribute('search');
    }
    set search(value) {
        this._search = value;
    }
    resetSearch() {
        this._search = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get searchInput() {
        return this._search;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_trusted_domains cloudflare_email_security_trusted_domains}
*/
export class DataCloudflareEmailSecurityTrustedDomains extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_email_security_trusted_domains";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareEmailSecurityTrustedDomains resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareEmailSecurityTrustedDomains to import
    * @param importFromId The id of the existing DataCloudflareEmailSecurityTrustedDomains that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_trusted_domains#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareEmailSecurityTrustedDomains to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_email_security_trusted_domains", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_trusted_domains cloudflare_email_security_trusted_domains} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareEmailSecurityTrustedDomainsConfig = {}
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
        this._filter.internalValue = config.filter;
        this._trustedDomainId = config.trustedDomainId;
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
    // comments - computed: true, optional: false, required: false
    get comments() {
        return this.getStringAttribute('comments');
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // filter - computed: false, optional: true, required: false
    _filter = new DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference(this, "filter");
    get filter() {
        return this._filter;
    }
    putFilter(value) {
        this._filter.internalValue = value;
    }
    resetFilter() {
        this._filter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get filterInput() {
        return this._filter.internalValue;
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getNumberAttribute('id');
    }
    // is_recent - computed: true, optional: false, required: false
    get isRecent() {
        return this.getBooleanAttribute('is_recent');
    }
    // is_regex - computed: true, optional: false, required: false
    get isRegex() {
        return this.getBooleanAttribute('is_regex');
    }
    // is_similarity - computed: true, optional: false, required: false
    get isSimilarity() {
        return this.getBooleanAttribute('is_similarity');
    }
    // last_modified - computed: true, optional: false, required: false
    get lastModified() {
        return this.getStringAttribute('last_modified');
    }
    // pattern - computed: true, optional: false, required: false
    get pattern() {
        return this.getStringAttribute('pattern');
    }
    // trusted_domain_id - computed: false, optional: true, required: false
    _trustedDomainId;
    get trustedDomainId() {
        return this.getNumberAttribute('trusted_domain_id');
    }
    set trustedDomainId(value) {
        this._trustedDomainId = value;
    }
    resetTrustedDomainId() {
        this._trustedDomainId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get trustedDomainIdInput() {
        return this._trustedDomainId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            filter: dataCloudflareEmailSecurityTrustedDomainsFilterToTerraform(this._filter.internalValue),
            trusted_domain_id: cdktf.numberToTerraform(this._trustedDomainId),
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
            filter: {
                value: dataCloudflareEmailSecurityTrustedDomainsFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareEmailSecurityTrustedDomainsFilter",
            },
            trusted_domain_id: {
                value: cdktf.numberToHclTerraform(this._trustedDomainId),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
